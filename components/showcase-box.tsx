import React from 'react';

import CodeSnippet from './code-snippet';

const ShowCaseBox: React.FC<{
  renderCode: () => React.ReactNode;
  imageAlt: string;
  imageUrl: string;
}> = ({ renderCode, imageAlt, imageUrl }) => (
  <div className="grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4">
    <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8">
      <CodeSnippet>
        {renderCode()}
      </CodeSnippet>
    </div>
    <div className="pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4">
      <img
        className="rounded-3xl border-4 border-pink-200 mb-4"
        alt={imageAlt}
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/${imageUrl}`} />
    </div>
  </div>
);

export default ShowCaseBox;
