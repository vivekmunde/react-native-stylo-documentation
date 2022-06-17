import React, { HTMLAttributes } from 'react';

const SectionHeading: React.FC<{
  children: React.ReactNode;
  id: string;
  level?: 1 | 2 | 3 | 4 | 5;
}> = ({ children, id, level }) => {
  const renderAnchor = () => (
    <a href={`#${id}`} className="font-semibold">
      {children}
    </a>
  );

  const headerProps: HTMLAttributes<HTMLHeadingElement> = {
    className: "heading",
    id,
  };

  if (level === 1) {
    return (
      <h1 {...headerProps}>
        {renderAnchor()}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2 {...headerProps}>
        {renderAnchor()}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3 {...headerProps}>
        {renderAnchor()}
      </h3>
    );
  }

  if (level === 4) {
    return (
      <h4 {...headerProps}>
        {renderAnchor()}
      </h4>
    );
  }

  return (
    <h5 {...headerProps}>
      {renderAnchor()}
    </h5>
  );
};

export default SectionHeading;
