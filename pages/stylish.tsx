import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>Stylish | React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <article>
      <ArticleHeading>Stylish</ArticleHeading>
      <Paragraph>TBD</Paragraph>
    </article>
  </Layout>
);

export default CoreConcept;
