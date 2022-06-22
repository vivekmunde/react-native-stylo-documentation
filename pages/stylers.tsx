import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import OptionalTag from '../components/optional-tag';
import Paragraph from '../components/paragraph';
import RequiredTag from '../components/required-tag';
import SectionHeading from '../components/section-heading';

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>Stylers | React Native Stylo</title>
    </Head>
    <article>
      <ArticleHeading>Stylers</ArticleHeading>
      <Paragraph>
        <strong className="font-semibold">Stylers</strong> are the styling hooks. Stylers accept <Link href="/theme#style-name">StyleNames</Link> &amp; optional <Link href="/theme#namespace">StyleNamespace</Link> as its arguments &amp; return the style object.
        They read the styles defined for the <InlineCode>StyleNames</InlineCode> under the <InlineCode>StyleNamespace</InlineCode> in the theme, combines these styles into one &amp; returns the final style, a standard React Native style object.
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

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="styler-arguments" level={4}>
          Styler arguments
        </SectionHeading>
        <Paragraph>
          All stylers accept two arguments.
        </Paragraph>
        <section>
          <h5 className="text-lg">
            <InlineCode>styleNames</InlineCode> <RequiredTag />
          </h5>
          <Paragraph>
            The <Link href="/theme#style-name">StyleNames</Link> which define the styles.
          </Paragraph>
        </section>
        <section>
          <h5 className="text-lg">
            <InlineCode>styleNamespace</InlineCode> <OptionalTag />
          </h5>
          <Paragraph>
            The <Link href="/theme#namespace">Namespace</Link> to be used which holds the style definitions for the <InlineCode>StyleNames</InlineCode> supplied to the hook.
            <br />
            If not provided then the styler hook uses a matching default namespace from the collection of {`it's`} <Link href="/theme#default-namespaces">Default Namespaces</Link>.
          </Paragraph>
        </section>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="use-image-background-styles" level={4}>
          <InlineCode>useImageBackgroundStyles()</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`function useImageBackgroundStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'ImageBackgroundStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React, { useRef } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
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
          {`function useImageStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ImageStyle> {
  return useStyles<ImageStyle, T>({
    styleNamespace: styleNamespace ?? 'ImageStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
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
          {`function useSafeAreaViewStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'SafeAreaViewStylesStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
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
          {`function useScrollViewStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'ScrollViewStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
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
          {`function useScrollViewContentContainerStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'ScrollViewContentContainerStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
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
          {`function useTextInputStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<TextStyle> {
  return useStyles<TextStyle, T>({
    styleNamespace: styleNamespace ?? 'TextInputStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
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
          {`function useTextStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<TextStyle> {
  return useStyles<TextStyle, T>({
    styleNamespace: styleNamespace ?? 'TextStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
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
          {`function useTouchableStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'TouchableStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
        <Paragraph>
          The <InlineCode>useTouchableStyles()</InlineCode> hook can be used for <InlineCode>TouchableOpacity</InlineCode>, <InlineCode>TouchableHighlight</InlineCode> &amp; <InlineCode>Pressable</InlineCode> components;
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
          {`function useViewStyles<TStyleName extends string, TStyleNamespace extends string>(
  styleNames: TStyleName[],
  styleNamespace?: TStyleNamespace,
): StyleProp<ViewStyle> {
  return useStyles<ViewStyle, T>({
    styleNamespace: styleNamespace ?? 'ViewStyles',
    styleNames,
  });
}`}
        </CodeSnippet>
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
  </Layout>
);

export default CoreConcept;
