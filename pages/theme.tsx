import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';

const Theme: React.FC = () => (
  <Layout>
    <Head>
      <title>Theme | React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <article>
      <ArticleHeading>Theme</ArticleHeading>
      <Paragraph>
        <strong className="font-semibold">Theme</strong> at core is nothing but a collection of styles defined using the <ExternalLink href="https://reactnative.dev/docs/stylesheet">React {`Native's`} <InlineCode>StyleSheet.create()</InlineCode> API</ExternalLink>.
        The themes are defined inside the app and are completely owned by the app, not by the Stylo library.
        Stylo theme is based on two key concepts: StyleNames &amp; Namespaces.
      </Paragraph>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="style-name" level={4}>
          StyleName
        </SectionHeading>
        <Paragraph>
          StyleName is the name of a standard style definition provided to the <InlineCode>StyleSheet.create</InlineCode> API.
          A unified collection of StyleNames &amp; their style definitions results into a Theme.
          Any suitable naming convention can be used for the StyleNames.
          A common good practice is to group the style definitions per React Native component.
        </Paragraph>
        <Paragraph>
          In the code snippet below <InlineCode>{`'Align.Center'`}</InlineCode>, <InlineCode>H1</InlineCode>, <InlineCode>{`'Size.Small'`}</InlineCode> are the style names.
        </Paragraph>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`type TTextStyle = 'Align.Center' | 'Align.Right' | 'H1' | 'H2' | 'H3' | 'Size.Small' | 'Size.Tiny';
type TInputTextStyle = 'Align.Center' | 'Align.Right' | 'Size.Small' | 'Size.Tiny';`}
        </CodeSnippet>
        <Paragraph>
          The document explains the significance &amp; usage of the type definitions in the theme in the later section.
          The StyleName type definitions are passed to &amp; used by <Link href="/stylers">Styler</Link> hooks &amp; <Link href="/stylish">Stylish</Link> components.
          They are not directly used in the <InlineCode>StyleSheet.create()</InlineCode> API.
        </Paragraph>
        <Paragraph>
          <strong className="font-semibold">Styles defined using the StyleNames</strong>
        </Paragraph>
        <CodeSnippet>
          {`const TextStyles = StyleSheet.create({
  Default: { color: '#000000', fontSize: 16, fontWeight: '400', lineHeight: 24 },
  'Align.Center': { textAlign: 'center' },
  'Align.Right': { textAlign: 'right' },
  H1: { fontSize: 32, fontWeight: '400', lineHeight: 40, marginBottom: 16 },
  H2: { fontSize: 28, fontWeight: '400', lineHeight: 36, marginBottom: 16 },
  H3: { fontSize: 24, fontWeight: '400', lineHeight: 32, marginBottom: 8 },
  'Size.Small': { fontSize: 12, lineHeight: 18 },
  'Size.Tiny': { fontSize: 8, lineHeight: 14 },
});

const TextInputStyles = StyleSheet.create({
  Default: { borderRadius: 8, color: '#000000', fontSize: 16, paddingTop: 12, paddingBottom: 12, paddingLeft: 8, paddingRight: 8 },
  'Align.Center': { textAlign: 'center' },
  'Align.Right': { textAlign: 'right' },
  'Size.Small': { fontSize: 12, paddingTop: 8, paddingBottom: 8 },
  'Size.Large': { fontSize: 24, paddingTop: 16, paddingBottom: 16, paddingLeft: 10, paddingRight: 10 },
});`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="reserved-style-name" level={4}>
          Reserved StyleName <InlineCode>Default</InlineCode>
        </SectionHeading>
        <Paragraph>
          <InlineCode>Default</InlineCode> is a reserved StyleName.
          {`It's`} used for the core React Native components like Text, View, TextInput, Image etc.
          Stylo applies the styles defined under <InlineCode>Default</InlineCode> StyleName as a default style to the components.
        </Paragraph>
        <Paragraph>
          In the code snipper below, the style defined as <InlineCode>Default</InlineCode> will get applied by default to <InlineCode>Text</InlineCode> component.
        </Paragraph>
        <CodeSnippet>
          {`const TextStyles = StyleSheet.create({
  Default: { color: '#000000', fontSize: 16, fontWeight: '400', lineHeight: 24 },
  H1: { fontSize: 32, fontWeight: '400', lineHeight: 40, marginBottom: 16 },
  H2: { fontSize: 28, fontWeight: '400', lineHeight: 36, marginBottom: 16 },
  ...
});`}
        </CodeSnippet>

        <CodeSnippet>
          {`import { Text } from 'react-native-stylo';

const ComponentA = () => (
  <Text>React Native Stylo</Text>
);`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="namespace" level={4}>
          Namespace
        </SectionHeading>
        <Paragraph>
          Namespaces are used to organize the style definitions by logically grouping them together.
          Means, all style definitions for React {`Native's`} Text component can be grouped together under a namespace called <InlineCode>TextStyles</InlineCode>, likewise <InlineCode>ViewStyles</InlineCode>, <InlineCode>TouchableStyles</InlineCode>, <InlineCode>TextInputStyles</InlineCode> etc.
          This prevents collisions of the StyleName &amp; eventually the collisions of styles.
          For example, a StyleName <InlineCode>{`'Size.Small'`}</InlineCode> can exist for both Text &amp; View and can have different style definitions for each.
          So placing these different stye definitions with same StyleName <InlineCode>{`'Size.Small'`}</InlineCode> under separate namespaces <InlineCode>TextStyles</InlineCode> &amp; <InlineCode>ViewStyles</InlineCode> will avoid the collision or accidental overriding of style definitions.
        </Paragraph>
        <Paragraph>
          Stylo considers each React Native component as one Namespace.
        </Paragraph>
        <CodeSnippet>
          {`export type TStyleNamespace =
  | 'IconStyles'
  | 'ImageBackgroundStyles'
  | 'ImageStyles'
  | 'TextInputStyles'
  | 'TextStyles'
  | 'TouchableStyles'
  | 'ViewStyles';`}
        </CodeSnippet>
        <Paragraph>
          The styles are defined and assigned to these namespaces. And then are used to define a theme.
        </Paragraph>
        <CodeSnippet>
          {`const TextStyles = StyleSheet.create({ ... });
const IconStyles = StyleSheet.create({ ... });
const ImageBackgroundStyles = StyleSheet.create({ ... });
// & so on ...

const Theme = {
  TextStyles,
  IconStyles,
  ImageBackgroundStyles,
  ...
};`}
        </CodeSnippet>
        <Paragraph>
          The approach of <strong className="font-semibold">one namespace per React Native component</strong> makes it highly scalable &amp; easily manageable.
          New namespaces for remaining or new ReactNative components can be added without impacting existing onces.
          Stylo uses these namespaces by default.
        </Paragraph>
        <Paragraph>
          However, {`it's`} not mandatory for the apps to follow this naming convention.
          Apps can use any naming convention to define the Namespaces.
          If other naming convention is used, then just make sure to pass the correct namespace names to the <Link href="/stylers">Styler</Link> hooks &amp; <Link href="/stylish">Stylish</Link> components.
        </Paragraph>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="default-namespaces" level={4}>
          Default namespaces
        </SectionHeading>
        <Paragraph>
          Stylo provides default strongly typed Namespaces.
        </Paragraph>
        <CodeSnippet>
          {`export type TStyleNamespace =
  | 'IconStyles'
  | 'ImageBackgroundStyles'
  | 'ImageStyles'
  | 'KeyboardAvoidingViewStyles'
  | 'SafeAreaViewStyles'
  | 'ScrollViewStyles'
  | 'TextInputStyles'
  | 'TextStyles'
  | 'TouchableStyles'
  | 'ViewStyles';`}
        </CodeSnippet>
        <Paragraph><i><small>Note: New namespaces for remaining components will be added soon.</small></i></Paragraph>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="variables" level={4}>
          Variables
        </SectionHeading>
        <Paragraph>
          Variables are the core configuration values which are used to define the styles.
          Like, colors, paddings, margins etc.
          These variable definitions can look like below.
        </Paragraph>
        <Paragraph>
          <strong className="font-semibold">Type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`import { TBackgroundColor } from './background-colors';
import { TFontColor } from './font-colors';

export type TVariables = 'Color.Primary' | 'Color.Secondary' | 'Padding' | 'Padding.Small' | 'Padding.Large' | 'Border.Radius';`}
        </CodeSnippet>
        <Paragraph>
          The document explains the significance &amp; usage of the type definitions in the theme in the later section.
          The variables type definitions are passed to &amp; used by <Link href="/use-variables">useVariables()</Link> hook.
        </Paragraph>
        <Paragraph>
          <strong className="font-semibold">Variable values</strong>
        </Paragraph>
        <CodeSnippet>
          {`const variables = {
  'Color.Primary': '#000000',
  'Color.Secondary': '#888888',
  'Border.Radius': 6,
  Padding: 12,
  'Padding.Small': 8,
  'Padding.Large': 24,
};`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="type-definitions" level={4}>
          Type definitions
        </SectionHeading>
        <Paragraph>
          Thanks to <ExternalLink href="https://www.typescriptlang.org">TypeScript</ExternalLink>, the <InlineCode>StyleNames</InlineCode>, <InlineCode>Namespaces</InlineCode> &amp; <InlineCode>Variables</InlineCode> are strongly typed.
          The type definitions are passed to &amp; used by <Link href="/use-variables">useVariables()</Link> hook, <Link href="/stylers">Styler</Link> hooks &amp; <Link href="/stylish">Stylish</Link> components.
          This completely avoids accidental usage of wrong <InlineCode>StyleNames</InlineCode>, <InlineCode>Namespaces</InlineCode> &amp; <InlineCode>Variables</InlineCode>, out of the box.
          On top of that, the <InlineCode>StyleNames</InlineCode> &amp; <InlineCode>Namespaces</InlineCode> are strongly typed against each React Native component, like <InlineCode>View</InlineCode>, <InlineCode>Text</InlineCode>, <InlineCode>TouchableOpacity</InlineCode> etc.
          This adds an extra level of strong typing which forces to use only those values which are intended for a particular component.
        </Paragraph>
        <Paragraph>
          <strong className="font-semibold">Variables type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`type TFontColor = 'Color.Primary' | 'Color.Secondary' | 'Color.Info' | 'Color.Warning' | 'Color.Danger' | 'Color.Border' | 'Color.Grey1' | 'Color.Grey2' | 'Color.Grey1' | ... ;
type TBackgroundColor = 'BackgroundColor.Primary' | 'BackgroundColor.Secondary' | 'BackgroundColor.Info' | 'BackgroundColor.Warning' | 'BackgroundColor.Danger' | 'BackgroundColor.Grey1' | 'BackgroundColor.Grey2' | 'BackgroundColor.Grey1' | ... ;
type TPadding = 'Padding' | 'Padding.Small' | 'Padding.Large';
type TMargin = 'Margin' | 'Margin.Small' | 'Margin.Large';
type TBorder = 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large';
...

export type TVariables = TFontColor | TBackgroundColor | TPadding | TMargin | TBorder | ...;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">Namespaces type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`export type TStyleNamespace = 'IconStyles' | 'ImageBackgroundStyles' | 'ImageStyles' | 'KeyboardAvoidingViewStyles' | 'SafeAreaViewStyles' | 'ScrollViewStyles' | 'TextInputStyles' | 'TextStyles' | 'TouchableStyles' | 'ViewStyles' | ...;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">StyleName type definition</strong>
        </Paragraph>
        <CodeSnippet>
          {`type TBorderStyle = 'Border' | 'Border.Top' | 'Border.Right' | 'Border.Bottom' | 'Border.Left' | 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large' | 'Border.Color.Primary' | 'Border.Color.Secondary' | 'Border.Color.Info' | 'Border.Color.Warning' | 'Border.Color.Danger' | 'Border.Color.Grey1' | 'Border.Color.Grey2' | ...;
  export type TTextStyle = TFontColor | 'Align.Center' | 'Align.Right' | 'Bold' | 'H1' | 'H2' | 'H3' | 'H4' | 'Small' | 'Large' | 'Paragraph' | 'Margin' | 'Margin.Top' | 'Margin.Right' | 'Margin.Bottom' | 'Margin.Left' | 'Margin.XSmall' | 'Margin.Small' | 'Margin.Large' | 'Margin.Top.Small' | 'Margin.Right.Small' | 'Margin.Bottom.Small' | 'Margin.Left.Small' | 'Margin.Top.XSmall' | 'Margin.Right.XSmall' | 'Margin.Bottom.XSmall' | 'Margin.Left.XSmall' | 'Margin.Top.Large' | 'Margin.Right.Large' | 'Margin.Bottom.Large' | 'Margin.Left.Large';
  export type TViewStyle = TBackgroundColor | TPadding | TMargin | TBorderStyle | ...;
  export type TTouchableStyle = TBackgroundColor | TPadding | TMargin | TBorderStyle | 'Button' | 'Button.Small' | 'Button.Large' | 'Button.Round' | 'Button.Circle' | ...;
...`}
        </CodeSnippet>
        <section>
          <h5 id="intellisense-friendly-styles" className="heading text-lg">
            <a href="#intellisense-friendly-styles">
              Intellisense friendly styles
            </a>
          </h5>
          <Paragraph>
            The <InlineCode>Variables</InlineCode>, <InlineCode>StyleNames</InlineCode> &amp; <InlineCode>Namespaces</InlineCode> are intellisense friendly, it helps you choose correct styles &amp; values.
          </Paragraph>
          <Paragraph className="border rounded p-1">
            <img alt='Strongly typed styles: Text' src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/style-names-intellisense-1.png`} />
          </Paragraph>
          <Paragraph className="border rounded p-1">
            <img alt='Strongly typed styles: View' src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/style-names-intellisense-2.png`} />
          </Paragraph>
        </section>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="stylo-themes" level={4}>
          Stylo theme
        </SectionHeading>
        <Paragraph>
          Stylo provides a default Theme which is located at <strong className="font-semibold">/node_modules/react-native-stylo/lib/themes</strong>.
          The theme can be simply copied into the app &amp; used as is or freely modified as per the needs.
          Or simply use the default theme just as a guideline &amp; create your own from scratch.
        </Paragraph>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id="create-theme" level={4}>
          Creating a theme
        </SectionHeading>
        <section>
          <h5 className="text-lg">
            1. Define types
          </h5>
          <Paragraph>
            First things first, define the types for Variables, Namespaces &amp; StyleNames.
            {` It's`} very important to define these types clearly by using a thoughtful naming convention which can offer better scalability and easier maintenance ahead.
            {` It's`} not practically possible to define all the types at once, because the theme may keep growing as the app grows.
            So always follow the practice of defining the types first and then style definitions, when adding new styles to the theme.
          </Paragraph>
          <CodeSnippet>
            {`// Variables
type TFontColor = 'Color.Primary' | 'Color.Secondary' | 'Color.Info' | 'Color.Warning' | 'Color.Danger' | 'Color.Border' | 'Color.Grey1' | 'Color.Grey2' | 'Color.Grey1' | ... ;
type TBackgroundColor = 'BackgroundColor.Primary' | 'BackgroundColor.Secondary' | 'BackgroundColor.Info' | 'BackgroundColor.Warning' | 'BackgroundColor.Danger' | 'BackgroundColor.Grey1' | 'BackgroundColor.Grey2' | 'BackgroundColor.Grey1' | ... ;
type TPadding = 'Padding' | 'Padding.Small' | 'Padding.Large';
type TMargin = 'Margin' | 'Margin.Small' | 'Margin.Large';
type TBorder = 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large';
export type TVariables = TFontColor | TBackgroundColor | TPadding | TMargin | TBorder;

// Namespaces
export type TStyleNamespace = 'IconStyles' | 'ImageBackgroundStyles' | 'ImageStyles' | 'KeyboardAvoidingViewStyles' | 'SafeAreaViewStyles' | 'ScrollViewStyles' | 'TextInputStyles' | 'TextStyles' | 'TouchableStyles' | 'ViewStyles';
  
// StyleNames
type TBorderStyle = 'Border' | 'Border.Top' | 'Border.Right' | 'Border.Bottom' | 'Border.Left' | 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large' | 'Border.Color.Primary' | 'Border.Color.Secondary' | 'Border.Color.Info' | 'Border.Color.Warning' | 'Border.Color.Danger' | 'Border.Color.Grey1' | 'Border.Color.Grey2' | ...;
export type TTextStyle = TFontColor | 'Align.Center' | 'Align.Right' | 'Bold' | 'H1' | 'H2' | 'H3' | 'H4' | 'Small' | 'Large' | 'Paragraph' | 'Margin' | 'Margin.Top' | 'Margin.Right' | 'Margin.Bottom' | 'Margin.Left' | 'Margin.XSmall' | 'Margin.Small' | 'Margin.Large' | 'Margin.Top.Small' | 'Margin.Right.Small' | 'Margin.Bottom.Small' | 'Margin.Left.Small' | 'Margin.Top.XSmall' | 'Margin.Right.XSmall' | 'Margin.Bottom.XSmall' | 'Margin.Left.XSmall' | 'Margin.Top.Large' | 'Margin.Right.Large' | 'Margin.Bottom.Large' | 'Margin.Left.Large';
export type TViewStyle = TBackgroundColor | TPadding | TMargin | TBorderStyle | ...;
export type TTouchableStyle = TBackgroundColor | TPadding | TMargin | TBorderStyle | 'Button' | 'Button.Small' | 'Button.Large' | 'Button.Round' | 'Button.Circle' | ...;
// & so on ...`}
          </CodeSnippet>
        </section>
        <section>
          <h5 className="text-lg">
            2. Define Variables
          </h5>
          <Paragraph>
            Define the variables with their values.
            These will be used across the theme to maintain the consistency of style.
          </Paragraph>
          <CodeSnippet>
            {`const variables {
  'Color.Primary': '#000000',
  'Color.Secondary': '#888888',
  'Color.Grey1': '#FEFEFE',
  'Color.Grey2': '#F4F4F4',
  ...
  'Border.Radius': 8,
  'Border.Radius.Small': 4,
  'Border.Radius.Large': 16,
  ...
  Padding: 16,
  'Padding.Small': 8,
  'Padding.Large': 24,
  ...
};`}
          </CodeSnippet>
        </section>
        <section>
          <h5 className="text-lg">
            3. Define styles
          </h5>
          <Paragraph>
            A good practice is to define the common styles separately &amp; reuse them.
            Like, border related styles can be defined separately &amp; can be reused to define styles for View, TouchableOpacity, ScrollView etc.
          </Paragraph>
          <CodeSnippet>
            {`const BorderStyles = StyleSheet.create({
  Border: {
    borderColor: Variables['Color.Border'],
    borderStyle: 'solid',
    borderWidth: 1,
  },
  'Border.Top': {
    borderColor: Variables['Color.Border'],
    borderStyle: 'solid',
    borderTopWidth: 1,
  },
  'Border.Right': {
    borderColor: Variables['Color.Border'],
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
  'Border.Bottom': {
    borderBottomWidth: 1,
    borderColor: Variables['Color.Border'],
    borderStyle: 'solid',
  },
  'Border.Left': {
    borderColor: Variables['Color.Border'],
    borderLeftWidth: 1,
    borderStyle: 'solid',
  },
  ...
};

const PaddingStyles = StyleSheet.create({
  Padding: { padding: Variables.Padding },
  'Padding.Small': { padding: Variables['Padding.Small'] },
  'Padding.Large': { padding: Variables['Padding.Large'] },
  ...
};

const MarginStyles = StyleSheet.create({
  Margin: { margin: Variables.Margin },
  'Margin.Small': { margin: Variables['Margin.Small'] },
  'Margin.Large': { margin: Variables['Margin.Large'] },
  ...
};

export const TextStyles = StyleSheet.create({
  ...MarginStyles,
  Default: { color: Variables['Color.Grey8'], fontSize: 16, fontWeight: '400', lineHeight: 24 },
  'Align.Center': { textAlign: 'center' },
  'Align.Right': { textAlign: 'right' },
  H1: { fontSize: 32, fontWeight: '400', lineHeight: 40, marginBottom: 16 },
  H2: { fontSize: 28, fontWeight: '400', lineHeight: 36, marginBottom: 16 },
  H3: { fontSize: 24, fontWeight: '400', lineHeight: 32, marginBottom: 8 },
  'Size.Small': { fontSize: 12, lineHeight: 18 },
  'Size.Tiny': { fontSize: 8, lineHeight: 14 },
  ...
});

export const ViewStyles = StyleSheet.create({
  ...BorderStyles,
  ...PaddingStyles,
  ...MarginStyles,
  ...
});

export const TouchableStyles = StyleSheet.create({
  ...BorderStyles,
  ...PaddingStyles,
  ...MarginStyles,
  Button: {
    padding: Variables.Padding,
    borderRadius: Variables['Border.Radius'],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'Button.Small': {
    padding: Variables['Padding.Small'],
  },
  'Button.Large': {
    padding: Variables['Padding.Large'],
  },
  ...
});

// & so on ...`}
          </CodeSnippet>
        </section>
        <section>
          <h5 className="text-lg">
            4. Fuse them in a theme
          </h5>
          <Paragraph>
            Collect all the style definitions into one object which will be used as the theme.
            {` It's`} important to use the same namespaces that have been defined in the types.
          </Paragraph>
          <CodeSnippet>
            {`const Styles = {
  TextStyles,
  TouchableStyles,
  ViewStyles,
  ...
};`}
          </CodeSnippet>
        </section>
      </section>
    </article>
  </Layout>
);

export default Theme;
