import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import ShowCaseBox from '../components/showcase-box';

const UseVariables: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>useVariables() | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>useVariables()</ArticleHeading>

          <p>
            The <strong className="font-semibold">useVariables()</strong> hook is used to access the <Link href="/theme#variables">Theme Variables</Link>.
            A practical use of the <InlineCode>useVariables()</InlineCode> hook can be accessing &amp; using the theme variable values to define styles inside the <InlineCode>StyleSheet.create({ })</InlineCode> API.
          </p>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={4}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`function useVariables<TVariable extends string>(names: TVariable[]): (string | number)[];`}
            </CodeSnippet>
            <section>
              <h5 className="text-base">
                <InlineCode>TVariable</InlineCode>
              </h5>
              <Paragraph>
                <Link href="/theme#type-definitions">Variable</Link> type definition defined in the theme.
              </Paragraph>
            </section>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="argument" level={4}>
              Argument
            </SectionHeading>
            <section>
              <h5 className="text-base">
                <InlineCode>names</InlineCode>
              </h5>
              <Paragraph>
                The variables, values of which need to be returned. E.g. <InlineCode>{`'Color.Primary'`}</InlineCode>, <InlineCode>Padding</InlineCode>, <InlineCode>{`'Border.Radius'`}</InlineCode> etc.
              </Paragraph>
            </section>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="return-value" level={4}>
              Return value
            </SectionHeading>
            <Paragraph>
              An array of values. Value in the array can either be of type <InlineCode>string</InlineCode> or <InlineCode>number</InlineCode>.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={4}>
              Usage
            </SectionHeading>
            <ShowCaseBox
              renderCode={() => `import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Stylers from '../../stylo/stylers';

const UsageUseVariablesShowCase = () => {
  const [padding, paddingLarge, margin, marginLarge, borderColor, borderRadius, fontColor, fontSize, screenColor, colorAlpha10]
    = Stylers.useVariables(['Padding', 'Padding.Large', 'Margin', 'Margin.Large', 'Border.Color', 'Border.Radius', 'Font.Color', 'Font.Size', 'Screen.BackgroundColor', 'Color.Alpha10']);

  const styles = useRef(
    StyleSheet.create({
      screen: { flex: 1, backgroundColor: screenColor.toString(), padding: Number(paddingLarge) },
      screenHeader: { paddingVertical: Number(paddingLarge) },
      screenBody: { padding: Number(padding) },
      text: { color: fontColor.toString(), fontSize: Number(fontSize) },
      h1: { fontWeight: '500', fontSize: 48, marginBottom: Number(marginLarge) },
      h2: { fontWeight: '600', fontSize: 32, marginBottom: Number(marginLarge) },
      paragraph: { marginBottom: Number(margin) },
      card: { padding: Number(padding), borderWidth: 1, borderColor: borderColor.toString(), borderRadius: Number(borderRadius), backgroundColor: colorAlpha10.toString() },
    }),
  ).current;

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.screenHeader}>
        <Text style={[styles.text, styles.h1]}>Usage</Text>
      </View>
      <Text style={[styles.text, styles.h2]}>useVariables()</Text>
      <View style={styles.card}>
        <Text style={[styles.text, styles.paragraph]}>
          Variables are the core configuration values which are used to define
          the themes. Like, colors, paddings, margins etc.
        </Text>
        <Text style={styles.text}>
          The useVariables() hook is used to access the Theme Variables. A
          practical use of the useVariables() hook can be accessing & using the
          theme variable values to define styles inside the StyleSheet.create()
          API.
        </Text>
      </View>
    </View>
  );
};

export default UsageUseVariablesShowCase;`}
              imageAlt="useVariables()"
              imageUrl="showcase-use-variables.png"
              imageUrlDark="showcase-use-variables-dark.png"
            />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default UseVariables;
