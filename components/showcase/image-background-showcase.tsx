import React from 'react';

import ShowCaseBox from '../showcase-box';

const ImageBackgroundShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.ImageBackground
  style={{ flex: 1 }}
  source={require('../images/screen-bg-light-1.png')} // OR screen-bg-dark-1.png for Dark theme
  styleNames={['Padding.Large']}>
    <Stylish.Text styleNames={['H1']}>
      ImageBackground
    </Stylish.Text>
    <Stylish.Text styleNames={['Paragraph']}>
      Stylo follows a philosophy called Styles only, with which it provides only the style definitions & does not provide any behavioral/action components like Card, Badge, Picker etc. The library provides extensive style definitions enough to style/create all kinds of components, right from simple Text to complicated Pickers & Forms.
    </Stylish.Text>
    <Stylish.Text styleNames={['Paragraph']}>
      Stylo provides a default theme with pre-defined style types and styles. App can copy these & then can immediately start using it or even modify them as per needs.
    </Stylish.Text>
    <Stylish.TouchableOpacity
      styleNames={['Button', 'Button.Small', 'Border', 'Border.Color.Primary', 'Flex.JustifyContent.SpaceBetween', 'Margin.Top.Large']}>
      <Stylish.Text styleNames={['Button.Text', 'Color.Primary']}>
        Read next article
      </Stylish.Text>
      <Stylish.Icon.AntDesign name="right" styleNames={['Button.Icon', 'Color.Primary']} />
    </Stylish.TouchableOpacity>
</Stylish.ImageBackground>`}
    imageAlt="ImageBackground"
    imageUrl={{ light: "showcase-image-background.png", dark: "showcase-image-background-dark.png" }}
  />
);

export default ImageBackgroundShowCase;
