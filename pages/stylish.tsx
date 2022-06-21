import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import OptionalTag from '../components/optional-tag';
import Paragraph from '../components/paragraph';
import RequiredTag from '../components/required-tag';
import SectionHeading from '../components/section-heading';

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>Stylish | React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <article>
      <ArticleHeading>Stylish</ArticleHeading>
      <Paragraph>
        <strong className="font-semibold">Stylish</strong> components are nothing but enhanced <ExternalLink href="https://reactnative.dev/docs/components-and-apis">React Native components</ExternalLink>.
        Stylo adds two extra properties <InlineCode>styleNames</InlineCode>(ref: <Link href="/theme/style-name">StyleName</Link>) &amp; <InlineCode>styleNamespace</InlineCode>(ref: <Link href="/theme/namespace">Namespace</Link>) to the React Native components, on top of core properties provided by React Native.
        Stylo does not make any behavioral changes to these enhanced stylish components and keeps them as pure as they are defined by React Native.
        Stylish component reads the styles defined for the <InlineCode>styleNames</InlineCode> under the <InlineCode>styleNamespace</InlineCode> in the theme, combines these styles into one to create a standard React Native style object &amp; applies this style to the React Native component.
      </Paragraph>
      <Paragraph>
        {`Stylo's`} objective is to provide an enhanced Stylish component against for React Native component.
        This way it plans to cover all the React Native components.
      </Paragraph>
      <Paragraph>
        Each React Native component has its own style type.
        E.g. <InlineCode>Text</InlineCode> component needs style object of type <InlineCode>{`StyleProp<TextStyle>`}</InlineCode>,  <InlineCode>View</InlineCode> component needs style object of type <InlineCode>{`StyleProp<ViewStyle>`}</InlineCode> etc.
        So each stylish component is tightly coupled with a React Native component which applies the style object specific to that component.
      </Paragraph>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="stylish-props" level={4}>
          Stylish props
        </SectionHeading>
        <Paragraph>
          All stylish components have two extra props other than the default props provided by React Native.
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
        <SectionHeading id="image-background" level={4}>
          <InlineCode>{`<ImageBackground />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { ImageBackground as ReactNativeImageBackground, ImageBackgroundProps } from 'react-native';
import { useImageBackgroundStyles } from '../stylers';

export type TImageBackgroundProps<TStyleName extends string, TStyleNamespace extends string> = ImageBackgroundProps &
  {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

const ImageBackground = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TImageBackgroundProps<TStyleName, TStyleNamespace>) => {
  const imageBackgroundStyle = useImageBackgroundStyles<T>(
    styleNames,
    styleNamespace ?? 'ImageBackgroundStyles',
  );
  return <ReactNativeImageBackground {...props} style={[imageBackgroundStyle, style]} />;
};

export default ImageBackground;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { ImageBackground } from 'react-native-stylo';
import { TImageBackgroundStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <ImageBackground<TImageBackgroundStyle> styleNames={['BackgroundColor.Grey2']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="image" level={4}>
          <InlineCode>{`<Image />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { Image as ReactNativeImage, ImageProps } from 'react-native';
import { useImageStyles } from '../stylers';

export type TImageProps<TStyleName extends string, TStyleNamespace extends string> = ImageProps &
  {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

const Image = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TImageProps<TStyleName, TStyleNamespace>) => {
  const imageStyle = useImageStyles<T>(
    styleNames,
    styleNamespace ?? 'ImageStyles',
  );
  return <ReactNativeImage {...props} style={[imageStyle, style]} />;
};

export default Image;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { Image } from 'react-native-stylo';
import { TImageStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <Image<TImageStyle> styleNames={['Avatar', 'Avatar.Square', 'Avatar.Large']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="safe-area-view" level={4}>
          <InlineCode>{`<SafeAreaView />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { SafeAreaView as ReactNativeSafeAreaView, ViewProps } from 'react-native';
import { useSafeAreaViewStyles } from '../stylers';

export type TSafeAreaViewProps<TStyleName extends string, TStyleNamespace extends string> = ViewProps &
  {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

const SafeAreaView = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TSafeAreaViewProps<TStyleName, TStyleNamespace>) => {
  const safeAreaViewStyle = useSafeAreaViewStyles<T>(
    styleNames,
    styleNamespace ?? 'SafeAreaViewStyles',
  );
  return <ReactNativeSafeAreaView {...props} style={[safeAreaViewStyle, style]} />;
};

export default SafeAreaView;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { SafeAreaView } from 'react-native-stylo';
import { TSafeAreaViewStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <SafeAreaView<TSafeAreaViewStyle> styleNames={['BackgroundColor.Body']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="scroll-view" level={4}>
          <InlineCode>{`<ScrollView />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { ScrollView as ReactNativeScrollView, ScrollViewProps } from 'react-native';
import {
  TStylesProps,
  useScrollViewStyles,
  useScrollViewContentContainerStyles,
} from '../stylers';

export type TScrollViewProps<
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
  TScrollViewStyleNamespace extends string,
  TScrollViewContentContainerStyleNamespace extends string,
> = ScrollViewProps & {
  styleNamespace?: TScrollViewStyleNamespace | undefined;
  styleNames?: TScrollViewStyle[] | undefined;
  contentContainerStyleNamespace?: TScrollViewContentContainerStyleNamespace | undefined;
  contentContainerStyleNames?: TScrollViewContentContainerStyle[] | undefined;
};

const ScrollView = <
  TScrollViewStyle extends string,
  TScrollViewContentContainerStyle extends string,
  TScrollViewStyleNamespace extends string,
  TScrollViewContentContainerStyleNamespace extends string,
>({
  styleNamespace,
  styleNames,
  style,
  contentContainerStyleNamespace,
  contentContainerStyleNames,
  contentContainerStyle,
  ...props
}: TScrollViewProps<TScrollViewStyle, TScrollViewContentContainerStyle, TScrollViewStyleNamespace, TScrollViewContentContainerStyleNamespace>) => {
  const scrollViewStyle = useScrollViewStyles<TScrollViewStyle>(
    styleNames,
    styleNamespace ?? 'ScrollViewStyles',
  );

  const scrollViewContentContainerStyle =
    useScrollViewContentContainerStyles<TScrollViewContentContainerStyle>(
      contentContainerStyleNames,
      contentContainerStyleNamespace ?? 'ScrollViewContentContainerStyles',
    );

  return (
    <ReactNativeScrollView
      {...props}
      style={[scrollViewStyle, style]}
      contentContainerStyle={[
        scrollViewContentContainerStyle,
        contentContainerStyle,
      ]}
    />
  );
};

export default ScrollView;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { ScrollView } from 'react-native-stylo';
import { TScrollViewStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <ScrollView<TScrollViewStyle, TScrollViewContentContainerStyle>
      styleNames={['BackgroundColor.Grey1']}
      contentContainerStyleNames={['Padding']}
      {...otherProps}
    />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="text-input" level={4}>
          <InlineCode>{`<TextInput />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { TextInput as ReactNativeTextInput, TextInputProps } from 'react-native';
import { useTextInputStyles } from '../stylers';

export type TTextInputProps<TStyleName extends string, TStyleNamespace extends string> = TextInputProps &
  {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

const TextInput = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTextInputProps<TStyleName, TStyleNamespace>) => {
  const textInputStyle = useTextInputStyles<T>(
    styleNames,
    styleNamespace ?? 'TextInputStyles',
  );
  return <ReactNativeTextInput {...props} style={[textInputStyle, style]} />;
};

export default TextInput;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { TextInput } from 'react-native-stylo';
import { TTextInputStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <TextInput<TTextInputStyle> styleNames={['Border', 'Border.Color.Primary']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="text" level={4}>
          <InlineCode>{`<Text />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { Text as ReactNativeText, TextProps } from 'react-native';
import { useTextStyles } from '../stylers';

export type TTextProps<TStyleName extends string, TStyleNamespace extends string> = TextProps &
  {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

const Text = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTextProps<TStyleName, TStyleNamespace>) => {
  const textStyle = useTextStyles<T>(
    styleNames,
    styleNamespace ?? 'TextStyles',
  );
  return <ReactNativeText {...props} style={[textStyle, style]} />;
};

export default Text;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { Text } from 'react-native-stylo';
import { TTextStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <Text<TTextStyle> styleNames={['Border', 'Border.Color.Primary']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="pressable" level={4}>
          <InlineCode>{`<Pressable />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import {
  Pressable as RNPressable,
  PressableProps,
  StyleProp,
  PressableStateCallbackType,
  ViewStyle,
} from 'react-native';
import { TStylesProps, useTouchableStyles } from '../stylers';

export type TPressableProps<TStyleName extends string, TStyleNamespace extends string> = PressableProps &
  {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

const Pressable = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TPressableProps<TStyleName extends string, TStyleNamespace extends string>) => {
  const viewStyle = useTouchableStyles<T>(
    styleNames,
    styleNamespace ?? 'TouchableStyles',
  );

  const pressableFunctionStyle =
    typeof style === 'function'
      ? (args: PressableStateCallbackType) => style(args)
      : undefined;

  return (
    <RNPressable
      {...props}
      style={[
        viewStyle,
        pressableFunctionStyle !== undefined
          ? (pressableFunctionStyle as StyleProp<ViewStyle>)
          : (style as StyleProp<ViewStyle>),
      ]}
    />
  );
};

export default Pressable;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { Pressable } from 'react-native-stylo';
import { TTouchableStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <Pressable<TTouchableStyle> styleNames={['Button', 'Button.Large', 'BackgroundColor.Primary']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="touchable-highlight" level={4}>
          <InlineCode>{`<TouchableHighlight />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableHighlightProps,
  ViewStyle,
} from 'react-native';
import { TStylesProps, useTouchableStyles } from '../stylers';

export type TTouchableHighlightProps<TStyleName extends string, TStyleNamespace extends string> =
  TouchableHighlightProps & {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

export const TouchableHighlight = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTouchableHighlightProps<TStyleName extends string, TStyleNamespace extends string>) => {
  const viewStyle = useTouchableStyles<T>(
    styleNames,
    styleNamespace ?? 'TouchableStyles',
  );
  return <RNTouchableHighlight {...props} style={[viewStyle, style]} />;
};

export default TouchableHighlight;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { TouchableHighlight } from 'react-native-stylo';
import { TTouchableStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <TouchableHighlight<TTouchableStyle> styleNames={['Button', 'Button.Large', 'BackgroundColor.Primary']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="touchable-opacity" level={4}>
          <InlineCode>{`<TouchableOpacity />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { TStylesProps, useTouchableStyles } from '../stylers';

export type TTouchableOpacityProps<TStyleName extends string, TStyleNamespace extends string> = TouchableOpacityProps &
  {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

const TouchableOpacity = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TTouchableOpacityProps<TStyleName extends string, TStyleNamespace extends string>) => {
  const viewStyle = useTouchableStyles<T>(
    styleNames,
    styleNamespace ?? 'TouchableStyles',
  );
  return <RNTouchableOpacity {...props} style={[viewStyle, style]} />;
};

export default TouchableOpacity;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { TouchableOpacity } from 'react-native-stylo';
import { TTouchableStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <TouchableOpacity<TTouchableStyle> styleNames={['Button', 'Button.Large', 'BackgroundColor.Primary']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="view" level={4}>
          <InlineCode>{`<View />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import {
  View as RNView,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { TStylesProps, useViewStyles } from '../stylers';

export type TViewProps<TStyleName extends string, TStyleNamespace extends string> = ViewProps &
  {
    styleNamespace?: TStyleNamespace;
    styleNames?: TStyleName[];
  };

const View = <TStyleName extends string, TStyleNamespace extends string>({
  styleNamespace,
  styleNames,
  style,
  ...props
}: TViewProps<TStyleName extends string, TStyleNamespace extends string>) => {
  const viewStyle = useViewStyles<T>(
    styleNames,
    styleNamespace ?? 'ViewStyles',
  );
  return <RNView {...props} style={[viewStyle, style]} />;
};

export default View;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Usage</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { View } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const ComponentA = () => {
  return (
    <View<TViewStyle> styleNames={['Padding', 'Border', 'Border.Radius.Large', 'Border.Color.Primary2', 'BackgroundColor.Primary1']} {...otherProps} />
  );
}`}
        </CodeSnippet>
      </section>
    </article>
  </Layout>
);

export default CoreConcept;
