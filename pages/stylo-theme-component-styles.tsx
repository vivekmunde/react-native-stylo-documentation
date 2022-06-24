import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeComponentStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Component styles | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Component styles</ArticleHeading>

          <Paragraph>
            A styles collection per React Native component.
            Theme defines styles for each React Native component.
            These styles are defined by combining the <Link href="/generic-styles">Generic styles</Link> &amp; <Link href="assorted-styles">Assorted styles</Link>.
          </Paragraph>

          <ul className="bg-pink-50 rounded p-4 mb-4">
            <li>
              <Link href="/stylo-theme-image-styles">
                Image
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-image-background-styles">
                ImageBackground
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-pressable-styles">
                Pressable
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-scroll-view-styles">
                ScrollView
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-text-styles">
                Text
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-text-input-styles">
                TextInput
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-touchable-opacity-styles">
                TouchableOpacity
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-touchable-highlight-styles">
                TouchableHighlight
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-view-styles">
                View
              </Link>
            </li>
          </ul>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeComponentStyles;
