import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import { STYLO_THEME_STYLERS_STYLISH_LOCATION } from '../constants/stylo-locations';

const sections = {
  installation: {
    id: 'installation',
    title: 'Installation',
  },
  styloConfiguration: {
    id: 'configure-theme-hooks-components',
    title: 'Configure theme, styled hooks & components',
  },
  themeProvider: {
    id: 'theme-provider',
    title: 'ThemeProvider setup',
  },
  stylishComponents: {
    id: 'using-stylish-components',
    title: 'Using stylish components',
  },
  stylers: {
    id: 'stylers',
    title: 'Using stylers',
  },
  variables: {
    id: 'using-variables',
    title: 'Using variables',
  },
};

const Usage: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Usage | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Usage</ArticleHeading>

          <nav className="p-4 mt-8 mb-4 bg-pink-50 rounded">
            <ul>
              <li>
                <a href={`#${sections.installation.id}`}>
                  {sections.installation.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.styloConfiguration.id}`}>
                  {sections.styloConfiguration.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.themeProvider.id}`}>
                  {sections.themeProvider.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.stylishComponents.id}`}>
                  {sections.stylishComponents.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.stylers.id}`}>
                  {sections.stylers.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.variables.id}`}>
                  {sections.variables.title}
                </a>
              </li>
            </ul>
          </nav>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.installation.id} level={4}>
              {sections.installation.title}
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Peer dependency:</strong>
              <br />
              Stylo uses <ExternalLink href="https://www.npmjs.com/package/react-native-vector-icons">Vector Icons</ExternalLink>, so it has a peer dependency of <InlineCode>react-native-vector-icons</InlineCode>@^9.1.0.
            </Paragraph>
            <Paragraph>
              <InlineCode>npm install --save react-native-stylo react-native-vector-icons@^9.1.0</InlineCode>
            </Paragraph>
            <Paragraph>
              <InlineCode>yarn add react-native-stylo react-native-vector-icons@^9.1.0</InlineCode>
            </Paragraph>
          </section>
          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.styloConfiguration.id} level={4}>
              {sections.styloConfiguration.title}
            </SectionHeading>
            <Paragraph>
              Stylo provides a default theme &amp; its <Link href="/tight-coupling">tightly coupled</Link> styling elements, <Link href="/stylish">Stylish</Link> components &amp; <Link href="/stylers">Styler</Link> hooks, which are located at <strong className="font-semibold">{STYLO_THEME_STYLERS_STYLISH_LOCATION}</strong>.
              Just copy the these to your project.
              You can freely modify the theme as per your needs.
            </Paragraph>
            <Paragraph>
              E.g. <InlineCode>cp -R [root]{STYLO_THEME_STYLERS_STYLISH_LOCATION} [root]/app/stylo</InlineCode>
            </Paragraph>
            <CodeSnippet>
              {`[root]
  |- app
    |- components
    |- screens
    |- stylo
      |- stylers
      |- stylish
      |- themes
        |- types
        |- default`}
            </CodeSnippet>
            <Paragraph>
              You can create your own themes right from scratch.
              Please refer the <Link href="/theme">Theme</Link> documentation for more details.
            </Paragraph>
            <Paragraph>
              The need for coping the <InlineCode>stylers</InlineCode> &amp; <InlineCode>stylish</InlineCode> directories is explained it the document <Link href="/tight-coupling">Tightly coupled</Link>.
              To better understand the tight coupling, we recommend you to first go through the <Link href="/core-concept">Core concept</Link>, <Link href="/theme">Theme</Link>, <Link href="/stylish">Stylish</Link> &amp; <Link href="/stylers">Stylers</Link> documents.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.themeProvider.id} level={4}>
              {sections.themeProvider.title}
            </SectionHeading>
            <Paragraph>
              Wrap the application inside the <InlineCode>ThemeProvider</InlineCode> and supply the theme to it.
              The theme is collection of variables &amp; and style definitions.
              ThemeProvider expects both variables &amp; styles to be supplied to it.
            </Paragraph>
            <CodeSnippet>
              {`import { ThemeProvider } from 'react-native-stylo';

import { variables, styles } from './themes/default';

const App = () => (
  <ThemeProvider variables={variables} styles={styles}>
    // Application components
  </ThemeProvider>
);`}
            </CodeSnippet>
            <Paragraph>
              Please refer the <Link href="/theme-provider">{`<ThemeProvider />`}</Link> documentation for more details.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.stylishComponents.id} level={4}>
              {sections.stylishComponents.title}
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Stylish</strong> components are nothing but enhanced React Native components with added properties called <InlineCode>styleNames</InlineCode> &amp; <InlineCode>styleNamespace</InlineCode>.
              Property <InlineCode>styleNames</InlineCode> accepts the eligible styles for the component which are defined in the theme.
              Property <InlineCode>styleNamespace</InlineCode> is optional and use only when you need to override the <Link href="/theme#default-namespaces">default StyleNamespaces</Link>.
            </Paragraph>
            <CodeSnippet>
              {`import React from 'react';
import Stylish from '../stylo/stylish';

const Home = () => (
  <Stylish.View styleNames={['Screen']}>
    <Stylish.View styleNames={['Screen.Header', 'Flex.Column', 'Flex.AlignItems.Center', 'Flex.JustifyContent.Center', 'Padding']}>
      <Stylish.Text styleNames={['H1', 'Align.Center']}>
        React Native Stylo
      </Stylish.Text>
      <Stylish.Text styleNames={['Align.Center']}>
        Highly composable & scalable themes
      </Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['Screen.Body']}>
      <Stylish.View styleNames={['List', 'Border', 'Border.Radius', 'Border.Color.Grey2']}>
        <Stylish.TouchableOpacity styleNames={['List.Item', 'Border.Bottom']} onPress={() => /*some action */}>
          <Stylish.View styleNames={['List.Item.Left']}>
            <Stylish.Image styleNames={['Avatar', 'Avatar.Size.Small']} source={...} />
          </Stylish.View>
          <Stylish.View styleNames={['List.Item.Body']}>
            <Stylish.Text>
              Strongly typed & intellisense friendly styles
            </Stylish.Text>
          </Stylish.View>
        </Stylish.TouchableOpacity>
        <Stylish.TouchableOpacity styleNames={['List.Item', 'Border.Bottom']} onPress={() => /*some action */}>
          <Stylish.View styleNames={['List.Item.Left']}>
            <Stylish.Image styleNames={['Avatar', 'Avatar.Size.Small']} source={...} />
          </Stylish.View>
          <Stylish.View styleNames={['List.Item.Body']}>
            <Stylish.Text>
              Infinitely scalable
            </Stylish.Text>
          </Stylish.View>
        </Stylish.TouchableOpacity>
      </Stylish.View>
    </Stylish.View>
  </Stylish.View>
);

export default Home;`}
            </CodeSnippet>
            <Paragraph>
              Please refer the <Link href="/stylish">Stylish</Link> documentation for more details.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.stylers.id} level={4}>
              {sections.stylers.title}
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Stylers</strong> are styling hooks which are used to define the styles for the components.
              Use these stylers in case you like to use the core React Native components instead of {`Stylo's`} stylish components.
              The styler hooks accept two arguments <InlineCode>styleNames</InlineCode> &amp <InlineCode>styleNamespace</InlineCode>(optional).;
              First argument <InlineCode>styleNames</InlineCode> accepts the eligible styles for the component which are defined in the theme.
              Second argument <InlineCode>styleNamespace</InlineCode> is optional, and use only when you need to override the default namespaces.
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useImageStyles, useTextStyles, useTouchableStyles, useViewStyles } from '../stylo/stylers';

const Home = () => {
  const styles = useRef({
    screen: useViewStyles(['Screen']),
    screenHeader: useViewStyles(['Screen.Header', 'Flex.Column', 'Flex.AlignItems.Center', 'Flex.JustifyContent.Center', 'Padding']),
    screenBody: useViewStyles(['Screen.Body']),
    screenFooter: useViewStyles(['Screen.Footer']),
    screenTitle: useTextStyles(['H1', 'Align.Center']),
    screenSubTitle: useTextStyles(['Align.Center']),
    list: useViewStyles(['List', 'Border', 'Border.Radius', 'Border.Color.Grey2']),
    listItem: useTouchableStyles(['List.Item', 'Border.Bottom']),
    listLastItem: useTouchableStyles(['List.Item']),
    listItemLeft: useViewStyles(['List.Item.Left']),
    listItemBody: useViewStyles(['List.Item.Body']),
    listItemAvatar: useImageStyles(['Avatar', 'Avatar.Size.Small']),
  }).current;

  return (
    <View style={styles.screen}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>
          React Native Stylo
        </Text>
        <Text style={styles.screenSubTitle}>
          Highly composable & infinitely scalable themes
        </Text>
      </View>
      <View style={styles.screenBody}>
        <View style={styles.list}>
          <TouchableOpacity style={styles.listItem} onPress={()=> /* some action */}>
            <View style={styles.listItemLeft}>
              <Image style={styles.listItemAvatar} source={...} />
            </View>
            <View style={styles.listItemBody}>
              <Text>
                Strongly typed & intellisense friendly styles
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listLastItem} onPress={()=> /* some action */}>
            <View style={styles.listItemLeft}>
              <Image style={styles.listItemAvatar} source={...} />
            </View>
            <View style={styles.listItemBody}>
              <Text>
                Infinitely scalable
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;`}
            </CodeSnippet>
            <Paragraph>
              Please refer the <Link href="/stylers">Stylers</Link> documentation for more details.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.variables.id} level={4}>
              {sections.variables.title}
            </SectionHeading>
            <Paragraph>
              Variables are the core configuration values which are used to define the themes. Like, colors, paddings, margins etc.&nbsp;
              <strong className="font-semibold">useVariables()</strong> hook is used to access the theme configuration values to create your own custom page specific styles.
            </Paragraph>
            <CodeSnippet>
              {`import { Text, View } from 'react-native';
import { useVariables } from '../stylo/stylers';

const ComponentA = () => {
  const [
    paddingLarge,
    borderRadius,
    colorPink,
    colorWhite,
  ] = useVariables([
    'Padding.Large',
    'Border.Radius',
    'Color.Pink',
    'Color.White',
  ]);
  const styles = useRef(
    StyleSheet.create({
      card: {
        padding: paddingLarge,
        borderRadius,
        backgroundColor: colorPink,
        display: 'flex',
        flexDirection: 'column',
      },
      cardTitle: {
        fontSize: 24,
        lineHeight: 32,
        color: colorWhite,
      },
      ...,
    }),
  ).current;

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {title goes here}
      </Text>
      ...
    </View>
  );`}
            </CodeSnippet>
            <Paragraph>
              Please refer the <Link href="/use-variables">useVariables()</Link> documentation for more details.
            </Paragraph>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default Usage;
