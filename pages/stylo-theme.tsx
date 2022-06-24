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
            Stylo provides a default strongly typed theme.
            The theme provides all the needed style definitions to style &amp; build all kinds of components, right from simple Text to complicated Pickers &amp; Forms.
            The theme has defined variables for colors, font, border, padding &amp; margin.
            The entire theme is based on these variables.
            So {`it's`} easy to create your own theme flavour or multiple flavours by just making some changes to these variables.
          </Paragraph>

          <Paragraph>
            The theme is located at <strong className="font-semibold">{STYLO_THEME_LOCATION}</strong>.
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

          <div className="pt-[1px]">
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-pink-50 rounded p-4">
                <h5 className="m-0">
                  <Link href="/stylo-theme-colors">
                    Colors
                  </Link>
                </h5>
              </div>
              <div className="bg-pink-50 rounded p-4">
                <h5 className="m-0">
                  <Link href="/stylo-theme-variables">
                    Variables
                  </Link>
                </h5>
              </div>
              <div className="bg-pink-50 rounded p-4">
                <h5 className="m-0">
                  <Link href="/stylo-theme-style-namespaces">
                    StyleNamespaces
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-pink-50 rounded pl-4 pr-4 pb-4 pt-[1px]">
              <h5>
                <Link href="/stylo-theme-generic-styles">
                  Generic styles
                </Link>
              </h5>
              <ul>
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
            </div>

            <div className="bg-pink-50 rounded pl-4 pr-4 pb-4 pt-[1px]">
              <h5>
                <Link href="/stylo-theme-component-styles">
                  Component styles
                </Link>
              </h5>
              <ul>
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
            </div>

            <div className="bg-pink-50 rounded pl-4 pr-4 pb-4 pt-[1px]">
              <h5>
                <Link href="/stylo-theme-assorted-styles">
                  Assorted styles
                </Link>
              </h5>
              <ul>
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
            </div>
          </div>

        </article>
      </React.Fragment >
    )}
  />
);

export default StyloTheme;
