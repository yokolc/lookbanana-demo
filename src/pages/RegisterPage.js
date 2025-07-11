
import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', formData);
    // 可接入后端注册接口
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegisterPage;
