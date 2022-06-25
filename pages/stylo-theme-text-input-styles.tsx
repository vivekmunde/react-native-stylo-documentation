import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import StyloThemeTypeDefinitionReferences from '../components/stylo-theme-type-definition-references';

const StyloThemeTextInput: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>TextInput | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>TextInput</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <StyloThemeTypeDefinitionReferences
              display={['TBackgroundColorStyle', 'TFontColorStyle']}
            />
            <CodeSnippet>
              {`export type TTextInputStyle =
  | TBackgroundColorStyle
  | TFontColorStyle
  | 'Align.Center'
  | 'Align.Right'
  | 'Bold'
  | 'Small'
  | 'Large';`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeTextInput;
