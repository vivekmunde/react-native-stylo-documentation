import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
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
              {`export type TFormStyle = 
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
            <CodeSnippet>
              {`import { Text, TextInput, View } from '../stylo/stylish';

<View styleNames={['Form']}>
  <View styleNames={['Form.Item']}>
    <View styleNames={['Form.Item.Label']}>
      <Text styleNames={['Secondary']}>
        Name
      </Text>
    </View>
    <View styleNames={['Form.Item.Input']}>
      <TextInput />
    </View>
  </View>
</View>`}
            </CodeSnippet>
            <CodeSnippet>
              {`import { Text, TextInput, View } from '../stylo/stylish';

<View styleNames={['Form']}>
  <View styleNames={['Form.Item']}>
    <View styleNames={['Form.Item.Label']}>
      <Text styleNames={['Color.Danger']}>
        Name
      </Text>
    </View>
    <View styleNames={['Form.Item.Input', 'Border.Color.Danger']}>
      <TextInput />
    </View>
    <View styleNames={['Form.Item.Help']}>
      <Text styleNames={['Color.Danger']}>
        Please enter name
      </Text>
    </View>
  </View>
</View>`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeFormStyles;
