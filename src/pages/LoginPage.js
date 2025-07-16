import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-bg-alt)',
  },
  card: {
    width: 400,
    padding: 36,
    borderRadius: 'var(--radius)',
    boxShadow: 'var(--shadow)',
    background: 'var(--color-card)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    marginBottom: 12,
    borderRadius: 8,
    background: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
  },
  title: {
    marginBottom: 24,
    fontWeight: 700,
    fontSize: 24,
    color: 'var(--color-text)',
    letterSpacing: 1,
    fontFamily: 'var(--font-main)',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
  },
  label: {
    flex: '0 0 110px',
    marginRight: 10,
    fontWeight: 500,
    color: 'var(--color-text)',
    fontFamily: 'var(--font-main)',
    fontSize: 15,
    textAlign: 'right',
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 'var(--radius)',
    border: '1.5px solid var(--color-border)',
    fontSize: 16,
    outline: 'none',
    transition: 'border 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    background: 'var(--color-bg)',
    color: 'var(--color-text)',
  },
  inputError: {
    border: '1.5px solid #e53935',
    background: '#fff6f6',
  },
  button: {
    width: '100%',
    padding: '12px 0',
    borderRadius: 'var(--radius)',
    background: 'var(--color-primary)',
    color: 'var(--color-bg)',
    border: 'none',
    fontWeight: 600,
    fontSize: 17,
    cursor: 'pointer',
    marginTop: 8,
    marginBottom: 8,
    transition: 'background 0.2s, opacity 0.2s',
    boxShadow: 'var(--shadow)',
  },
  buttonDisabled: {
    background: 'var(--color-accent)',
    cursor: 'not-allowed',
    opacity: 0.7,
  },
  linkRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
    fontSize: 14,
  },
  link: {
    color: 'var(--color-primary)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.18s',
  },
  success: {
    color: '#388e3c',
    background: '#e8f5e9',
    borderRadius: 4,
    padding: '8px 0',
    marginBottom: 16,
    width: '100%',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 15,
  },
  error: {
    color: '#e53935',
    background: '#fff6f6',
    borderRadius: 4,
    padding: '8px 0',
    marginBottom: 12,
    width: '100%',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 15,
  },
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Logo or branding */}
        <img src={require('../assets/images/logo.png')} alt="Logo" style={styles.logo} aria-label="Site logo" onError={e => {e.target.style.display='none';}} />
        <div style={styles.title}>Login to Your Account</div>
        {submitted ? (
          <div style={styles.success} aria-live="polite">Login successful! (demo only)</div>
        ) : null}
        {error && <div style={styles.error} aria-live="assertive">{error}</div>}
        <form onSubmit={handleSubmit} style={{ width: '100%' }} aria-label="Login form" autoComplete="on">
          <div style={styles.formRow}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              required
              aria-required="true"
              aria-label="Email address"
              onChange={e => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
              style={{
                ...styles.input,
                ...(touched.email && !email ? styles.inputError : {}),
              }}
              autoComplete="username"
            />
          </div>
          <div style={styles.formRow}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              required
              aria-required="true"
              aria-label="Password"
              onChange={e => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
              style={{
                ...styles.input,
                ...(touched.password && !password ? styles.inputError : {}),
              }}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
            aria-label="Login button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div style={styles.linkRow}>
          <Link to="/forgot-password" style={styles.link} tabIndex={0}>Forgot password?</Link>
          <Link to="/register" style={styles.link} tabIndex={0}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;