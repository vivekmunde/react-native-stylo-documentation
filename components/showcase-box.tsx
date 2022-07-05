import React from 'react';

import CodeSnippet from './code-snippet';

const ShowCaseBox: React.FC<{
  renderCode: () => React.ReactNode;
  imageAlt: string;
  imageUrl: string;
}> = ({ renderCode, imageAlt, imageUrl }) => (
  <div className="grid grid-cols-11 grid-gap-4">
    <div className="col-span-7">
      <CodeSnippet>
        {renderCode()}
      </CodeSnippet>
    </div>
    <div className="pl-4 pr-4 col-span-4">
      <img
        className="rounded-xl border-4 border-pink-200"
        alt={imageAlt}
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/${imageUrl}`} />
    </div>
  </div>
);

export default ShowCaseBox;
