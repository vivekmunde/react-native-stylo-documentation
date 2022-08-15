import React, { useState } from 'react';

import CodeSnippet from './code-snippet';

const ShowCaseBoxImage: React.FC<{
  imageAlt: string;
  imageUrl: { light: string; dark: string }
}> = ({ imageAlt, imageUrl }) => {
  const [mode, setMode] = useState<'Light' | 'Dark'>('Light');
  const inactiveClassName = 'border';
  const activeClassName = 'border bg-pink-50 border-pink-100';

  return (
    <div className="pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4">
      <div className="p-2 pl-4 pr-4">
        <div className="flex flex-row align-center justify-center">
          <button
            className={`p-1 text-sm rounded-l ${mode === 'Light' ? activeClassName : inactiveClassName} border-r-[0]`}
            style={{ width: '96px' }}
            onClick={() => {
              setMode('Light');
            }}>
            Light
          </button>
          <button
            className={`p-1 text-sm rounded-r ${mode === 'Dark' ? activeClassName : inactiveClassName} border-l-[0]`}
            style={{ width: '96px' }}
            onClick={() => {
              setMode('Dark');
            }}>
            Dark
          </button>
        </div>
      </div>
      <img
        className="rounded-3xl border-4 border-gray-700 mb-4"
        alt={imageAlt}
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/${mode === 'Light' ? imageUrl.light : imageUrl.dark}`} />
    </div>
  );
};

const ShowCaseBox: React.FC<{
  renderCode: () => React.ReactNode;
  imageAlt: string;
  imageUrl: { light: string; dark: string } | string;
}> = ({ renderCode, imageAlt, imageUrl }) => (
  <div className="grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4">
    <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8">
      <CodeSnippet>
        {renderCode()}
      </CodeSnippet>
    </div>
    <div className="pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4">
      {typeof imageUrl === 'string'
        ? (
          <img
            className="rounded-3xl border-4 border-gray-700 mb-4"
            alt={imageAlt}
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/${imageUrl}`} />
        )
        : <ShowCaseBoxImage imageAlt={imageAlt} imageUrl={imageUrl} />}
    </div>
  </div>
);

export default ShowCaseBox;
