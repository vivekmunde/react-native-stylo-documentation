import React from 'react';

import ShowCaseBox from '../showcase-box';

const BackgroundColorsShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.View
  styleNames={[
    'BackgroundColor.Primary',
    'Padding',
    'Border.Radius',
    'Margin.Bottom',
  ]}>
  <Stylish.Text styleNames={['Color.White']}>
    BackgroundColor.Primary
  </Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'BackgroundColor.Info',
    'Padding',
    'Border.Radius',
    'Margin.Bottom',
  ]}>
  <Stylish.Text styleNames={['Color.White']}>
    BackgroundColor.Info
  </Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'BackgroundColor.Warning',
    'Padding',
    'Border.Radius',
    'Margin.Bottom',
  ]}>
  <Stylish.Text styleNames={['Color.White']}>
    BackgroundColor.Warning
  </Stylish.Text>
</Stylish.View>

<Stylish.View
  styleNames={[
    'BackgroundColor.Danger',
    'Padding',
    'Border.Radius',
    'Margin.Bottom',
  ]}>
  <Stylish.Text styleNames={['Color.White']}>
    BackgroundColor.Danger
  </Stylish.Text>
</Stylish.View>`}
    imageAlt="BackgroundColor"
    imageUrl="showcase-background-color.png"
  />
);

export default BackgroundColorsShowCase;
