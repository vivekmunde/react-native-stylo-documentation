import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';

const sections = {
  installation: {
    id: 'installation',
    title: 'Installation',
  },
  themeDefinitions: {
    id: 'theme-definitions',
    title: 'Theme definitions',
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
  tightlyCouplingStyles: {
    id: 'tight-coupling-styles',
    title: 'Tightly coupling styles',
  },
  styleNamesSequence: {
    id: 'style-names-sequence',
    title: 'StyleNames sequence',
  },
};

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>Usage | React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
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
            <a href={`#${sections.themeDefinitions.id}`}>
              {sections.themeDefinitions.title}
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
          <li>
            <a href={`#${sections.tightlyCouplingStyles.id}`}>
              {sections.tightlyCouplingStyles.title}
            </a>
          </li>
          <li>
            <a href={`#${sections.styleNamesSequence.id}`}>
              {sections.styleNamesSequence.title}
            </a>
          </li>
        </ul>
      </nav>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.installation.id} level={4}>
          {sections.installation.title}
        </SectionHeading>
        <p>
          <InlineCode>npm install --save react-native-stylo</InlineCode>
        </p>
        <p>
          <InlineCode>yarn add react-native-stylo</InlineCode>
        </p>
      </section>
      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.themeDefinitions.id} level={4}>
          {sections.themeDefinitions.title}
        </SectionHeading>
        <p>
          Stylo provides a default theme &amp; its type definitions which are located at <strong className="font-semibold">node_modules/react-native-stylo/lib/themes</strong>.
          Just copy the theme to your project and you can modify them as per your needs.
        </p>
        <p>
          E.g. <InlineCode>cp -R [root]/node_modules/react-native-stylo/lib/themes/ [root]/app/themes/</InlineCode>
        </p>
        <p>
          Or you can create your own themes &amp; their type definitions right from scratch.
        </p>
        <p>
          Please refer the <Link href="/theme">Theme</Link> documentation for more details.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.themeProvider.id} level={4}>
          {sections.themeProvider.title}
        </SectionHeading>
        <p>
          Wrap the application inside the <InlineCode>ThemeProvider</InlineCode> and supply the theme to it.
          The theme is collection of variables &amp; and style definitions.
          ThemeProvider expects both variables &amp; styles to be supplied to it.
        </p>
        <CodeSnippet>
          {`import { ThemeProvider } from 'react-native-stylo';

import { variables, styles } from './themes/default';

const App = () => (
  <ThemeProvider variables={variables} styles={styles}>
    // Application components
  </ThemeProvider>
);`}
        </CodeSnippet>
        <p>
          Please refer the <Link href="/theme-provider">{`<ThemeProvider />`}</Link> documentation for more details.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.stylishComponents.id} level={4}>
          {sections.stylishComponents.title}
        </SectionHeading>
        <p>
          <strong className="font-semibold">Stylish</strong> components are nothing but enhanced React Native components with added properties called <InlineCode>styleNamespace</InlineCode>(optional) &amp; <InlineCode>StyleNames</InlineCode>.
          Property <InlineCode>styleNames</InlineCode> accepts the eligible styles for the component which are defined in the theme.
          Property <InlineCode>styleNamespace</InlineCode> is optional, and use only when you need to override the default namespaces.
        </p>
        <CodeSnippet>
          {`import React from 'react';
import Stylo from 'react-native-stylo';

import { TImageStyle, TTextStyle, TTouchableStyle, TViewStyle } from '../themes/types';

const Home = () => (
  <Stylo.View<TViewStyle> styleNames={['Screen']}>
    <Stylo.View<TViewStyle> styleNames={['Screen.Header', 'Flex.Column', 'Flex.AlignItems.Center', 'Flex.JustifyContent.Center', 'Padding']}>
      <Stylo.Text<TTextStyle> styleNames={['H1', 'Align.Center']}>
        React Native Stylo
      </Stylo.Text>
      <Stylo.Text<TTextStyle> styleNames={['Align.Center']}>
        Highly composable & scalable themes
      </Stylo.Text>
    </Stylo.View>
    <Stylo.View<TViewStyle> styleNames={['Screen.Body']}>
      <Stylo.View<TViewStyle> styleNames={['List', 'Border', 'Border.Radius', 'Border.Color.Grey2']}>
        <Stylo.TouchableOpacity<TTouchableStyle> styleNames={['List.Item', 'Border.Bottom']} onPress={() => /*some action */}>
          <Stylo.View<TViewStyle> styleNames={['List.Item.Left']}>
            <Stylo.Image<TImageStyle> styleNames={['Avatar', 'Avatar.Size.Small']} source={...} />
          </Stylo.View>
          <Stylo.View<TViewStyle> styleNames={['List.Item.Body']}>
            <Stylo.Text<TTextStyle>>
              Strongly typed & intellisense friendly styles
            </Stylo.Text>
          </Stylo.View>
        </Stylo.TouchableOpacity>
        <Stylo.TouchableOpacity<TTouchableStyle> styleNames={['List.Item', 'Border.Bottom']} onPress={() => /*some action */}>
          <Stylo.View<TViewStyle> styleNames={['List.Item.Left']}>
            <Stylo.Image<TImageStyle> styleNames={['Avatar', 'Avatar.Size.Small']} source={...} />
          </Stylo.View>
          <Stylo.View<TViewStyle> styleNames={['List.Item.Body']}>
            <Stylo.Text<TTextStyle>>
              Infinitely scalable
            </Stylo.Text>
          </Stylo.View>
        </Stylo.TouchableOpacity>
      </Stylo.View>
    </Stylo.View>
  </Stylo.View>
);

export default Home;`}
        </CodeSnippet>
        <p>
          Please refer the <Link href="/stylish">Stylish</Link> documentation for more details.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.stylers.id} level={4}>
          {sections.stylers.title}
        </SectionHeading>
        <p>
          <strong className="font-semibold">Stylers</strong> are styling hooks which are used to define the styles for the components.
          Use these stylers in case you like to use the core React Native components instead of {`Stylo's`} stylish components.
          The styler hooks accept two arguments <InlineCode>styleNames</InlineCode> &amp <InlineCode>styleNamespace</InlineCode>(optional).;
          First argument <InlineCode>styleNames</InlineCode> accepts the eligible styles for the component which are defined in the theme.
          Second argument <InlineCode>styleNamespace</InlineCode> is optional, and use only when you need to override the default namespaces.
        </p>
        <CodeSnippet>
          {`import React, { useRef } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useImageStyles, useTextStyles, useTouchableStyles, useViewStyles } from 'react-native-stylo';

import { TImageStyle, TTextStyle, TTouchableStyle, TViewStyle } from '../themes/types';

const Home = () => {
  const styles = useRef({
    screen: useViewStyles<TViewStyle>(['Screen']),
    screenHeader: useViewStyles<TViewStyle>(['Screen.Header', 'Flex.Column', 'Flex.AlignItems.Center', 'Flex.JustifyContent.Center', 'Padding']),
    screenBody: useViewStyles<TViewStyle>(['Screen.Body']),
    screenFooter: useViewStyles<TViewStyle>(['Screen.Footer']),
    screenTitle: useTextStyles<TTextStyle>(['H1', 'Align.Center']),
    screenSubTitle: useTextStyles<TTextStyle>(['Align.Center']),
    list: useViewStyles<TViewStyle>(['List', 'Border', 'Border.Radius', 'Border.Color.Grey2']),
    listItem: useTouchableStyles<TTouchableStyle>(['List.Item', 'Border.Bottom']),
    listLastItem: useTouchableStyles<TTouchableStyle>(['List.Item']),
    listItemLeft: useViewStyles<TViewStyle>(['List.Item.Left']),
    listItemBody: useViewStyles<TViewStyle>(['List.Item.Body']),
    listItemAvatar: useImageStyles<TImageStyle>(['Avatar', 'Avatar.Size.Small']),
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
        <p>
          Please refer the <Link href="/stylers">Stylers</Link> documentation for more details.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.variables.id} level={4}>
          {sections.variables.title}
        </SectionHeading>
        <p>
          Variables are the core configuration values which are used to define the themes. Like, colors, paddings, margins etc.
          <strong className="font-semibold">useVariables()</strong> hook is used to access the theme configuration values to create your own custom page specific styles.
        </p>
        <CodeSnippet>
          {`import { Text, View } from 'react-native';
import { useVariables } from 'react-native-stylo';

import { TVariables } from '../themes/types';

const ComponentA = () => {
  const [paddingLarge, borderRadius, colorPink, colorWhite] = useVariables<TVariables>(['Padding.Large', 'Border.Radius', 'Color.Pink', 'Color.White']);
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
        <p>
          Please refer the <Link href="/use-variables">useVariables()</Link> documentation for more details.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.tightlyCouplingStyles.id} level={4}>
          {sections.tightlyCouplingStyles.title}
        </SectionHeading>
        <p>
          To avoid passing the style types each time, you can tightly couple the types to the <strong className="font-semibold">Stylish</strong> components &amp; <strong className="font-semibold">Stylers</strong> easily.
          Simply create wrapper components &amp; hooks which will internally pass the desired style type and then use these components &amp; hooks without need to pass the style types.
        </p>
        <p>
          <strong className="font-semibold">Text.tsx</strong>
        </p>
        <CodeSnippet>
          {`import React from 'react';
import { Text as StyloText, TTextProps } from 'react-native-stylo';

import { TTextStyle } from '../themes/types';

const View: React.FC<TTextProps<TTextStyle>> = props => <StyloText {...props} />;

export default Text;
`}
        </CodeSnippet>
        <p>
          <strong className="font-semibold">useTextStyles.ts</strong>
        </p>
        <CodeSnippet>
          {`import { useTextStyles as useStyloTextStyles } from 'react-native-stylo';

import { TTextStyle } from '../themes/types';

const useTextStyles = (
  styleNames: TTextStyle[] | undefined,
  styleNamespace?: string,
) => useStyloTextStyles<TTextStyle>(styleNames, styleNamespace);

export default useTextStyles;
`}
        </CodeSnippet>
        <p>
          <strong className="font-semibold">ComponentA.tsx</strong>
        </p>
        <CodeSnippet>
{`import Text from '../stylish/Text';

const ComponentA = () => (
  <Text styleNames={['H1', 'Bold', 'Align.Center']}>
    {...}
  </Text>
);

OR

import useTextStyles from '../stylish/useTextStyles';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      text: useTextStyles(['H1', 'Bold', 'Align.Center']),
    }),
  ).current;

  return (
    <Text style={styles.text}>
      {...}
    </Text>
  );
};`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.styleNamesSequence.id} level={4}>
          {sections.styleNamesSequence.title}
        </SectionHeading>
        <p>
          The sequence of the <InlineCode>styleNames</InlineCode> does matter.
          Similar to the React {`Native's`} <InlineCode>StyleSheet.create()</InlineCode> API, the later styles of styleNames override the styles of previous styleNames.
          As shown below, the <InlineCode>{`'Padding.Left.Large'`}</InlineCode> will override the left padding applied by <InlineCode>Padding</InlineCode> of the View component.
        </p>
        <CodeSnippet>
          {`<View<TViewStyle> styleNames={['Padding', 'Padding.Left.Large', 'Border.Radius', 'BackgroundColor.Primary']}>
  {...}
</View>`}
        </CodeSnippet>
      </section>
    </article>
  </Layout>
);

export default CoreConcept;
