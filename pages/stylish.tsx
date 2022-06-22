import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Blockquote from '../components/blockquote';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import OptionalTag from '../components/optional-tag';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';

const Stylish: React.FC = () => (
  <Layout>
    <Head>
      <title>Stylish | React Native Stylo</title>
    </Head>
    <article>
      <ArticleHeading>Stylish</ArticleHeading>
      <Paragraph>
        <strong className="font-semibold">Stylish</strong> components are nothing but enhanced <ExternalLink href="https://reactnative.dev/docs/components-and-apis">React Native components</ExternalLink>.
        Stylo adds two extra properties <InlineCode>styleNames</InlineCode>(ref: <Link href="/theme/style-name">StyleName</Link>) &amp; <InlineCode>styleNamespace</InlineCode>(ref: <Link href="/theme/namespace">StyleNamespace</Link>) to the React Native components, on top of core properties provided by React Native.
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
      <Blockquote>
        All stylish components use a matching <Link href="/stylers">Styler</Link> hook internally to create the style object from <InlineCode>styleNames</InlineCode> &amp; <InlineCode>styleNamespace</InlineCode> supplied to them as props.
      </Blockquote>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="stylish-props" level={4}>
          Stylish props
        </SectionHeading>
        <Paragraph>
          All stylish components have two extra props other than the default props provided by React Native.
          Both of these props are purposefully made optional, so that these Stylish components can still be used as plain React Native components.
        </Paragraph>
        <section>
          <h5 className="text-lg">
            <InlineCode>styleNames</InlineCode> <OptionalTag />
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
            The <Link href="/theme#namespace">StyleNamespace</Link> to be used which holds the style definitions for the <InlineCode>StyleNames</InlineCode> supplied to the hook.
            <br />
            If not provided then the styler hook uses a matching default namespace from the collection of {`it's`} <Link href="/theme#default-namespaces">Default StyleNamespaces</Link>.
          </Paragraph>
        </section>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="image-background" level={4}>
          <InlineCode>{`<ImageBackground />`}</InlineCode>
        </SectionHeading>
        <Paragraph>
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TImageBackgroundProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.ImageBackgroundProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>ImageBackgroundStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TImageProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.ImageProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>ImageStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TSafeAreaViewProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.ViewProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>SafeAreaViewStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TScrollViewProps<
  TScrollViewStyleName extends string,
  TScrollViewStyleNamespace extends string,
  TScrollViewContentContainerStyleName extends string,
  TScrollViewContentContainerStyleNamespace extends string
> = ReactNative.ViewProps & {
  styleNamespace?: TScrollViewStyleNamespace;
  styleNames?: TScrollViewStyleName[];
  contentContainerStyleNamespace?: TScrollViewStyleNamespace;
  contentContainerStyleNames?: TScrollViewStyleName[];
}`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespaces:</strong> <InlineCode>ScrollViewStyles</InlineCode> &amp; <InlineCode>ScrollViewContentContainerStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TTextInputProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.TextInputProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>TextInputStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TTextProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.TextProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>TextStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TPressableProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.PressableProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>TouchableStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TTouchableHighlightProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.TouchableHighlightProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>TouchableStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TTouchableOpacityProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.TouchableOpacityProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>TouchableStyles</InlineCode>
        </Paragraph>
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
          <strong className="font-semibold">Props type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TViewProps<TStyleName extends string, TStyleNamespace extends string> 
 = ReactNative.ViewProps & { styleNamespace?: TStyleNamespace; styleNames?: TStyleName[]; }`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Default StyleNamespace:</strong> <InlineCode>ViewStyles</InlineCode>
        </Paragraph>
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

      <Paragraph>
        <i>Note: New Stylish components for remaining React Native components will be added soon.</i>
      </Paragraph>
    </article>
  </Layout>
);

export default Stylish;
