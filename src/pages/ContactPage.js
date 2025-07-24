import React, { useState } from 'react';

const styles = {
  page: {
    minHeight: '100vh',
    background: 'var(--color-bg-alt)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 0',
  },
  card: {
    background: 'var(--color-card)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius)',
    boxShadow: 'var(--shadow)',
    padding: 36,
    maxWidth: 500,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: 'var(--color-text)',
    marginBottom: 8,
    letterSpacing: 1,
    fontFamily: 'var(--font-main)',
  },
  subtitle: {
    color: 'var(--color-muted)',
    fontSize: 15,
    marginBottom: 18,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  input: {
    padding: 12,
    borderRadius: 'var(--radius)',
    border: '1.5px solid var(--color-border)',
    fontSize: 16,
    background: 'var(--color-bg)',
    color: 'var(--color-text)',
    outline: 'none',
    transition: 'border 0.2s',
  },
  textarea: {
    minHeight: 80,
    resize: 'vertical',
  },
  button: {
    padding: '12px 0',
    borderRadius: 'var(--radius)',
    background: 'var(--color-primary)',
    color: 'var(--color-bg)',
    border: 'none',
    fontWeight: 600,
    fontSize: 17,
    cursor: 'pointer',
    marginTop: 8,
    transition: 'background 0.2s, opacity 0.2s',
    boxShadow: 'var(--shadow)',
  },
  info: {
    marginTop: 18,
    color: 'var(--color-muted)',
    fontSize: 14,
    lineHeight: 1.7,
  },
  success: {
    color: '#388e3c',
    background: '#e8f5e9',
    borderRadius: 4,
    padding: '8px 0',
    marginBottom: 8,
    width: '100%',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 15,
  },
};

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.title}>Contact Us</div>
        <div style={styles.subtitle}>We'd love to hear from you! Fill out the form below and we'll get back to you soon.</div>
        {submitted && <div style={styles.success}>Thank you for reaching out! We'll respond as soon as possible.</div>}
        <form style={styles.form} onSubmit={handleSubmit} autoComplete="on">
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            aria-label="Your Name"
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
          />
          <textarea
            style={{ ...styles.input, ...styles.textarea }}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            aria-label="Your Message"
          />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        <div style={styles.info}>
          <div><strong>Email:</strong> hello@lookbanana.com</div>
          <div><strong>Phone:</strong> +1 (555) 123-4567</div>
          <div><strong>Address:</strong> 123 Banana Ave, Fruit City, CA 90000</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 