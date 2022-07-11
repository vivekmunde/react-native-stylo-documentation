import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import { STYLO_THEME_STYLERS_STYLISH_LOCATION } from '../constants/stylo-locations';

const StyloThemeSetup: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Stylo theme setup | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Setup</ArticleHeading>

          <Paragraph>
            Stylo theme &amp; its <Link href="/tight-coupling">tightly coupled</Link> styling elements, <Link href="/stylish">Stylish</Link> components &amp; <Link href="/stylers">Styler</Link> hooks, are located at <strong className="font-semibold">{STYLO_THEME_STYLERS_STYLISH_LOCATION}</strong>.
            Just copy the these to your project.
            You can freely modify the theme as per your needs.
          </Paragraph>
          <Paragraph>
            E.g. <InlineCode>cp -R [root]{STYLO_THEME_STYLERS_STYLISH_LOCATION} [root]/app/stylo</InlineCode>
          </Paragraph>
          <CodeSnippet>
            {`[root]
  |- app
    |- components
    |- screens
    |- stylo
      |- stylers
      |- stylish
      |- themes
        |- types
        |- default`}
          </CodeSnippet>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeSetup;
