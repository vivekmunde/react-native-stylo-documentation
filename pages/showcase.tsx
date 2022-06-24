import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';

const Showcase: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Showcase | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Showcase</ArticleHeading>
        </article>
      </React.Fragment>
    )}
  />
);

export default Showcase;
