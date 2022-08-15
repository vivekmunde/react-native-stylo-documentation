import React from 'react';

import ShowCaseBox from '../showcase-box';

const ImageShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.Image
  source={require('../images/face-icon-1.png')}
  styleNames={['Avatar', 'Margin.Bottom.Large']}
/>

<Stylish.Image
  source={require('../images/face-icon-3.png')}
  styleNames={['Avatar', 'Avatar.Small', 'Margin.Bottom.Large']}
/>

<Stylish.Image
  source={require('../images/face-icon-2.png')}
  styleNames={['Avatar', 'Avatar.Large', 'Margin.Bottom.Large']}
/>

<Stylish.Image
  source={require('../images/face-icon-2.png')}
  styleNames={['Avatar', 'Avatar.Square', 'Margin.Bottom.Large']}
/>

<Stylish.View
  styleNames={['Avatar.Jacket', 'Avatar.Jacket.Border', 'Border.Color.Cyan7', 'Margin.Bottom.Large']}>
  <Stylish.Image
    source={require('../images/face-icon-2.png')}
    styleNames={['Avatar']}
  />
</Stylish.View>

<Stylish.View styleNames={['Flex.Row']}>
  <Stylish.View
    styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Cyan6', 'BackgroundColor.Cyan1', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Small']}
    />
    <Stylish.Text styleNames={['Color.Cyan6', 'Tag.Text']}>
      Avatar Name
    </Stylish.Text>
  </Stylish.View>
</Stylish.View>`}
    imageAlt="Image"
    imageUrl={{ light: "showcase-image.png", dark: "showcase-image-dark.png" }}
  />
);

export default ImageShowCase;
