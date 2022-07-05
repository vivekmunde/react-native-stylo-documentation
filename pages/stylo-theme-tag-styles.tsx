import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeTagStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Tag | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Tag</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TTagStyle = 'Tag' | 'Tag.Small' | 'Tag.Large';

type TTagTextStyle = 'Tag.Text';

type TTagIconStyle = 'Tag.Icon.Left' | 'Tag.Icon.Right';

type TTagAvatarImageStyle =
  | 'Tag.Avatar'
  | 'Tag.Avatar.Left'
  | 'Tag.Avatar.Right';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="style-names-hierarchy" level={5}>
              StyleNames hierarchy
            </SectionHeading>
            <CodeSnippet>
              {`'Tag'
  |- 'Tag.Icon'
  |- 'Tag.Text'
  |- 'Tag.Avatar';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <CodeSnippet>
              {`import { Image, Text, View } from '../stylo/stylish';

<View styleNames={['Tag', 'BackgroundColor.Primary']}>
  <Image styleNames={['Tag.Avatar']} ... />
  <Text styleNames={['Tag.Text', 'Color.White']}>
    Name
  </Text>
</View>;`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeTagStyles;
