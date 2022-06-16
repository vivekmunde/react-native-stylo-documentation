import Head from 'next/head';
import React from 'react';

import Layout from '../components/layout';

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <article>
      <h2>useStyles hook</h2>
    </article>
  </Layout>
);

export default CoreConcept;
