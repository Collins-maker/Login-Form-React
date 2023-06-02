import React from 'react';
import './App.css'
import LoginForm, { ThemeContext } from './components/LoginForm';
import ChildComponent from './components/ChildComponent';

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <div className='app-container'>
        <LoginForm />
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
