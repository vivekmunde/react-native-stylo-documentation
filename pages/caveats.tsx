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
          <title>Caveats | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Caveats</ArticleHeading>
        </article>
      </React.Fragment>
    )}
  />
);

export default Showcase;
