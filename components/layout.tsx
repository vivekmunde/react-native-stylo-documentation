import Head from 'next/head';
import React from 'react';

import HeaderLogo from './header-logo';

const Layout: React.FC<{
  renderNavigation: () => React.ReactNode,
  renderContent: () => React.ReactNode,
}> = ({ renderNavigation, renderContent }) => (
  <React.Fragment>
    <Head>
      <title>React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon.ico`} />
    </Head>
    <div className="flex flex-col">
      <div className="grid grid-cols-7 xl:grid-cols-5 grid-flow-col">
        <div className="p-4 pl-8 col-span-2 xl:col-span-1">
          <div className="mt-4 mb-8">
            <HeaderLogo />
          </div>
          {renderNavigation()}
          {/* <footer>Footer</footer> */}
        </div>
        <main className="border-l p-4 pb-16 lg:pr-8 xl:pr-8 col-span-5 xl:col-span-4" style={{ minHeight: '100vh' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  </React.Fragment>
);

export default Layout;
