import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import DefaultStyleNamespacesCodeSnippet from '../components/default-style-namespaces-code-snippet';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeStyleNamespaces: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>StyleNamespaces | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>StyleNamespaces</ArticleHeading>
          <Paragraph>
            <strong className="font-semibold">Type definition</strong>
          </Paragraph>
          <DefaultStyleNamespacesCodeSnippet />
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeStyleNamespaces;
