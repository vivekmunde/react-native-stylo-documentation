import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeGenericStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Generic styles | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Generic styles</ArticleHeading>

          <Paragraph>
            <strong className="font-semibold">Generic styles</strong> are the common style definitions like font colors, border, flex or padding.
            These styles are applicable for multiple React Native components.
            For example, border styles can be applied to <InlineCode>View</InlineCode>, <InlineCode>ScrollView</InlineCode> or <InlineCode>TouchableOpacity</InlineCode>, font color styles can be applied to <InlineCode>Text</InlineCode> or <InlineCode>TextInput</InlineCode>.
            So the theme has categorized them as generic styles &amp; has defined them separately for better reusability.
          </Paragraph>

          <ul className="bg-pink-50 rounded p-4 mb-4">
            <li>
              <Link href="/stylo-theme-background-color-styles">
                Background colors
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-border-styles">
                Border
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-flex-styles">
                Flex
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-font-color-styles">
                Font colors
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-margin-styles">
                Margin
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-padding-styles">
                Padding
              </Link>
            </li>
          </ul>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeGenericStyles;
