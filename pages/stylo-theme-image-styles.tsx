import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import ImageShowCase from '../components/showcase/image-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import StyloThemeTypeDefinitionReferences from '../components/stylo-theme-type-definition-references';

const StyloThemeImage: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Image | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Image</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <StyloThemeTypeDefinitionReferences
              display={['TMarginStyle', 'TBorderStyle', 'TAvatarStyle', 'TTagStyle']}
            />
            <CodeSnippet>
              {`type TImageStyle =
  | TMarginStyle
  | TBorderStyle
  | TAvatarStyle
  | TTagAvatarImageStyle;`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <ImageShowCase />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeImage;
