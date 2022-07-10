import Head from 'next/head';
import React, { useRef, useState } from 'react';
import ExternalLink from './external-link';

import HeaderLogo from './header-logo';

const leftNavDivClassName = 'p-4 pl-8 lg:col-span-2 xl:col-span-1 bg-white left-nav';
const mainContentClassName = 'border-l p-4 pb-16 lg:pr-8 xl:pr-8 col-span-7 lg:col-span-5 xl:col-span-4';

const Layout: React.FC<{
  renderNavigation: () => React.ReactNode,
  renderContent: () => React.ReactNode,
}> = ({ renderNavigation, renderContent }) => {
  const refLeftNavDiv = useRef<HTMLDivElement>(null);
  const refContentDiv = useRef<HTMLDivElement>(null);
  const refLeftNavState = useRef<'Open' | 'Closed'>('Closed');

  const onToggleLeftNav = () => {
    if (refLeftNavDiv.current) {
      if (refLeftNavState.current === 'Open') {
        refLeftNavState.current = 'Closed';
        refLeftNavDiv.current.className = leftNavDivClassName;
        if (refContentDiv.current) {
          refContentDiv.current.className = mainContentClassName;
        }
      } else {
        refLeftNavState.current = 'Open';
        refLeftNavDiv.current.className = `${leftNavDivClassName} left-nav-visible`;
        if (refContentDiv.current) {
          refContentDiv.current.className = `${mainContentClassName} main-content-no-scroll`;
        }
      }
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>React Native Stylo</title>
        <meta name="description" content="Infinitely scalable strongly typed themes, styling hooks & stylish components for React Native mobile applications" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon.ico`} />
        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/fontawesome-6.1.1/css/all.css`} />
      </Head>
      <div className="flex flex-col">
        <div className="grid grid-cols-7 xl:grid-cols-5 grid-flow-col">
          <div ref={refLeftNavDiv} className="p-4 pl-8 lg:col-span-2 xl:col-span-1 bg-white left-nav">
            <button
              className="left-nav-hamburger bg-gray-100 border-0 rounded p-2 mb-4"
              onClick={() => { onToggleLeftNav(); }}>
              <i className="fas fa-xmark fa-fw text-xl text-gray-400" />
            </button>
            <div className="mt-4 mb-8">
              <HeaderLogo />
            </div>
            {renderNavigation()}
            <footer className="mt-8">
              <ExternalLink href="https://github.com/vivekmunde/react-native-stylo">
                <i className="text-gray-700 text-2xl fab fa-github fa-fw" />
              </ExternalLink>
            </footer>
          </div>
          <main ref={refContentDiv} className="border-l p-4 pb-16 lg:pr-8 xl:pr-8 col-span-7 lg:col-span-5 xl:col-span-4" style={{ minHeight: '100vh' }}>
            <button
              className="left-nav-hamburger bg-pink-50 border-0 rounded p-2"
              onClick={() => { onToggleLeftNav(); }}>
              <i className="fas fa-bars fa-fw text-xl text-pink-500" />
            </button>
            {renderContent()}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
