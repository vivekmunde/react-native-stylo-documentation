import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import { STYLO_THEME_LOCATION } from '../constants/stylo-locations';

const StyloTheme: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Stylo theme</ArticleHeading>
          <Paragraph>
            Stylo provides a default strongly typed theme which is located at <strong className="font-semibold">{STYLO_THEME_LOCATION}</strong>.
            Just copy the the theme to your project &amp; start using it.
            You can freely modify the theme as per your needs.
          </Paragraph>
          <Paragraph>
            <InlineCode>cp -R [root]{STYLO_THEME_LOCATION} [root]/app/stylo/themes</InlineCode>
          </Paragraph>
          <CodeSnippet>
            {`[root]
  |- app
    |- components
    |- screens
    |- stylo
      |- themes
        |- types
        |- default`}
          </CodeSnippet>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloTheme;
