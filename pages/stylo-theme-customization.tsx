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
                  Add new background colors
                </h5>
                <Paragraph>
                  <strong className="font-semibold">1. Add type definition</strong>
                </Paragraph>
                <Paragraph>
                  1.1 Open the file <InlineCode>types/variables.ts</InlineCode>.
                  Add new color names as per your need.
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
  
import _TVariable from './__generated__/variable';

type TVariable = _TVariable | 'Color.Pink' | 'Color.Violet';

export default TVariable;`}
                </CodeSnippet>
                <Paragraph>
                  1.2 Open the file <InlineCode>types/generic/background-color.ts</InlineCode>.
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
                </Paragraph>
                <Paragraph>
                  2.1 Open the file <InlineCode>default/variables.ts</InlineCode>.
                  Add new colors, against the types defined in step 1.1, as per your need.
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
  
import TVariable from '../types/variable';
import _Variables from './__generated__/variables';

const Variables: Record<'light' | 'dark', Record<TVariable, string | number>> = {
  light: {
    ..._Variables.light,
    'Color.Pink': '#FF69B4',
    'Color.Violet': '#EE82EE',
  },
  dark: {
    ..._Variables.light,
    'Color.Pink': '#FF69B4',
    'Color.Violet': '#EE82EE',
  },
};

export default Variables;`}
                </CodeSnippet>
                <Paragraph>
                  2.2 Open the file <InlineCode>default/generic/background-color.ts</InlineCode>.
                  Add new background colors, against the types defined in step 1.2, as per your need.
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
  
import { StyleSheet, ViewStyle } from 'react-native';
import { TVariable } from '../../types';
import TBackgroundColorStyle from '../../types/generic/background-color';
import _getBackgroundColorStyles from '../__generated__/generic/background-color-styles';

const getBackgroundColorStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TBackgroundColorStyle, ViewStyle>>({
    ..._getBackgroundColorStyles(variables),
    'BackgroundColor.Pink': {
      backgroundColor: variables['Color.Pink'].toString(),
    },
    'BackgroundColor.Violet': {
      backgroundColor: variables['Color.Violet'].toString(),
    }
  })
);

export default getBackgroundColorStyles;`}
                </CodeSnippet>
              </section>

              <section className="no-vertical-margin-collapse">
                <h5>
                  Extend theme by adding new styles
                  <br />
                  <small>Add style definitions for Card</small>
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
                  <strong className="font-semibold">2. Apply the style types to desired components</strong>
                </Paragraph>
                <Paragraph>
                  The <InlineCode>CardStyle</InlineCode> is expected to be applied to <InlineCode>View</InlineCode> &amp; <InlineCode>Touchable</InlineCode> components.
                  <br />
                  Open the file <InlineCode>types/components/view.ts</InlineCode>.
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

// Other imports
import TCardStyle from '../assorted/card';

type TViewStyle =
  // other style types
  | TCardStyle;

export default TViewStyle;`}
                </CodeSnippet>
                <Paragraph>
                  Open the file <InlineCode>types/components/touchable.ts</InlineCode>.
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

// Other imports
import TCardStyle from '../assorted/card';

type TTouchableStyle =
  // other style types
  | TCardStyle;

export default TViewStyle;`}
                </CodeSnippet>
                <Paragraph>
                  <strong className="font-semibold">3. Create style definitions</strong>
                </Paragraph>
                <Paragraph>
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

const getCardStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create({
    Card: {
      borderRadius: variables['Border.Radius'],
      flexDirection: 'column',
    },
    'Card.Header': {
      padding: variables.Padding,
      borderTopLeftRadius: variables['Border.Radius'],
      borderTopRightRadius: variables['Border.Radius'],
      borderBottomWidth: 1,
      borderBottomColor: variables['Border.Color'],
    },
    'Card.Body': {
      padding: variables.Padding,
    },
    'Card.Footer': {
      padding: variables.Padding,
      borderBottomLeftRadius: variables['Border.Radius'],
      borderBottomRightRadius: variables['Border.Radius'],
      borderTopWidth: 1,
      borderTopColor: variables['Border.Color'],
    },
  })
);

export default getCardStyles;`}
                </CodeSnippet>
                <Paragraph>
                  <strong className="font-semibold">4. Add these styles to View styles</strong>
                </Paragraph>
                <Paragraph>
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
import getCardStyles from '../assorted/card-styles';
... // other imports

const getViewStyles = (variables: Record<TVariable, string | number>) => (
    StyleSheet.create<Record<TViewStyle, ViewStyle>>({
    ... // other styles
    ...getCardStyles(variables),
  })
);

export default getViewStyles;`}
                </CodeSnippet>
                <Paragraph>
                  <strong className="font-semibold">5. Add these styles to Touchable styles</strong>
                </Paragraph>
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
import getCardStyles from '../assorted/card-styles';
... // other imports

const getTouchableStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TTouchableStyle, ViewStyle>>({
    ... // other styles
    ...getCardStyles(variables),
  })
);

export default getTouchableStyles;`}
                </CodeSnippet>
              </section>

            </section>
          </section>
        </article>
      </React.Fragment >)}
  />
);

export default StyloThemeCustomization;
