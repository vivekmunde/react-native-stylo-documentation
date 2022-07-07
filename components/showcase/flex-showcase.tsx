import React from 'react';

import ShowCaseBox from '../showcase-box';

const FlexShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.View
  styleNames={[
    'Flex.Row',
    'Border',
    'Border.Radius',
    'BackgroundColor.White',
    'Border.Color.Primary2',
    'Padding',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Flex </Stylish.Text>
  <Stylish.Text>Direction </Stylish.Text>
  <Stylish.Text>Row</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Flex.Row',
    'Flex.JustifyContent.Center',
    'Border',
    'Border.Radius',
    'BackgroundColor.White',
    'Border.Color.Primary2',
    'Padding',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Flex Row </Stylish.Text>
  <Stylish.Text>Justify </Stylish.Text>
  <Stylish.Text>Center</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Flex.Row',
    'Flex.JustifyContent.End',
    'Border',
    'Border.Radius',
    'BackgroundColor.White',
    'Border.Color.Primary2',
    'Padding',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Flex Row </Stylish.Text>
  <Stylish.Text>Justify </Stylish.Text>
  <Stylish.Text>End</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Flex.Row',
    'Flex.JustifyContent.SpaceBetween',
    'Border',
    'Border.Radius',
    'BackgroundColor.White',
    'Border.Color.Primary2',
    'Padding',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Flex Row</Stylish.Text>
  <Stylish.Text>Justify</Stylish.Text>
  <Stylish.Text>SpaceBetween</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Flex.Column',
    'Border',
    'Border.Radius',
    'BackgroundColor.White',
    'Border.Color.Primary2',
    'Padding',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Flex</Stylish.Text>
  <Stylish.Text>Direction</Stylish.Text>
  <Stylish.Text>Column</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Flex.Column',
    'Flex.AlignItems.End',
    'Border',
    'Border.Radius',
    'BackgroundColor.White',
    'Border.Color.Primary2',
    'Padding',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Flex Column</Stylish.Text>
  <Stylish.Text>Align Items</Stylish.Text>
  <Stylish.Text>End</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Flex.Column',
    'Flex.AlignItems.Center',
    'Border',
    'Border.Radius',
    'BackgroundColor.White',
    'Border.Color.Primary2',
    'Padding',
    'Margin.Bottom',
  ]}>
  <Stylish.Text>Flex Column</Stylish.Text>
  <Stylish.Text>Align Items</Stylish.Text>
  <Stylish.Text>Cender</Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'Flex.Row',
    'Border',
    'Border.Radius',
    'BackgroundColor.White',
    'Border.Color.Primary2',
    'Margin.Bottom',
  ]}>
  <Stylish.View
    styleNames={[
      'Flex.1',
      'Flex.AlignItems.Center',
      'Padding',
      'Border.Right',
      'Border.Color.Primary2',
    ]}>
    <Stylish.Text>Flex.1</Stylish.Text>
  </Stylish.View>
  <Stylish.View
    styleNames={[
      'Flex.2',
      'Flex.AlignItems.Center',
      'Padding',
      'Border.Right',
      'Border.Color.Primary2',
    ]}>
    <Stylish.Text>Flex.2</Stylish.Text>
  </Stylish.View>
  <Stylish.View
    styleNames={['Flex.3', 'Flex.AlignItems.Center', 'Padding']}>
    <Stylish.Text>Flex.3</Stylish.Text>
  </Stylish.View>
</Stylish.View>`}
    imageAlt="Flex"
    imageUrl="showcase-flex.png"
  />
);

export default FlexShowCase;
