import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import FormShowCase from '../components/showcase/form-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeFormStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Form | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Form</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TFormStyle =
  | 'Form'
  | 'Form.Item'
  | 'Form.Item.Label'
  | 'Form.Item.Label.Left'
  | 'Form.Item.Label.Body'
  | 'Form.Item.Label.Right'
  | 'Form.Item.Input'
  | 'Form.Item.Input.Left'
  | 'Form.Item.Input.Body'
  | 'Form.Item.Input.Right'
  | 'Form.Item.Help'
  | 'Form.Item.Help.Left'
  | 'Form.Item.Help.Body'
  | 'Form.Item.Help.Right';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="style-names-hierarchy" level={5}>
              StyleNames hierarchy
            </SectionHeading>
            <CodeSnippet>
              {`'Form'
  |- 'Form.Item'
    |- 'Form.Item.Label'
      |- 'Form.Item.Label.Left'
      |- 'Form.Item.Label.Body'
      |- 'Form.Item.Label.Right'
    |- 'Form.Item.Input'
      |- 'Form.Item.Input.Left'
      |- 'Form.Item.Input.Body'
      |- 'Form.Item.Input.Right'
    |- 'Form.Item.Help'
      |- 'Form.Item.Help.Left'
      |- 'Form.Item.Help.Body'
      |- 'Form.Item.Help.Right';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <FormShowCase />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeFormStyles;
