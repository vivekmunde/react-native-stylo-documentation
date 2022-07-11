(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8721],{3038:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylo-theme-screen-styles",function(){return n(4110)}])},1590:function(e,t,n){"use strict";var s=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,s.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,s.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},7687:function(e,t,n){"use strict";var s=n(5893);n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){i(e,t,n[t])}))}return e}t.Z=function(e){var t=e.children,n=e.id,i=e.level,a=function(){return(0,s.jsx)("a",{href:"#".concat(n),children:t})},r={className:"heading",id:n};return 1===i?(0,s.jsx)("h1",l({},r,{children:a()})):2===i?(0,s.jsx)("h2",l({},r,{children:a()})):3===i?(0,s.jsx)("h3",l({},r,{children:a()})):4===i?(0,s.jsx)("h4",l({},r,{children:a()})):(0,s.jsx)("h5",l({},r,{children:a()}))}},747:function(e,t,n){"use strict";var s=n(5893),i=(n(7294),n(1590));t.Z=function(e){var t=e.renderCode,n=e.imageAlt,l=e.imageUrl;return(0,s.jsxs)("div",{className:"grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4",children:[(0,s.jsx)("div",{className:"col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8",children:(0,s.jsx)(i.Z,{children:t()})}),(0,s.jsx)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:(0,s.jsx)("img",{className:"rounded-3xl border-4 border-pink-200 mb-4",alt:n,src:"".concat("/react-native-stylo-documentation","/images/").concat(l)})})]})}},4110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var s=n(5893),i=n(9008),l=n.n(i),a=n(7294),r=n(3830),c=n(1590),o=n(4743),h=n(7687),y=n(747),d=function(){return(0,s.jsx)(y.Z,{renderCode:function(){return"<Stylish.View styleNames={['Screen', 'BackgroundColor.Primary1']}>\n  <Stylish.SafeAreaView />\n  <Stylish.View styleNames={['Screen.Header']}>\n    <Stylish.View styleNames={['Screen.Header.Left', 'Padding']}>\n      <Stylish.TouchableOpacity styleNames={['Button', 'Button.Circle', 'BackgroundColor.White']}>\n        <Stylish.Icon.SimpleLineIcons name=\"menu\" styleNames={['Button.Icon', 'Button.Circle.Icon']} />\n      </Stylish.TouchableOpacity>\n    </Stylish.View>\n    <Stylish.View styleNames={['Screen.Header.Body', 'Padding.Top', 'Padding.Bottom']}>\n      <Stylish.Text styleNames={['Large', 'Bold']}>Stylo</Stylish.Text>\n    </Stylish.View>\n    <Stylish.TouchableOpacity styleNames={['Screen.Header.Right', 'Padding']}>\n      <Stylish.Image source={require('../../images/face-icon-1.png')} styleNames={['Avatar']} />\n    </Stylish.TouchableOpacity>\n  </Stylish.View>\n  <Stylish.View styleNames={['Screen.Body', 'Padding']}>\n    <Stylish.Text styleNames={['Paragraph']}>\n      Theme is nothing but a collection of styles defined using the React Native's StyleSheet.create() API. The theme is used by the library and its hooks/components to apply styles to the React Native components. There is no restriction on the format of the style names, these can be defined as per the needs.\n    </Stylish.Text>\n    <Stylish.Text styleNames={['Paragraph']}>\n      StyleName is the name of a standard style definition provided to the StyleSheet.create API. In the code snippet below 'Align.Center', H1, 'Size.Small' are the style names.\n    </Stylish.Text>\n    <Stylish.Text styleNames={['Paragraph']}>\n      StyleNamespaces are used to organize the style definitions by logically grouping them together. This prevents the style name/style collisions, like 'Size.Small' can have different style definitions for Text & View components. In the code snippet below TextStyles, TextInputStyles, ViewStyles are the StyleNamespaces. The library has default StyleNamespaces defined per React Native component in its themes. The app can define its own StyleNamespaces, which will override the default ones.\n    </Stylish.Text>\n  </Stylish.View>\n  <Stylish.View styleNames={[\n    'Screen.Footer', 'BackgroundColor.White',\n    'Flex.Row', 'Flex.JustifyContent.SpaceAround',\n    'Border.Radius.TopLeft.Large', 'Border.Radius.TopRight.Large',\n  ]}>\n    <Stylish.TouchableOpacity styleNames={['Padding', 'Flex.AlignItems.Center', 'Flex.JustifyContent.Center']}>\n      <Stylish.Icon.AntDesign name=\"home\" styleNames={['Large']} />\n      <Stylish.Text styleNames={['Small']}>Home</Stylish.Text>\n    </Stylish.TouchableOpacity>\n    <Stylish.TouchableOpacity styleNames={['Padding', 'Flex.AlignItems.Center', 'Flex.JustifyContent.Center']}>\n      <Stylish.Icon.AntDesign name=\"calendar\" styleNames={['Large']} />\n      <Stylish.Text styleNames={['Small']}>Calendar</Stylish.Text>\n    </Stylish.TouchableOpacity>\n    <Stylish.TouchableOpacity styleNames={['Padding', 'Flex.AlignItems.Center', 'Flex.JustifyContent.Center']}>\n      <Stylish.Icon.AntDesign name=\"message1\" styleNames={['Large']} />\n      <Stylish.Text styleNames={['Small']}>Messages</Stylish.Text>\n    </Stylish.TouchableOpacity>\n    <Stylish.TouchableOpacity styleNames={['Padding', 'Flex.AlignItems.Center', 'Flex.JustifyContent.Center']}>\n      <Stylish.Icon.AntDesign name=\"setting\" styleNames={['Large']} />\n      <Stylish.Text styleNames={['Small']}>Settings</Stylish.Text>\n    </Stylish.TouchableOpacity>\n  </Stylish.View>\n  <Stylish.SafeAreaView styleNames={['BackgroundColor.White']} />\n</Stylish.View>"},imageAlt:"Screen",imageUrl:"showcase-screen.png"})},S=n(7655),m=function(){return(0,s.jsx)(o.Z,{renderNavigation:function(){return(0,s.jsx)(S.Z,{})},renderContent:function(){return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(l(),{children:(0,s.jsx)("title",{children:"Screen | Stylo theme | React Native Stylo"})}),(0,s.jsxs)("article",{children:[(0,s.jsx)(r.Z,{children:"Screen"}),(0,s.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,s.jsx)(h.Z,{id:"type-definition",level:5,children:"Type definition"}),(0,s.jsx)(c.Z,{children:"type TScreenStyle = \n  | 'Screen'\n  | 'Screen.Header'\n  | 'Screen.Header.Left'\n  | 'Screen.Header.Body'\n  | 'Screen.Header.Right'\n  | 'Screen.Body'\n  | 'Screen.Footer';"})]}),(0,s.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,s.jsx)(h.Z,{id:"style-names-hierarchy",level:5,children:"StyleNames hierarchy"}),(0,s.jsx)(c.Z,{children:"'Screen'\n  |- 'Screen.Header'\n    |- 'Screen.Header.Left'\n    |- 'Screen.Header.Body'\n    |- 'Screen.Header.Right'\n  |- 'Screen.Body'\n  |- 'Screen.Footer';"})]}),(0,s.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,s.jsx)(h.Z,{id:"usage",level:5,children:"Usage"}),(0,s.jsx)(d,{})]})]})]})}})}}},function(e){e.O(0,[9814,1447,9774,2888,179],(function(){return t=3038,e(e.s=t);var t}));var t=e.O();_N_E=t}]);