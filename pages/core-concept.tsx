import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';

const sections = {
  stylesOnly: {
    id: 'styles-only',
    title: 'Styles only',
  },
  themes: {
    id: 'theme-stylename-namespace',
    title: 'Theme, StyleName & StyleNamespace',
  },
  stylesDetachedOwnedByApp: {
    id: 'detached-styles-owned-by-app',
    title: 'Detached styles, owned by app, not by library',
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
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Core concept | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Core concept</ArticleHeading>

          <nav className="p-4 mt-8 mb-4 bg-pink-50 rounded">
            <ul>
              <li>
                <a href={`#${sections.stylesOnly.id}`}>
                  {sections.stylesOnly.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.themes.id}`}>
                  {sections.themes.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.stylesDetachedOwnedByApp.id}`}>
                  {sections.stylesDetachedOwnedByApp.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.stronglyTypedIntellisenseFriendlyStyles.id}`}>
                  {sections.stronglyTypedIntellisenseFriendlyStyles.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.scalableStyles.id}`}>
                  {sections.scalableStyles.title}
                </a>
              </li>
              <li>
                <a href={`#${sections.stylishReactNativeComponents.id}`}>
                  {sections.stylishReactNativeComponents.title}
                </a>
              </li>
            </ul>
          </nav>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.stylesOnly.id} level={4}>
              {sections.stylesOnly.title}
            </SectionHeading>
            <Paragraph>
              Each mobile app has its own requirements of components, so a set of predefined components, like Screen, Card, List, Form etc., cannot be completely suitable for mobiles apps.
              Also, having predefined components cannot be highly scalable or flexible enough to serve all requirements.
              These predefined components need to expose few props to add scalability &amp; behavioral flexibility, but again these extra props neither make them fully scalable nor completely suitable.
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">Stylo</strong> only provides style definitions &amp; does not provide any layout/behavioral/action components like Card, Badge, Picker etc.
              However, the library provides all the default style definitions needed to style &amp; build all kinds of components, right from simple Text to complicated Pickers &amp; Forms.
            </Paragraph>
            <Paragraph>
              Stylo provides a default theme with pre-defined style types and styles. App can copy these &amp; then can modify the style definitions.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.themes.id} level={4}>
              {sections.themes.title}
            </SectionHeading>
            <Paragraph>
              <strong className="font-semibold">Theme</strong> is nothing but a collection of styles defined using the <ExternalLink href="https://reactnative.dev/docs/stylesheet">React {`Native's`} <InlineCode>StyleSheet.create()</InlineCode> API</ExternalLink>.
              The theme is used by the library and its hooks/components to apply styles to the React Native components.
              There is no restriction on the format of the style names, these can be defined as per the needs.
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">StyleName</strong> is the name of a standard style definition provided to the <InlineCode>StyleSheet.create</InlineCode> API.
              In the code snippet below <InlineCode>{`'Align.Center'`}</InlineCode>, <InlineCode>H1</InlineCode>, <InlineCode>{`'Size.Small'`}</InlineCode> are the style names.
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">StyleNamespaces</strong> are used to organize the style definitions by logically grouping them together.
              This prevents the style name/style collisions, like <InlineCode>{`'Size.Small'`}</InlineCode> can have different style definitions for <InlineCode>Text</InlineCode> &amp; <InlineCode>View</InlineCode> components.
              In the code snippet below <InlineCode>TextStyles</InlineCode>, <InlineCode>TextInputStyles</InlineCode>, <InlineCode>ViewStyles</InlineCode> are the StyleNamespaces.
              The library has default StyleNamespaces defined per React Native component in its themes.
              The app can define its own StyleNamespaces, which will override the default ones.
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
  ...
});

const TextInputStyles = StyleSheet.create({
  Default: { borderRadius: 8, color: '#000000', fontSize: 16, paddingTop: 12, paddingBottom: 12, paddingLeft: 8, paddingRight: 8 },
  'Size.Small': { fontSize: 12, paddingTop: 8, paddingBottom: 8 },
  ...
});
const ViewStyles = StyleSheet.create({ ... });

export const Theme = {
  TextStyles,
  TextInputStyles,
  ViewStyles,
};`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.stylesDetachedOwnedByApp.id} level={4}>
              {sections.stylesDetachedOwnedByApp.title}
            </SectionHeading>
            <Paragraph>
              The style definitions or themes are completely detached from the Stylo library.
              The style types &amp; styles/themes reside inside the app not inside the library.
              The library only provides a set of hooks and extended React Native components.&nbsp;
              <mark className="font-medium bg-pink-100 rounded text-black">&nbsp;The consumer application has the entire ownership &amp; liberty of defining the style types, styles &amp; their names (any naming pattern/convention).&nbsp;</mark>
            </Paragraph>
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
            <Paragraph>
              The library provides a set of predefined style types &amp; themes.
              These can be used as is or can be considered as a guidelines or can be simply copied into the app &amp; customized/modified easily as per the needs.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.stronglyTypedIntellisenseFriendlyStyles.id} level={4}>
              {sections.stronglyTypedIntellisenseFriendlyStyles.title}
            </SectionHeading>
            <Paragraph>
              The styles are strongly typed.
              So the accidental usage of using wrong style name is completely avoided out of the box.
              These style types are defined inside the consumer app and not inside the Stylo library.
              The app can use any naming convention to define these types.
            </Paragraph>
            <CodeSnippet>
              {`export type TFontColorStyle = 'Color.Primary' | 'Color.Secondary' | 'Color.Info' | 'Color.Success' | 'Color.Warning' | 'Color.Danger';
export type TBackgroundColorStyle = 'BackgroundColor.Primary' | 'BackgroundColor.Secondary' | 'BackgroundColor.Info' | 'BackgroundColor.Success' | 'BackgroundColor.Warning' | 'BackgroundColor.Danger';
export type TPaddingStyle = 'Padding' | 'Padding.Top' | 'Padding.Right' | 'Padding.Bottom' | 'Padding.left';
export type TMarginStyle = 'Margin' | 'Margin.Top' | 'Margin.Right' | 'Margin.Bottom' | 'Margin.left';
export type TBorderStyle = 'Border' | 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large';

export type TTextStyle = TFontColorStyle | TBackgroundColorStyle | 'Bold' | 'H1' | 'H2' | 'H3' | 'H4' | 'Size.Small' | 'Size.Tiny';
export type TTextInputStyle = TFontColorStyle | TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | 'Align.Center' | 'Align.Right' | 'Size.Small' | 'Size.Tiny';
export type TViewStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle;`}
            </CodeSnippet>
            <Paragraph>
              On top of that, the style names are strongly typed per React Native component, like View, Text, TouchableOpacity etc.
              This adds an extra level of strong typing with which only the styles names which are intended for the component can be used.
            </Paragraph>
            <Paragraph>
              E.g. Alignment styles for Text &amp; View are different.
              As you start typing the alignment styles, the editor intellisense helps you choose correct styles for Text &amp; View.
            </Paragraph>
            <Paragraph className="border rounded p-1">
              <img alt='Strongly typed styles: Text' src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/style-names-intellisense-1.png`} />
            </Paragraph>
            <Paragraph className="border rounded p-1">
              <img alt='Strongly typed styles: View' src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/style-names-intellisense-2.png`} />
            </Paragraph>
            <Paragraph>
              The Stylo library provides default style types, which can be copied into the app and can be easily customized, if needed.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.scalableStyles.id} level={4}>
              {sections.scalableStyles.title}
            </SectionHeading>
            <Paragraph>
              As both the style types &amp; the styles are defined by the consumer app &amp; not by the library, the app can add/remove/modify as many styles as it wants and they way it wants.
              App can keep adding {`it's`} own types &amp; styles as per the needs like <InlineCode>Card</InlineCode>, <InlineCode>Card.Header</InlineCode>, <InlineCode>Card.Body</InlineCode>, <InlineCode>Card.Footer</InlineCode>, <InlineCode>Picker</InlineCode>, <InlineCode>Picker.Header</InlineCode> &amp; so on.
              Create these style types and styles and just add them to the Theme. {`That's`} it.
            </Paragraph>
            <CodeSnippet>
              {`//types.ts;
export type TCardStyle = 'Card' | 'Card.Header' | 'Card.Body' | 'Card.Footer';
export type TViewStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | TCard;
export type TTouchableStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | TCard;

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
            <Paragraph>
              Stylo library provides predefined style types and styles. App can copy these and then extend them infinitely. It can add new types/styles, change names of existing types/styles or modify the style definitions.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id={sections.stylishReactNativeComponents.id} level={4}>
              {sections.stylishReactNativeComponents.title}
            </SectionHeading>
            <Paragraph>
              The library just adds a new property called <InlineCode>styleNames</InlineCode> to the <ExternalLink href="https://reactnative.dev">React Native components</ExternalLink>.
              The property <InlineCode>styleNames</InlineCode> in React Native mobile app is just like <InlineCode>class</InlineCode> in web app.
              The style names are defined in the theme, e.g. <InlineCode>List</InlineCode>, <InlineCode>List.Item</InlineCode>, <InlineCode>Color.Primary</InlineCode>, <InlineCode>Border</InlineCode>, <InlineCode>Size.Large</InlineCode> etc.
              Just supply these names of the styles to the prop <InlineCode>styleNames</InlineCode> and it will pick the style definitions from theme and apply to the React Native component.
              The library does not add any other behavior or action to the React Native components.&nbsp;
              <mark className="font-medium bg-pink-100 rounded text-black">
                &nbsp;This keeps the React Native components as pure as they are defined by React Native.
                After all, these are just React Native components.&nbsp;
              </mark>
            </Paragraph>
            <CodeSnippet>
              {`import { View, Text, TouchableOpacity } from 'react-native-stylo';

// styles defined inside your app
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
      </React.Fragment>
    )}
  />
);

export default CoreConcept;
