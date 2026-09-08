import { useState } from 'react'

const email = 'dennyalvitoginting@gmail.com'

export function Contact() {
  const [copyStatus, setCopyStatus] = useState('')
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('Email copied to clipboard.')
    } catch {
      setCopyStatus(
        'Couldn’t copy automatically. You can select the email address above.',
      )
    }
  }
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">04 / HAVE SOMETHING IN MIND?</span>
          <span className="availability">
            <i /> OPEN TO OPPORTUNITIES
          </span>
        </div>
        <div className="contact-heading">
          <h2 id="contact-title">
            Let’s make
            <br />
            <span className="serif-word">it happen.</span>
          </h2>
          <a
            className="contact-arrow"
            href={`mailto:${email}`}
            aria-label="Email Denny about an opportunity"
          >
            ↗
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <p>A role, a collaboration, or a good conversation.</p>
            <div className="email-row">
              <a href={`mailto:${email}`}>{email}</a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8V4H4v12h4" />
                </svg>
              </button>
            </div>
            <p className="copy-status" role="status">
              {copyStatus}
            </p>
          </div>
          <div className="contact-socials">
            <a
              href="https://github.com/dennyalvito"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dennyalvito"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
