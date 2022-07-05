import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import StyloThemeTypeDefinitionReferences from '../components/stylo-theme-type-definition-references';

const StyloThemeText: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Text | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Text</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <StyloThemeTypeDefinitionReferences
              display={['TFontColorStyle', 'TMarginStyle', 'TBadgeStyle', 'TButtonStyle', 'TTagStyle']}
            />
            <CodeSnippet>
              {`type TTextStyle =
  | TFontColorStyle
  | TMarginStyle
  | TBadgeTextStyle
  | TButtonTextStyle
  | TTagTextStyle
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'Bold.Semi'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'Small'
  | 'Large'
  | 'Paragraph';`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeText;
