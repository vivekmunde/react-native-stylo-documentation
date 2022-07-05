import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import IconShowCase from '../components/showcase/icon-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import StyloThemeTypeDefinitionReferences from '../components/stylo-theme-type-definition-references';

const StyloThemeIcon: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Icon | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Icon</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <StyloThemeTypeDefinitionReferences
              display={['TFontColorStyle', 'TMarginStyle', 'TButtonStyle', 'TTagStyle']}
            />
            <CodeSnippet>
              {`type TIconStyle =
  | TFontColorStyle
  | TMarginStyle
  | TButtonIconStyle
  | TTagIconStyle
  | 'Small'
  | 'Large';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <IconShowCase />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeIcon;
