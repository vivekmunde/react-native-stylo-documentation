(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7987],{5444:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylo-theme-icon-styles",function(){return n(7041)}])},1590:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,r.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},6900:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className,o=e.style;return(0,r.jsx)("p",{className:"mb-4 ".concat(null!==n&&void 0!==n?n:""),style:o,children:t})}},7687:function(e,t,n){"use strict";var r=n(5893);n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}t.Z=function(e){var t=e.children,n=e.id,o=e.level,i=function(){return(0,r.jsx)("a",{href:"#".concat(n),children:t})},a={className:"heading",id:n};return 1===o?(0,r.jsx)("h1",l({},a,{children:i()})):2===o?(0,r.jsx)("h2",l({},a,{children:i()})):3===o?(0,r.jsx)("h3",l({},a,{children:i()})):4===o?(0,r.jsx)("h4",l({},a,{children:i()})):(0,r.jsx)("h5",l({},a,{children:i()}))}},747:function(e,t,n){"use strict";var r=n(5893),o=(n(7294),n(1590));t.Z=function(e){var t=e.renderCode,n=e.imageAlt,l=e.imageUrl;return(0,r.jsxs)("div",{className:"grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4",children:[(0,r.jsx)("div",{className:"col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8",children:(0,r.jsx)(o.Z,{children:t()})}),(0,r.jsx)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:(0,r.jsx)("img",{className:"rounded-3xl border-4 border-pink-200 mb-4",alt:n,src:"".concat("/react-native-stylo-documentation","/images/").concat(l)})})]})}},9077:function(e,t,n){"use strict";var r=n(5893),o=n(1664),l=n.n(o),i=n(7294),a=n(6900),c=[{type:"TBackgroundColorStyle",route:"background-color"},{type:"TBorderStyle",route:"border"},{type:"TFlexStyle",route:"flex"},{type:"TFontColorStyle",route:"font-color"},{type:"TMarginStyle",route:"margin"},{type:"TPaddingStyle",route:"padding"},{type:"TImageStyle",route:"image"},{type:"TImageBackgroundStyle",route:"image-background"},{type:"TScrollViewStyle",route:"scroll-view"},{type:"TTextStyle",route:"text"},{type:"TTextInputStyle",route:"text-input"},{type:"TTouchableStyle",route:"touchable"},{type:"TViewStyle",route:"view"},{type:"TAvatarStyle",route:"avatar"},{type:"TBadgeStyle",route:"badge"},{type:"TButtonStyle",route:"button"},{type:"TFormStyle",route:"form"},{type:"THorizontalStyle",route:"horizontal"},{type:"TListStyle",route:"list"},{type:"TScreenStyle",route:"screen"},{type:"TTagStyle",route:"tag"}];t.Z=function(e){var t=e.display;return(0,r.jsxs)(a.Z,{children:["Ref:"," ",c.filter((function(e){return!!t.find((function(t){return t===e.type}))})).map((function(e,n){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(l(),{href:"/stylo-theme-".concat(e.route,"-styles#type-definition"),children:e.type}),n<t.length-1?", ":null]},e.route)}))]})}},7041:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(9008),l=n.n(o),i=n(7294),a=n(3830),c=n(1590),s=n(4743),u=n(7687),y=n(747),d=function(){return(0,r.jsx)(y.Z,{renderCode:function(){return"<Stylish.Icon.AntDesign\n  name=\"home\"\n  styleNames={['Color.Primary', 'Margin']} />\n\n<Stylish.Icon.FontAwesome\n  name=\"home\"\n  styleNames={['Color.Info', 'Large', 'Margin.Large']} />\n\n<Stylish.TouchableOpacity\n  styleNames={['Button', 'BackgroundColor.Primary', 'Margin.Bottom.Large']}>\n  <Stylish.Text styleNames={['Color.White', 'Button.Text']}>\n    Next\n  </Stylish.Text>\n  <Stylish.Icon.SimpleLineIcons\n    name=\"arrow-right\"\n    styleNames={['Color.White', 'Button.Icon', 'Button.Icon.Right']} />\n</Stylish.TouchableOpacity>\n\n<Stylish.View styleNames={['Flex.Row']}>\n  <Stylish.TouchableOpacity\n    styleNames={['Tag', 'Tag.Small', 'Border', 'Border.Color.Info', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Color.Info', 'Tag.Text']}>\n      Checked\n    </Stylish.Text>\n    <Stylish.Icon.AntDesign\n      name=\"check\"\n      styleNames={['Color.Info', 'Tag.Icon.Right']} />\n  </Stylish.TouchableOpacity>\n</Stylish.View>"},imageAlt:"Icon",imageUrl:"showcase-icon.png"})},h=n(7655),g=n(9077),p=function(){return(0,r.jsx)(s.Z,{renderNavigation:function(){return(0,r.jsx)(h.Z,{})},renderContent:function(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"Icon | Stylo theme | React Native Stylo"})}),(0,r.jsxs)("article",{children:[(0,r.jsx)(a.Z,{children:"Icon"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"type-definition",level:5,children:"Type definition"}),(0,r.jsx)(g.Z,{display:["TFontColorStyle","TMarginStyle","TButtonStyle","TTagStyle"]}),(0,r.jsx)(c.Z,{children:"type TIconStyle =\n  | TFontColorStyle\n  | TMarginStyle\n  | TButtonIconStyle\n  | TTagIconStyle\n  | 'Small'\n  | 'Large';"})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"usage",level:5,children:"Usage"}),(0,r.jsx)(d,{})]})]})]})}})}}},function(e){e.O(0,[9814,1447,9774,2888,179],(function(){return t=5444,e(e.s=t);var t}));var t=e.O();_N_E=t}]);