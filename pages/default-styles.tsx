import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';

const defaultStyledComponents = ['ImageBackground', 'Image', 'SafeAreaView', 'ScrollView', 'TextInput', 'Text', 'Pressable', 'TouchableHighlight', 'TouchableOpacity', 'View'];

const DefaultStyles: React.FC = () => (
  <Layout>
    <Head>
      <title>Default styles | React Native Stylo</title>
    </Head>
    <article>
      <ArticleHeading>Default styles</ArticleHeading>
      <Paragraph>
        Some of the components need default styling so that the display of these components appears consistently throughout the app.
        One such component which need default styling is the <InlineCode>Text</InlineCode> component.
        The appearance of normal text throughout the app should be consistent with {`it's`} <InlineCode>FontFamily</InlineCode>, <InlineCode>FontSize</InlineCode>, <InlineCode>FontColor</InlineCode> etc.
      </Paragraph>
      <Paragraph>
        Using Stylo, the theme can be configured to apply default styles to any React Native component.
        The StyleName <InlineCode>Default</InlineCode> is reserved to define the default styles.
      </Paragraph>
      <CodeSnippet>
        {`const TextStyles = StyleSheet.create({
  Default: {
    color: '#444444',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  H1: {
    fontSize: 32,
    fontWeight: '500',
  ...
};`}
      </CodeSnippet>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="default-styled-components" level={4}>
          Default styled components
        </SectionHeading>
        <Paragraph>
          Default styles can be applied to following components:
        </Paragraph>
        <ul className="m-4">
          {defaultStyledComponents.map((it, index) => (
            <li key={it}>
              {index + 1}. {it}
            </li>
          ))}
        </ul>
      </section>
    </article>
  </Layout>
);

export default DefaultStyles;
