import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import { STYLO_THEME_STYLERS_STYLISH_LOCATION } from '../constants/stylo-locations';

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
          <ArticleHeading>
            <span className="text-pink-600">S</span>
            <span className="text-blue-600">t</span>
            <span className="text-red-600">y</span>
            <span className="text-purple-600">l</span>
            <span className="text-green-600">o</span>
            <span className="text-blue-600">{` t`}</span>
            <span className="text-pink-600">h</span>
            <span className="text-green-600">e</span>
            <span className="text-red-600">m</span>
            <span className="text-purple-600">e</span>
          </ArticleHeading>

          <Paragraph>
            Stylo provides a default strongly typed theme.
            The theme provides all the needed style definitions to style &amp; build all kinds of components, right from simple Text to complicated Pickers &amp; Forms.
            The theme has defined variables for colors, font, border, padding &amp; margin.
            The entire theme is based on these variables.
            So {`it's`} easy to create your own theme flavour or multiple flavours by just making some changes to these variables.
          </Paragraph>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="setup" level={4}>
              Setup
            </SectionHeading>
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
          </section>

          <div className="pt-[1px]">
            <div className="grid lg:grid-cols-3 gap-1 lg:gap-4 mt-8">
              <div className="bg-pink-50 rounded p-4">
                <h5 className="m-0 p-0">
                  <Link href="/stylo-theme-colors">
                    <a className="font-medium" style={{ display: 'block' }}>
                      Colors
                    </a>
                  </Link>
                </h5>
              </div>
              <div className="bg-pink-50 rounded p-4">
                <h5 className="m-0 p-0">
                  <Link href="/stylo-theme-variables">
                    <a className="font-medium" style={{ display: 'block' }}>
                      Variables
                    </a>
                  </Link>
                </h5>
              </div>
              <div className="bg-pink-50 rounded p-4">
                <h5 className="m-0 p-0">
                  <Link href="/stylo-theme-style-namespaces">
                    <a className="font-medium" style={{ display: 'block' }}>
                      StyleNamespaces
                    </a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-1 lg:gap-4 mt-4">
            <div className="bg-pink-50 rounded pl-4 pr-4 pb-4 pt-[1px]">
              <h5>
                <Link href="/stylo-theme-generic-styles">
                  <a className="font-medium" style={{ display: 'block' }}>
                    Generic styles
                  </a>
                </Link>
              </h5>
              <ul>
                <li>
                  <Link href="/stylo-theme-background-color-styles">
                    <a style={{ display: 'block' }}>
                      Background colors
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-border-styles">
                    <a style={{ display: 'block' }}>
                      Border
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-flex-styles">
                    <a style={{ display: 'block' }}>
                      Flex
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-font-color-styles">
                    <a style={{ display: 'block' }}>
                      Font colors
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-margin-styles">
                    <a style={{ display: 'block' }}>
                      Margin
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-padding-styles">
                    <a style={{ display: 'block' }}>
                      Padding
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded pl-4 pr-4 pb-4 pt-[1px]">
              <h5>
                <Link href="/stylo-theme-component-styles">
                  <a className="font-medium" style={{ display: 'block' }}>
                    Component styles
                  </a>
                </Link>
              </h5>
              <ul>
                <li>
                  <Link href="/stylo-theme-image-styles">
                    <a style={{ display: 'block' }}>
                      Image
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-image-background-styles">
                    <a style={{ display: 'block' }}>
                      ImageBackground
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-pressable-styles">
                    <a style={{ display: 'block' }}>
                      Pressable
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-scroll-view-styles">
                    <a style={{ display: 'block' }}>
                      ScrollView
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-text-styles">
                    <a style={{ display: 'block' }}>
                      Text
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-text-input-styles">
                    <a style={{ display: 'block' }}>
                      TextInput
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-touchable-opacity-styles">
                    <a style={{ display: 'block' }}>
                      TouchableOpacity
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-touchable-highlight-styles">
                    <a style={{ display: 'block' }}>
                      TouchableHighlight
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-view-styles">
                    <a style={{ display: 'block' }}>
                      View
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded pl-4 pr-4 pb-4 pt-[1px]">
              <h5>
                <Link href="/stylo-theme-assorted-styles">
                  <a className="font-medium" style={{ display: 'block' }}>
                    Assorted styles
                  </a>
                </Link>
              </h5>
              <ul>
                <li>
                  <Link href="/stylo-theme-avatar-styles">
                    <a style={{ display: 'block' }}>
                      Avatar
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-badge-styles">
                    <a style={{ display: 'block' }}>
                      Badge
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-button-styles">
                    <a style={{ display: 'block' }}>
                      Button
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-form-styles">
                    <a style={{ display: 'block' }}>
                      Form
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-horizontal-styles">
                    <a style={{ display: 'block' }}>
                      Horizontal
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-list-styles">
                    <a style={{ display: 'block' }}>
                      List
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-screen-styles">
                    <a style={{ display: 'block' }}>
                      Screen
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/stylo-theme-tag-styles">
                    <a style={{ display: 'block' }}>
                      Tag
                    </a>
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
