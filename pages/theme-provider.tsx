import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
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
      <title>{`<ThemeProvider />`} | React Native Stylo</title>
    </Head>
    <article>
      <ArticleHeading>{`<ThemeProvider />`}</ArticleHeading>
      <Paragraph>
        As the name says, the <strong className="font-semibold">ThemeProvider</strong> is a component responsible for providing the theme values across the application.
        The <InlineCode>ThemeProvider</InlineCode> creates a <ExternalLink href="https://reactjs.org/docs/context.html">React Context</ExternalLink> to hold the theme values &amp; ideally sits at the root of the application layout.
      </Paragraph>

      <Paragraph>
        In the main file of the application, wrap the application inside the <InlineCode>ThemeProvider</InlineCode> &amp; supply the theme values to it.
      </Paragraph>
      <CodeSnippet>
        {`import { ThemeProvider } from 'react-native-stylo';

import { variables, styles } from './themes/default';

const App = () => (
  <ThemeProvider variables={variables} styles={styles}>
    // Application layout
  </ThemeProvider>
);`}
      </CodeSnippet>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="props" level={4}>
          Props
        </SectionHeading>
        <section>
          <h5 className="text-lg">
            <InlineCode>variables</InlineCode> <RequiredTag />
          </h5>
          <Paragraph>
            The <Link href="/theme#variables">variables</Link> defined in the theme.
            These variables can be accessed across the application using the hook <Link href="/use-variables">useVariables()</Link>.
          </Paragraph>
        </section>
        <section>
          <h5 className="text-lg">
            <InlineCode>styles</InlineCode> <RequiredTag />
          </h5>
          <Paragraph>
            The style definitions defined in the theme.
            These styles are used by the <Link href="/stylish">Stylish</Link> components &amp; <Link href="/stylers">Styler</Link> hooks to apply them to components.
          </Paragraph>
        </section>
      </section>
    </article>
  </Layout>
);

export default CoreConcept;
