import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import StyloThemeTypeDefinitionReferences from '../components/stylo-theme-type-definition-references';

const StyloThemeView: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>View | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>View</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <StyloThemeTypeDefinitionReferences
              display={[
                'TBackgroundColorStyle', 'TBorderStyle', 'TFlexStyle', 'TMarginStyle', 'TPaddingStyle',
                'THorizontalStyle', 'TBadgeStyle', 'TListStyle', 'TFormStyle', 'TScreenStyle', 'TTagStyle',
              ]}
            />
            <CodeSnippet>
              {`type TViewStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TFlexStyle
  | TMarginStyle
  | TPaddingStyle
  | TBadgeStyle
  | TFormStyle
  | THorizontalStyle
  | TListStyle
  | TScreenStyle
  | TTagStyle;`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeView;
