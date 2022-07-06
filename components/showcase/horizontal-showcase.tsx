import React from 'react';

import ShowCaseBox from '../showcase-box';

const HorizontalShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.View styleNames={['Horizontal', 'Margin.Bottom.Large']}>
  <Stylish.View styleNames={['Horizontal.Left']}>
    <Stylish.TouchableOpacity styleNames={['Button', 'Button.Circle', 'BackgroundColor.White']}>
      <Stylish.Icon.AntDesign name="left" styleNames={['Button.Icon', 'Button.Circle.Icon']} />
    </Stylish.TouchableOpacity>
  </Stylish.View>
  <Stylish.View styleNames={['Horizontal.Body', 'Padding.Left', 'Padding.Right']}>
    <Stylish.Text styleNames={['Large', 'Bold']}>Title</Stylish.Text>
  </Stylish.View>
  <Stylish.View styleNames={['Horizontal.Right']}>
    <ActivityIndicator size="small" />
  </Stylish.View>
</Stylish.View>

<Stylish.View styleNames={['Border.Radius', 'BackgroundColor.Success', 'Margin.Bottom.Large']}>
  <Stylish.View styleNames={['Horizontal']}>
    <Stylish.View styleNames={['Horizontal.Left', 'Padding']}>
      <Stylish.Icon.AntDesign name="check" styleNames={['Color.White']} />
    </Stylish.View>
    <Stylish.View styleNames={['Horizontal.Body', 'Padding.Top', 'Padding.Bottom']}>
      <Stylish.Text styleNames={['Color.White']}>The details were saved successfully!</Stylish.Text>
    </Stylish.View>
    <Stylish.TouchableOpacity styleNames={['Horizontal.Right', 'Padding']}>
      <Stylish.Icon.AntDesign name="close" styleNames={['Color.White']} />
    </Stylish.TouchableOpacity>
  </Stylish.View>
</Stylish.View>

<Stylish.View styleNames={['Border.Radius', 'BackgroundColor.White']}>
  <Stylish.View styleNames={['Horizontal']}>
    <Stylish.View styleNames={['Horizontal.Left', 'Padding']}>
      <Stylish.Image source={require('../../images/face-icon-2.png')} styleNames={['Avatar', 'Avatar.Square']} />
    </Stylish.View>
    <Stylish.View styleNames={['Horizontal.Body', 'Padding.Top', 'Padding.Bottom']}>
      <Stylish.Text styleNames={['Bold']}>Payment request</Stylish.Text>
      <Stylish.Text>Nalini S. Sharma</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['Horizontal.Right', 'Padding']}>
      <Stylish.Text styleNames={['Bold', 'Large']}>$ 34.72</Stylish.Text>
    </Stylish.View>
  </Stylish.View>
  <Stylish.View styleNames={['Horizontal', 'Padding.Left', 'Padding.Right', 'Padding.Bottom']}>
    <Stylish.View styleNames={['Horizontal.Body']}>
      <Stylish.Text>Coffee Delite</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['Horizontal.Right']}>
      <Stylish.Text>36.00</Stylish.Text>
    </Stylish.View>
  </Stylish.View>
  <Stylish.View styleNames={['Horizontal', 'Padding.Left', 'Padding.Right', 'Padding.Bottom']}>
    <Stylish.View styleNames={['Horizontal.Body']}>
      <Stylish.Text>Discount</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['Horizontal.Right']}>
      <Stylish.Text>-03.25</Stylish.Text>
    </Stylish.View>
  </Stylish.View>
  <Stylish.View styleNames={['Horizontal', 'Padding.Left', 'Padding.Right']}>
    <Stylish.View styleNames={['Horizontal.Body']}>
      <Stylish.Text>Tax</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['Horizontal.Right']}>
      <Stylish.Text>01.97</Stylish.Text>
    </Stylish.View>
  </Stylish.View>
  <Stylish.View styleNames={['Horizontal']}>
    <Stylish.View styleNames={['Horizontal.Left', 'Padding']}>
      <Stylish.TouchableOpacity
        style={{ width: 88 }}
        styleNames={['Button', 'Button.Small', 'Border', 'Border.Color.Danger']}>
        <Stylish.Text styleNames={['Color.Danger']}>
          Reject
        </Stylish.Text>
      </Stylish.TouchableOpacity>
    </Stylish.View>
    <Stylish.View styleNames={['Horizontal.Right', 'Padding']}>
      <Stylish.TouchableOpacity
        style={{ width: 88 }}
        styleNames={['Button', 'Button.Small', 'Border', 'Border.Color.Success']}>
        <Stylish.Text styleNames={['Color.Success']}>
          Approve
        </Stylish.Text>
      </Stylish.TouchableOpacity>
    </Stylish.View>
  </Stylish.View>
</Stylish.View>`}
    imageAlt="Horizontal"
    imageUrl="showcase-horizontal.png"
  />
);

export default HorizontalShowCase;
