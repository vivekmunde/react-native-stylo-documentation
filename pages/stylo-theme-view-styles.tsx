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
import StyloThemeTypeDefinitionReferences from '../components/stylo-theme-type-definition-references';

const StyloThemeView: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>View | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>View</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <StyloThemeTypeDefinitionReferences
              display={[
                'TBackgroundColorStyle', 'TBorderStyle', 'TFlexStyle', 'TMarginStyle', 'TPaddingStyle',
                'THorizontalStyle', 'TBadgeStyle', 'TListStyle', 'TFormStyle', 'TScreenStyle', 'TTagStyle',
              ]}
            />
            <CodeSnippet>
              {`type TViewStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TFlexStyle
  | TMarginStyle
  | TPaddingStyle
  | TBadgeStyle
  | TFormStyle
  | THorizontalStyle
  | TListStyle
  | TScreenStyle
  | TTagStyle;`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <Paragraph>
              The <InlineCode>{`<View />`}</InlineCode> component is the base layout component in React Native.
              Any usage examples can be referred, as almost all of them use <InlineCode>{`<View />`}</InlineCode>.
            </Paragraph>
            <div className="grid grid-cols-3">
              <div className="bg-pink-50 rounded p-4">
                <ul>
                  <li>
                    <Link href="/stylo-theme-background-color-styles#usage">
                      <a style={{ display: 'block' }}>
                        BackgroundColor
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stylo-theme-border-styles#usage">
                      <a style={{ display: 'block' }}>
                        Border
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stylo-theme-flex-styles#usage">
                      <a style={{ display: 'block' }}>
                        Flex
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stylo-theme-margin-styles#usage">
                      <a style={{ display: 'block' }}>
                        Margin
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stylo-theme-padding-styles#usage">
                      <a style={{ display: 'block' }}>
                        Padding
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stylo-theme-form-styles#usage">
                      <a style={{ display: 'block' }}>
                        Form
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stylo-theme-horizontal-styles#usage">
                      <a style={{ display: 'block' }}>
                        Horizontal
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stylo-theme-list-styles#usage">
                      <a style={{ display: 'block' }}>
                        List
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stylo-theme-screen-styles#usage">
                      <a style={{ display: 'block' }}>
                        Screen
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeView;
