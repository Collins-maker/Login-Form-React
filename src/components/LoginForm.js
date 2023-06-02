import React, { useState } from 'react';

// Create ThemeContext
const ThemeContext = React.createContext();

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      setError('');
      // Perform login logic here
    }
  };

  return (
    <ThemeContext.Provider value="light">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </ThemeContext.Provider>
  );
};

export default LoginForm;
export { ThemeContext };
