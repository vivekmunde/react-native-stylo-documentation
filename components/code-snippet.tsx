import React from 'react';

const CodeSnippet: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <p className="mb-4 p-4 bg-gray-100 rounded" style={{ overflow: 'auto', maxHeight: '90vh' }}>
    <code className="text-black text-xs" style={{ whiteSpace: 'pre' }}>
      {children}
    </code>
  </p>
);

export default CodeSnippet;
