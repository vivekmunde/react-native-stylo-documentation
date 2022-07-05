import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeAvatarStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Avatar | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Avatar</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TAvatarStyle =
  | 'Avatar'
  | 'Avatar.Square'
  | 'Avatar.Small'
  | 'Avatar.Large';

type TAvatarJacketStyle =
  | 'Avatar.Jacket'
  | 'Avatar.Jacket.Border'
  | 'Avatar.Jacket.Square'
  | 'Avatar.Jacket.Small'
  | 'Avatar.Jacket.Small.Border'
  | 'Avatar.Jacket.Large'
  | 'Avatar.Jacket.Large.Border';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="style-names-hierarchy" level={5}>
              StyleNames hierarchy
            </SectionHeading>
            <Paragraph>
              When <InlineCode>Avatar.Jacket</InlineCode> is used.
            </Paragraph>
            <CodeSnippet>
              {`'Avatar.Jacket'
  |- 'Avatar';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <CodeSnippet>
              {`import { Image } from '../stylo/stylish';

<Image styleNames={['Avatar', 'Avatar.Large']} ... />;`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeAvatarStyles;
