import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import MarginShowCase from '../components/showcase/margin-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeMargin: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Margin | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Margin</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TMarginStyle =
  | 'Margin'
  | 'Margin.Top'
  | 'Margin.Right'
  | 'Margin.Bottom'
  | 'Margin.Left'
  | 'Margin.Mini'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Margin.Top.Mini'
  | 'Margin.Right.Mini'
  | 'Margin.Bottom.Mini'
  | 'Margin.Left.Mini'
  | 'Margin.Top.Small'
  | 'Margin.Right.Small'
  | 'Margin.Bottom.Small'
  | 'Margin.Left.Small'
  | 'Margin.Top.Large'
  | 'Margin.Right.Large'
  | 'Margin.Bottom.Large'
  | 'Margin.Left.Large';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <MarginShowCase />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeMargin;
