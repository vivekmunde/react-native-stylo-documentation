import React from 'react';

import ShowCaseBox from '../showcase-box';

const MarginShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `  <Stylish.Text styleNames={['Margin']}>
    Margin (top, right, bottom & left) applied to a text component.
  </Stylish.Text>

  <Stylish.Text styleNames={['Margin.Large']}>
    Large Margin (top, right, bottom & left) applied to a text component.
  </Stylish.Text>

  <Stylish.View
    styleNames={[
      'Margin',
      'Padding',
      'Border',
      'Border.Radius',
      'Border.Color.Primary2',
      'BackgroundColor.White',
    ]}>
    <Stylish.Text>Margin</Stylish.Text>
  </Stylish.View>

  <Stylish.View
    styleNames={[
      'Margin.Large',
      'Padding',
      'Border',
      'Border.Radius',
      'Border.Color.Primary2',
      'BackgroundColor.White',
    ]}>
    <Stylish.Text>Margin.Large</Stylish.Text>
  </Stylish.View>

  <Stylish.View
    styleNames={[
      'Margin.Left',
      'Margin.Bottom',
      'Padding',
      'Border',
      'Border.Radius',
      'Border.Color.Primary2',
      'BackgroundColor.White',
    ]}>
    <Stylish.Text>Margin Left & Bottom</Stylish.Text>
  </Stylish.View>

  <Stylish.View
    styleNames={[
      'Margin.Top',
      'Margin.Right',
      'Padding',
      'Border',
      'Border.Radius',
      'Border.Color.Primary2',
      'BackgroundColor.White',
    ]}>
    <Stylish.Text>Margin Top & Right</Stylish.Text>
  </Stylish.View>`}
    imageAlt="Margin"
    imageUrl="showcase-margin.png"
  />
);

export default MarginShowCase;
