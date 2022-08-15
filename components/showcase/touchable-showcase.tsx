import React from 'react';

import ShowCaseBox from '../showcase-box';

const TouchableShowCase: React.FC<{
  type: 'Pressable' | 'TouchableOpacity' | 'TouchableHighlight'
}> = ({ type }) => (
  <ShowCaseBox
    renderCode={() => `<Stylish.View styleNames={['List', 'BackgroundColor.White', 'Margin.Bottom.Large', 'Border', 'Border.Radius', 'Border.Color.Primary2']}>
  <Stylish.Touchable styleNames={['List.Item', 'Border.Bottom', 'Border.Color.Primary1']}>
    <Stylish.View styleNames={['List.Item.Left']}>
      <Stylish.Image styleNames={['Avatar']} source={require('../images/angularjs-logo.png')} />
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Bold']}>
        AngularJS
      </Stylish.Text>
      <Stylish.Text styleNames={['Small']} numberOfLines={2} ellipsizeMode="tail">
        AngularJS is a toolset for building the framework most suited to your application development.
      </Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Right']}>
      <Stylish.Icon.AntDesign name="right" styleNames={['Color.Secondary']} />
    </Stylish.View>
  </Stylish.Touchable>
  <Stylish.Touchable
    styleNames={['List.Item', 'Border.Bottom', 'Border.Color.Primary1']}>
    <Stylish.View styleNames={['List.Item.Left']}>
      <Stylish.Image styleNames={['Avatar', 'Avatar.Square']} source={require('../images/emberjs-logo.jpeg')} />
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Bold']}>EmberJS</Stylish.Text>
      <Stylish.Text styleNames={['Small']} numberOfLines={2} ellipsizeMode="tail">
        Ember.js is a productive, battle-tested JavaScript framework for building modern web applications.
      </Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Right']}>
      <Stylish.Icon.AntDesign name="right" styleNames={['Color.Secondary']} />
    </Stylish.View>
  </Stylish.Touchable>
  <Stylish.View styleNames={['List.Item']}>
    <Stylish.Touchable styleNames={['List.Item.Left']}>
      <Stylish.Image styleNames={['Avatar']} source={require('../images/reactjs-logo.png')} />
    </Stylish.Touchable>
    <Stylish.Touchable styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Bold']}>ReactJS</Stylish.Text>
      <Stylish.Text styleNames={['Small']} numberOfLines={2} ellipsizeMode="tail">
        A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.
      </Stylish.Text>
    </Stylish.Touchable>
    <Stylish.Touchable styleNames={['List.Item.Right']}>
      <Stylish.Icon.AntDesign name="right" styleNames={['Color.Secondary']} />
    </Stylish.Touchable>
  </Stylish.View>
</Stylish.View>

<Stylish.Touchable styleNames={['Border', 'Border.Radius', 'Border.Color.Primary2', 'BackgroundColor.White', 'Padding', 'Margin.Bottom.Large']}>
  <Stylish.Text styleNames={['H4', 'Bold']}>Touchable</Stylish.Text>
  <Stylish.Text>
    The Touchable styles can be used for <Touchable />, <TouchableHighlight /> & <Pressable /> components.
  </Stylish.Text>
  <Stylish.View styleNames={['Flex.Row', 'Flex.JustifyContent.End', 'Flex.AlignItems.Center', 'Border.Radius', 'Margin.Top']}>
    <Stylish.Text styleNames={['Color.Primary']}>Read more</Stylish.Text>
    <Stylish.Icon.AntDesign name="right" styleNames={['Color.Primary', 'Margin.Left.Small']} />
  </Stylish.View>
</Stylish.Touchable>

<Stylish.View styleNames={['Flex.Row', 'Margin.Bottom.Large']}>
  <Stylish.Touchable
    styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Cyan6', 'BackgroundColor.Cyan1']}>
    <Stylish.Image source={require('../images/face-icon-2.png')} styleNames={['Avatar', 'Avatar.Small']} />
    <Stylish.Text styleNames={['Color.Cyan6', 'Tag.Text']}>
      Lala Mann
    </Stylish.Text>
  </Stylish.Touchable>
  <Stylish.Touchable
    styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Orange5', 'BackgroundColor.Orange1']}>
    <Stylish.Image source={require('../images/face-icon-3.png')} styleNames={['Avatar', 'Avatar.Small']} />
    <Stylish.Text styleNames={['Color.Orange6', 'Tag.Text']}>
      Sotu Hulla
    </Stylish.Text>
  </Stylish.Touchable>
</Stylish.View>

<Stylish.View styleNames={['Flex.Row', 'Margin.Bottom.Large']}>
  <Stylish.Touchable styleNames={['Avatar.Jacket', 'Margin.Right']}>
    <Stylish.Image source={require('../images/face-icon-2.png')} styleNames={['Avatar']} />
  </Stylish.Touchable>
  <Stylish.Touchable styleNames={['Badge', 'BackgroundColor.Primary', 'Margin.Right']}>
    <Stylish.Text styleNames={['Color.White']}>1</Stylish.Text>
  </Stylish.Touchable>
</Stylish.View>

<Stylish.Touchable styleNames={['Button', 'BackgroundColor.Primary', 'Margin.Bottom.Large']}>
  <Stylish.Text styleNames={['Color.White', 'Bold']}>
    Submit
  </Stylish.Text>
</Stylish.Touchable>`.replace(/Touchable/ig, type)}
    imageAlt="Touchable"
    imageUrl={{ light: "showcase-touchable.png", dark: "showcase-touchable-dark.png" }}
  />
);

export default TouchableShowCase;
