import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>{`<ThemeProvider />`} | React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <article>
      <ArticleHeading>{`<ThemeProvider />`}</ArticleHeading>
      <p>
        As the name says, the <strong className="font-semibold">ThemeProvider</strong> is a component responsible for providing the styling related values across the application.
        The ThemeProvider creates a <ExternalLink href="https://reactjs.org/docs/context.html">React Context</ExternalLink> to hold the style related values &amp; ideally sits at the root of the application layout.
      </p>

      <p>
        In the main file of the application, wrap the application inside the <InlineCode>ThemeProvider</InlineCode> &amp; supply the theme values to it.
      </p>
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
            <InlineCode>variables</InlineCode> <small className="font-light text-red-400">(Required)</small>
          </h5>
          <p>
            The <Link href="/theme#variables">variables</Link> defined in the theme.
            These variables can be accessed across the application using the hook <Link href="/use-variables">useVariables()</Link>.
          </p>
        </section>
        <section>
          <h5 className="text-lg">
            <InlineCode>styles</InlineCode> <small className="font-light text-red-400">(Required)</small>
          </h5>
          <p>
            The style definitions defined in the theme.
            These styles are used by the <Link href="/stylish">Stylish</Link> components &amp; <Link href="/stylers">Styler</Link> hooks to apply them to components.
          </p>
        </section>
      </section>
    </article>
  </Layout>
);

export default CoreConcept;
