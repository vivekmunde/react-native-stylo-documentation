import React from 'react';

const StyloThemeColorBox: React.FC<{
  color: string;
  height?: string;
  width?: string;
  children?: React.ReactNode;
}> = ({ color, height, width, children }) => (
  <div
    className="rounded flex flex-row items-center p-2 justify-between"
    style={{
      width: width ?? '200px',
      height: height ?? '40px',
      backgroundColor: color,
    }}
  >
    {children}
  </div>
);

export default StyloThemeColorBox;
