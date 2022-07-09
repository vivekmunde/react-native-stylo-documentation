import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import DefaultStyleNamespacesCodeSnippet from '../components/default-style-namespaces-code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import { STYLO_THEME_LOCATION } from '../constants/stylo-locations';

const Theme: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Theme</ArticleHeading>
          <Paragraph>
            <strong className="font-semibold">Theme</strong> at core is nothing but a collection of styles defined using the <ExternalLink href="https://reactnative.dev/docs/stylesheet">React {`Native's`} <InlineCode>StyleSheet.create()</InlineCode> API</ExternalLink>.
            The themes are defined inside the app and are completely owned by the app, not by the Stylo library.
            Stylo theme is based on two key concepts: StyleName &amp; StyleNamespace.
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
              In the code snippet below <InlineCode>{`'Align.Center'`}</InlineCode>, <InlineCode>H1</InlineCode>, <InlineCode>Small</InlineCode> are the style names.
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`type TTextStyle = 'Align.Center' | 'Align.Right' | 'H1' | 'H2' | 'H3' | 'Small' | 'Size.Tiny';
type TInputTextStyle = 'Align.Center' | 'Align.Right' | 'Small' | 'Size.Tiny';`}
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
  Small: { fontSize: 12, lineHeight: 18 },
  'Size.Tiny': { fontSize: 8, lineHeight: 14 },
});

const TextInputStyles = StyleSheet.create({
  Default: { borderRadius: 8, color: '#000000', fontSize: 16, paddingTop: 12, paddingBottom: 12, paddingLeft: 8, paddingRight: 8 },
  'Align.Center': { textAlign: 'center' },
  'Align.Right': { textAlign: 'right' },
  Small: { fontSize: 12, paddingTop: 8, paddingBottom: 8 },
  Large: { fontSize: 24, paddingTop: 16, paddingBottom: 16, paddingLeft: 10, paddingRight: 10 },
});`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="reserved-style-name" level={4}>
              Reserved StyleName <InlineCode>Default</InlineCode>
            </SectionHeading>
            <Paragraph>
              <InlineCode>Default</InlineCode> is a reserved StyleName.
              {` It's`} used for the core React Native components like Text, View, TextInput, Image etc.
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
            <SectionHeading id="style-namespace" level={4}>
              StyleNamespace
            </SectionHeading>
            <Paragraph>
              StyleNamespaces are used to organize the style definitions by logically grouping them together.
              Means, all style definitions for React {`Native's`} Text component can be grouped together under a namespace called <InlineCode>TextStyles</InlineCode>, likewise <InlineCode>ViewStyles</InlineCode>, <InlineCode>TouchableStyles</InlineCode>, <InlineCode>TextInputStyles</InlineCode> etc.
              This prevents collisions of the StyleName &amp; eventually the collisions of styles.
              For example, a StyleName <InlineCode>Small</InlineCode> can exist for both Text &amp; View and can have different style definitions for each.
              So placing these different stye definitions with same StyleName <InlineCode>Small</InlineCode> under separate namespaces <InlineCode>TextStyles</InlineCode> &amp; <InlineCode>ViewStyles</InlineCode> will avoid the collision or accidental overriding of style definitions.
            </Paragraph>
            <Paragraph>
              Stylo considers each React Native component as one StyleNamespace.
              To keep it simple &amp; easily understandable, Stylo uses a pattern <InlineCode>[ReactNativeComponentName]Styles</InlineCode> to name the StyleNamespace.
              The library uses following StyleNamespaces defined for each React Native component.
            </Paragraph>
            <DefaultStyleNamespacesCodeSnippet />
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
              {`export type TVariable = 
  | 'Color.Primary'
  | 'Color.Secondary'
  | 'Padding'
  | 'Padding.Small'
  | 'Padding.Large'
  | 'Border.Radius';`}
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
              Thanks to <ExternalLink href="https://www.typescriptlang.org">TypeScript</ExternalLink>, the <InlineCode>StyleNames</InlineCode> &amp; <InlineCode>Variables</InlineCode> are strongly typed.
              The type definitions are passed to &amp; used by <Link href="/use-variables">useVariables()</Link> hook, <Link href="/stylers">Styler</Link> hooks &amp; <Link href="/stylish">Stylish</Link> components.
              This completely avoids accidental usage of wrong <InlineCode>StyleNames</InlineCode> &amp; <InlineCode>Variables</InlineCode>, out of the box.
              On top of that, the <InlineCode>StyleNames</InlineCode> are strongly typed against each React Native component, like <InlineCode>View</InlineCode>, <InlineCode>Text</InlineCode>, <InlineCode>TouchableOpacity</InlineCode> etc.
              This adds an extra level of strong typing which forces to use only those values which are intended for a particular component.
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Variables type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`type TFontColorStyle = 'Color.Primary' | 'Color.Secondary' | 'Color.Info' | 'Color.Warning' | 'Color.Danger' | 'Color.Border' | 'Color.Grey1' | 'Color.Grey2' | 'Color.Grey1' | ... ;
type TBackgroundColorStyle = 'BackgroundColor.Primary' | 'BackgroundColor.Secondary' | 'BackgroundColor.Info' | 'BackgroundColor.Warning' | 'BackgroundColor.Danger' | 'BackgroundColor.Grey1' | 'BackgroundColor.Grey2' | 'BackgroundColor.Grey1' | ... ;
type TPaddingStyle = 'Padding' | 'Padding.Small' | 'Padding.Large';
type TMarginStyle = 'Margin' | 'Margin.Small' | 'Margin.Large';
type TBorderStyle = 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large';
...

export type TVariable = TFontColorStyle | TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | ...;`}
            </CodeSnippet>
            <Paragraph>
              <strong className="font-semibold">StyleName type definition</strong>
            </Paragraph>
            <CodeSnippet>
              {`type TBorderStyle = 'Border' | 'Border.Top' | 'Border.Right' | 'Border.Bottom' | 'Border.Left' | 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large' | 'Border.Color.Primary' | 'Border.Color.Secondary' | 'Border.Color.Info' | 'Border.Color.Warning' | 'Border.Color.Danger' | 'Border.Color.Grey1' | 'Border.Color.Grey2' | ...;
export type TTextStyle = TFontColorStyle | 'Align.Center' | 'Align.Right' | 'Bold' | 'H1' | 'H2' | 'H3' | 'H4' | 'Small' | 'Large' | 'Paragraph' | 'Margin' | 'Margin.Top' | 'Margin.Right' | 'Margin.Bottom' | 'Margin.Left' | 'Margin.Mini' | 'Margin.Small' | 'Margin.Large' | 'Margin.Top.Small' | 'Margin.Right.Small' | 'Margin.Bottom.Small' | 'Margin.Left.Small' | 'Margin.Top.Mini' | 'Margin.Right.Mini' | 'Margin.Bottom.Mini' | 'Margin.Left.Mini' | 'Margin.Top.Large' | 'Margin.Right.Large' | 'Margin.Bottom.Large' | 'Margin.Left.Large';
export type TViewStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | ...;
export type TTouchableStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | 'Button' | 'Button.Small' | 'Button.Large' | 'Button.Round' | 'Button.Circle' | ...;
...`}
            </CodeSnippet>
            <section>
              <h5 id="intellisense-friendly-styles" className="heading text-lg">
                <a href="#intellisense-friendly-styles">
                  Intellisense friendly styles
                </a>
              </h5>
              <Paragraph>
                The <InlineCode>Variables</InlineCode> &amp; <InlineCode>StyleNames</InlineCode> are intellisense friendly, it helps you choose correct styles &amp; values.
              </Paragraph>
              <Paragraph>
                E.g. Alignment styles for <InlineCode>View</InlineCode> &amp; <InlineCode>Text</InlineCode> are different.
                As you start typing the alignment styles, the editor intellisense helps you choose correct styles for <InlineCode>View</InlineCode> &amp; <InlineCode>Text</InlineCode>.
              </Paragraph>
              <div className="grid grid-cols-12">
                <Paragraph className="border rounded p-2 lg:col-span-11 xl:col-span-10">
                  <img alt='Strongly typed styles: View' src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/style-names-intellisense-1.png`} />
                </Paragraph>
                <Paragraph className="border rounded p-2 lg:col-span-11 xl:col-span-10">
                  <img alt='Strongly typed styles: Text' src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/style-names-intellisense-2.png`} />
                </Paragraph>
              </div>
            </section>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="stylo-themes" level={4}>
              Stylo theme
            </SectionHeading>
            <Paragraph>
              Stylo provides a <Link href="/stylo-theme">default theme</Link> which is located at <strong className="font-semibold">{STYLO_THEME_LOCATION}</strong>.
              The theme can be simply copied into the app &amp; used as is or freely modified as per the needs.
              Or simply use the <Link href="/stylo-theme">default theme</Link> just as a guideline &amp; create your own from scratch.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="create-theme" level={4}>
              Creating a theme
            </SectionHeading>
            Please refer the document <Link href="/creating-theme">Creating a theme</Link>.
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default Theme;
