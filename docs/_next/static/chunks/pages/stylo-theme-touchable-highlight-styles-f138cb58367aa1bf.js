(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1659],{2061:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylo-theme-touchable-highlight-styles",function(){return l(4997)}])},1590:function(e,t,l){"use strict";var n=l(5893);l(7294);t.Z=function(e){var t=e.children;return(0,n.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,n.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},6900:function(e,t,l){"use strict";var n=l(5893);l(7294);t.Z=function(e){var t=e.children,l=e.className,r=e.style;return(0,n.jsx)("p",{className:"mb-4 ".concat(null!==l&&void 0!==l?l:""),style:r,children:t})}},7687:function(e,t,l){"use strict";var n=l(5893);l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},n=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),n.forEach((function(t){r(e,t,l[t])}))}return e}t.Z=function(e){var t=e.children,l=e.id,r=e.level,s=function(){return(0,n.jsx)("a",{href:"#".concat(l),children:t})},a={className:"heading",id:l};return 1===r?(0,n.jsx)("h1",i({},a,{children:s()})):2===r?(0,n.jsx)("h2",i({},a,{children:s()})):3===r?(0,n.jsx)("h3",i({},a,{children:s()})):4===r?(0,n.jsx)("h4",i({},a,{children:s()})):(0,n.jsx)("h5",i({},a,{children:s()}))}},747:function(e,t,l){"use strict";var n=l(5893),r=(l(7294),l(1590));t.Z=function(e){var t=e.renderCode,l=e.imageAlt,i=e.imageUrl;return(0,n.jsxs)("div",{className:"grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4",children:[(0,n.jsx)("div",{className:"col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8",children:(0,n.jsx)(r.Z,{children:t()})}),(0,n.jsx)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:(0,n.jsx)("img",{className:"rounded-3xl border-4 border-pink-200 mb-4",alt:l,src:"".concat("/react-native-stylo-documentation","/images/").concat(i)})})]})}},922:function(e,t,l){"use strict";var n=l(5893),r=(l(7294),l(747));t.Z=function(e){var t=e.type;return(0,n.jsx)(r.Z,{renderCode:function(){return"<Stylish.View styleNames={['List', 'BackgroundColor.White', 'Margin.Bottom.Large', 'Border', 'Border.Radius', 'Border.Color.Primary2']}>\n  <Stylish.Touchable styleNames={['List.Item', 'Border.Bottom', 'Border.Color.Primary1']}>\n    <Stylish.View styleNames={['List.Item.Left']}>\n      <Stylish.Image styleNames={['Avatar']} source={require('../images/angularjs-logo.png')} />\n    </Stylish.View>\n    <Stylish.View styleNames={['List.Item.Body']}>\n      <Stylish.Text styleNames={['Bold']}>\n        AngularJS\n      </Stylish.Text>\n      <Stylish.Text styleNames={['Small']} numberOfLines={2} ellipsizeMode=\"tail\">\n        AngularJS is a toolset for building the framework most suited to your application development.\n      </Stylish.Text>\n    </Stylish.View>\n    <Stylish.View styleNames={['List.Item.Right']}>\n      <Stylish.Icon.AntDesign name=\"right\" styleNames={['Color.Secondary']} />\n    </Stylish.View>\n  </Stylish.Touchable>\n  <Stylish.Touchable\n    styleNames={['List.Item', 'Border.Bottom', 'Border.Color.Primary1']}>\n    <Stylish.View styleNames={['List.Item.Left']}>\n      <Stylish.Image styleNames={['Avatar', 'Avatar.Square']} source={require('../images/emberjs-logo.jpeg')} />\n    </Stylish.View>\n    <Stylish.View styleNames={['List.Item.Body']}>\n      <Stylish.Text styleNames={['Bold']}>EmberJS</Stylish.Text>\n      <Stylish.Text styleNames={['Small']} numberOfLines={2} ellipsizeMode=\"tail\">\n        Ember.js is a productive, battle-tested JavaScript framework for building modern web applications.\n      </Stylish.Text>\n    </Stylish.View>\n    <Stylish.View styleNames={['List.Item.Right']}>\n      <Stylish.Icon.AntDesign name=\"right\" styleNames={['Color.Secondary']} />\n    </Stylish.View>\n  </Stylish.Touchable>\n  <Stylish.View styleNames={['List.Item']}>\n    <Stylish.Touchable styleNames={['List.Item.Left']}>\n      <Stylish.Image styleNames={['Avatar']} source={require('../images/reactjs-logo.png')} />\n    </Stylish.Touchable>\n    <Stylish.Touchable styleNames={['List.Item.Body']}>\n      <Stylish.Text styleNames={['Bold']}>ReactJS</Stylish.Text>\n      <Stylish.Text styleNames={['Small']} numberOfLines={2} ellipsizeMode=\"tail\">\n        A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.\n      </Stylish.Text>\n    </Stylish.Touchable>\n    <Stylish.Touchable styleNames={['List.Item.Right']}>\n      <Stylish.Icon.AntDesign name=\"right\" styleNames={['Color.Secondary']} />\n    </Stylish.Touchable>\n  </Stylish.View>\n</Stylish.View>\n\n<Stylish.Touchable styleNames={['Border', 'Border.Radius', 'Border.Color.Primary2', 'BackgroundColor.White', 'Padding', 'Margin.Bottom.Large']}>\n  <Stylish.Text styleNames={['H4', 'Bold']}>Touchable</Stylish.Text>\n  <Stylish.Text>\n    The Touchable styles can be used for <Touchable />, <TouchableHighlight /> & <Pressable /> components.\n  </Stylish.Text>\n  <Stylish.View styleNames={['Flex.Row', 'Flex.JustifyContent.End', 'Flex.AlignItems.Center', 'Border.Radius', 'Margin.Top']}>\n    <Stylish.Text styleNames={['Color.Primary']}>Read more</Stylish.Text>\n    <Stylish.Icon.AntDesign name=\"right\" styleNames={['Color.Primary', 'Margin.Left.Small']} />\n  </Stylish.View>\n</Stylish.Touchable>\n\n<Stylish.View styleNames={['Flex.Row', 'Margin.Bottom.Large']}>\n  <Stylish.Touchable\n    styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Cyan6', 'BackgroundColor.Cyan1']}>\n    <Stylish.Image source={require('../images/face-icon-2.png')} styleNames={['Avatar', 'Avatar.Small']} />\n    <Stylish.Text styleNames={['Color.Cyan6', 'Tag.Text']}>\n      Lala Mann\n    </Stylish.Text>\n  </Stylish.Touchable>\n  <Stylish.Touchable\n    styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Orange5', 'BackgroundColor.Orange1']}>\n    <Stylish.Image source={require('../images/face-icon-3.png')} styleNames={['Avatar', 'Avatar.Small']} />\n    <Stylish.Text styleNames={['Color.Orange6', 'Tag.Text']}>\n      Sotu Hulla\n    </Stylish.Text>\n  </Stylish.Touchable>\n</Stylish.View>\n\n<Stylish.View styleNames={['Flex.Row', 'Margin.Bottom.Large']}>\n  <Stylish.Touchable styleNames={['Avatar.Jacket', 'Margin.Right']}>\n    <Stylish.Image source={require('../images/face-icon-2.png')} styleNames={['Avatar']} />\n  </Stylish.Touchable>\n  <Stylish.Touchable styleNames={['Badge', 'BackgroundColor.Primary', 'Margin.Right']}>\n    <Stylish.Text styleNames={['Color.White']}>1</Stylish.Text>\n  </Stylish.Touchable>\n</Stylish.View>\n\n<Stylish.Touchable styleNames={['Button', 'BackgroundColor.Primary', 'Margin.Bottom.Large']}>\n  <Stylish.Text styleNames={['Color.White', 'Bold']}>\n    Submit\n  </Stylish.Text>\n</Stylish.Touchable>".replace(/Touchable/gi,t)},imageAlt:"Touchable",imageUrl:"showcase-touchable.png"})}},427:function(e,t,l){"use strict";var n=l(5893),r=(l(7294),l(1590)),i=l(7687),s=l(9077);t.Z=function(){return(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(i.Z,{id:"type-definition",level:5,children:"Type definition"}),(0,n.jsx)(s.Z,{display:["TBackgroundColorStyle","TBorderStyle","TPaddingStyle","TMarginStyle","TFlexStyle","THorizontalStyle","TBadgeStyle","TFormStyle","TListStyle","TScreenStyle","TTagStyle","TButtonStyle"]}),(0,n.jsx)(r.Z,{children:"type TTouchableStyle =\n  | TBackgroundColorStyle\n  | TBorderStyle\n  | TFlexStyle\n  | TMarginStyle\n  | TPaddingStyle\n  | TAvatarJacketStyle\n  | TBadgeStyle\n  | TButtonStyle\n  | THorizontalStyle\n  | TFormStyle\n  | TListStyle\n  | TScreenStyle\n  | TTagStyle;"})]})}},9077:function(e,t,l){"use strict";var n=l(5893),r=l(1664),i=l.n(r),s=l(7294),a=l(6900),o=[{type:"TBackgroundColorStyle",route:"background-color"},{type:"TBorderStyle",route:"border"},{type:"TFlexStyle",route:"flex"},{type:"TFontColorStyle",route:"font-color"},{type:"TMarginStyle",route:"margin"},{type:"TPaddingStyle",route:"padding"},{type:"TImageStyle",route:"image"},{type:"TImageBackgroundStyle",route:"image-background"},{type:"TScrollViewStyle",route:"scroll-view"},{type:"TTextStyle",route:"text"},{type:"TTextInputStyle",route:"text-input"},{type:"TTouchableStyle",route:"touchable"},{type:"TViewStyle",route:"view"},{type:"TAvatarStyle",route:"avatar"},{type:"TBadgeStyle",route:"badge"},{type:"TButtonStyle",route:"button"},{type:"TFormStyle",route:"form"},{type:"THorizontalStyle",route:"horizontal"},{type:"TListStyle",route:"list"},{type:"TScreenStyle",route:"screen"},{type:"TTagStyle",route:"tag"}];t.Z=function(e){var t=e.display;return(0,n.jsxs)(a.Z,{children:["Ref:"," ",o.filter((function(e){return!!t.find((function(t){return t===e.type}))})).map((function(e,l){return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(i(),{href:"/stylo-theme-".concat(e.route,"-styles#type-definition"),children:e.type}),l<t.length-1?", ":null]},e.route)}))]})}},4997:function(e,t,l){"use strict";l.r(t);var n=l(5893),r=l(9008),i=l.n(r),s=l(7294),a=l(3830),o=l(4743),y=l(7687),c=l(922),h=l(7655),u=l(427);t.default=function(){return(0,n.jsx)(o.Z,{renderNavigation:function(){return(0,n.jsx)(h.Z,{})},renderContent:function(){return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"TouchableHighlight | Stylo theme | React Native Stylo"})}),(0,n.jsxs)("article",{children:[(0,n.jsx)(a.Z,{children:"TouchableHighlight"}),(0,n.jsx)(u.Z,{}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(y.Z,{id:"usage",level:5,children:"Usage"}),(0,n.jsx)(c.Z,{type:"TouchableHighlight"})]})]})]})}})}}},function(e){e.O(0,[9814,1447,9774,2888,179],(function(){return t=2061,e(e.s=t);var t}));var t=e.O();_N_E=t}]);