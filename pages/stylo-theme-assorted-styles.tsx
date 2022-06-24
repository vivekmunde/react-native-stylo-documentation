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
            <strong className="font-semibold">Assorted styles</strong> are nothing but logically grouped styles which are required to style the components like <InlineCode>Avatar</InlineCode>, <InlineCode>Button</InlineCode>, <InlineCode>Form</InlineCode> etc.
            {`Stylo's`} follows a philosophy called <Link href="/#styles-only">Styles only</Link> using which one can make any component.
            The members of the assorted styles can be infinite, like <InlineCode>Card</InlineCode>, <InlineCode>Picker</InlineCode>, <InlineCode>Legend</InlineCode> &amp; so on.
          </Paragraph>

          <Paragraph>
            The theme currently offers following classification of the styles. It will keep adding new members in the upcoming releases.
          </Paragraph>

          <ul className="bg-pink-50 rounded p-4 mb-4">
            <li>
              <Link href="/stylo-theme-avatar-styles">
                Avatar
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-badge-styles">
                Badge
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-button-styles">
                Button
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-form-styles">
                Form
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-horizontal-styles">
                Horizontal
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-list-styles">
                List
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-screen-styles">
                Screen
              </Link>
            </li>
            <li>
              <Link href="/stylo-theme-tag-styles">
                Tag
              </Link>
            </li>
          </ul>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeAssortedStyles;
