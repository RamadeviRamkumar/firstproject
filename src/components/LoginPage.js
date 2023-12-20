import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const handleLogin = (formData) => {
    // Add your login logic here (e.g., API call, authentication check)
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-4">Login Page</h1>
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
