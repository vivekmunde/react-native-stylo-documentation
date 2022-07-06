import React from 'react';

import ShowCaseBox from '../showcase-box';

const TextInputShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.TextInput
  styleNames={['Border', 'BackgroundColor.White', 'Margin.Bottom.Large']}
  value="Stylo" />

<Stylish.TextInput
  styleNames={['Border', 'Border.Color.Grey7', 'BackgroundColor.White', 'Bold', 'Margin.Bottom.Large']}
  value="A Bold Impression!" />

<Stylish.TextInput
  styleNames={['Border', 'Border.Color.Danger', 'Color.Danger', 'BackgroundColor.Danger1', 'Margin.Bottom.Large']}
  value="An invalid value" />

<Stylish.TextInput
  styleNames={['Align.Center', 'Border', 'BackgroundColor.White', 'Margin.Bottom.Large']}
  value="Center" />

<Stylish.TextInput
  styleNames={['Align.Right', 'Border', 'BackgroundColor.White', 'Margin.Bottom.Large']}
  value="Right" />

<Stylish.TextInput
  styleNames={['Border', 'BackgroundColor.White', 'Small', 'Margin.Bottom.Large']}
  value="A small input" />

<Stylish.TextInput
  styleNames={['Border', 'BackgroundColor.White', 'Large', 'Margin.Bottom.Large']}
  value="A larger input" />

<Stylish.TextInput
  styleNames={['Border', 'BackgroundColor.White', 'Padding.Large', 'Margin.Bottom.Large']}
  value="A relaxed input" />`}
    imageAlt="TextInput"
    imageUrl="showcase-text-input.png"
  />
);

export default TextInputShowCase;
