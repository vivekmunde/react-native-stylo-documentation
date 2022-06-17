import React from 'react';

const CodeSnippet: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <p className="p-4 bg-gray-100 rounded" style={{ overflow: 'auto' }}>
    <small>
      <code className="text-black" style={{ whiteSpace: 'pre' }}>
        {children}
      </code>
    </small>
  </p>
);

export default CodeSnippet;
