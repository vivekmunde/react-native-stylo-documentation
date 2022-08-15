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

const Styles: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>{`<Styles />`} | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>{`<Styles />`}</ArticleHeading>
          <Paragraph>
            <strong className="font-semibold">Styles</strong> is a wrapper component which does the same work as that of <Link href="/use-styles">useStyles()</Link> hook.
            It internally uses <Link href="/use-styles">useStyles()</Link> hook.
          </Paragraph>

          <Blockquote>
            Stylo recommends to use the <Link href="/stylish">Stylish</Link> components &amp; <Link href="/stylers">Styler</Link> hooks instead of the <InlineCode>{`<Styles />`}</InlineCode> component.
            In practice, one may not need to use the <InlineCode>{`<Styles />`}</InlineCode> component directly.
          </Blockquote>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={4}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TProps<
  TStyleProp,
  TStyleName extends string,
  TStyleNamespace extends string
> = {
  styleNamespace: TStyleNamespace;
  styleNames: TStyleName[];
  children: (style: StyleProp<TStyleProp>) => React.ReactNode;
};`}
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
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="props" level={4}>
              Props
            </SectionHeading>
            <section>
              <h5 className="text-lg">
                <InlineCode>styleNamespace</InlineCode> <RequiredTag />
              </h5>
              <Paragraph>
                The <Link href="/theme#style-namespace">StyleNamespace</Link> to be used which holds the style definitions for the <InlineCode>StyleNames</InlineCode> supplied to the hook.
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
            <section>
              <h5 className="text-base">
                <InlineCode>children</InlineCode> <RequiredTag />
              </h5>
              <Paragraph>
                A render function, which passes Standard React Native style object (e.g. <InlineCode>{`StyleProp<ViewStyle>`}</InlineCode>) as an argument.
              </Paragraph>
            </section>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={4}>
              Usage
            </SectionHeading>
            <ShowCaseBox
              renderCode={() => `import React from 'react';
import { SafeAreaView, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Styles } from 'react-native-stylo';
import { TTextStyle, TViewStyle } from './stylo/themes/types';

const StylesShowCase: React.FC = () => (
  <Styles<ViewStyle, TViewStyle>
    styleNamespace="ViewStyles"
    styleNames={['Screen']}>
    {screenStyle => (
      <View style={screenStyle}>
        <SafeAreaView />
        <Styles<ViewStyle, TViewStyle>
          styleNamespace="ViewStyles"
          styleNames={['Screen.Header', 'Padding']}>
          {screenHeaderStyle => (
            <React.Fragment>
              <View style={screenHeaderStyle}>
                <Styles<TextStyle, TTextStyle>
                  styleNamespace="TextStyles"
                  styleNames={['H1', 'Margin.Top.Small', 'Margin.Bottom.Small']}>
                  {screenTitleStyle => (
                    <Text style={screenTitleStyle}>{'<Styles />'}</Text>
                  )}
                </Styles>
              </View>
              <Styles<ViewStyle, TViewStyle>
                styleNamespace="ViewStyles"
                styleNames={['Screen.Body', 'Padding']}>
                {screenBodyStyle => (
                  <View style={screenBodyStyle}>
                    <Styles<ViewStyle, TViewStyle>
                      styleNamespace="ViewStyles"
                      styleNames={['Border', 'Border.Radius', 'BackgroundColor.Alpha10', 'Margin.Bottom.Large']}>
                      {cardStyle => (
                        <View style={cardStyle}>
                          <Styles<ViewStyle, TViewStyle>
                            styleNamespace="ViewStyles"
                            styleNames={['Padding.Top', 'Padding.Left', 'Padding.Right']}>
                            {cardHeaderStyle => (
                              <View style={cardHeaderStyle}>
                                <Styles<TextStyle, TTextStyle>
                                  styleNamespace="TextStyles"
                                  styleNames={['Large', 'Bold']}>
                                  {cardTitleStyle => (
                                    <Text style={cardTitleStyle}>
                                      Type definition
                                    </Text>
                                  )}
                                </Styles>
                              </View>
                            )}
                          </Styles>
                          <Styles<ViewStyle, TViewStyle>
                            styleNamespace="ViewStyles"
                            styleNames={['Padding']}>
                            {cardBodyStyle => (
                              <View style={cardBodyStyle}>
                                <Styles<TextStyle, TTextStyle>
                                  styleNamespace="TextStyles"
                                  styleNames={['Color.Grey8', 'Bold.Semi']}>
                                  {codeStyle => (
                                    <Text style={codeStyle}>
                                      {
                                        'type TProps<TStyleProp, TStyleName extends string, TStyleNamespace extends string> = { styleNamespace: TStyleNamespace; styleNames: TStyleName[]; children: (style: StyleProp<TStyleProp>) => React.ReactNode; };'
                                      }
                                    </Text>
                                  )}
                                </Styles>
                              </View>
                            )}
                          </Styles>
                        </View>
                      )}
                    </Styles>
                  </View>
                )}
              </Styles>
            </React.Fragment>
          )}
        </Styles>
      </View>
    )}
  </Styles>
);

export default StylesShowCase;`}
              imageAlt="<Styles />"
              imageUrl={{ light: "showcase-styles-light.png", dark: "showcase-styles-dark.png" }}
            />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default Styles;
