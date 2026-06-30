'use client';

import { useState } from 'react';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { services } from '@/content';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const steps = ['Service', 'Property', 'Contact'] as const;

export function EstimateForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    service: '',
    propertyType: 'Single-family home',
    stories: '1',
    timeline: 'As soon as possible',
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canAdvance =
    (step === 0 && form.service) ||
    (step === 1 && form.propertyType) ||
    step === 2;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
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
        <h3 className="mt-6 text-h3">Request received — thank you!</h3>
        <p className="mt-3 max-w-md text-graphite-600">
          A member of our team will reach out within 24 hours to schedule your
          free, no-obligation on-site estimate.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-sand bg-bone p-6 shadow-soft sm:p-8"
    >
      {/* Progress */}
      <div className="mb-8 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <div
              className={cn(
                'h-1.5 rounded-full transition-colors',
                i <= step ? 'bg-copper-gradient' : 'bg-sand',
              )}
            />
            <span
              className={cn(
                'text-xs font-medium',
                i <= step ? 'text-graphite-900' : 'text-stone',
              )}
            >
              {i + 1}. {label}
            </span>
          </div>
        ))}
      </div>

      {/* Step 0 — Service */}
      {step === 0 && (
        <fieldset className="space-y-3">
          <legend className="mb-2 text-lg font-semibold">
            What can we help with?
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <label
                key={s.slug}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors',
                  form.service === s.title
                    ? 'border-copper-500 bg-copper-500/[0.06]'
                    : 'border-sand hover:border-copper-300',
                )}
              >
                <input
                  type="radio"
                  name="service"
                  className="sr-only"
                  checked={form.service === s.title}
                  onChange={() => update('service', s.title)}
                />
                <Icon name={s.icon} className="h-5 w-5 text-copper-600" />
                <span className="text-sm font-medium">{s.title}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Step 1 — Property */}
      {step === 1 && (
        <div className="space-y-5">
          <Select
            label="Property type"
            value={form.propertyType}
            onChange={(v) => update('propertyType', v)}
            options={[
              'Single-family home',
              'Townhouse',
              'Multi-family',
              'Commercial',
            ]}
          />
          <Select
            label="Number of stories"
            value={form.stories}
            onChange={(v) => update('stories', v)}
            options={['1', '2', '3+']}
          />
          <Select
            label="Timeline"
            value={form.timeline}
            onChange={(v) => update('timeline', v)}
            options={[
              'As soon as possible',
              'Within a month',
              '1–3 months',
              'Just researching',
            ]}
          />
        </div>
      )}

      {/* Step 2 — Contact */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Full name"
              value={form.name}
              onChange={(v) => update('name', v)}
              required
            />
            <Field
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(v) => update('phone', v)}
              required
            />
          </div>
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(v) => update('email', v)}
            required
          />
          <Field
            label="Property address"
            value={form.address}
            onChange={(v) => update('address', v)}
          />
          <Field
            label="Anything else we should know?"
            value={form.message}
            onChange={(v) => update('message', v)}
            textarea
          />
          {status === 'error' && (
            <p className="text-sm text-danger">
              Something went wrong. Please call us at the number above.
            </p>
          )}
        </div>
      )}

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-sm font-semibold text-graphite-600 hover:text-graphite-900"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        {step < steps.length - 1 ? (
          <Button
            type="button"
            onClick={() => canAdvance && setStep((s) => s + 1)}
            disabled={!canAdvance}
          >
            Continue
          </Button>
        ) : (
          <Button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Request My Estimate'}
          </Button>
        )}
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
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
          placeholder=" "
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-graphite-700">
        {label}
      </span>
      <select
        value={value}
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
