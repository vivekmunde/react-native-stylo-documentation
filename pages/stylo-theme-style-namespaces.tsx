import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import DefaultStyleNamespacesCodeSnippet from '../components/default-style-namespaces-code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
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

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <DefaultStyleNamespacesCodeSnippet />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeStyleNamespaces;
