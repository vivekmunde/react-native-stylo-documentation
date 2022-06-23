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
import { STYLO_THEME_STYLERS_STYLISH_LOCATION } from '../constants/stylo-locations';

const TightCoupling: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Tightly coupled | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Tightly coupled</ArticleHeading>
          <Paragraph>
            To avoid passing the <Link href="/theme#style-name">StyleNames</Link> &amp; <Link href="theme#namespace">StyleNamespace</Link> each time to the <Link href="/stylish">Stylish</Link> components &amp; <Link href="/stylers">Styler</Link> hooks, you can tightly couple the types to the <strong className="font-semibold">Stylish</strong> components &amp; <strong className="font-semibold">Styler</strong> hooks easily.
            Simply create wrapper components &amp; hooks which will internally pass the desired style type and then use these components &amp; hooks without need to pass the style types.
          </Paragraph>
          <Paragraph>
            <strong className="font-semibold">Text.tsx</strong>
          </Paragraph>
          <CodeSnippet>
            {`import React from 'react';
import { Text as StyloText, TTextProps } from 'react-native-stylo';

import { TTextStyle } from '../themes/types';

const View: React.FC<TTextProps<TTextStyle>> = props => <StyloText {...props} />;

export default Text;
`}
          </CodeSnippet>
          <Paragraph>
            <strong className="font-semibold">useTextStyles.ts</strong>
          </Paragraph>
          <CodeSnippet>
            {`import { useTextStyles as useStyloTextStyles } from 'react-native-stylo';

import { TTextStyle } from '../themes/types';

const useTextStyles = (
  styleNames: TTextStyle[] | undefined,
  styleNamespace?: string,
) => useStyloTextStyles<TTextStyle>(styleNames, styleNamespace);

export default useTextStyles;
`}
          </CodeSnippet>
          <Paragraph>
            <strong className="font-semibold">ComponentA.tsx</strong>
          </Paragraph>
          <CodeSnippet>
            {`import Text from '../stylish/Text';

const ComponentA = () => (
  <Text styleNames={['H1', 'Bold', 'Align.Center']}>
    {...}
  </Text>
);

OR

import useTextStyles from '../stylers/useTextStyles';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      text: useTextStyles(['H1', 'Bold', 'Align.Center']),
    }),
  ).current;

  return (
    <Text style={styles.text}>
      {...}
    </Text>
  );
};`}
          </CodeSnippet>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="predefined-tightly-coupled-hooks-components" level={4}>
              Stylo at your help
            </SectionHeading>
            <Paragraph>
              To save time &amp; effort, Stylo provides these wrapper hooks &amp; components, which are located at <strong className="font-semibold">{STYLO_THEME_STYLERS_STYLISH_LOCATION}</strong>.
              Simply copy these to you app.
              Please note, these wrapper hooks &amp; components import the types using a relative path <InlineCode>{`import { TTextStyle } from '../themes/types'`}</InlineCode>.
              If your theme types are defined at some other location then just change these type import paths in these hooks &amp; components.
            </Paragraph>
            <Paragraph>
              Wrappers for <InlineCode>Styler</InlineCode> hooks &amp; <InlineCode>Stylish</InlineCode> components are located as below.
            </Paragraph>
            <CodeSnippet>
              {`[root]
  |- node_modules
    |- react-native-stylo
      |- lib
        |- stylo
          |- stylers
          |- stylish
          |- themes
            |- types
            |- default`}
            </CodeSnippet>

            <Paragraph>
              Copy them to your app like below.
            </Paragraph>
            <CodeSnippet>
              {`[root]
  |- app
    |- components
    |- screens
    |- stylo
      |- stylers
      |- stylish
      |- themes
        |- types
        |- default`}
            </CodeSnippet>

            <Paragraph>
              <strong className="font-semibold">Usage</strong>
            </Paragraph>
            <CodeSnippet>
              {`import React from 'react';
import Stylish from '../stylo/stylish';
import { styles, variables } from './stylo/themes/default';

const ComponentA = () => {
  return (
    <Stylish.View styleNames={['Border', 'Border.Radius', 'Border.Color.Primary']}>
      <Stylish.View styleNames={['Padding', 'Border.Bottom', 'Border.Color.Primary']}>
        <Stylish.Text styleNames={['H2']}>
          Stylish component
        </Stylish.Text>
      </Stylish.View>
      <Stylish.View>
        <Stylish.Text styleNames={['Bold']}>
          Stylish components are nothing but enhanced React Native components.
          Stylo adds two extra properties styleNames & styleNamespace to the React Native components,
          on top of core properties provided by React Native.
        </Stylish.Text>
      </Stylish.View>
    </Stylish.View>
  );
};`}
            </CodeSnippet>
            <CodeSnippet>
              {`import React, { useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTextStyles } from '../stylo/stylers';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      textStyle: useTextStyles(['H1', 'Bold', 'Color.Primary']),
    })
  ).current;

  return (
    <Text style={styles.textStyle} {...otherProps} />
  );
}`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default TightCoupling;
