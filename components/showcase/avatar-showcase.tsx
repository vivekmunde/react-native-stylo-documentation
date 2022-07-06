import React from 'react';

import ShowCaseBox from '../showcase-box';

const AvatarShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Flex.AlignContent.Center']}>
  <Stylish.Image
    source={require('../../images/face-icon-1.png')}
    styleNames={['Avatar', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
  <Stylish.Image
    source={require('../../images/face-icon-1.png')}
    styleNames={['Avatar', 'Avatar.Small', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
  <Stylish.Image
    source={require('../../images/face-icon-1.png')}
    styleNames={['Avatar', 'Avatar.Large', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Flex.AlignContent.Center']}>
  <Stylish.Image
    source={require('../../images/face-icon-1.png')}
    styleNames={['Avatar', 'Avatar.Square', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
  <Stylish.Image
    source={require('../../images/face-icon-1.png')}
    styleNames={['Avatar', 'Avatar.Small', 'Avatar.Square', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
  <Stylish.Image
    source={require('../../images/face-icon-1.png')}
    styleNames={['Avatar', 'Avatar.Large', 'Avatar.Square', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Flex.AlignContent.Center']}>
  <Stylish.View
    styleNames={['Avatar.Jacket', 'Avatar.Jacket.Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar']}
    />
  </Stylish.View>
  <Stylish.View
    styleNames={['Avatar.Jacket', 'Avatar.Jacket.Small', 'Avatar.Jacket.Small.Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Small']}
    />
  </Stylish.View>
  <Stylish.View
    styleNames={['Avatar.Jacket', 'Avatar.Jacket.Large', 'Avatar.Jacket.Large.Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Large']}
    />
  </Stylish.View>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Flex.AlignContent.Center']}>
  <Stylish.View
    styleNames={['Avatar.Jacket', 'Avatar.Jacket.Border', 'Avatar.Jacket.Square', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Square']}
    />
  </Stylish.View>
  <Stylish.View
    styleNames={['Avatar.Jacket', 'Avatar.Jacket.Small', 'Avatar.Jacket.Small.Border', 'Avatar.Jacket.Square', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Small', 'Avatar.Square']}
    />
  </Stylish.View>
  <Stylish.View
    styleNames={['Avatar.Jacket', 'Avatar.Jacket.Large', 'Avatar.Jacket.Large.Border', 'Avatar.Jacket.Square', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Large', 'Avatar.Square']}
    />
  </Stylish.View>
</Stylish.View>`}
    imageAlt="Avatar"
    imageUrl="showcase-avatar.png"
  />
);

export default AvatarShowCase;
