import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';

const sections = {
  stylesOnly: {
    id: 'styles-only',
    title: 'Styles only',
  },
  themes: {
    id: 'themes',
    title: 'Themes',
  },
  stylesDetachedOwnedByApp: {
    id: 'styles-detached-owned-by-app',
    title: 'Styles completely detached & entirely owned by the app, not by the library',
  },
  stronglyTypedIntellisenseFriendlyStyles: {
    id: 'strongly-typed-intellisense-friendly-styles',
    title: 'Strongly typed & intellisense friendly styles',
  },
  scalableStyles: {
    id: 'infinitely-scalable',
    title: 'Infinitely scalable',
  },
  stylishReactNativeComponents: {
    id: 'stylish-react-components',
    title: 'Stylish React Native components',
  },
};

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>Core concept | React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <article>
      <ArticleHeading>Core concept</ArticleHeading>

      <nav className="p-4 mt-8 mb-4 bg-pink-50 rounded">
        <ul>
          <li>
            <a href={`#${sections.stylesOnly.id}`} className="font-medium">
              {sections.stylesOnly.title}
            </a>
          </li>
          <li>
            <a href={`#${sections.themes.id}`} className="font-medium">
              {sections.themes.title}
            </a>
          </li>
          <li>
            <a href={`#${sections.stylesDetachedOwnedByApp.id}`} className="font-medium">
              {sections.stylesDetachedOwnedByApp.title}
            </a>
          </li>
          <li>
            <a href={`#${sections.stronglyTypedIntellisenseFriendlyStyles.id}`} className="font-medium">
              {sections.stronglyTypedIntellisenseFriendlyStyles.title}
            </a>
          </li>
          <li>
            <a href={`#${sections.scalableStyles.id}`} className="font-medium">
              {sections.scalableStyles.title}
            </a>
          </li>
          <li>
            <a href={`#${sections.stylishReactNativeComponents.id}`} className="font-medium">
              {sections.stylishReactNativeComponents.title}
            </a>
          </li>
        </ul>
      </nav>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.stylesOnly.id} level={4}>
          {sections.stylesOnly.title}
        </SectionHeading>
        <p>
          Each mobile app has its own requirements of components, so a set of predefined components, like Screen, Card, List, Form etc., cannot be completely suitable for mobiles apps.
          Also, having predefined components cannot be highly scalable or flexible enough to serve all requirements.
          These predefined components need to expose few props to add scalability &amp; behavioral flexibility, but again these extra props neither make them fully scalable nor completely suitable.
        </p>
        <p>
          <strong className="font-semibold">React Native Stylo</strong> only provides style definitions and does not provide any layout/behavioral/action components like Card, Badge, Picker etc.
          However, the library provides all the default style definitions needed to style &amp; build all kinds of components, right from simple Text to complicated Pickers &amp; Forms.
        </p>
        <p>
          Stylo library provides default pre-defined style types and styles. App can copy these and then can modify the style definitions.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.themes.id} level={4}>
          {sections.themes.title}
        </SectionHeading>
        <p>
          Theme is nothing but a collection of styles defined using the React Native API <InlineCode>StyleSheet.create()</InlineCode>.
          The theme is used by the library and its hooks/components to apply styles to the React Native components.
          There is no restriction on the format of the style names, these can be defined as per the needs.
        </p>
        <CodeSnippet>
          {`export const TextStyles = StyleSheet.create({
  Default: { color: Colors.Font, fontSize: 16, fontWeight: '400', lineHeight: 24 },
  'Align.Center': { textAlign: 'center' },
  'Align.Right': { textAlign: 'right' },
  H1: { fontSize: 32, fontWeight: '400', lineHeight: 40, marginBottom: 16 },
  H2: { fontSize: 28, fontWeight: '400', lineHeight: 36, marginBottom: 16 },
  H3: { fontSize: 24, fontWeight: '400', lineHeight: 32, marginBottom: 8 },
  'Size.Small': { fontSize: 12, lineHeight: 18 },
  'Size.Tiny': { fontSize: 8, lineHeight: 14 },
});

export const TextInputStyles = StyleSheet.create({ ... });
export const ViewStyles = StyleSheet.create({ ... });`}
        </CodeSnippet>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.stylesDetachedOwnedByApp.id} level={4}>
          {sections.stylesDetachedOwnedByApp.title}
        </SectionHeading>
        <p>
          The style definitions or themes are completely detached from the Stylo library.
          The style types &amp; styles/themes reside inside the app not inside the library.
          The library only provides a set of hooks and extended <ExternalLink href="https://reactnative.dev">React Native</ExternalLink> components.
          <mark className="font-semibold bg-pink-100 rounded text-black"> The consumer application has the entire ownership &amp; liberty of defining the style types, styles &amp; their names (any naming pattern/convention). </mark>
        </p>
        <CodeSnippet>
          {`MobileApp
  |- components
  |- screens
  |- themes
      |- types
        |- text-style-types.ts
        |- text-input-style-types.ts
        |- touchable-style-types.ts
        |- view-style-types.ts
        |- ...
      |- light
        |- text-styles.ts
        |- text-input-styles.ts
        |- touchable-styles.ts
        |- view-styles.ts
        |- ...
      |- dark
        |- text-styles.ts
        |- text-input-styles.ts
        |- touchable-styles.ts
        |- view-styles.ts
        |- ...`}
        </CodeSnippet>
        <p>
          The library provides a set of predefined style types &amp; themes.
          These can be used as is or can be considered as a guidelines or can be simply copied to the app &amp; can be customized easily as per the needs.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.stronglyTypedIntellisenseFriendlyStyles.id} level={4}>
          {sections.stronglyTypedIntellisenseFriendlyStyles.title}
        </SectionHeading>
        <p>
          The styles are strongly typed.
          These style types are defined inside the consumer app and not inside the Stylo library.
          The style types can be defined the way the consumer app wants.
          So the accidental usage of using wrong style name is completely avoided out of the box.
        </p>
        <CodeSnippet>
          {`export type TFontColor = 'Color.Primary' | 'Color.Secondary' | 'Color.Info' | 'Color.Success' | 'Color.Warning' | 'Color.Danger';
export type TBackgroundColor = 'BackgroundColor.Primary' | 'BackgroundColor.Secondary' | 'BackgroundColor.Info' | 'BackgroundColor.Success' | 'BackgroundColor.Warning' | 'BackgroundColor.Danger';
export type TPadding = 'Padding' | 'Padding.Top' | 'Padding.Right' | 'Padding.Bottom' | 'Padding.left';
export type TMargin = 'Margin' | 'Margin.Top' | 'Margin.Right' | 'Margin.Bottom' | 'Margin.left';
export type TBorder = 'Border' | 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large';

export type TTextStyle = TFontColor | TBackgroundColor | 'Bold' | 'H1' | 'H2' | 'H3' | 'H4' | 'Size.Small' | 'Size.Tiny';
export type TTextInputStyle = TFontColor | TBackgroundColor | TPadding | TMargin | TBorder | 'Align.Center' | 'Align.Right' | 'Size.Small' | 'Size.Tiny';
export type TViewStyle = TBackgroundColor | TPadding | TMargin | TBorder;`}
        </CodeSnippet>
        <p>
          On top of that, the style names are strongly typed per React Native component, like View, Text, TouchableOpacity etc.
          This adds an extra level of strong typing with which only the styles names which are intended for the component can be used.
        </p>
        <p>
          E.g. Alignment styles for Text &amp; View are different.
          As you start typing the alignment styles, the editor intellisense helps you choose correct styles for Text &amp; View.
        </p>
        <p className="border rounded p-1">
          <img alt='Strongly typed styles: Text' src="../images/core-concept-strongly-typed-styles-1.png" />
        </p>
        <p className="border rounded p-1">
          <img alt='Strongly typed styles: View' src="../images/core-concept-strongly-typed-styles-2.png" />
        </p>
        <p>
          The Stylo library provides default style types, which can be copied into the app and can be easily customized, if needed.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.scalableStyles.id} level={4}>
          {sections.scalableStyles.title}
        </SectionHeading>
        <p>
          As both the style types &amp; the styles are defined by the consumer app &amp; not by the library, the app can add/remove/modify as many styles as it wants and they way it wants.
          App can create {`it's`} own types &amp; styles as per the needs like <InlineCode>Card</InlineCode>, <InlineCode>Card.Header</InlineCode>, <InlineCode>Card.Body</InlineCode>, <InlineCode>Card.Footer</InlineCode>, <InlineCode>Picker</InlineCode>, <InlineCode>Picker.Header</InlineCode> &amp; so on.
          Create these style types and styles and just add them to the Theme. {`That's`} it.
        </p>
        <CodeSnippet>
          {`//types.ts;
export type TCard = 'Card' | 'Card.Header' | 'Card.Body' | 'Card.Footer';
export type TViewStyle = TBackgroundColor | TPadding | TMargin | TBorder | TCard;
export type TTouchableStyle = TBackgroundColor | TPadding | TMargin | TBorder | TCard;

//card-styles.ts
export const CardStyles = StyleSheet.create({
  Card: {...},
  'Card.Header': {...},
  'Card.Body': {...},
  'Card.Footer': {...},
});

//theme.ts
export const Theme = {
  ViewStyles: {
    ...[ExistingViewStyles],
    ...CardStyles,
  },
  TouchableStyles: {
    ...[ExistingTouchableStyles],
    ...CardStyles,
  },
};
`}
        </CodeSnippet>
        <p>
          Stylo library provides predefined style types and styles. App can copy these and then extend them infinitely. It can add new types/styles, change names of existing types/styles or modify the style definitions.
        </p>
      </section>

      <section className="no-vertical-margin-collapse">
        <SectionHeading id={sections.stylishReactNativeComponents.id} level={4}>
          {sections.stylishReactNativeComponents.title}
        </SectionHeading>
        <p>
          The library just adds a new property called <InlineCode>styleNames</InlineCode> to <ExternalLink href="https://reactnative.dev">React Native</ExternalLink> components.
          The property <InlineCode>styleNames</InlineCode> in React Native mobile app is just like <InlineCode>class</InlineCode> in web app.
          The style names are defined in the theme, e.g. <InlineCode>List</InlineCode>, <InlineCode>List.Item</InlineCode>, <InlineCode>Color.Primary</InlineCode>, <InlineCode>Border</InlineCode>, <InlineCode>Size.Large</InlineCode> etc.
          Just supply these names of the styles to the prop <InlineCode>styleNames</InlineCode> and it will pick the style definitions from theme and apply to the React Native component.
          The library does not add any other behavior or action to the React Native components.&nbsp;
          <mark className="font-semibold bg-pink-100 rounded text-black">
            This keeps the components as pure as they are defined by React Native.
            After all, these are just React Native components.
          </mark>
        </p>
        <CodeSnippet>
          {`import { View, Text, TouchableOpacity } from 'react-native-stylo/stylish';

// style types defined inside the consumer app & not inside the React Native Stylo library
import { TViewStyle, TTextStyle, TTouchableStyle } from '../themes/types';

const List = React.FC = () => (
  <View<TViewStyle> styleNames={['List', 'Border', 'Border.Radius', 'BackgroundColor.Grey1']}>
    <TouchableOpacity<TTouchableStyle>
      styleNames={['List.Item', 'Border.Bottom']}
      onPress={() => { navigation.navigateTo('ThemeProvider'); }}
    >
      <View<TViewStyle> styleNames={['List.Item.Left']}>
        <Text<TTextStyle> styleNames={['Bold']}>
          1
        </Text>
      </View>
      <View<TViewStyle> styleNames={['List.Item.Body']}>
        <Text>
          Theme provider
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity<TTouchableStyle>
      styleNames={['List.Item', 'Border.Bottom']}
      onPress={() => { navigation.navigateTo('UseStylesHook'); }}
    >
      <View<TViewStyle> styleNames={['List.Item.Left']}>
        <Text<TTextStyle> styleNames={['Bold']}>
          2
        </Text>
      </View>
      <View<TViewStyle> styleNames={['List.Item.Body']}>
        <Text>
          useStyles hook
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity<TTouchableStyle>
      styleNames={['List.Item']}
      onPress={() => { navigation.navigateTo('StylesComponent'); }}
    >
      <View<TViewStyle> styleNames={['List.Item.Left']}>
        <Text<TTextStyle> styleNames={['Bold']}>
          3
        </Text>
      </View>
      <View<TViewStyle> styleNames={['List.Item.Body']}>
        <Text>
          Styles component
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);`}
        </CodeSnippet>
      </section>
    </article>
  </Layout>
);

export default CoreConcept;