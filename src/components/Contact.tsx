import React, { useState } from 'react';
import { Mail, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { playUiClick } from '../utils/sound';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    playUiClick(1050);
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playUiClick(1150);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const mailtoLink = `mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
    `Project Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Hi Zaigham,\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`
  )}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-white">
            Contact{' '}
            <span
              className="italic font-normal"
              style={{ color: 'var(--accent)' }}
            >
              Me.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-md mx-auto">
            Have a website idea, need help with a layout, or want to collaborate? Send a message.
          </p>
        </div>

        {/* Contact Container */}
        <div className="rounded-2xl bg-[#12100e] border border-white/10 p-7 sm:p-9 shadow-xl">
          
          {/* Email row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white">
                Let's talk about your project.
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                I usually respond within 24 hours.
              </p>
            </div>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all cursor-pointer self-start sm:self-auto"
              title="Copy email to clipboard"
            >
              <Mail className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              <span>{DEVELOPER_INFO.email}</span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-zinc-500" />
              )}
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Zaigham"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about what you're looking to build..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 resize-y min-h-[100px]"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all hover:opacity-90 active:scale-95 shadow-md cursor-pointer"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--btn-text)',
                  }}
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div
                className="w-12 h-12 rounded-2xl mx-auto grid place-items-center bg-white/[0.05] border border-white/10"
                style={{ color: 'var(--accent)' }}
              >
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">
                  Message Sent!
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-sm mx-auto">
                  Thank you, {formData.name}. I'll get back to you soon.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--btn-text)',
                  }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Email Client</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-white border border-white/10"
                >
                  Send Another
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
