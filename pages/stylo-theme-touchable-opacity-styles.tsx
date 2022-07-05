import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import TouchableShowCase from '../components/showcase/touchable-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import StyloThemeTouchableStyleTypeDefinition from '../components/stylo-theme-touchable-style-type-definition';

const StyloThemeTouchableOpacityStyles: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>TouchableOpacity | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>TouchableOpacity</ArticleHeading>

          <StyloThemeTouchableStyleTypeDefinition />

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <TouchableShowCase type="TouchableOpacity" />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeTouchableOpacityStyles;
