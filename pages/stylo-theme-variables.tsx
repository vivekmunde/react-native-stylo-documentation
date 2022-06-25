import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import { borderColor, fontColor } from '../constants/stylo-theme-colors';

const StyloThemeVariables: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Variables | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Variables</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <Paragraph>
              Ref: <Link href="/stylo-theme-colors#type-definition">TColor</Link>
            </Paragraph>
            <CodeSnippet>
              {`export type TVariable = 
  | TColor
  | 'Font.Color'
  | 'Padding'
  | 'Padding.XSmall'
  | 'Padding.Small'
  | 'Padding.Large'
  | 'Margin'
  | 'Margin.XSmall'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Border.Color'
  | 'Border.Width'
  | 'Border.Radius'
  | 'Border.Radius.Small'
  | 'Border.Radius.Large';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="values" level={5}>
              Values
            </SectionHeading>
            <CodeSnippet>
              {`const Variables = 
  'Font.Color': '${fontColor.toUpperCase()}',
  Padding: 12,
  'Padding.XSmall': 4,
  'Padding.Small': 8,
  'Padding.Large': 24,
  Margin: 12,
  'Margin.XSmall': 4,
  'Margin.Small': 8,
  'Margin.Large': 24,
  'Border.Color': '${borderColor.toUpperCase()}',
  'Border.Width': 1,
  'Border.Radius': 6,
  'Border.Radius.Small': 4,
  'Border.Radius.Large': 12'
};`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeVariables;
