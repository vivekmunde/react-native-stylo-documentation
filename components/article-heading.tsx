import React from 'react';

const ArticleHeading: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <h1 className="font-extralight">
    {children}
  </h1>
);

export default ArticleHeading;
