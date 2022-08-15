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
    'BackgroundColor.Success',
    'Padding',
    'Border.Radius',
    'Margin.Bottom',
  ]}>
  <Stylish.Text styleNames={['Color.White']}>
    BackgroundColor.Success
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
    imageUrl={{ light: "showcase-background-color-light.png", dark: "showcase-background-color-dark.png" }}
  />
);

export default BackgroundColorsShowCase;
