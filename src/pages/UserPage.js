import React from 'react';

function UserPage() {
  // 你可以接入真实用户信息（如从 context 或 API 获取）
  const user = {
    username: 'demo_user',
    email: 'demo@example.com'
  };

  return (
    <div className="page">
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserPage;
