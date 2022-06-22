import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Blockquote from '../components/blockquote';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import RequiredTag from '../components/required-tag';
import SectionHeading from '../components/section-heading';

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>{`<Styles />`} | React Native Stylo</title>
    </Head>
    <article>
      <ArticleHeading>{`<Styles />`}</ArticleHeading>
      <Paragraph>
        <strong className="font-semibold">Styles</strong> is a wrapper component which does the same work as that of <Link href="/use-styles">useStyles()</Link> hook.
        It internally uses <Link href="/use-styles">useStyles()</Link> hook.
      </Paragraph>

      <Blockquote>
        Stylo recommends to use the <Link href="/stylers">Styler</Link> hooks &amp; <Link href="/stylish">Stylish</Link> components instead of the <InlineCode>{`<Styles />`}</InlineCode> component.
        In practice, one may not need to use the <InlineCode>{`<Styles />`}</InlineCode> component directly.
      </Blockquote>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="type-definition" level={4}>
          Type definition
        </SectionHeading>
        <CodeSnippet>
          {`type TProps<TStyleProp, TStyleName extends string, TStyleNamespace extends string> = {
  styleNamespace: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<TStyleProp>) => React.ReactNode;
};`}
        </CodeSnippet>
        <section>
          <h5 className="text-base">
            <InlineCode>TStyleProp</InlineCode>
          </h5>
          <Paragraph>
            Standard React Native stye prop like <ExternalLink href="https://reactnative.dev/docs/text-style-props">TextStyle</ExternalLink>, <ExternalLink href="https://reactnative.dev/docs/view-style-props">ViewStyle</ExternalLink> etc.
          </Paragraph>
        </section>
        <section>
          <h5 className="text-base">
            <InlineCode>TStyleName</InlineCode>
          </h5>
          <Paragraph>
            <Link href="/theme#type-definitions">StyleName type</Link> defined in the theme.
          </Paragraph>
        </section>
        <section>
          <h5 className="text-base">
            <InlineCode>TStyleNamespace</InlineCode>
          </h5>
          <Paragraph>
            <Link href="/theme#type-definitions">StyleNamespace type</Link> defined in the theme.
          </Paragraph>
        </section>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="props" level={4}>
          Props
        </SectionHeading>
        <section>
          <h5 className="text-lg">
            <InlineCode>styleNamespace</InlineCode> <RequiredTag />
          </h5>
          <Paragraph>
            The <Link href="/theme#namespace">Namespace</Link> to be used which holds the style definitions for the <InlineCode>StyleNames</InlineCode> supplied to the hook.
          </Paragraph>
        </section>
        <section>
          <h5 className="text-lg">
            <InlineCode>styleNames</InlineCode> <RequiredTag />
          </h5>
          <Paragraph>
            The <Link href="/theme#style-name">StyleNames</Link> which define the styles.
          </Paragraph>
        </section>
        <section>
          <h5 className="text-base">
            <InlineCode>children</InlineCode> <RequiredTag />
          </h5>
          <Paragraph>
            A render function, which passes Standard React Native style object (e.g. <InlineCode>{`StyleProp<ViewStyle>`}</InlineCode>) as an argument.
          </Paragraph>
        </section>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="usage" level={4}>
          Usage
        </SectionHeading>
        <CodeSnippet>
          {`import React from 'react';
import { Text, TextStyle } from 'react-native';
import { Styles } from 'react-native-stylo';

import { TStyleNamespace, TTextStyle } from '../themes/types';

const Title:React.FC = ({ title: string }) => (
  <Styles<TextStyle, TTextStyle, TStyleNamespace>
    styleNamespace="TextStyles"
    styleNames={['H1']}
  >
    {( style ) => (
      <Text style={style}>
        {title}
      </Text>
    )}
  </Style>
);

export default Title;`}
        </CodeSnippet>
      </section>
    </article>
  </Layout>
);

export default CoreConcept;
