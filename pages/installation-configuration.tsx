import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>Installation &amp; configuration | React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <article>
      <ArticleHeading>Installation &amp; configuration</ArticleHeading>
      <section>
        <SectionHeading id="installation" level={4}>
          Installation
        </SectionHeading>
        <p>
          <InlineCode>npm install --save react-native-stylo</InlineCode>
        </p>
        <p>
          <InlineCode>yarn add react-native-stylo</InlineCode>
        </p>
      </section>
      <section>
        <SectionHeading id="configuration" level={4}>
          Configuration
        </SectionHeading>
        <p></p>
      </section>
    </article>
  </Layout>
);

export default CoreConcept;
