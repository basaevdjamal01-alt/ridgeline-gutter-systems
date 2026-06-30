import { NextResponse } from 'next/server';

/**
 * Lead intake endpoint.
 * TODO (per client): forward to email (Resend/SendGrid) and/or CRM.
 * Currently validates input and logs the lead server-side.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone } = data ?? {};
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields.' },
        { status: 400 },
      );
    }

    // Honeypot / basic sanity could be added here.
    // eslint-disable-next-line no-console
    console.info('[lead] new estimate request:', {
      name,
      email,
      phone,
      service: data.service,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request.' },
      { status: 400 },
    );
  }
}
