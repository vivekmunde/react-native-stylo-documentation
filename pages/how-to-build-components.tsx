import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';

const HowToBuildComponents: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>How to build components? | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>How to build components?</ArticleHeading>
        </article>
      </React.Fragment>
    )}
  />
);

export default HowToBuildComponents;
