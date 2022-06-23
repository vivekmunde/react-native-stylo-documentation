import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';
import Paragraph from '../components/paragraph';

const defaultStyledComponents = ['ImageBackground', 'Image', 'SafeAreaView', 'ScrollView', 'TextInput', 'Text', 'Pressable', 'TouchableHighlight', 'TouchableOpacity', 'View'];

const StyleNamesSequence: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>StyleNames sequence | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>StyleNames sequence</ArticleHeading>
          <Paragraph>
            The sequence of the <InlineCode>StyleNames</InlineCode> applied to the <Link href="/stylish">Stylish</Link> components &amp; <Link href="/stylers">Styler</Link> hooks does matter.
            Similar to the React {`Native's`} <InlineCode>StyleSheet.create()</InlineCode> API, the later styles of styleNames override the styles of previous styleNames.
          </Paragraph>
          <Paragraph>
            As shown below, the syle applied by <InlineCode>{`'Padding.Left.Large'`}</InlineCode> will override the left padding applied by the <InlineCode>Padding</InlineCode> to the View component.
          </Paragraph>
          <CodeSnippet>
            {`import { View } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const ComponentA = () => (
  <View<TViewStyle> styleNames={['Padding', 'Padding.Left.Large', 'Border.Radius', 'BackgroundColor.Primary']}>
    {...}
  </View>
);`}
          </CodeSnippet>
          <CodeSnippet>
            {`import { View } from 'react-native';
import { useViewStyles } from 'react-native-stylo';
import { TViewStyle } from '../themes/types';

const ComponentA = () => {
  const styles = useRef(
    StyleSheet.create({
      viewStyle: useViewStyles<TViewStyle>(['Padding', 'Padding.Left.Large', 'Border.Radius', 'BackgroundColor.Primary']),
    })
  ).current;
  
  return (
    <View<TViewStyle> style={styles.viewStyle}>
      {...}
    </View>
  );
};`}
          </CodeSnippet>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyleNamesSequence;
