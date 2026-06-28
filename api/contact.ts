// ─── Vercel Edge Runtime ──────────────────────────────────────
// Uses Web APIs (Request/Response) — no @vercel/node needed,
// no ESM/CJS ambiguity, no tsconfig dependency.
export const config = { runtime: 'edge' }

// ─── Environment variables ────────────────────────────────────
// Set these in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY      → your key from https://resend.com/api-keys
//   CONTACT_TO_EMAIL    → your inbox (e.g. you@gmail.com)
//   CONTACT_FROM_EMAIL  → verified sender (e.g. hello@handysite.ca)

const PLAN_LABELS: Record<string, string> = {
  starter: 'Website Build — $500 one-time',
  managed: 'Managed — $15/month',
  unsure:  'Not sure yet',
}

function esc(str: string | undefined | null): string {
  return (str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br />')
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export default async function handler(req: Request): Promise<Response> {
  // ── Diagnostic log — confirms function is executing ──────────
  console.log('[api/contact] invoked —', req.method)

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed.' }, 405)
  }

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }

  const { name, email, phone, business, plan, message } = body

  // ── Validation ────────────────────────────────────────────────
  if (!name?.trim())  return json({ error: 'Name is required.' }, 400)
  if (!email?.trim()) return json({ error: 'Email address is required.' }, 400)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400)
  }

  const apiKey  = (globalThis as unknown as Record<string, string>)['RESEND_API_KEY']  ?? ''
  const toEmail = (globalThis as unknown as Record<string, string>)['CONTACT_TO_EMAIL']  ?? ''
  const fromEmail = (globalThis as unknown as Record<string, string>)['CONTACT_FROM_EMAIL'] ?? ''

  console.log('[api/contact] env check — apiKey present:', !!apiKey, '| to:', toEmail)

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('[api/contact] Missing environment variables')
    return json({ error: 'Server configuration error. Please contact us directly.' }, 500)
  }

  const planLabel = PLAN_LABELS[plan] ?? plan ?? 'Not specified'

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#F9FAFB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9FAFB;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <tr>
          <td style="background:#111111;padding:28px 36px;">
            <table cellpadding="0" cellspacing="0"><tr>
              <td style="background:#F97316;border-radius:8px;width:36px;height:36px;text-align:center;line-height:36px;">
                <span style="color:white;font-weight:900;font-size:14px;">H</span>
              </td>
              <td style="padding-left:10px;vertical-align:middle;">
                <span style="color:white;font-weight:800;font-size:18px;">HANDY<span style="color:#F97316;">SITES</span></span>
              </td>
            </tr></table>
            <p style="color:rgba(255,255,255,0.45);font-size:12px;margin:10px 0 0;letter-spacing:0.08em;text-transform:uppercase;">New Website Inquiry</p>
          </td>
        </tr>

        <tr><td style="padding:36px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${([
              ['Name',     esc(name)],
              ['Email',    `<a href="mailto:${esc(email)}" style="color:#F97316;text-decoration:none;">${esc(email)}</a>`],
              ['Phone',    esc(phone)    || '<span style="color:#9CA3AF;">Not provided</span>'],
              ['Business', esc(business) || '<span style="color:#9CA3AF;">Not provided</span>'],
              ['Plan',     esc(planLabel)],
            ] as [string, string][]).map(([label, value]) => `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;width:110px;vertical-align:top;">
                <span style="font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em;">${label}</span>
              </td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid #F3F4F6;">
                <span style="font-size:14px;color:#111827;">${value}</span>
              </td>
            </tr>`).join('')}
          </table>

          <p style="font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em;margin:24px 0 10px;">Message</p>
          <div style="background:#F9FAFB;border:1px solid #F3F4F6;border-radius:10px;padding:18px;font-size:14px;color:#374151;line-height:1.7;">
            ${esc(message) || '<span style="color:#9CA3AF;">No message provided.</span>'}
          </div>

          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${esc(email)}"
               style="display:inline-block;background:#F97316;color:white;font-weight:700;font-size:14px;padding:12px 28px;border-radius:50px;text-decoration:none;">
              Reply to ${esc(name)} →
            </a>
          </div>
        </td></tr>

        <tr>
          <td style="background:#F9FAFB;padding:18px 36px;border-top:1px solid #F3F4F6;">
            <p style="margin:0;font-size:11px;color:#9CA3AF;text-align:center;">Sent from HandySites.ca contact form</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

  // ── Send via Resend REST API directly ─────────────────────────
  // Using fetch instead of the SDK avoids any Node.js/ESM runtime issues
  // in the Edge Runtime.
  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from:     fromEmail,
      to:       toEmail,
      reply_to: email,
      subject:  `New HandySite.ca Inquiry — ${name}`,
      html,
    }),
  })

  if (!resendRes.ok) {
    const resendError = await resendRes.text()
    console.error('[api/contact] Resend error:', resendRes.status, resendError)
    return json({ error: 'Failed to send email. Please try again.' }, 500)
  }

  console.log('[api/contact] Email sent successfully')
  return json({ success: true })
}
