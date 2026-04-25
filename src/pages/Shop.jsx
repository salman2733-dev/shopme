import React, { useState } from "react";


const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Our Store",
    value: "Shop No. 12, Liberty Market, Lahore, Pakistan",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.48 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.07 6.07l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone / WhatsApp",
    value: "+92 300 1234567",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email Us",
    value: "support@myshop.pk",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Store Hours",
    value: "Mon – Sat: 10:00 AM – 9:00 PM",
  },
];

const faqs = [
  { q: "How long does delivery take?", a: "Standard delivery takes 2–4 business days across Pakistan." },
  { q: "Can I return or exchange items?", a: "Yes! We offer hassle-free 7-day returns and exchanges." },
  { q: "Do you offer Cash on Delivery?", a: "Yes, COD is available on all orders within Pakistan." },
];

export default function Shop() {
  const [form, setForm]       = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1600);
  };

  return (
    <>

      <main style={{ fontFamily: "'Georgia', serif", background: "#FAFAF8", minHeight: "100vh" }}>

        {/* ── Hero ── */}
        <section style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          padding: "64px 24px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative circles */}
          {[200, 350, 500].map((size, i) => (
            <div key={i} style={{
              position: "absolute",
              width: size, height: size,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }} />
          ))}
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "11px", fontWeight: 700, letterSpacing: "3px",
              padding: "6px 20px", borderRadius: "30px",
              marginBottom: "18px", fontFamily: "'Segoe UI', sans-serif",
            }}>GET IN TOUCH</span>
            <h1 style={{
              color: "white", margin: "0 0 14px",
              fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 700,
              lineHeight: 1.2,
            }}>
              We'd Love to <span style={{ color: "#e94560" }}>Hear</span> From You
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.55)", maxWidth: "480px",
              margin: "0 auto", fontSize: "15px", lineHeight: 1.7,
              fontFamily: "'Segoe UI', sans-serif",
            }}>
              Have a question, complaint, or just want to say hello?<br />
              Drop us a message — we reply within 24 hours.
            </p>
          </div>
        </section>

        {/* ── Main Two-Column ── */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "48px",
            alignItems: "start",
          }}
            className="shop-grid"
          >

            {/* ═══ LEFT SIDE ═══ */}
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>

              {/* Intro */}
              <div>
                <h2 style={{
                  fontSize: "26px", fontWeight: 700, color: "#1a1a2e",
                  margin: "0 0 12px", lineHeight: 1.3,
                }}>
                  Contact & Store Info
                </h2>
                <div style={{ width: "48px", height: "3px", background: "#e94560", borderRadius: "2px", marginBottom: "14px" }} />
                <p style={{
                  color: "#6B7280", fontSize: "14px", lineHeight: 1.8,
                  fontFamily: "'Segoe UI', sans-serif", margin: 0,
                }}>
                  Whether you need help with your order, want to know about our latest arrivals, or have a business inquiry — our team is always here for you.
                </p>
              </div>

              {/* Contact Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {contactInfo.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "16px",
                    background: "white", borderRadius: "14px",
                    padding: "18px 20px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    border: "1px solid #F3F4F6",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateX(5px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(233,69,96,0.12)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateX(0)";   e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
                  >
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "12px",
                      background: "linear-gradient(135deg, #1a1a2e, #0f3460)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ margin: "0 0 3px", fontSize: "11px", fontWeight: 700, color: "#e94560", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Segoe UI', sans-serif" }}>
                        {item.label}
                      </p>
                      <p style={{ margin: 0, fontSize: "14px", color: "#374151", fontFamily: "'Segoe UI', sans-serif", lineHeight: 1.5 }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: 700, color: "#374151", fontFamily: "'Segoe UI', sans-serif", letterSpacing: "0.5px" }}>
                  FOLLOW US
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[
                    { label: "Facebook",  bg: "#1877F2", icon: "f" },
                    { label: "Instagram", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", icon: "📸" },
                    { label: "WhatsApp",  bg: "#25D366", icon: "💬" },
                    { label: "TikTok",    bg: "#010101", icon: "♪" },
                  ].map(s => (
                    <button key={s.label} title={s.label} style={{
                      width: "40px", height: "40px", borderRadius: "10px",
                      background: s.bg, border: "none", color: "white",
                      fontSize: "15px", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 900, transition: "transform 0.2s, opacity 0.2s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >{s.icon}</button>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 14px" }}>
                  Frequently Asked Questions
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {faqs.map((faq, i) => (
                    <div key={i} style={{
                      background: "white", borderRadius: "12px",
                      border: "1px solid #F3F4F6",
                      overflow: "hidden",
                      boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                    }}>
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                        width: "100%", padding: "14px 18px",
                        background: "none", border: "none", cursor: "pointer",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        fontFamily: "'Segoe UI', sans-serif", fontSize: "13px",
                        fontWeight: 700, color: "#1F2937", textAlign: "left",
                      }}>
                        {faq.q}
                        <span style={{
                          fontSize: "18px", color: "#e94560",
                          transition: "transform 0.2s",
                          transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                          display: "inline-block",
                        }}>+</span>
                      </button>
                      {openFaq === i && (
                        <p style={{
                          margin: 0, padding: "0 18px 14px",
                          fontSize: "13px", color: "#6B7280",
                          fontFamily: "'Segoe UI', sans-serif", lineHeight: 1.7,
                        }}>{faq.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ═══ RIGHT SIDE — Contact Form ═══ */}
            <div style={{
              background: "white", borderRadius: "24px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
              overflow: "hidden",
              position: "sticky", top: "24px",
            }}>
              {/* Form Header */}
              <div style={{
                background: "linear-gradient(135deg, #1a1a2e, #0f3460)",
                padding: "28px 32px",
              }}>
                <h2 style={{
                  margin: "0 0 6px", color: "white",
                  fontSize: "22px", fontWeight: 700,
                }}>Send Us a Message</h2>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.55)", fontSize: "13px", fontFamily: "'Segoe UI', sans-serif" }}>
                  Fill out the form and we'll get back to you shortly ✉️
                </p>
              </div>

              {/* Form Body */}
              <div style={{ padding: "32px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <div style={{
                      width: "70px", height: "70px", borderRadius: "50%",
                      background: "linear-gradient(135deg, #10B981, #059669)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 20px", fontSize: "30px",
                    }}>✓</div>
                    <h3 style={{ color: "#1a1a2e", margin: "0 0 10px", fontSize: "20px", fontWeight: 700 }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: "#6B7280", fontSize: "14px", fontFamily: "'Segoe UI', sans-serif", lineHeight: 1.7, margin: "0 0 24px" }}>
                      Thank you for reaching out. Our team will reply to you within 24 hours.
                    </p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }} style={{
                      background: "#1a1a2e", color: "white", border: "none",
                      borderRadius: "10px", padding: "11px 24px",
                      fontSize: "13px", fontWeight: 700, cursor: "pointer",
                      fontFamily: "'Segoe UI', sans-serif",
                    }}>Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    {/* Name + Phone */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <Field label="Full Name *" name="name" type="text" placeholder="Ahmed Khan"
                        value={form.name} onChange={handleChange} error={errors.name} />
                      <Field label="Phone No." name="phone" type="tel" placeholder="+92 300 0000000"
                        value={form.phone} onChange={handleChange} error={errors.phone} />
                    </div>

                    {/* Email */}
                    <Field label="Email Address *" name="email" type="email" placeholder="ahmed@example.com"
                      value={form.email} onChange={handleChange} error={errors.email} />

                    {/* Subject */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={labelStyle}>Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange}
                        style={{ ...inputStyle, color: form.subject ? "#111827" : "#9CA3AF", appearance: "none", cursor: "pointer", ...(errors.subject ? errorBorderStyle : {}) }}>
                        <option value="" disabled>Select a subject</option>
                        <option>Order Issue</option>
                        <option>Return / Exchange</option>
                        <option>Product Inquiry</option>
                        <option>Delivery Problem</option>
                        <option>Wholesale / Bulk Order</option>
                        <option>Other</option>
                      </select>
                      {errors.subject && <span style={errorTextStyle}>{errors.subject}</span>}
                    </div>

                    {/* Message */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <label style={labelStyle}>Your Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        rows={5} placeholder="Write your message here..."
                        style={{ ...inputStyle, resize: "vertical", minHeight: "110px", ...(errors.message ? errorBorderStyle : {}) }}
                      />
                      {errors.message && <span style={errorTextStyle}>{errors.message}</span>}
                    </div>

                    {/* Submit */}
                    <button type="submit" disabled={loading} style={{
                      background: loading ? "#9CA3AF" : "linear-gradient(135deg, #1a1a2e, #0f3460)",
                      color: "white", border: "none", borderRadius: "12px",
                      padding: "15px", fontSize: "15px", fontWeight: 700,
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "opacity 0.2s, transform 0.15s",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                      fontFamily: "'Segoe UI', sans-serif",
                      letterSpacing: "0.5px",
                    }}
                      onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.9"; }}
                      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                    >
                      {loading ? (
                        <><span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span> Sending...</>
                      ) : (
                        <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>Send Message</>
                      )}
                    </button>

                    <p style={{
                      margin: 0, textAlign: "center",
                      fontSize: "12px", color: "#9CA3AF",
                      fontFamily: "'Segoe UI', sans-serif",
                    }}>
                      🔒 Your information is safe with us. We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Map / Banner Strip ── */}
        <div style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
          padding: "48px 24px",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", letterSpacing: "3px", fontFamily: "'Segoe UI', sans-serif", margin: "0 0 10px" }}>
              WORKING HOURS
            </p>
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, margin: "0 0 20px" }}>
              Visit Our Store Anytime 🏪
            </h2>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "24px" }}>
              {[
                { day: "Mon – Thu", hours: "10:00 AM – 8:00 PM" },
                { day: "Fri – Sat",  hours: "10:00 AM – 9:00 PM" },
                { day: "Sunday",     hours: "12:00 PM – 6:00 PM" },
              ].map(t => (
                <div key={t.day} style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px", padding: "16px 24px", textAlign: "center",
                }}>
                  <p style={{ margin: "0 0 4px", color: "#e94560", fontSize: "12px", fontWeight: 700, fontFamily: "'Segoe UI', sans-serif", letterSpacing: "0.5px" }}>{t.day}</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "14px", fontFamily: "'Segoe UI', sans-serif", fontWeight: 600 }}>{t.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @media (max-width: 768px) {
            .shop-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>

    </>
  );
}

/* ── Shared Styles ── */
const labelStyle = {
  fontSize: "12px", fontWeight: 700, color: "#374151",
  fontFamily: "'Segoe UI', sans-serif", letterSpacing: "0.4px",
};

const inputStyle = {
  padding: "12px 14px", borderRadius: "10px",
  border: "1.5px solid #E5E7EB", fontSize: "14px",
  fontFamily: "'Segoe UI', sans-serif", color: "#111827",
  transition: "border-color 0.2s, box-shadow 0.2s",
  background: "#FAFAFA", width: "100%", boxSizing: "border-box",
};

const errorBorderStyle = { borderColor: "#EF4444" };
const errorTextStyle   = { fontSize: "11px", color: "#EF4444", fontFamily: "'Segoe UI', sans-serif" };

/* ── Reusable Field Component ── */
function Field({ label, name, type, placeholder, value, onChange, error }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type} name={name} value={value}
        onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: error ? "#EF4444" : focused ? "#0f3460" : "#E5E7EB",
          boxShadow: focused ? "0 0 0 3px rgba(15,52,96,0.1)" : "none",
          outline: "none",
        }}
      />
      {error && <span style={errorTextStyle}>{error}</span>}
    </div>
  );
}