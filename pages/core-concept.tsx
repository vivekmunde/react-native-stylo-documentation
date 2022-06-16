import Head from 'next/head';
import React from 'react';
import CodeSnippet from '../components/code-snippet';

import ExternalLink from '../components/external-link';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';

const CoreConcept: React.FC = () => (
  <Layout>
    <Head>
      <title>Core concept | React Native Stylo</title>
      <meta name="description" content="Completely detached and highly scalable React Native styles" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <article>
      <h1 className="font-extralight">Core concept</h1>
      <section>
        <h4 className="heading" id="styles-and-themes">
          <a href="#styles-and-themes">
            Styles &amp; Theme
          </a>
        </h4>
        <p>
          Theme is nothing but a collection of styles defined using the React Native API <InlineCode>StyleSheet.create()</InlineCode>.
          The theme is used by the library and its hooks/components to apply styles to the React Native components.
        </p>
      </section>
      <section>
        <h4 className="heading" id="styles-only">
          <a href="#styles-only">
            Styles only
          </a>
        </h4>
        <p>
          Each mobile app has its own requirements of components, so a set of predefined components, like Screen, Card, List, Form etc., cannot be completely suitable for mobiles apps.
          Also, having predefined components cannot be highly scalable or flexible enough to serve all requirements.
          These predefined components need to expose few props to add scalability &amp; behavioral flexibility, but again these extra props neither make them fully scalable nor completely suitable.&nbsp;
          <strong>React Native Stylo</strong> only provides style definitions and does not provide any layout/behavioral/action components like Card, Badge, Picker etc.
          However, the library provides all the style definitions needed to build all kinds of components, right from text to complicated pickers &amp; forms.
        </p>
      </section>
      <section>
        <h4 className="heading" id="styles-completely-detached">
          <a href="#styles-completely-detached">
            Styles completely detached
          </a>
        </h4>
        <p>
          The style definitions or themes are completely detached from the library.
          The library only provides a set of hooks and extended <ExternalLink href="https://reactnative.dev">React Native</ExternalLink> components.
          The style definitions can be defined (not just customized) by the consumer application the way it wants and not the way the library wants.
          The consumer application has the entire ownership &amp; liberty of defining the style names (similar to class name in css/web) or their patterns.
          However, it provides a set of predefined themes. These can be used as is or can be considered as a guidelines or which can be customized easily as per needs.
        </p>
      </section>
      <section>
        <h4 className="heading" id="strongly-typed-styles">
          <a href="#strongly-typed-styles">
            Strongly typed styles
          </a>
        </h4>
        <p>
          The styles are strongly typed. So the accidental usage of using wrong style name is completely avoided out of the box.
          On top of that, the style names are strongly typed per React Native component, like View, Text, TouchableOpacity etc. This adds an extra level of strong typing with which only the styles names which are intended for the component can be used.
        </p>
      </section>
      <section>
        <h4 className="heading" id="react-components">
          <a href="#react-components">
            After all, these are just React Native components
          </a>
        </h4>
        <p>
          The library just adds a new property called <InlineCode>styleNames</InlineCode> to <ExternalLink href="https://reactnative.dev">React Native</ExternalLink> components.
          The property <InlineCode>styleNames</InlineCode> in React Native mobile app is just like <InlineCode>class</InlineCode> in web app.
          The style names are defined in the theme, e.g. <InlineCode>List</InlineCode>, <InlineCode>List.Item</InlineCode>, <InlineCode>Color.Primary</InlineCode>, <InlineCode>Border</InlineCode>, <InlineCode>Size.Large</InlineCode> etc.
          Just supply these names of the styles to the prop <InlineCode>styleNames</InlineCode> and it will pick the style definitions from theme and apply to the React Native component.
          The library does not add any other behavior or action to the React Native components.
          This keeps the React Native components as pure as they are defined by React Native.
        </p>
        <CodeSnippet>
          {`<View styleNames={['Card', 'Border', 'Border.Radius', 'BackgroundColor.Primary']}>
  <View styleNames={['Card.Header]}>
    <Text styleNames={['Card.Title']}>
      React Native Stylo
    </Text>
  </View>
  <View styleNames={['Card.Body]}>
    <Text>
      Highly scalable style definitions & components
    </Text>
  </View>
</View>`}
        </CodeSnippet>
        <p>
          Using <InlineCode>TouchableOpacity</InlineCode> as <InlineCode>Card</InlineCode>.
        </p>
        <CodeSnippet>
          {`<TouchableOpacity
  styleNames={['Card', 'Border', 'Border.Radius', 'BackgroundColor.Primary']}
  onPress={()=> {
    navigation.navigateTo('ReactNativeStylo');
  }}
>
  <View styleNames={['Card.Header]}>
    <Text styleNames={['Card.Title']}>
      React Native Stylo
    </Text>
  </View>
  <View styleNames={['Card.Body]}>
    <Text>
      Highly scalable style definitions & components
    </Text>
  </View>
</TouchableOpacity>`}
        </CodeSnippet>
      </section>
    </article>
  </Layout>
);

export default CoreConcept;
