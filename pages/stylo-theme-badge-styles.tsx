import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeBadgeStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Badge | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Badge</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TBadgeStyle = 'Badge' | 'Badge.Small' | 'Badge.Large';

type TBadgeTextStyle =
  | 'Badge.Text'
  | 'Badge.Text.Small'
  | 'Badge.Text.Large';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="style-names-hierarchy" level={5}>
              StyleNames hierarchy
            </SectionHeading>
            <CodeSnippet>
              {`'Badge'
  |- 'Badge.Text';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <CodeSnippet>
              {`import { Text, View } from '../stylo/stylish';

<View styleNames={['Badge', 'BackgroundColor.Primary']}>
  <Text styleNames={['Badge.Text', 'Color.White']}>
    4
  </Text>
</View>;`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeBadgeStyles;
