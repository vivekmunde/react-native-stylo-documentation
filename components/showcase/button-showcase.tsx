import React from 'react';

import ShowCaseBox from '../showcase-box';

const ButtonShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>
  <Stylish.TouchableOpacity
    styleNames={['Button', 'BackgroundColor.Primary', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Color.White']}>
      Submit
    </Stylish.Text>
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Small', 'BackgroundColor.Info', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Small', 'Color.White']}>
      Small
    </Stylish.Text>
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Large', 'BackgroundColor.Warning', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Large', 'Color.White']}>
      Large
    </Stylish.Text>
  </Stylish.TouchableOpacity>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>
  <Stylish.TouchableOpacity
    styleNames={['Button', 'Border', 'Border.Color.Primary', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Color.Primary']}>
      Bordered
    </Stylish.Text>
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Small', 'Border', 'Border.Color.Info', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Small', 'Color.Info']}>
      Small
    </Stylish.Text>
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Large', 'Border', 'Border.Color.Warning', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Large', 'Color.Warning']}>
      Large
    </Stylish.Text>
  </Stylish.TouchableOpacity>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row']}>
  <Stylish.TouchableOpacity
    style={{ flex: 1 }}
    styleNames={['Button', 'BackgroundColor.Info', 'Margin.Right.Mini', 'Margin.Bottom']}>
    <Stylish.Icon.AntDesign name="left" styleNames={['Button.Icon', 'Button.Icon.Left', 'Color.White']} />
    <Stylish.Text styleNames={['Button.Text', 'Color.White']}>
      Previous
    </Stylish.Text>
  </Stylish.TouchableOpacity>
  <Stylish.TouchableOpacity
    style={{ flex: 1 }}
    styleNames={['Button', 'BackgroundColor.Info', 'Margin.Left.Mini', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Color.White']}>
      Next
    </Stylish.Text>
    <Stylish.Icon.AntDesign name="right" styleNames={['Button.Icon', 'Button.Icon.Right', 'Color.White']} />
  </Stylish.TouchableOpacity>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row']}>
  <Stylish.TouchableOpacity
    style={{ flex: 1 }}
    styleNames={['Button', 'Border', 'Border.Color.Danger', 'Flex.JustifyContent.SpaceBetween', 'BackgroundColor.White', 'Margin.Right.Mini', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Color.Danger']}>
      More
    </Stylish.Text>
    <Stylish.Icon.AntDesign name="arrowright" styleNames={['Button.Icon', 'Color.Danger']} />
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    style={{ flex: 1 }}
    styleNames={['Button', 'Border', 'Border.Color.Warning', 'Flex.JustifyContent.SpaceBetween', 'BackgroundColor.White', 'Margin.Left.Mini', 'Margin.Bottom']}>
    <Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>
      <Stylish.Icon.AntDesign name="home" styleNames={['Button.Icon', 'Button.Icon.Left', 'Color.Warning']} />
      <Stylish.Text styleNames={['Button.Text', 'Color.Warning']}>
        Home
      </Stylish.Text>
    </Stylish.View>
    <Stylish.Icon.AntDesign name="right" styleNames={['Button.Icon', 'Color.Warning']} />
  </Stylish.TouchableOpacity>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>
  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Round', 'BackgroundColor.Primary', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Color.White']}>
      Submit
    </Stylish.Text>
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Round', 'Button.Small', 'BackgroundColor.Info', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Small', 'Color.White']}>
      Small
    </Stylish.Text>
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Round', 'Button.Large', 'BackgroundColor.Warning', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Large', 'Color.White']}>
      Large Button
    </Stylish.Text>
  </Stylish.TouchableOpacity>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>
  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Round', 'Border', 'Border.Color.Primary', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Color.Primary']}>
      Submit
    </Stylish.Text>
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Round', 'Button.Small', 'Border', 'Border.Color.Info', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Small', 'Color.Info']}>
      Small
    </Stylish.Text>
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Round', 'Button.Large', 'Border', 'Border.Color.Warning', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Text styleNames={['Button.Text', 'Large', 'Color.Warning']}>
      Large Button
    </Stylish.Text>
  </Stylish.TouchableOpacity>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>
  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Circle', 'BackgroundColor.Primary', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Icon.AntDesign name="left" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Color.White']} />
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Small', 'Button.Circle', 'BackgroundColor.Info', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Icon.AntDesign name="home" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Button.Circle.Icon.Small', 'Color.White']} />
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Large', 'Button.Circle', 'BackgroundColor.Warning', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Icon.AntDesign name="right" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Button.Circle.Icon.Large', 'Color.White']} />
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Circle', 'Border', 'Border.Color.Primary', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Icon.AntDesign name="left" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Color.Primary']} />
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Small', 'Button.Circle', 'Border', 'Border.Color.Info', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Icon.AntDesign name="home" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Button.Circle.Icon.Small', 'Color.Info']} />
  </Stylish.TouchableOpacity>

  <Stylish.TouchableOpacity
    styleNames={['Button', 'Button.Large', 'Button.Circle', 'Border', 'Border.Color.Warning', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>
    <Stylish.Icon.AntDesign name="right" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Button.Circle.Icon.Large', 'Color.Warning']} />
  </Stylish.TouchableOpacity>
</Stylish.View>

<Stylish.TouchableOpacity
  styleNames={['Button', 'BackgroundColor.Primary', 'Flex.JustifyContent.SpaceBetween', 'Margin.Bottom']}>
  <Stylish.Text styleNames={['Button.Text', 'Color.White']}>
    Submit
  </Stylish.Text>
  <ActivityIndicator size="small" color={colorWhite} />
</Stylish.TouchableOpacity>

<Stylish.TouchableOpacity
  styleNames={['Button', 'Border', 'Border.Color.Primary', 'Margin.Bottom']}>
  <ActivityIndicator size="small" color={colorPrimary} />
</Stylish.TouchableOpacity>`}
    imageAlt="Button"
    imageUrl="showcase-button.png"
  />
);

export default ButtonShowCase;
