import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
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
            <CodeSnippet>
              {`import { View } from '../stylo/stylish';

<View styleNames={['Screen']}>
  <View styleNames={['Screen.Header']}>
    <View styleNames={['Screen.Header.Left']}>
      <Text>Left</Text>
    </View>
    <View styleNames={['Screen.Header.Body']}>
      <Text>Title</Text>
    </View>
    <View styleNames={['Screen.Header.Right']}>
      <Text>Right</Text>
    </View>
  </View>
  <View styleNames={['Screen.Body']}>
    <Text>Body</Text>
  </View>
  <View styleNames={['Screen.Footer']}>
    <Text>Footer</Text>
  </View>
</View>`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeScreenStyles;
