import { NextResponse } from 'next/server';

/**
 * Telegram lead-intake endpoint.
 *
 * Forwards a submitted Estimate / Contact form to a Telegram chat.
 *
 * REQUIRED ENVIRONMENT VARIABLES (add these in Vercel → Project → Settings →
 * Environment Variables, and in a local `.env.local` for development):
 *
 *   TELEGRAM_BOT_TOKEN   – the bot token from @BotFather.
 *                          NEVER expose this in client-side code; it is only
 *                          read here on the server.
 *   TELEGRAM_CHAT_ID     – the chat id that should receive the leads
 *                          (e.g. 8603943812).
 *
 * The bot token is only ever read on the server, so it is never shipped to the
 * browser bundle.
 */

// Run on the Node.js runtime (default) so server-only env vars stay private.
export const runtime = 'nodejs';

type LeadPayload = {
  name?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  propertyType?: string;
  details?: string;
  contactMethod?: string;
};

/** Escape values so user input can't break the Telegram HTML parse mode. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function POST(request: Request) {
  let data: LeadPayload;

  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 },
    );
  }

  // The form field may arrive as `name` or `fullName`.
  const name = (data.name ?? data.fullName ?? '').trim();
  const phone = (data.phone ?? '').trim();
  const email = (data.email ?? '').trim();
  const city = (data.city ?? '').trim();
  const service = (data.service ?? '').trim();
  const propertyType = (data.propertyType ?? '').trim();
  const details = (data.details ?? '').trim();
  const contactMethod = (data.contactMethod ?? '').trim();

  // Validate required fields.
  const missing: string[] = [];
  if (!name) missing.push('name');
  if (!phone) missing.push('phone');
  if (!email) missing.push('email');
  if (!city) missing.push('city');
  if (!service) missing.push('service');
  if (!propertyType) missing.push('propertyType');

  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, error: `Missing required fields: ${missing.join(', ')}.` },
      { status: 400 },
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  // TELEGRAM_CHAT_ID must be configured in Vercel; falls back to the known id.
  const chatId = process.env.TELEGRAM_CHAT_ID ?? '8603943812';

  if (!botToken) {
    return NextResponse.json(
      {
        success: false,
        error: 'Server is not configured (missing TELEGRAM_BOT_TOKEN).',
      },
      { status: 500 },
    );
  }

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const message = [
    '🏠 <b>NEW ESTIMATE REQUEST</b>',
    '',
    '👤 <b>Name:</b>',
    escapeHtml(name),
    '',
    '📞 <b>Phone:</b>',
    escapeHtml(phone),
    '',
    '📧 <b>Email:</b>',
    escapeHtml(email),
    '',
    '🏙 <b>City:</b>',
    escapeHtml(city),
    '',
    '🔧 <b>Service:</b>',
    escapeHtml(service),
    '',
    '🏡 <b>Property Type:</b>',
    escapeHtml(propertyType),
    '',
    '📝 <b>Project Details:</b>',
    escapeHtml(details || '—'),
    '',
    '☎ <b>Preferred Contact:</b>',
    escapeHtml(contactMethod || '—'),
    '',
    '⏰ <b>Submitted:</b>',
    escapeHtml(submittedAt),
  ].join('\n');

  try {
    const tgResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      },
    );

    if (!tgResponse.ok) {
      let description = `Telegram API responded with ${tgResponse.status}.`;
      try {
        const tgError = (await tgResponse.json()) as { description?: string };
        if (tgError?.description) description = tgError.description;
      } catch {
        // Ignore non-JSON error bodies.
      }
      return NextResponse.json(
        { success: false, error: description },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to reach Telegram.' },
      { status: 502 },
    );
  }
}
