import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Blockquote from '../components/blockquote';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';
import RequiredTag from '../components/required-tag';
import SectionHeading from '../components/section-heading';

const Stylers: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Stylers | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Stylers</ArticleHeading>
          <Paragraph>
            <strong className="font-semibold">Stylers</strong> are the styling hooks. Stylers accept <Link href="/theme#style-name">StyleNames</Link> as its argument &amp; return the style object.
            They read the styles defined for the <InlineCode>StyleNames</InlineCode> in the theme, combines these styles into one &amp; returns the final style, a standard React Native style object.
          </Paragraph>
          <Paragraph>
            {`Stylo's`} objective is to provide a styling hook for each React Native component.
            This way it plans to cover the styling requirements of all the components.
          </Paragraph>
          <Paragraph>
            Each React Native component has its own style type.
            E.g. <InlineCode>Text</InlineCode> component needs style object of type <InlineCode>{`StyleProp<TextStyle>`}</InlineCode>,  <InlineCode>View</InlineCode> component needs style object of type <InlineCode>{`StyleProp<ViewStyle>`}</InlineCode> etc.
            So each styler is tightly coupled with a React Native component which returns a style object specific to that component.
          </Paragraph>
          <Blockquote>
            All styler hooks use the <Link href="/use-styles">useStyles()</Link> hook internally to create &amp; return the style object from <InlineCode>styleNames</InlineCode> supplied to them as an argument.
            A rule of thumb, prefer <Link href="/stylish">Stylish</Link> components over Stylers, use Styler hooks in cases where the use of <Link href="/stylish">Stylish</Link> components is not possible.
          </Blockquote>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="styler-arguments" level={4}>
              Styler arguments
            </SectionHeading>
            <Paragraph>
              All stylers accept one argument.
            </Paragraph>
            <section>
              <h5 className="text-lg">
                <InlineCode>styleNames</InlineCode> <RequiredTag />
              </h5>
              <Paragraph>
                The <Link href="/theme#style-name">StyleNames</Link> which define the styles.
              </Paragraph>
            </section>
          </section>

          <Blockquote>
            All the code samples below use <Link href="/stylo-theme">Stylo theme</Link>.
            The code samples below do not display the pictorial outcomes.
            Also, the code samples below are not tightly coupled to the <Link href="/theme#style-name">StyleName</Link> types.
            If you have not yet gone through the tight coupling of style types then you can read the document <Link href="/tight-coupling">Tightly coupled</Link>.
          </Blockquote>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-icon-styles" level={4}>
              <InlineCode>useIconStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`function useIconStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<TextStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>IconStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useIconStyles } from 'react-native-stylo';
import { TIconStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      iconStyle: useIconStyles<TIconStyle>(['Color.Primary', 'Large']),
    })
  ).current;

  return (
    <AntDesign style={styles.iconStyle} name="home" {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-image-background-styles" level={4}>
              <InlineCode>useImageBackgroundStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`function useImageBackgroundStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>ImageBackgroundStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useImageBackgroundStyles } from 'react-native-stylo';
import { TImageBackgroundStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      imageBackgroundStyle: useImageBackgroundStyles<TImageBackgroundStyle>(['BackgroundColor.Grey2']),
    })
  ).current;

  return (
    <ImageBackground style={styles.imageBackgroundStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-image-styles" level={4}>
              <InlineCode>useImageStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`function useImageStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ImageStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>ImageStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useImageStyles } from 'react-native-stylo';
import { TImageStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      imageStyle: useImageStyles<TImageStyle>(['Avatar', 'Avatar.Square', 'Avatar.Large']),
    })
  ).current;

  return (
    <Image style={styles.imageStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-safe-area-view-styles" level={4}>
              <InlineCode>useSafeAreaViewStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`function useSafeAreaViewStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>SafeAreaViewStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native';
import { useSafeAreaViewStyles } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      safeAreaViewStyle: useSafeAreaViewStyles<TViewStyle>(['BackgroundColor.Body']),
    })
  ).current;

  return (
    <SafeAreaView style={styles.safeAreaViewStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-scroll-view-styles" level={4}>
              <InlineCode>useScrollViewStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`export function useScrollViewStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>ScrollViewStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useScrollViewStyles } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      scrollViewStyle: useScrollViewStyles<TViewStyle>(['Padding', 'BackgroundColor.Grey1']),
    })
  ).current;

  return (
    <ScrollView style={styles.scrollViewStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-scroll-view-content-container-styles" level={4}>
              <InlineCode>useScrollViewContentContainerStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`export function useScrollViewContentContainerStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>ScrollViewContentContainerStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useScrollViewStyles, useScrollViewContentContainerStyles } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      scrollViewStyle: useScrollViewStyles<TViewStyle>(['BackgroundColor.Grey1']),
      scrollViewContentContainerStyle: useScrollViewContentContainerStyles<TViewStyle>(['Padding']),
    })
  ).current;

  return (
    <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.scrollViewContentContainerStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-text-input-styles" level={4}>
              <InlineCode>useTextInputStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`function useImageStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<TextStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>TextInputStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTextInputStyles } from 'react-native-stylo';
import { TTextInputStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      textInputStyle: useTextInputStyles<TTextInputStyle>(['Border', 'Border.Color.Primary']),
    })
  ).current;

  return (
    <TextInput style={styles.textInputStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-text-styles" level={4}>
              <InlineCode>useTextStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`function useTextStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<TextStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>TextStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTextStyles } from 'react-native-stylo';
import { TTextStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      textStyle: useTextStyles<TTextStyle>(['H1', 'Bold', 'Color.Primary']),
    })
  ).current;

  return (
    <Text style={styles.textStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-touchable-styles" level={4}>
              <InlineCode>useTouchableStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`function useTouchableStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>TouchableStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              The <InlineCode>useTouchableStyles()</InlineCode> hook can be used for <InlineCode>TouchableOpacity</InlineCode>, <InlineCode>TouchableHighlight</InlineCode> &amp; <InlineCode>Pressable</InlineCode> component.
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTouchableStyles } from 'react-native-stylo';
import { TTouchableStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      buttonStyle: useTouchableStyles<TTouchableStyle>(['Button', 'Button.Large', 'BackgroundColor.Primary']),
    })
  ).current;

  return (
    <TouchableOpacity style={styles.buttonStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="use-view-styles" level={4}>
              <InlineCode>useViewStyles()</InlineCode>
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`function useViewStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleNamespace:</strong> <InlineCode>ViewStyles</InlineCode>
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { useViewStyles } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      cardStyle: useViewStyles<TViewStyle>(['Padding', 'Border', 'Border.Radius.Large', 'Border.Color.Primary2', 'BackgroundColor.Primary1']),
    })
  ).current;

  return (
    <View style={styles.cardStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>

          <Paragraph>
            <i>Note: New Stylers for remaining React Native components will be added soon.</i>
          </Paragraph>
        </article>
      </React.Fragment>
    )}
  />
);

export default Stylers;
