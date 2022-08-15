import React from 'react';

import ShowCaseBox from '../showcase-box';

const ScrollViewShowCase: React.FC = () => (
  <ShowCaseBox
    renderCode={() => `<Stylish.Text styleNames={['Bold', 'Margin.Bottom.Mini']}>Recent Invoices</Stylish.Text>
<Stylish.ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  styleNames={['Border', 'Border.Radius', 'Border.Color.Primary2', 'BackgroundColor.White', 'Margin.Bottom.Large']}
  contentContainerStyleNames={['Padding.Mini']}>
  <Stylish.View styleNames={['Padding', 'Border', 'Border.Radius', 'Border.Color.Danger2', 'BackgroundColor.Orange1', 'Margin.Right.Mini']}>
    <Stylish.Text styleNames={['H2']}>$ 76.08</Stylish.Text>
    <Stylish.View styleNames={['Flex.Row', 'Flex.JustifyContent.SpaceBetween']} style={{ width: 128 }}>
      <Stylish.Text>Mar '22</Stylish.Text>
      <Stylish.TouchableOpacity styleNames={['Flex.Row', 'Flex.AlignItems.Center']} hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}>
        <Stylish.Text styleNames={['Bold', 'Small', 'Color.Danger', 'Margin.Right.Mini']}>Pay</Stylish.Text>
        <Stylish.Icon.AntDesign name="arrowright" styleNames={['Small', 'Color.Danger']} />
      </Stylish.TouchableOpacity>
    </Stylish.View>
  </Stylish.View>

  <Stylish.View styleNames={['Padding', 'Border', 'Border.Radius', 'Border.Color.Success3', 'BackgroundColor.Success1', 'Margin.Right.Mini']}>
    <Stylish.Text styleNames={['H2']}>$ 57.78</Stylish.Text>
    <Stylish.View styleNames={['Flex.Row', 'Flex.JustifyContent.SpaceBetween']} style={{ width: 128 }}>
      <Stylish.Text>Feb '22</Stylish.Text>
      <Stylish.TouchableOpacity styleNames={['Flex.Row', 'Flex.AlignItems.Center']} hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}>
        <Stylish.Text styleNames={['Small', 'Color.Success7', 'Margin.Right.Mini']}>Paid</Stylish.Text>
        <Stylish.Icon.AntDesign name="check" styleNames={['Small', 'Color.Success7']} />
      </Stylish.TouchableOpacity>
    </Stylish.View>
  </Stylish.View>

  <Stylish.View styleNames={['Padding', 'Border', 'Border.Radius', 'Border.Color.Success3', 'BackgroundColor.Success1', 'Margin.Right.Mini']}>
    <Stylish.Text styleNames={['H2']}>$81.42</Stylish.Text>
    <Stylish.View styleNames={['Flex.Row', 'Flex.JustifyContent.SpaceBetween']} style={{ width: 128 }}>
      <Stylish.Text>Jan '22</Stylish.Text>
      <Stylish.TouchableOpacity styleNames={['Flex.Row', 'Flex.AlignItems.Center']} hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}>
        <Stylish.Text styleNames={['Small', 'Color.Success7', 'Margin.Right.Mini']}>Paid</Stylish.Text>
        <Stylish.Icon.AntDesign name="check" styleNames={['Small', 'Color.Success7']} />
      </Stylish.TouchableOpacity>
    </Stylish.View>
  </Stylish.View>
</Stylish.ScrollView>

<Stylish.Text styleNames={['Bold', 'Margin.Bottom.Mini']}>Select a user</Stylish.Text>
<Stylish.ScrollView
  styleNames={['Border.Radius', 'BackgroundColor.Primary2']}
  style={{ height: 248 }}
  contentContainerStyle={{ padding: 1 }}>
  <Stylish.View styleNames={['List', 'Border', 'Border.Radius', 'Border.Color.Primary1']}>
    <Stylish.View styleNames={['List.Item', 'Border.Bottom', 'Border.Color.Primary1']}>
      <Stylish.View styleNames={['List.Item.Left']}>
        <Stylish.Image styleNames={['Avatar']} source={require('../../images/face-icon-1.png')} />
      </Stylish.View>
      <Stylish.View styleNames={['List.Item.Body']}>
        <Stylish.Text styleNames={['Bold']}>Manan Raja Lakhani</Stylish.Text>
        <Stylish.Text styleNames={['Color.Secondary']}>Administrator</Stylish.Text>
      </Stylish.View>
    </Stylish.View>

    <Stylish.View styleNames={['List.Item', 'Border.Bottom', 'Border.Color.Primary1']}>
      <Stylish.View styleNames={['List.Item.Left']}>
        <Stylish.Image styleNames={['Avatar']} source={require('../../images/face-icon-2.png')} />
      </Stylish.View>
      <Stylish.View styleNames={['List.Item.Body']}>
        <Stylish.Text styleNames={['Bold']}>Anjana Nitin Pandharpurkar</Stylish.Text>
        <Stylish.Text styleNames={['Color.Secondary']}>Manager</Stylish.Text>
      </Stylish.View>
    </Stylish.View>

    <Stylish.View styleNames={['List.Item', 'Border.Bottom', 'Border.Color.Primary1']}>
      <Stylish.View styleNames={['List.Item.Left']}>
        <Stylish.Image styleNames={['Avatar']} source={require('../../images/face-icon-3.png')} />
      </Stylish.View>
      <Stylish.View styleNames={['List.Item.Body']}>
        <Stylish.Text styleNames={['Bold']}>Surekha Ramesh Patil</Stylish.Text>
        <Stylish.Text styleNames={['Color.Secondary']}>Executive</Stylish.Text>
      </Stylish.View>
    </Stylish.View>

    <Stylish.View styleNames={['List.Item']}>
      <Stylish.View styleNames={['List.Item.Left']}>
        <Stylish.Image styleNames={['Avatar']} source={require('../../images/face-icon-1.png')} />
      </Stylish.View>
      <Stylish.View styleNames={['List.Item.Body']}>
        <Stylish.Text styleNames={['Bold']}>Nandan Lalit Ramani</Stylish.Text>
        <Stylish.Text styleNames={['Color.Secondary']}>Sr. Manager</Stylish.Text>
      </Stylish.View>
    </Stylish.View>
  </Stylish.View>
</Stylish.ScrollView>`}
    imageAlt="ScrollView"
    imageUrl={{ light: "showcase-scroll-view.png", dark: "showcase-scroll-view-dark.png" }}
  />
);

export default ScrollViewShowCase;
