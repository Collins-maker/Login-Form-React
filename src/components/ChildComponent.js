import React, { useContext } from 'react';
import { ThemeContext } from './LoginForm';

const ChildComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Theme: {theme}</p>
    </div>
  );
};

export default ChildComponent;
