import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeListStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>List | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>List</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`export type TListStyle = 
  | 'List'
  | 'List.Item'
  | 'List.Item.Left'
  | 'List.Item.Body'
  | 'List.Item.Right';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="style-names-hierarchy" level={5}>
              StyleNames hierarchy
            </SectionHeading>
            <CodeSnippet>
              {`'List'
  |- 'List.Item'
    |- 'List.Item.Left'
    |- 'List.Item.Body'
    |- 'List.Item.Right';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <CodeSnippet>
              {`import { Text, View } from '../stylo/stylish';

<View styleNames={['List', 'BackgroundColor.Grey1', 'Border.Radius']}>
  <View styleNames={['List.Item']}>
    <View styleNames={['List.Item.Left']}>
      <Text>1.</Text>
    </View>
    <View styleNames={['List.Item.Body']}>
      <Text>One</Text>
    </View>
    <View styleNames={['List.Item.Right']}>
      <Text>✓</Text>
    </View>
  </View>
  <View styleNames={['List.Item']}>
    <View styleNames={['List.Item.Left']}>
      <Text>2.</Text>
    </View>
    <View styleNames={['List.Item.Body']}>
      <Text>Two</Text>
    </View>
  </View>
  <View styleNames={['List.Item']}>
    <View styleNames={['List.Item.Left']}>
      <Text>3.</Text>
    </View>
    <View styleNames={['List.Item.Body']}>
      <Text>Three</Text>
    </View>
  </View>
</View>;`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeListStyles;
