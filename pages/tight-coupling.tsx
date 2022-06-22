import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';

const TightCoupling: React.FC = () => (
  <Layout>
    <Head>
      <title>Tightly coupled | React Native Stylo</title>
    </Head>
    <article>
      <ArticleHeading>Tightly coupled</ArticleHeading>
      <Paragraph>
        To avoid passing the <InlineCode>StyleNames</InlineCode> &amp; <InlineCode>Namespaces</InlineCode> each time, you can tightly couple the types to the <strong className="font-semibold">Stylish</strong> components &amp; <strong className="font-semibold">Stylers</strong> easily.
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
          To save time &amp; effort, Stylo provides these wrapper hooks &amp; components, which are located at <strong className="font-semibold">/node_modules/react-native-stylo/lib/tightly-coupled/*.ts[x]</strong>.
          Simply copy these to you app.
          Please note, these wrapper hooks &amp; components import the types using a relative path <InlineCode>{`import { TTextStyle } from "../themes/types"`}</InlineCode>.
          If your theme types are defined at some other location then just change these type import paths in these hooks &amp; components.
        </Paragraph>
        <Paragraph>
          <strong className="font-semibold">E.g. Tightly coupled stylish Text component from the library</strong>
        </Paragraph>
        <CodeSnippet>
          {`import React from 'react';
import { Text as StyloText, TTextProps } from '../../stylo';
import { TTextStyle } from '../themes/types';

const Text:React.FC<TTextProps<TTextStyle>> = props => (
  <StyloText {...props} />;
};

export default Text;`}
        </CodeSnippet>
        <Paragraph>
          <strong className="font-semibold">E.g. Tightly coupled useTextStyles() styler hook from the library</strong>
        </Paragraph>
        <CodeSnippet>
          {`import { useTextStyles as rnsUseTextStyles } from 'react-native-stylo';
import { TTextStyle } from '../themes/types';

const useTextStyles = (
  styleNames: TTextStyle[] | undefined,
  styleNamespace?: string,
) => rnsUseTextStyles<TTextStyle>(styleNames, styleNamespace);

export default useTextStyles;`}
        </CodeSnippet>
      </section>
    </article>
  </Layout>
);

export default TightCoupling;
