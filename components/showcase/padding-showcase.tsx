import React from 'react';

import ShowCaseBox from '../showcase-box';

const PaddingShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.View
  styleNames={[
    'Padding',
    'Border',
    'Border.Radius',
    'Border.Color.Primary2',
    'BackgroundColor.White',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Padding</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Padding.Small',
    'Border',
    'Border.Radius',
    'Border.Color.Primary2',
    'BackgroundColor.White',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Padding.Small</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Padding.Large',
    'Border',
    'Border.Radius',
    'Border.Color.Primary2',
    'BackgroundColor.White',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Padding.Large</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Padding.Left.Large',
    'Padding.Top.Small',
    'Padding.Right.Small',
    'Padding.Bottom.Small',
    'Border',
    'Border.Radius',
    'Border.Color.Primary2',
    'BackgroundColor.White',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Padding.Left.Large</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Padding.Right.Large',
    'Padding.Top.Small',
    'Padding.Bottom.Small',
    'Padding.Left.Small',
    'Border',
    'Border.Radius',
    'Border.Color.Primary2',
    'BackgroundColor.White',
    'Margin.Bottom',
    'Flex.AlignItems.End',
  ]}>
  <Stylish.Text>Padding.Right.Large</Stylish.Text>
</Stylish.View>`}
    imageAlt="Padding"
    imageUrl="showcase-padding.png"
    imageUrlDark="showcase-padding-dark.png"
  />
);

export default PaddingShowCase;
