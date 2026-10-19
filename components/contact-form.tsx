'use client'

import { useState } from 'react'
import { Check, Copy, Send } from 'lucide-react'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const topics = ['General question', 'Partnerships', 'Advisors', 'Press', 'Privacy request']
const MAX_MESSAGE = 4000

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const fieldClass =
  'mt-2 w-full rounded-xl border bg-white/70 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-all duration-300 hover:border-forest/40 focus:border-forest focus:bg-white focus:ring-4 focus:ring-gold/20 focus:outline-none'

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()
  if (!name) errors.name = 'Please enter your name.'
  if (!email) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.'
  if (message.length < 10) errors.message = 'Please write a message of at least 10 characters.'
  return errors
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [opened, setOpened] = useState(false)
  const [copied, setCopied] = useState(false)
  const [messageLength, setMessageLength] = useState(0)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const nextErrors = validate(data)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    const name = String(data.get('name')).trim()
    const email = String(data.get('email')).trim()
    const topic = String(data.get('topic') ?? topics[0])
    const message = String(data.get('message')).trim()
    const subject = `[${topic}] Message from ${name}`
    const body = `${message}\n\n— ${name}\n${email}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  function clearError(field: keyof Errors) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-describedby="contact-form-note"
      className="rounded-[2rem] border border-border bg-card p-6 shadow-[0_30px_80px_-40px_rgba(31,58,46,0.35)] md:p-10"
    >
      <div className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-serif text-3xl text-forest">Write to us</h2>
          <p id="contact-form-note" className="mt-1.5 text-sm text-muted-foreground">
            Submitting opens your own email app with the message prepared. Nothing is sent or stored by this website.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-forest">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength={100}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            onChange={() => clearError('name')}
            className={cn(fieldClass, errors.name ? 'border-destructive' : 'border-input')}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-forest">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={200}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            onChange={() => clearError('email')}
            className={cn(fieldClass, errors.email ? 'border-destructive' : 'border-input')}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-forest">Topic</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((t, i) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="topic" value={t} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-flex min-h-10 items-center rounded-full border border-forest/20 px-4 text-sm text-forest transition-all duration-300 hover:border-forest/50 active:scale-95 peer-checked:border-forest peer-checked:bg-forest peer-checked:text-ivory peer-focus-visible:ring-2 peer-focus-visible:ring-gold">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="message" className="text-sm font-medium text-forest">
            Message
          </label>
          <span className="text-xs text-muted-foreground tabular-nums" aria-hidden>
            {messageLength}/{MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={MAX_MESSAGE}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onChange={(e) => {
            setMessageLength(e.target.value.length)
            clearError('message')
          }}
          className={cn(fieldClass, 'resize-y', errors.message ? 'border-destructive' : 'border-input')}
          placeholder="How can we help?"
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest/20 px-5 text-sm text-forest transition-all duration-300 hover:border-forest hover:bg-forest/5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        >
          {copied ? <Check className="size-4 text-gold" aria-hidden /> : <Copy className="size-4" aria-hidden />}
          {copied ? 'Email address copied' : 'Copy email address'}
        </button>
        <button
          type="submit"
          className="btn-shine group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-medium text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Open in email app
          <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
        </button>
      </div>

      <div role="status" aria-live="polite" className="text-sm text-forest">
        {opened && (
          <p className="mt-5 rounded-2xl bg-sage-soft/60 p-4 leading-relaxed">
            Your email app should now be open with the message ready — remember to press send there. If nothing
            opened, write to us directly at{' '}
            <a href={`mailto:${site.email}`} className="underline decoration-gold underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        )}
        {copied && <span className="sr-only">Email address copied to clipboard</span>}
      </div>
    </form>
  )
}
