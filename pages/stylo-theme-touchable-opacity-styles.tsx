import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Layout from '../components/layout';
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
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeTouchableOpacityStyles;
