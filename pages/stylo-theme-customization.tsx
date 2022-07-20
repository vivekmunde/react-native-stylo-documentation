import Head from 'next/head';
import React from 'react';
import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeCustomization: React.FC = () => (
  <Layout
    renderNavigation={() => <StyloThemeNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Customizing Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Customizing Stylo theme</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="theme-structure" level={4}>
              Theme structure
            </SectionHeading>
            <CodeSnippet>
              {`themes
    |- default
      |- __generated__
      |- assorted
      |- components
      |- generic
    |- types
      |- __generated__
      |- assorted
      |- components
      |- generic`}
            </CodeSnippet>

            <section className="no-vertical-margin-collapse">
              <SectionHeading id="types" level={5}>
                types
              </SectionHeading>
              <Paragraph>
                All the types are defined under the directory called <InlineCode>types</InlineCode>.
              </Paragraph>
            </section>

            <section className="no-vertical-margin-collapse">
              <SectionHeading id="default" level={5}>
                default
              </SectionHeading>
              <Paragraph>
                {`It's`} the Stylo theme.
              </Paragraph>
            </section>

            <section className="no-vertical-margin-collapse">
              <SectionHeading id="__generated__" level={5}>
                __generated__
              </SectionHeading>
              <Paragraph>
                The default style definitions, created by Stylo, are defined under directory called <InlineCode>__generated__</InlineCode>.
                These style definitions are used across all the other files in the theme.
                Do not directly modify the files under <InlineCode>__generated__</InlineCode>.
              </Paragraph>
            </section>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="customize" level={3}>
              How to customize?
            </SectionHeading>
            <Paragraph>
              Any file which is outside of the directory <InlineCode>__generated__</InlineCode> can be modified.
              All the files, which are meant to be modified, clearly state that they can be modified, like below.
            </Paragraph>
            <CodeSnippet>
              {`/* -------------------------------------------------------------------------------- */
  /*                               react-native-stylo                                 */
  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
  /* -------------------------------------------------------------------------------- */
  
  /* -------------------------------------------------------------------------------- */
  /*                           Customize as per your needs                            */
  /* -------------------------------------------------------------------------------- */`}
            </CodeSnippet>

            <section className="no-vertical-margin-collapse">
              <SectionHeading id="customize-variables" level={5}>
                Variables
              </SectionHeading>
              <Paragraph>
                All the variables are defined in the file called <InlineCode>variable.ts</InlineCode>.
                Open the <InlineCode>variable.ts</InlineCode> file from the theme &amp; modify them as per your needs.
              </Paragraph>
            </section>

            <section className="no-vertical-margin-collapse">
              <SectionHeading id="customize-style-defs" level={3}>
                Examples
              </SectionHeading>

              <section className="no-vertical-margin-collapse">
                <h5>
                  Background colors
                </h5>
                <Paragraph>
                  <strong className="font-semibold">1. Add type definition</strong>
                  <br />
                  <br />
                  Open the file <InlineCode>types/generic/background-color.ts</InlineCode>.
                  Add new background color names as per your need.
                </Paragraph>
                <CodeSnippet>
                  {`/* -------------------------------------------------------------------------------- */
  /*                               react-native-stylo                                 */
  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
  /* -------------------------------------------------------------------------------- */
  
  /* -------------------------------------------------------------------------------- */
  /*                           Customize as per your needs                            */
  /* -------------------------------------------------------------------------------- */
  
  import _TBackgroundColorStyle from '../__generated__/generic/background-color';
  
  type TBackgroundColorStyle = _TBackgroundColorStyle | 'BackgroundColor.Pink' | 'BackgroundColor.Violet';
  
  export default TBackgroundColorStyle;`}
                </CodeSnippet>
                <Paragraph>
                  <strong className="font-semibold">2. Add style definition</strong>
                  <br />
                  <br />
                  Open the file <InlineCode>default/generic/background-color.ts</InlineCode>.
                  Add new background colors, against the types defined in step 1, as per your need.
                </Paragraph>
                <CodeSnippet>
                  {`/* -------------------------------------------------------------------------------- */
  /*                               react-native-stylo                                 */
  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
  /* -------------------------------------------------------------------------------- */
  
  /* -------------------------------------------------------------------------------- */
  /*                           Customize as per your needs                            */
  /* -------------------------------------------------------------------------------- */
  
  import { StyleSheet } from 'react-native';
  import _BackgroundColorStyles from '../__generated__/generic/background-color-styles';
  
  const BackgroundColorStyles = StyleSheet.create({
    ..._BackgroundColorStyles,
    'BackgroundColor.Pink': {
      backgroundColor: '#FF69B4',
    },
    'BackgroundColor.Violet': {
      backgroundColor: '#EE82EE',
    }
  });
  
  export default BackgroundColorStyles;`}
                </CodeSnippet>
              </section>

              <section className="no-vertical-margin-collapse">
                <h5>
                  Extend theme by adding new styles: Card
                </h5>
                <Paragraph>
                  You can easily add a new styles which do not exist in the theme.
                  For example, Card styles.
                  <br />
                  <br />
                  <strong className="font-semibold">1. Define style types</strong>
                  <br />
                  <br />
                  Create a new file under directory <InlineCode>types</InlineCode> as <InlineCode>types/assorted/card.ts</InlineCode>.
                </Paragraph>
                <CodeSnippet>
                  {`/* -------------------------------------------------------------------------------- */
  /*                               react-native-stylo                                 */
  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
  /* -------------------------------------------------------------------------------- */
  
  /* -------------------------------------------------------------------------------- */
  /*                           Customize as per your needs                            */
  /* -------------------------------------------------------------------------------- */
  
  export type TCardStyle = 'Card' | 'Card.Header' | 'Card.Body' | 'Card.Footer';`}
                </CodeSnippet>
                <Paragraph>
                  <strong className="font-semibold">2. Create style definitions</strong>
                  <br />
                  <br />
                  Create a new file under directory <InlineCode>default</InlineCode> as <InlineCode>default/assorted/card.ts</InlineCode>.
                </Paragraph>
                <CodeSnippet>
                  {`/* -------------------------------------------------------------------------------- */
  /*                               react-native-stylo                                 */
  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
  /* -------------------------------------------------------------------------------- */
  
  /* -------------------------------------------------------------------------------- */
  /*                           Customize as per your needs                            */
  /* -------------------------------------------------------------------------------- */
  
  import { StyleSheet } from 'react-native';
  import Variables from '../variables';
  
  const CardStyles = StyleSheet.create({
    Card: {
      borderRadius: Variables['Border.Radius'],
      flexDirection: 'column',
    },
    'Card.Header': {
      padding: Variables.Padding,
      borderTopLeftRadius: Variables['Border.Radius'],
      borderTopRightRadius: Variables['Border.Radius'],
      borderBottomWidth: 1,
      borderBottomColor: Variables['Border.Color'],
    },
    'Card.Body': {
      padding: Variables.Padding,
    },
    'Card.Footer': {
      padding: Variables.Padding,
      borderBottomLeftRadius: Variables['Border.Radius'],
      borderBottomRightRadius: Variables['Border.Radius'],
      borderTopWidth: 1,
      borderTopColor: Variables['Border.Color'],
    },
  });
  
  export default CardStyles;`}
                </CodeSnippet>
                <Paragraph>
                  <strong className="font-semibold">3. Add these styles to View &amp; Touchable styles</strong>
                  <br />
                  <br />
                  Open <InlineCode>default/components/view-styles.ts</InlineCode>
                </Paragraph>
                <CodeSnippet>
                  {`/* -------------------------------------------------------------------------------- */
  /*                               react-native-stylo                                 */
  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
  /* -------------------------------------------------------------------------------- */
  
  /* -------------------------------------------------------------------------------- */
  /*                           Customize as per your needs                            */
  /* -------------------------------------------------------------------------------- */
  
  import { StyleSheet } from 'react-native';
  import CardStyles from '../assorted/card-styles';
  ... // other imports
  
  const ViewStyles = StyleSheet.create({
    ... // other styles
    ...CardStyles,
  });
  
  export default ViewStyles;`}
                </CodeSnippet>
                <Paragraph>
                  Open <InlineCode>default/components/touchable-styles.ts</InlineCode>
                </Paragraph>
                <CodeSnippet>
                  {`/* -------------------------------------------------------------------------------- */
  /*                               react-native-stylo                                 */
  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
  /* -------------------------------------------------------------------------------- */
  
  /* -------------------------------------------------------------------------------- */
  /*                           Customize as per your needs                            */
  /* -------------------------------------------------------------------------------- */
  
  import { StyleSheet } from 'react-native';
  import CardStyles from '../assorted/card-styles';
  ... // other imports
  
  const TouchableStyles = StyleSheet.create({
    ... // other styles
    ...CardStyles,
  });
  
  export default TouchableStyles;`}
                </CodeSnippet>
              </section>

            </section>
          </section>
        </article>
      </React.Fragment >)}
  />
);

export default StyloThemeCustomization;
