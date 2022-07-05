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
              {`type TButtonStyle =
  | 'Button'
  | 'Button.Circle'
  | 'Button.Small'
  | 'Button.Large'
  | 'Button.Round'
  | 'Button.Transparent';

type TButtonTextStyle = 'Button.Text';

type TButtonIconStyle =
  | 'Button.Icon'
  | 'Button.Icon.Left'
  | 'Button.Icon.Right'
  | 'Button.Circle.Icon'
  | 'Button.Circle.Icon.Small'
  | 'Button.Circle.Icon.Large';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="style-names-hierarchy" level={5}>
              StyleNames hierarchy
            </SectionHeading>
            <CodeSnippet>
              {`'Button'
  |- 'Button.Icon'
  |- 'Button.Text';`}
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
