(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{2018:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylo-theme-image-background-styles",function(){return n(5048)}])},1590:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,r.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},6900:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className,l=e.style;return(0,r.jsx)("p",{className:"mb-4 ".concat(n),style:l,children:t})}},7687:function(e,t,n){"use strict";var r=n(5893);n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}t.Z=function(e){var t=e.children,n=e.id,l=e.level,i=function(){return(0,r.jsx)("a",{href:"#".concat(n),children:t})},a={className:"heading",id:n};return 1===l?(0,r.jsx)("h1",o({},a,{children:i()})):2===l?(0,r.jsx)("h2",o({},a,{children:i()})):3===l?(0,r.jsx)("h3",o({},a,{children:i()})):4===l?(0,r.jsx)("h4",o({},a,{children:i()})):(0,r.jsx)("h5",o({},a,{children:i()}))}},747:function(e,t,n){"use strict";var r=n(5893),l=(n(7294),n(1590));t.Z=function(e){var t=e.renderCode,n=e.imageAlt,o=e.imageUrl;return(0,r.jsxs)("div",{className:"grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4",children:[(0,r.jsx)("div",{className:"col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8",children:(0,r.jsx)(l.Z,{children:t()})}),(0,r.jsx)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:(0,r.jsx)("img",{className:"rounded-3xl border-4 border-pink-200",alt:n,src:"".concat("/react-native-stylo-documentation","/images/").concat(o)})})]})}},9077:function(e,t,n){"use strict";var r=n(5893),l=n(1664),o=n.n(l),i=n(7294),a=n(6900),s=[{type:"TBackgroundColorStyle",route:"background-color"},{type:"TBorderStyle",route:"border"},{type:"TFlexStyle",route:"flex"},{type:"TFontColorStyle",route:"font-color"},{type:"TMarginStyle",route:"margin"},{type:"TPaddingStyle",route:"padding"},{type:"TImageStyle",route:"image"},{type:"TImageBackgroundStyle",route:"image-background"},{type:"TScrollViewStyle",route:"scroll-view"},{type:"TTextStyle",route:"text"},{type:"TTextInputStyle",route:"text-input"},{type:"TTouchableStyle",route:"touchable"},{type:"TViewStyle",route:"view"},{type:"TAvatarStyle",route:"avatar"},{type:"TBadgeStyle",route:"badge"},{type:"TButtonStyle",route:"button"},{type:"TFormStyle",route:"form"},{type:"THorizontalStyle",route:"horizontal"},{type:"TListStyle",route:"list"},{type:"TScreenStyle",route:"screen"},{type:"TTagStyle",route:"tag"}];t.Z=function(e){var t=e.display;return(0,r.jsxs)(a.Z,{children:["Ref:"," ",s.filter((function(e){return!!t.find((function(t){return t===e.type}))})).map((function(e,n){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(o(),{href:"/stylo-theme-".concat(e.route,"-styles#type-definition"),children:e.type}),n<t.length-1?", ":null]},e.route)}))]})}},5048:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),l=n(9008),o=n.n(l),i=n(7294),a=n(3830),s=n(1590),c=n(4743),u=n(7687),y=n(747),d=function(){return(0,r.jsx)(y.Z,{renderCode:function(){return"<Stylish.ImageBackground\n  style={{ flex: 1 }}\n  source={require('../images/screen-bg-1.png')}\n  styleNames={['Padding.Large']}>\n    <Stylish.Text styleNames={['H1']}>\n      ImageBackground\n    </Stylish.Text>\n    <Stylish.Text styleNames={['Paragraph']}>\n      Stylo follows a philosophy called Styles only, with which it provides only the style definitions & does not provide any behavioral/action components like Card, Badge, Picker etc. The library provides extensive style definitions enough to style/create all kinds of components, right from simple Text to complicated Pickers & Forms.\n    </Stylish.Text>\n    <Stylish.Text styleNames={['Paragraph']}>\n      Stylo provides a default theme with pre-defined style types and styles. App can copy these & then can immediately start using it or even modify them as per needs.\n    </Stylish.Text>\n    <Stylish.TouchableOpacity\n      styleNames={['Button', 'Button.Small', 'Border', 'Border.Color.Primary', 'Flex.JustifyContent.SpaceBetween', 'Margin.Top.Large']}>\n      <Stylish.Text styleNames={['Button.Text', 'Color.Primary']}>\n        Read next article\n      </Stylish.Text>\n      <Stylish.Icon.AntDesign name=\"right\" styleNames={['Button.Icon', 'Color.Primary']} />\n    </Stylish.TouchableOpacity>\n</Stylish.ImageBackground>"},imageAlt:"ImageBackground",imageUrl:"showcase-image-background.png"})},g=n(7655),h=n(9077),p=function(){return(0,r.jsx)(c.Z,{renderNavigation:function(){return(0,r.jsx)(g.Z,{})},renderContent:function(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"ImageBackground | Stylo theme | React Native Stylo"})}),(0,r.jsxs)("article",{children:[(0,r.jsx)(a.Z,{children:"ImageBackground"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"type-definition",level:5,children:"Type definition"}),(0,r.jsx)(h.Z,{display:["TBackgroundColorStyle","TBorderStyle","TMarginStyle","TPaddingStyle","TFlexStyle"]}),(0,r.jsx)(s.Z,{children:"type TImageBackgroundStyle =\n  | TBackgroundColorStyle\n  | TBorderStyle\n  | TFlexStyle\n  | TMarginStyle\n  | TPaddingStyle;"})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"usage",level:5,children:"Usage"}),(0,r.jsx)(d,{})]})]})]})}})}}},function(e){e.O(0,[9814,1447,9774,2888,179],(function(){return t=2018,e(e.s=t);var t}));var t=e.O();_N_E=t}]);