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
import ShowCaseBox from '../components/showcase-box';
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
          <ArticleHeading>Setup &amp; usage</ArticleHeading>

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
              <InlineCode>npm install --save react-native-vector-icons@^9.1.0 react-native-stylo</InlineCode>
              <br />
              {' '}
              <br />
              OR
              <br />
              {' '}
              <br />
              <InlineCode>yarn add react-native-vector-icons@^9.1.0 react-native-stylo</InlineCode>
            </Paragraph>
          </section>
          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.styloConfiguration.id} level={4}>
              {sections.styloConfiguration.title}
            </SectionHeading>
            <Paragraph>
              Stylo provides a <Link href="/stylo-theme">default theme</Link> &amp; its <Link href="/tight-coupling">tightly coupled</Link> styling elements, <Link href="/stylish">Stylish</Link> components &amp; <Link href="/stylers">Styler</Link> hooks, which are located at <strong className="font-semibold">{STYLO_THEME_STYLERS_STYLISH_LOCATION}</strong>.
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
              The need for coping the <InlineCode>stylers</InlineCode> &amp; <InlineCode>stylish</InlineCode> directories is explained it the document <Link href="/tight-coupling">Tight coupling</Link>.
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
import { variables, styles } from './stylo/themes/default';

const App = () => (
  <ThemeProvider variables={variables.light} styles={styles.light}> /* OR use variables.dark & styles.dark */
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
              <strong className="font-semibold">Stylish</strong> components are nothing but enhanced React Native components with added property called <InlineCode>styleNames</InlineCode>.
              Property <InlineCode>styleNames</InlineCode> accepts the eligible styles for the component which are defined in the theme.
            </Paragraph>
            <ShowCaseBox
              renderCode={() => `import React from 'react';
import Stylish from '../../stylo/stylish';

const data = [
  { name: 'Narayan Naresh Nathani', profileUrl: require('../../images/face-icon-1.png'), role: 'UI Developer' },
  { name: 'Sumitra Suresh Sundaram', profileUrl: require('../../images/face-icon-2.png'), role: 'UX Designer' },
  { name: 'Indumati Indraneel Iyengar', profileUrl: require('../../images/face-icon-3.png'), role: 'Software Developer' },
];

const UsageStylishComponentsShowCase = () => (
  <Stylish.View styleNames={['Screen']}>
    <Stylish.SafeAreaView />
    <Stylish.View styleNames={['Screen.Header', 'Padding']}>
      <Stylish.Text styleNames={['H1']}>Usage</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['Screen.Body', 'Padding']}>
      <Stylish.Text styleNames={['H3', 'Margin.Bottom.Large']}>
        Stylish Components
      </Stylish.Text>
      <Stylish.View
        styleNames={['List', 'Border', 'Border.Radius', 'BackgroundColor.Alpha10', 'Margin.Bottom.Large']}>
        {data.map((it, index) => (
          <Stylish.View
            key={index}
            styleNames={
              index > 0 ? ['List.Item', 'Border.Top'] : ['List.Item']
            }>
            <Stylish.View styleNames={['List.Item.Left']}>
              <Stylish.Image styleNames={['Avatar']} source={it.profileUrl} />
            </Stylish.View>
            <Stylish.View styleNames={['List.Item.Body']}>
              <Stylish.Text styleNames={['Bold.Semi']}>{it.name}</Stylish.Text>
              <Stylish.Text styleNames={['Color.Secondary', 'Small']}>
                {it.role}
              </Stylish.Text>
            </Stylish.View>
          </Stylish.View>
        ))}
      </Stylish.View>
    </Stylish.View>
  </Stylish.View>
);

export default UsageStylishComponentsShowCase;
`}
              imageAlt="Stylish Components"
              imageUrl={{ light: "showcase-usage-stylish-components.png", dark: "showcase-usage-stylish-components-dark.png" }}
            />
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
              The styler hooks accept an argument <InlineCode>styleNames</InlineCode>.
              The argument <InlineCode>styleNames</InlineCode> accepts the eligible styles for the component which are defined in the theme.
            </Paragraph>
            <ShowCaseBox
              renderCode={() => `import React, { useRef } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import Stylers from '../../stylo/stylers';

const data = [
  { name: 'Narayan Naresh Nathani', profileUrl: require('../../images/face-icon-1.png'), role: 'UI Developer' },
  { name: 'Sumitra Suresh Sundaram', profileUrl: require('../../images/face-icon-2.png'), role: 'UX Designer' },
  { name: 'Indumati Indraneel Iyengar', profileUrl: require('../../images/face-icon-3.png'), role: 'Software Developer' },
];

const UsageStylersShowCase = () => {
  const styles = useRef({
    screen: Stylers.useViewStyles(['Screen']),
    screenHeader: Stylers.useViewStyles(['Screen.Header', 'Padding']),
    screenTitle: Stylers.useTextStyles(['H1']),
    screenBody: Stylers.useViewStyles(['Screen.Body', 'Padding']),
    listTitle: Stylers.useTextStyles(['H3', 'Margin.Bottom.Large']),
    list: Stylers.useViewStyles(['List', 'Border', 'Border.Radius', 'BackgroundColor.Alpha10', 'Margin.Bottom.Large']),
    listItem: Stylers.useViewStyles(['List.Item', 'Border.Top']),
    listLastItem: Stylers.useViewStyles(['List.Item']),
    listItemLeft: Stylers.useViewStyles(['List.Item.Left']),
    listItemBody: Stylers.useViewStyles(['List.Item.Body']),
    name: Stylers.useTextStyles(['Bold.Semi']),
    role: Stylers.useTextStyles(['Color.Secondary', 'Small']),
    avatar: Stylers.useImageStyles(['Avatar']),
  }).current;

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Usage</Text>
      </View>
      <View style={styles.screenBody}>
        <Text style={styles.listTitle}>Stylers</Text>
        <View style={styles.list}>
          {data.map((it, index) => (
            <View
              key={index}
              style={index > 0 ? styles.listItem : styles.listLastItem}>
              <View style={styles.listItemLeft}>
                <Image style={styles.avatar} source={it.profileUrl} />
              </View>
              <View style={styles.listItemBody}>
                <Text style={styles.name}>{it.name}</Text>
                <Text style={styles.role}>{it.role}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default UsageStylersShowCase;
`}
              imageAlt="Stylers"
              imageUrl={{ light: "showcase-usage-stylers.png", dark: "showcase-usage-stylers-dark.png" }}
            />
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
            <ShowCaseBox
              renderCode={() => `import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Stylers from '../../stylo/stylers';

const UsageUseVariablesShowCase = () => {
  const [padding, paddingLarge, margin, marginLarge, borderColor, borderRadius, fontColor, fontSize, screenColor, colorAlpha10]
    = Stylers.useVariables(['Padding', 'Padding.Large', 'Margin', 'Margin.Large', 'Border.Color', 'Border.Radius', 'Font.Color', 'Font.Size', 'Screen.BackgroundColor', 'Color.Alpha10']);

  const styles = useRef(
    StyleSheet.create({
      screen: { flex: 1, backgroundColor: screenColor.toString(), padding: Number(paddingLarge) },
      screenHeader: { paddingVertical: Number(paddingLarge) },
      screenBody: { padding: Number(padding) },
      text: { color: fontColor.toString(), fontSize: Number(fontSize) },
      h1: { fontWeight: '500', fontSize: 48, marginBottom: Number(marginLarge) },
      h2: { fontWeight: '600', fontSize: 32, marginBottom: Number(marginLarge) },
      paragraph: { marginBottom: Number(margin) },
      card: { padding: Number(padding), borderWidth: 1, borderColor: borderColor.toString(), borderRadius: Number(borderRadius), backgroundColor: colorAlpha10.toString() },
    }),
  ).current;

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.screenHeader}>
        <Text style={[styles.text, styles.h1]}>Usage</Text>
      </View>
      <Text style={[styles.text, styles.h2]}>useVariables()</Text>
      <View style={styles.card}>
        <Text style={[styles.text, styles.paragraph]}>
          Variables are the core configuration values which are used to define
          the themes. Like, colors, paddings, margins etc.
        </Text>
        <Text style={styles.text}>
          The useVariables() hook is used to access the Theme Variables. A
          practical use of the useVariables() hook can be accessing & using the
          theme variable values to define styles inside the StyleSheet.create()
          API.
        </Text>
      </View>
    </View>
  );
};

export default UsageUseVariablesShowCase;`}
              imageAlt="useVariables()"
              imageUrl={{ light: "showcase-usage-use-variables.png", dark: "showcase-usage-use-variables-dark.png" }}
            />
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
