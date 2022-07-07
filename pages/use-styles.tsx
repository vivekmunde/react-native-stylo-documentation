import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import Blockquote from '../components/blockquote';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';
import RequiredTag from '../components/required-tag';
import SectionHeading from '../components/section-heading';
import ShowCaseBox from '../components/showcase-box';

const UseStyles: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>useStyles() | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>useStyles()</ArticleHeading>

          <Paragraph>
            <InlineCode><strong className="font-semibold">useStyles()</strong></InlineCode> is core hook which is used by the Stylo library to read styles from theme.
            It accepts <InlineCode>StyleNames</InlineCode> &amp; optional <InlineCode>StyleNamespace</InlineCode> as its arguments.
            It then reads the styles defined for those <InlineCode>StyleNames</InlineCode> under that <InlineCode>StyleNamespace</InlineCode> in the theme, combines these styles into one &amp; returns the final style, a standard React Native style object.
          </Paragraph>

          <Blockquote>
            Stylo recommends to use the <Link href="/stylers">Styler</Link> hooks &amp; <Link href="/stylish">Stylish</Link> components instead of <InlineCode>useStyles()</InlineCode> hook.
            The <InlineCode>useStyles()</InlineCode> hook is used inside all the <Link href="/stylers">Styler</Link> hooks &amp; <Link href="/stylish">Stylish</Link> components.
            So technically, using only this <InlineCode>useStyles()</InlineCode> hook any style definition defined in the theme can be accessed &amp; applied to the components.
            In practice, one may not need to use the <InlineCode>useStyles()</InlineCode> hook directly.
          </Blockquote>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={4}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`function useStyles<TStyleProp, TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames }: {
  styleNamespace: TStyleNamespace;
  styleNames: TStyleName[];
}): StyleProp<TStyleProp>`}
            </CodeSnippet>
            <section>
              <h5 className="text-base">
                <InlineCode>TStyleProp</InlineCode>
              </h5>
              <Paragraph>
                Standard React Native stye prop like <ExternalLink href="https://reactnative.dev/docs/text-style-props">TextStyle</ExternalLink>, <ExternalLink href="https://reactnative.dev/docs/view-style-props">ViewStyle</ExternalLink> etc.
              </Paragraph>
            </section>
            <section>
              <h5 className="text-base">
                <InlineCode>TStyleName</InlineCode>
              </h5>
              <Paragraph>
                <Link href="/theme#type-definitions">StyleName type</Link> defined in the theme.
              </Paragraph>
            </section>
            <section>
              <h5 className="text-base">
                <InlineCode>TStyleNamespace</InlineCode>
              </h5>
              <Paragraph>
                <Link href="/theme#type-definitions">StyleNamespace type</Link> defined in the theme.
              </Paragraph>
            </section>
            <section>
              <h5 className="text-base">
                Return type
              </h5>
              <Paragraph>
                Standard React Native style object. E.g. <InlineCode>{`StyleProp<ViewStyle>`}</InlineCode>.
              </Paragraph>
            </section>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="arguments" level={4}>
              Argument
            </SectionHeading>
            <CodeSnippet>
              {`{
  styleNamespace: TStyleNamespace;
  styleNames: TStyleName[];
}`}
            </CodeSnippet>
            <section>
              <h5 className="text-lg">
                <InlineCode>styleNamespace</InlineCode> <RequiredTag />
              </h5>
              <Paragraph>
                The <Link href="/theme#namespace">StyleNamespace</Link> to be used which holds the style definitions for the <InlineCode>StyleNames</InlineCode> supplied to the hook.
              </Paragraph>
            </section>
            <section>
              <h5 className="text-lg">
                <InlineCode>styleNames</InlineCode> <RequiredTag />
              </h5>
              <Paragraph>
                The <Link href="/theme#style-name">StyleNames</Link> which define the styles.
              </Paragraph>
            </section>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="return-value" level={4}>
              Return value
            </SectionHeading>
            <Paragraph>
              Standard React Native style object. E.g. <InlineCode>{`StyleProp<ViewStyle>`}</InlineCode>.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={4}>
              Usage
            </SectionHeading>
            <Paragraph>
              Below example shows the use of <InlineCode>useStyles()</InlineCode> hook to create a styled card.
            </Paragraph>
            <ShowCaseBox
              renderCode={() => `import React, { useRef } from 'react';
import { SafeAreaView, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-stylo';
import { TStyleNamespace, TTextStyle, TTouchableStyle, TViewStyle } from '../../stylo/themes/types';

const UseStylesShowCase: React.FC = () => {
  const styles = useRef({
    screen: useStyles<ViewStyle, TViewStyle, TStyleNamespace>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Screen', 'BackgroundColor.Primary1'],
    }),
    screenHeader: useStyles<ViewStyle, TViewStyle, TStyleNamespace>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Screen.Header', 'Padding'],
    }),
    screenTitle: useStyles<TextStyle, TTextStyle, TStyleNamespace>({
      styleNamespace: 'TextStyles',
      styleNames: ['Color.Primary', 'H1', 'Margin.Top.Small', 'Margin.Bottom.Small'],
    }),
    screenBody: useStyles<ViewStyle, TViewStyle, TStyleNamespace>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Screen.Body', 'Padding'],
    }),
    card: useStyles<ViewStyle, TViewStyle, TStyleNamespace>({
      styleNamespace: 'ViewStyles',
      styleNames: ['BackgroundColor.White', 'Border.Radius', 'Margin.Bottom.Large'],
    }),
    cardHeader: useStyles<ViewStyle, TViewStyle, TStyleNamespace>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Padding.Top', 'Padding.Left', 'Padding.Right'],
    }),
    cardBody: useStyles<ViewStyle, TViewStyle, TStyleNamespace>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Padding'],
    }),
    cardFooter: useStyles<ViewStyle, TViewStyle, TStyleNamespace>({
      styleNamespace: 'ViewStyles',
      styleNames: ['Padding', 'Border.Top', 'Border.Color.Primary1'],
    }),
    cardTitle: useStyles<TextStyle, TTextStyle, TStyleNamespace>({
      styleNamespace: 'TextStyles',
      styleNames: ['Large', 'Bold'],
    }),
    code: useStyles<TextStyle, TTextStyle, TStyleNamespace>({
      styleNamespace: 'TextStyles',
      styleNames: ['Color.Grey7', 'Bold.Semi'],
    }),
    description: useStyles<TextStyle, TTextStyle, TStyleNamespace>({
      styleNamespace: 'TextStyles',
      styleNames: ['Color.Grey8'],
    }),
    footerButton: useStyles<ViewStyle, TTouchableStyle, TStyleNamespace>({
      styleNamespace: 'TouchableStyles',
      styleNames: ['Button', 'Border', 'Border.Color.Primary'],
    }),
    footerButtonText: useStyles<TextStyle, TTextStyle, TStyleNamespace>({
      styleNamespace: 'TextStyles',
      styleNames: ['Color.Primary'],
    }),
  }).current;

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>useStyles() hook</Text>
      </View>
      <View style={styles.screenBody}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Type definition</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.code}>
              {
                'function useStyles<TStyleProp, TStyleName extends string, TStyleNamespace extends string>({ styleNamespace, styleNames }: { styleNamespace: TStyleNamespace; styleNames: TStyleName[]; }): StyleProp<TStyleProp>'
              }
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <Text style={styles.description}>
              useStyles() is main hook which is used by the Stylo library to
              read styles from theme. It accepts StyleNames & optional
              StyleNamespace as its arguments. It then reads the styles defined
              for those StyleNames under that StyleNamespace in the theme,
              combines these styles into one & returns the final style.
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.footerButton}>
              <Text style={styles.footerButtonText}>Read more ...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};`}
              imageAlt="useStyles()"
              imageUrl="showcase-use-styles.png"
            />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default UseStyles;
