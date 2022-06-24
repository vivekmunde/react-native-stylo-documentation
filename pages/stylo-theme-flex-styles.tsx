import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeFlex: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Flex | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Flex</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`export type TFlex =
  | 'Flex.Column'
  | 'Flex.Row'
  | 'Flex.Wrap'
  | 'Flex.AlignContent.Start'
  | 'Flex.AlignContent.Center'
  | 'Flex.AlignContent.End'
  | 'Flex.AlignContent.SpaceAround'
  | 'Flex.AlignContent.SpaceBetween'
  | 'Flex.AlignContent.Stretch'
  | 'Flex.AlignItems.Start'
  | 'Flex.AlignItems.Center'
  | 'Flex.AlignItems.End'
  | 'Flex.AlignItems.Stretch'
  | 'Flex.JustifyContent.Start'
  | 'Flex.JustifyContent.Center'
  | 'Flex.JustifyContent.End'
  | 'Flex.JustifyContent.SpaceAround'
  | 'Flex.JustifyContent.SpaceBetween'
  | 'Flex.JustifyContent.SpaceEvenly';`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeFlex;
