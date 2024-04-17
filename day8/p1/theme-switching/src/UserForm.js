// UserForm.js
import React from 'react';
import { useTheme } from './ThemeContext';

const UserForm = () => {
  const { theme } = useTheme();

  return (
    <form style={{ background: theme.background, color: theme.text }}>
      {/* Form elements */}
    </form>
  );
};

export default UserForm;