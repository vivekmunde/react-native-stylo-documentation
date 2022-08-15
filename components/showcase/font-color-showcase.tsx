import React from 'react';

import ShowCaseBox from '../showcase-box';

const FontColorShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.Text
  styleNames={['Margin.Bottom']}>
  Default Color
</Stylish.Text>

<Stylish.Text
  styleNames={['Color.Primary', 'Margin.Bottom']}>
  Color.Primary
</Stylish.Text>

<Stylish.Text
  styleNames={['Color.Success', 'Margin.Bottom']}>
  Color.Success
</Stylish.Text>

<Stylish.Text
  styleNames={['Color.Info', 'Margin.Bottom']}>
  Color.Info
</Stylish.Text>

<Stylish.Text
  styleNames={['Color.Warning', 'Margin.Bottom']}>
  Color.Warning
</Stylish.Text>

<Stylish.Text
  styleNames={['Color.Danger', 'Margin.Bottom']}>
  Color.Danger
</Stylish.Text>`}
    imageAlt="FontColor"
    imageUrl={{ light: "showcase-font-color.png", dark: "showcase-font-color-dark.png" }}
  />
);

export default FontColorShowCase;
