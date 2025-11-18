import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

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
    
    console.log('Email: ', email);
    console.log('Password: ', password);
    
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    setError('');
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className="login-page-wm">
      <div className="login-card">
        <h1 className="login-title">LOGIN</h1>

        {submitted && (
          <div className="login-status success" aria-live="polite">
            Login successful! (demo only)
          </div>
        )}

        {error && (
          <div className="login-status error" aria-live="assertive">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form" aria-label="Login form" autoComplete="on">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              required
              aria-required="true"
              aria-label="Email address"
              onChange={e => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`login-input ${touched.email && !email ? 'input-error' : ''}`}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              required
              aria-required="true"
              aria-label="Password"
              onChange={e => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
              className={`login-input ${touched.password && !password ? 'input-error' : ''}`}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="login-submit"
            aria-label="Login button"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'SIGN IN'}
          </button>
        </form>

        <div className="login-links">
          <Link to="/register" className="login-link">
            Create account →
          </Link>
          <Link to="/forgot-password" className="login-link">
            Forgot your password? →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;