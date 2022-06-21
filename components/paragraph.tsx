import React from 'react';

const Paragraph: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <p className={`mb-4 ${className}`}>
    {children}
  </p>
);

export default Paragraph;
