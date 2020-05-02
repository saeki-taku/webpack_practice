import * as React from 'react';

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div style={{ backgroundColor: 'green', color: '#fff', padding: '1rem' }}>
      {message}
    </div>
  );
};

export default Alert;
