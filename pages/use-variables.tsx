import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';

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
            The <strong className="font-semibold">useVariables()</strong> is used to access the <Link href="/theme#variables">Theme Variables</Link>.
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
            <CodeSnippet>
              {`import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useVariables } from 'react-native-stylo';

import { TVariables } from '../themes/types';

const CardTitle:React.FC<{ title: string; }> = ({ title }) => {
  const [margin, colorPrimary] = useVariables<TVariables>([Margin, 'Color.Primary']);

  const styles = useRef(
    StyleSheet.create({
      title: {
        marginBottom: Number(margin),
        color: colorPrimary.toString(),
      }
    }),
  );

  return <Text style={styles.title}>{title}</Title>;
};

export default CardTitle;`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default UseVariables;
