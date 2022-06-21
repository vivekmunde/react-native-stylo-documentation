import React from 'react';

const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="p-4 bg-pink-50 rounded mb-4">
    {children}
  </blockquote>
);

export default Blockquote;
