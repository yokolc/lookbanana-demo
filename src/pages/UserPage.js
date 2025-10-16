import React from 'react';

function UserPage() {
  // You can integrate real user information (e.g., from context or API)
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
