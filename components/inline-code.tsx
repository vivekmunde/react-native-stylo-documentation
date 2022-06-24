import React from 'react';

const InlineCode: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <small>
    <code className="text-black bg-gray-100 p-1 rounded" style={{ whiteSpace: 'nowrap' }}>
      {children}
    </code>
  </small>
);

export default InlineCode;
