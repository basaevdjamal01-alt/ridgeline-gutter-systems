'use client';

import { useState } from 'react';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { services } from '@/content';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type EstimateFormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  propertyType: string;
  details: string;
  contactMethod: string;
};

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
  const [form, setForm] = useState<EstimateFormState>({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    propertyType: propertyTypes[0] ?? '',
    details: '',
    contactMethod: contactMethods[0] ?? 'Phone',
  });

  const update = <K extends keyof EstimateFormState>(
    key: K,
    value: EstimateFormState[K],
  ) => {
    setForm((f) => ({ ...f, [key]: value }));
    // Clear a previous error as soon as the user edits the form again.
    setStatus((s) => (s === 'error' ? 'idle' : s));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => null)) as
        | { success?: boolean }
        | null;

      if (res.ok && data?.success) {
        // Only clear the form after a confirmed successful submission.
        setForm({
          name: '',
          phone: '',
          email: '',
          city: '',
          service: '',
          propertyType: propertyTypes[0] ?? '',
          details: '',
          contactMethod: contactMethods[0] ?? 'Phone',
        });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-sand bg-bone p-10 text-center shadow-soft">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-patina-500/15 text-patina-500">
          <Icon name="checkCircle" className="h-9 w-9" />
        </span>
        <h3 className="mt-6 text-h3">Request sent</h3>
        <p className="mt-3 max-w-md text-graphite-600">
          Your request has been sent successfully. We&rsquo;ll contact you
          shortly.
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

      {status === 'error' && (
        <p
          role="alert"
          className="mt-6 rounded-xl border border-danger/30 bg-danger/5 px-4 py-3 text-sm font-medium text-danger"
        >
          Something went wrong. Please call us directly at {site.contact.phone}.
        </p>
      )}

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
          {status === 'submitting' ? 'Sending…' : 'Request Free Estimate'}
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
