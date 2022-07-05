import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemePadding: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Padding | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Padding</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TPaddingStyle =
  | 'Padding'
  | 'Padding.Bottom'
  | 'Padding.Left'
  | 'Padding.Right'
  | 'Padding.Top'
  | 'Padding.Mini'
  | 'Padding.Small'
  | 'Padding.Large'
  | 'Padding.Top.Mini'
  | 'Padding.Right.Mini'
  | 'Padding.Bottom.Mini'
  | 'Padding.Left.Mini'
  | 'Padding.Top.Small'
  | 'Padding.Right.Small'
  | 'Padding.Bottom.Small'
  | 'Padding.Left.Small'
  | 'Padding.Top.Large'
  | 'Padding.Right.Large'
  | 'Padding.Bottom.Large'
  | 'Padding.Left.Large';`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemePadding;
