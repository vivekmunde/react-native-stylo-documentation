import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeAssortedStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Assorted styles | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Assorted styles</ArticleHeading>

          <Paragraph>
            <strong className="font-semibold">Assorted styles</strong> are nothing but logically grouped styles.
            Like the styles required to style the components like <InlineCode>Avatar</InlineCode>, <InlineCode>Button</InlineCode>, <InlineCode>Form</InlineCode> etc.
            Stylo follows a philosophy called <Link href="/#styles-only">Styles only</Link> using which one can create &amp; beautify any component.
            The members of the assorted styles can be infinite, like <InlineCode>Card</InlineCode>, <InlineCode>Picker</InlineCode>, <InlineCode>Legend</InlineCode> &amp; so on.
          </Paragraph>

          <Paragraph>
            The theme currently offers following classification of the styles. It will keep adding new members in the upcoming releases.
          </Paragraph>

          <div className="pt-[1px]">
            <div className="grid lg:grid-cols-4 gap-1 lg:gap-4 mt-4">
              <Link href="/stylo-theme-avatar-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Avatar
                </a>
              </Link>
              <Link href="/stylo-theme-badge-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Badge
                </a>
              </Link>
              <Link href="/stylo-theme-button-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Button
                </a>
              </Link>
              <Link href="/stylo-theme-form-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Form
                </a>
              </Link>
              <Link href="/stylo-theme-horizontal-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Horizontal
                </a>
              </Link>
              <Link href="/stylo-theme-list-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  List
                </a>
              </Link>
              <Link href="/stylo-theme-screen-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Screen
                </a>
              </Link>
              <Link href="/stylo-theme-tag-styles">
                <a className="bg-pink-50 rounded p-4" style={{ display: 'block' }}>
                  Tag
                </a>
              </Link>
            </div>
          </div>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeAssortedStyles;
