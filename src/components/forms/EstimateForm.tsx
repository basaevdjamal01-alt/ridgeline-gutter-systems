'use client';

import { useState } from 'react';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { services } from '@/content';
import { site } from '@/lib/site';
import { cn, telHref } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success';

const propertyTypes = [
  'Single-family home',
  'Townhouse',
  'Multi-family',
  'Commercial',
  'Other',
];

const contactMethods = ['Phone', 'Email', 'Text', 'Either is fine'];

export function EstimateForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    propertyType: propertyTypes[0],
    details: '',
    contactMethod: contactMethods[0],
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  function buildMailtoBody() {
    return [
      'Free Estimate Request',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `City: ${form.city}`,
      `Service needed: ${form.service}`,
      `Property type: ${form.propertyType}`,
      `Preferred contact: ${form.contactMethod}`,
      '',
      'Project details:',
      form.details || '(none provided)',
    ].join('\n');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {
      // Backend logging is optional; mailto is the primary handoff for now.
    }

    const subject = encodeURIComponent(
      `Free Estimate Request — ${form.name}`,
    );
    const body = encodeURIComponent(buildMailtoBody());
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;

    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-sand bg-bone p-10 text-center shadow-soft">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-patina-500/15 text-patina-500">
          <Icon name="checkCircle" className="h-9 w-9" />
        </span>
        <h3 className="mt-6 text-h3">Estimate request ready to send</h3>
        <p className="mt-3 max-w-md text-graphite-600">
          Your email app should open with your details pre-filled. If it
          doesn&rsquo;t, call us at{' '}
          <a
            href={telHref(site.contact.phoneRaw)}
            className="font-semibold text-copper-600 hover:underline"
          >
            {site.contact.phone}
          </a>{' '}
          or email{' '}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-semibold text-copper-600 hover:underline"
          >
            {site.contact.email}
          </a>{' '}
          and we&rsquo;ll respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-sand bg-bone p-6 shadow-soft sm:p-8"
    >
      <div className="mb-6">
        <h3 className="text-h3">Request a free estimate</h3>
        <p className="mt-2 text-sm text-graphite-600">
          Tell us about your project. We&rsquo;ll review your request and follow
          up to schedule an on-site visit — no obligation.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full Name"
            value={form.name}
            onChange={(v) => update('name', v)}
            required
          />
          <Field
            label="Phone Number"
            type="tel"
            value={form.phone}
            onChange={(v) => update('phone', v)}
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Email Address"
            type="email"
            value={form.email}
            onChange={(v) => update('email', v)}
            required
          />
          <Field
            label="City"
            value={form.city}
            onChange={(v) => update('city', v)}
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            label="Service Needed"
            value={form.service}
            onChange={(v) => update('service', v)}
            options={[
              'Select a service…',
              ...services.map((s) => s.title),
              'Not sure yet',
            ]}
            required
          />
          <Select
            label="Property Type"
            value={form.propertyType}
            onChange={(v) => update('propertyType', v)}
            options={propertyTypes}
          />
        </div>

        <Field
          label="Project Details"
          value={form.details}
          onChange={(v) => update('details', v)}
          textarea
          placeholder="Describe the issue, roofline, timeline, or anything else we should know."
        />

        <Select
          label="Preferred Contact Method"
          value={form.contactMethod}
          onChange={(v) => update('contactMethod', v)}
          options={contactMethods}
        />
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={
            status === 'submitting' ||
            !form.name ||
            !form.phone ||
            !form.email ||
            !form.city ||
            !form.service ||
            form.service === 'Select a service…'
          }
        >
          {status === 'submitting' ? 'Preparing request…' : 'Request Free Estimate'}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
  textarea,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const shared =
    'peer w-full rounded-xl border border-sand bg-limestone/40 px-4 pt-6 pb-2 text-graphite-900 outline-none transition-colors focus:border-copper-500 focus:bg-bone';
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          className={cn(shared, 'min-h-28 resize-y')}
          value={value}
          required={required}
          placeholder={placeholder ?? ' '}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={type}
          className={shared}
          value={value}
          required={required}
          placeholder=" "
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <span className="pointer-events-none absolute left-4 top-4 text-sm text-stone transition-all peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
        {label}
        {required && ' *'}
      </span>
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-graphite-700">
        {label}
        {required && ' *'}
      </span>
      <select
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-sand bg-limestone/40 px-4 py-3 text-graphite-900 outline-none transition-colors focus:border-copper-500 focus:bg-bone"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
