import React from "react";
import './SignInPage.css';
import { useState } from "react";

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // 로그인 추가
      console.log('Email:', email);
      console.log('Password:', password);
    };
    return (
        <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    );
};

export default SignInPage;