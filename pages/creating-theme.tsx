import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Blockquote from '../components/blockquote';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import { STYLO_THEME_LOCATION } from '../constants/stylo-locations';

const CreatingTheme: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Creating a theme</ArticleHeading>

          <Blockquote>
            {`Stylo's`} theme can be used as reference.
            {`It's`} available on GitHub @ <ExternalLink href="https://github.com/vivekmunde/react-native-stylo/tree/master/app/stylo/themes">https://github.com/vivekmunde/react-native-stylo/tree/master/app/stylo/themes</ExternalLink> &amp; under node_modules @ {STYLO_THEME_LOCATION}
          </Blockquote>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="define-types" level={4}>
              1. Define types
            </SectionHeading>
            <Paragraph>
              First things first, define the types for Variables &amp; StyleNames.
              {` It's`} very important to define these types clearly by using a thoughtful naming convention which can offer better scalability and easier maintenance ahead.
              {` It's`} not practically possible to define all the types at once, because the theme may keep growing as the app grows.
              So always follow the practice of defining the types first and then style definitions, when adding new styles to the theme.
            </Paragraph>
            <CodeSnippet>
              {`// Variables
type TFontColorStyle = 'Color.Primary' | 'Color.Secondary' | 'Color.Info' | 'Color.Warning' | 'Color.Danger' | 'Color.Border' | 'Color.Grey1' | 'Color.Grey2' | 'Color.Grey1' | ... ;
type TBackgroundColorStyle = 'BackgroundColor.Primary' | 'BackgroundColor.Secondary' | 'BackgroundColor.Info' | 'BackgroundColor.Warning' | 'BackgroundColor.Danger' | 'BackgroundColor.Grey1' | 'BackgroundColor.Grey2' | 'BackgroundColor.Grey1' | ... ;
type TPaddingStyle = 'Padding' | 'Padding.Small' | 'Padding.Large';
type TMarginStyle = 'Margin' | 'Margin.Small' | 'Margin.Large';
type TBorderStyle = 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large';
export type TVariable = TFontColorStyle | TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle;
  
// StyleNames
type TBorderStyle = 'Border' | 'Border.Top' | 'Border.Right' | 'Border.Bottom' | 'Border.Left' | 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large' | 'Border.Color.Primary' | 'Border.Color.Secondary' | 'Border.Color.Info' | 'Border.Color.Warning' | 'Border.Color.Danger' | 'Border.Color.Grey1' | 'Border.Color.Grey2' | ...;
export type TTextStyle = TFontColorStyle | 'Align.Center' | 'Align.Right' | 'Bold' | 'H1' | 'H2' | 'H3' | 'H4' | 'Small' | 'Large' | 'Paragraph' | 'Margin' | 'Margin.Top' | 'Margin.Right' | 'Margin.Bottom' | 'Margin.Left' | 'Margin.Mini' | 'Margin.Small' | 'Margin.Large' | 'Margin.Top.Small' | 'Margin.Right.Small' | 'Margin.Bottom.Small' | 'Margin.Left.Small' | 'Margin.Top.Mini' | 'Margin.Right.Mini' | 'Margin.Bottom.Mini' | 'Margin.Left.Mini' | 'Margin.Top.Large' | 'Margin.Right.Large' | 'Margin.Bottom.Large' | 'Margin.Left.Large';
export type TViewStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | ...;
export type TTouchableStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | 'Button' | 'Button.Small' | 'Button.Large' | 'Button.Round' | 'Button.Circle' | ...;
// & so on ...`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="define-variables" level={4}>
              2. Define Variables
            </SectionHeading>
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

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="define-styles" level={4}>
              3. Define styles
            </SectionHeading>
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
  Small: { fontSize: 12, lineHeight: 18 },
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

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="define-theme" level={4}>
              4. Fuse them in a theme
            </SectionHeading>
            <Paragraph>
              Collect all the style definitions into one object which will be used as the theme.
              {` It's`} important to use the same <Link href="/theme#style-namespace">StyleNamespaces</Link> that have been defined by Stylo.
            </Paragraph>
            <CodeSnippet>
              {`import IconStyles from './icon-styles';
import ImageStyles from './image-styles';
import ImageBackgroundStyles from './image-background-styles';
import SafeAreaViewStyles from './safe-area-view-styles';
import { ScrollViewContentContainerStyles, ScrollViewStyles } from './scroll-view-styles';
import TextStyles from './text-styles';
import TextInputStyles from './text-input-styles';
import TouchableStyles from './touchable-styles';
import ViewStyles from './view-styles';
import _variables from './variables';

export const variables = _variables;

export const styles = {
  IconStyles,
  ImageBackgroundStyles,
  ImageStyles,
  SafeAreaViewStyles,
  ScrollViewStyles,
  ScrollViewContentContainerStyles,
  TextInputStyles,
  TextStyles,
  TouchableStyles,
  ViewStyles,
};`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default CreatingTheme;
