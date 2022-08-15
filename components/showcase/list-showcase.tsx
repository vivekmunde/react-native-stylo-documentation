import React from 'react';

import ShowCaseBox from '../showcase-box';

const ListShowCase: React.FC = () => (
  <React.Fragment>
    <ShowCaseBox
      renderCode={() => `<Stylish.View styleNames={['List', 'Border', 'Border.Radius', 'BackgroundColor.White', 'Margin.Bottom.Large']}>
  <Stylish.View styleNames={['List.Item', 'Border.Bottom']}>
    <Stylish.View styleNames={['List.Item.Left']}>
      <Stylish.Image styleNames={['Avatar']} source={require('../../images/angularjs-logo.png')} />
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Bold']}>AngularJS</Stylish.Text>
      <Stylish.Text styleNames={['Small']}>
        AngularJS is a toolset for building the framework most suited to your application development.
      </Stylish.Text>
    </Stylish.View>
    <Stylish.TouchableOpacity styleNames={['List.Item.Right']}>
      <Stylish.Icon.AntDesign name="right" styleNames={['Color.Secondary']} />
    </Stylish.TouchableOpacity>
  </Stylish.View>
  <Stylish.View styleNames={['List.Item', 'Border.Bottom']}>
    <Stylish.View styleNames={['List.Item.Left']}>
      <Stylish.Image styleNames={['Avatar']} source={require('../../images/emberjs-logo.jpeg')} />
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Bold']}>EmberJS</Stylish.Text>
      <Stylish.Text styleNames={['Small']}>
        Ember.js is a productive, battle-tested JavaScript framework for building modern web applications.
      </Stylish.Text>
    </Stylish.View>
    <Stylish.TouchableOpacity styleNames={['List.Item.Right']}>
      <Stylish.Icon.AntDesign name="right" styleNames={['Color.Secondary']} />
    </Stylish.TouchableOpacity>
  </Stylish.View>
  <Stylish.View styleNames={['List.Item', 'Border.Bottom']}>
    <Stylish.View styleNames={['List.Item.Left']}>
      <Stylish.Image styleNames={['Avatar']} source={require('../../images/reactjs-logo.png')} />
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Bold']}>ReactJS</Stylish.Text>
      <Stylish.Text styleNames={['Small']}>
        A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.
      </Stylish.Text>
    </Stylish.View>
    <Stylish.TouchableOpacity styleNames={['List.Item.Right']}>
      <Stylish.Icon.AntDesign name="right" styleNames={['Color.Secondary']} />
    </Stylish.TouchableOpacity>
  </Stylish.View>
  <Stylish.View styleNames={['List.Item']}>
    <Stylish.View styleNames={['List.Item.Left']}>
      <Stylish.Image styleNames={['Avatar']} source={require('../../images/vuejs-logo.jpeg')} />
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Bold']}>VueJS</Stylish.Text>
      <Stylish.Text styleNames={['Small']}>
        An approachable, performant and versatile framework for building web user interfaces.
      </Stylish.Text>
    </Stylish.View>
    <Stylish.TouchableOpacity styleNames={['List.Item.Right']}>
      <Stylish.Icon.AntDesign name="right" styleNames={['Color.Secondary']} />
    </Stylish.TouchableOpacity>
  </Stylish.View>
</Stylish.View>`}
      imageAlt="List"
      imageUrl={{ light: "showcase-list-light-1.png", dark: "showcase-list-dark-1.png" }}
    />
    <ShowCaseBox
      renderCode={() => `<Stylish.View styleNames={['List', 'Border', 'Border.Radius', 'BackgroundColor.White']}>
  <Stylish.View styleNames={['List.Item', 'Border.Bottom']}>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Color.Secondary']}>Name</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Right']}>
      <Stylish.Text>Nandan</Stylish.Text>
    </Stylish.View>
  </Stylish.View>
  <Stylish.View styleNames={['List.Item', 'Border.Bottom', 'Flex.Wrap']}>
    <Stylish.View styleNames={['List.Item.Left']}>
      <Stylish.Text styleNames={['Color.Secondary']}>Address</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Right']} style={{ flex: 1 }}>
      <Stylish.Text styleNames={['Align.Right']}>OM Villa, 778/2, Near New Market, Pune, India</Stylish.Text>
    </Stylish.View>
  </Stylish.View>
  <Stylish.View styleNames={['List.Item', 'Border.Bottom']}>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Color.Secondary']}>Email</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Right']}>
      <Stylish.Text>nandan@domain.com</Stylish.Text>
    </Stylish.View>
  </Stylish.View>
  <Stylish.View styleNames={['List.Item']}>
    <Stylish.View styleNames={['List.Item.Body']}>
      <Stylish.Text styleNames={['Color.Secondary']}>Phone</Stylish.Text>
    </Stylish.View>
    <Stylish.View styleNames={['List.Item.Right']}>
      <Stylish.Text>+91 93232 08287</Stylish.Text>
    </Stylish.View>
  </Stylish.View>
</Stylish.View>`}
      imageAlt="List"
      imageUrl={{ light: "showcase-list-light-2.png", dark: "showcase-list-dark-2.png" }}
    />
  </React.Fragment>
);

export default ListShowCase;
