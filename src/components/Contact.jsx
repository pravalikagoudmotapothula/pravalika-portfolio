import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  Info,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  // Copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Client-side validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message (at least 10 characters).';
    }
    return newErrors;
  };

  // Handle submit with mailto fallback
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Formulate mailto link
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Pravalika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Pravalika's Developer Portfolio`
    );
    const mailtoLink = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedNotice(true);
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            I'm actively seeking software engineering internships and junior developer opportunities. Whether you have a project idea, a job opening, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="row gy-5">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div 
            className="col-lg-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 fw-bold mb-3 text-primary-custom">Contact Details</h3>
                <p className="text-secondary mb-4 smaller">
                  Feel free to contact me directly via email or phone. I usually respond within 24 hours.
                </p>

                {/* Info Items */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {/* Email with copy button */}
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <Mail size={18} />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <span className="info-label">Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className="info-value text-truncate d-block">
                        {personalInfo.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="btn-copy-email"
                      title="Copy email to clipboard"
                      aria-label="Copy email"
                    >
                      {copiedEmail ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="info-label">Phone</span>
                      <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="info-value d-block">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="info-label">Location</span>
                      <span className="info-value d-block text-primary-custom">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

                {copiedEmail && (
                  <div className="alert-copy-success mb-4">
                    <Check size={14} className="text-success" />
                    <span>Email copied to clipboard!</span>
                  </div>
                )}
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-top border-secondary-subtle">
                <span className="info-label d-block mb-3">Online Profiles & Networks</span>
                <div className="d-flex align-items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Validation & Mailto Fallback */}
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-4 p-md-5">
              <h3 className="h4 fw-bold mb-2 text-primary-custom">Send a Message</h3>
              <p className="text-secondary smaller mb-4">
                Fill out the form below to draft an email directly to my inbox.
              </p>

              {/* Backend transparency note as explicitly requested in instructions */}
              <div className="backend-notice-box mb-4">
                <Info size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="smaller text-muted">
                  <strong>Client-Side Notice:</strong> This portfolio does not utilize an external backend database. Submitting will launch your default email client (or mailto handler) with your prefilled message.
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  {/* Name field */}
                  <div className="col-md-6">
                    <label htmlFor="contact-name" className="form-label-custom">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className={`form-input-custom ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="col-md-6">
                    <label htmlFor="contact-email" className="form-label-custom">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className={`form-input-custom ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>

                  {/* Subject field */}
                  <div className="col-12">
                    <label htmlFor="contact-subject" className="form-label-custom">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                      className={`form-input-custom ${errors.subject ? 'is-invalid' : ''}`}
                    />
                    {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
                  </div>

                  {/* Message field */}
                  <div className="col-12">
                    <label htmlFor="contact-message" className="form-label-custom">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Pravalika, I came across your portfolio and wanted to discuss..."
                      className={`form-input-custom ${errors.message ? 'is-invalid' : ''}`}
                    />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>

                  {/* Submit CTA */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-gradient w-100 py-3"
                    >
                      {isSubmitting ? (
                        <span>Preparing Email Client...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message via Email Client</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {submittedNotice && (
                <div className="mt-4 p-3 rounded-3 alert-copy-success text-center">
                  <Check size={16} className="text-success" />
                  <span>
                    Email client launched! If it didn't open automatically, write directly to <strong>{personalInfo.email}</strong>.
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          border-radius: 0.75rem;
        }

        .contact-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 0.5rem;
          background: var(--badge-bg);
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }

        .info-value:hover {
          color: var(--accent-primary);
        }

        .btn-copy-email {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 0.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .btn-copy-email:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .alert-copy-success {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.85rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 0.5rem;
          font-size: 0.8rem;
          color: #22c55e;
          font-weight: 500;
        }

        .contact-social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.1rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .contact-social-pill:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .backend-notice-box {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.75rem 1rem;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          border-radius: 0.75rem;
        }

        .form-label-custom {
          display: block;
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
        }

        .form-input-custom {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--bg-body);
          border: 1px solid var(--border-subtle);
          border-radius: 0.625rem;
          color: var(--text-primary);
          font-size: 0.925rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-family: inherit;
        }

        .form-input-custom:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .form-input-custom.is-invalid {
          border-color: #ef4444;
        }

        .form-error-msg {
          display: block;
          font-size: 0.75rem;
          color: #ef4444;
          margin-top: 0.25rem;
        }

        .text-primary-custom {
          color: var(--text-primary);
        }

        .smaller {
          font-size: 0.8rem;
        }
      `}</style>
    </section>
  );
}
