import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import ScreenShowCase from '../components/showcase/screen-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeScreenStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Screen | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Screen</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TScreenStyle = 
  | 'Screen'
  | 'Screen.Header'
  | 'Screen.Header.Left'
  | 'Screen.Header.Body'
  | 'Screen.Header.Right'
  | 'Screen.Body'
  | 'Screen.Footer';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="style-names-hierarchy" level={5}>
              StyleNames hierarchy
            </SectionHeading>
            <CodeSnippet>
              {`'Screen'
  |- 'Screen.Header'
    |- 'Screen.Header.Left'
    |- 'Screen.Header.Body'
    |- 'Screen.Header.Right'
  |- 'Screen.Body'
  |- 'Screen.Footer';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <ScreenShowCase />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeScreenStyles;
