import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import ScrollViewShowCase from '../components/showcase/scroll-view-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import StyloThemeTypeDefinitionReferences from '../components/stylo-theme-type-definition-references';

const StyloThemeScrollView: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>ScrollView | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>ScrollView</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <StyloThemeTypeDefinitionReferences
              display={['TBackgroundColorStyle', 'TBorderStyle', 'TFlexStyle', 'TMarginStyle', 'TPaddingStyle']}
            />
            <CodeSnippet>
              {`type TScrollViewStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TFlexStyle
  | TMarginStyle
  | TPaddingStyle;

type TScrollViewContentContainerStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TFlexStyle
  | TMarginStyle
  | TPaddingStyle;`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <ScrollViewShowCase />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeScrollView;
