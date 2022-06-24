import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeButtonStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Button | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Button</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`export type TButtonStyle =
  | 'Button'
  | 'Button.Circle'
  | 'Button.Small'
  | 'Button.Large'
  | 'Button.Round'
  | 'Button.Transparent';

export type TButtonTextStyle = 'Button.Text';

export type TButtonIconStyle =
  | 'Button.Icon'
  | 'Button.Circle.Icon'
  | 'Button.Circle.Icon.Small'
  | 'Button.Circle.Icon.Large';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <CodeSnippet>
              {`import { Text, TouchableOpacity } from '../stylo/stylish';

<TouchableOpacity styleNames={['Button', 'Button.Round', 'BackgroundColor.Primary']}>
  <Text styleNames={['Button.Text', 'Color.White']}>
    Submit
  </Text>
</TouchableOpacity>;`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeButtonStyles;
