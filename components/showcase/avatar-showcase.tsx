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
    styleNames={['Avatar', 'Avatar.Square', 'Margin.Right.Large', 'Margin.Bottom.Large']} />
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
  <Stylish.Image
    source={require('../../images/face-icon-2.png')}
    styleNames={['Avatar', 'Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
  <Stylish.Image
    source={require('../../images/face-icon-2.png')}
    styleNames={['Avatar', 'Avatar.Small', 'Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
  <Stylish.Image
    source={require('../../images/face-icon-2.png')}
    styleNames={['Avatar', 'Avatar.Large', 'Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Flex.AlignContent.Center']}>
  <Stylish.Image
    source={require('../../images/face-icon-2.png')}
    styleNames={['Avatar', 'Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
  <Stylish.Image
    source={require('../../images/face-icon-2.png')}
    styleNames={['Avatar', 'Avatar.Small', 'Avatar.Square', 'Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
  <Stylish.Image
    source={require('../../images/face-icon-2.png')}
    styleNames={['Avatar', 'Avatar.Large', 'Avatar.Square', 'Border', 'Border.Color.Cyan7', 'Margin.Right.Large', 'Margin.Bottom.Large']}
  />
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Flex.AlignContent.Center']}>
  <Stylish.TouchableOpacity styleNames={['Avatar.Jacket', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-1.png')}
      styleNames={['Avatar']}
    />
  </Stylish.TouchableOpacity>
  <Stylish.TouchableOpacity styleNames={['Avatar.Jacket', 'Avatar.Jacket.Small', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-1.png')}
      styleNames={['Avatar', 'Avatar.Small']}
    />
  </Stylish.TouchableOpacity>
  <Stylish.TouchableOpacity styleNames={['Avatar.Jacket', 'Avatar.Jacket.Large', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-1.png')}
      styleNames={['Avatar', 'Avatar.Large']}
    />
  </Stylish.TouchableOpacity>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.Wrap', 'Flex.AlignItems.Center', 'Flex.AlignContent.Center']}>
  <Stylish.TouchableOpacity styleNames={['Avatar.Jacket', 'Avatar.Jacket.Square', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Square']}
    />
  </Stylish.TouchableOpacity>
  <Stylish.TouchableOpacity styleNames={['Avatar.Jacket', 'Avatar.Jacket.Small', 'Avatar.Jacket.Square', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Small', 'Avatar.Square']}
    />
  </Stylish.TouchableOpacity>
  <Stylish.TouchableOpacity styleNames={['Avatar.Jacket', 'Avatar.Jacket.Large', 'Avatar.Jacket.Square', 'Margin.Right.Large', 'Margin.Bottom.Large']}>
    <Stylish.Image
      source={require('../../images/face-icon-2.png')}
      styleNames={['Avatar', 'Avatar.Large', 'Avatar.Square']}
    />
  </Stylish.TouchableOpacity>
</Stylish.View>`}
    imageAlt="Avatar"
    imageUrl="showcase-avatar.png"
  />
);

export default AvatarShowCase;
