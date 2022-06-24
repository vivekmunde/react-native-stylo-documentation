import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeHorizontalStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Horizontal | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Horizontal</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`export type THorizontalStyle = 
  | 'Horizontal'
  | 'Horizontal.Left'
  | 'Horizontal.Body'
  | 'Horizontal.Right';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="style-names-hierarchy" level={5}>
              StyleNames hierarchy
            </SectionHeading>
            <CodeSnippet>
              {`'Horizontal'
  |- 'Horizontal.Left'
  |- 'Horizontal.Body'
  |- 'Horizontal.Right';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <CodeSnippet>
              {`import { Text, View } from '../stylo/stylish';

<View styleNames={['Horizontal', 'Border', 'Border.Radius']}>
  <View styleNames={['Horizontal.Left', 'Border.Right', 'Padding.Small']}>
    <Text>Left</Text>
  </View>
  <View styleNames={['Horizontal.Body', 'Border.Right', 'Padding.Small']}>
    <Text>Body</Text>
  </View>
  <View styleNames={['Horizontal.Right', 'Padding.Small']}>
    <Text>Right</Text>
  </View>
</View>;`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeHorizontalStyles;
