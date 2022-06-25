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

          <div className="pt-[1px] mb-4">
            <div className="grid grid-cols-3 gap-4 mt-4">
              <Link href="/stylo-theme-image-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Image
                </a>
              </Link>
              <Link href="/stylo-theme-image-background-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  ImageBackground
                </a>
              </Link>
              <Link href="/stylo-theme-pressable-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Pressable
                </a>
              </Link>
              <Link href="/stylo-theme-scroll-view-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  ScrollView
                </a>
              </Link>
              <Link href="/stylo-theme-text-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Text
                </a>
              </Link>
              <Link href="/stylo-theme-text-input-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  TextInput
                </a>
              </Link>
              <Link href="/stylo-theme-touchable-opacity-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  TouchableOpacity
                </a>
              </Link>
              <Link href="/stylo-theme-touchable-highlight-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  TouchableHighlight
                </a>
              </Link>
              <Link href="/stylo-theme-view-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  View
                </a>
              </Link>
            </div>
          </div>

          <Paragraph>
            <i>Note: Remaining React Native components will be added in the upcoming releases.</i>
          </Paragraph>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeComponentStyles;
