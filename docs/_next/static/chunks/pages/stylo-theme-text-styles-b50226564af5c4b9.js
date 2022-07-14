(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3863],{9354:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylo-theme-text-styles",function(){return n(3576)}])},1590:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,r.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},6900:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className,l=e.style;return(0,r.jsx)("p",{className:"mb-4 ".concat(null!==n&&void 0!==n?n:""),style:l,children:t})}},7687:function(e,t,n){"use strict";var r=n(5893);n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}t.Z=function(e){var t=e.children,n=e.id,l=e.level,i=function(){return(0,r.jsx)("a",{href:"#".concat(n),children:t})},s={className:"heading",id:n};return 1===l?(0,r.jsx)("h1",o({},s,{children:i()})):2===l?(0,r.jsx)("h2",o({},s,{children:i()})):3===l?(0,r.jsx)("h3",o({},s,{children:i()})):4===l?(0,r.jsx)("h4",o({},s,{children:i()})):(0,r.jsx)("h5",o({},s,{children:i()}))}},747:function(e,t,n){"use strict";var r=n(5893),l=(n(7294),n(1590));t.Z=function(e){var t=e.renderCode,n=e.imageAlt,o=e.imageUrl;return(0,r.jsxs)("div",{className:"grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4",children:[(0,r.jsx)("div",{className:"col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8",children:(0,r.jsx)(l.Z,{children:t()})}),(0,r.jsx)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:(0,r.jsx)("img",{className:"rounded-3xl border-4 border-pink-200 mb-4",alt:n,src:"".concat("/react-native-stylo-documentation","/images/").concat(o)})})]})}},9077:function(e,t,n){"use strict";var r=n(5893),l=n(1664),o=n.n(l),i=n(7294),s=n(6900),a=[{type:"TBackgroundColorStyle",route:"background-color"},{type:"TBorderStyle",route:"border"},{type:"TFlexStyle",route:"flex"},{type:"TFontColorStyle",route:"font-color"},{type:"TMarginStyle",route:"margin"},{type:"TPaddingStyle",route:"padding"},{type:"TImageStyle",route:"image"},{type:"TImageBackgroundStyle",route:"image-background"},{type:"TScrollViewStyle",route:"scroll-view"},{type:"TTextStyle",route:"text"},{type:"TTextInputStyle",route:"text-input"},{type:"TTouchableStyle",route:"touchable"},{type:"TViewStyle",route:"view"},{type:"TAvatarStyle",route:"avatar"},{type:"TBadgeStyle",route:"badge"},{type:"TButtonStyle",route:"button"},{type:"TFormStyle",route:"form"},{type:"THorizontalStyle",route:"horizontal"},{type:"TListStyle",route:"list"},{type:"TScreenStyle",route:"screen"},{type:"TTagStyle",route:"tag"}];t.Z=function(e){var t=e.display;return(0,r.jsxs)(s.Z,{children:["Ref:"," ",a.filter((function(e){return!!t.find((function(t){return t===e.type}))})).map((function(e,n){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(o(),{href:"/stylo-theme-".concat(e.route,"-styles#type-definition"),children:e.type}),n<t.length-1?", ":null]},e.route)}))]})}},3576:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),l=n(9008),o=n.n(l),i=n(7294),s=n(3830),a=n(1590),c=n(4743),y=n(7687),u=n(747),d=function(){return(0,r.jsx)(u.Z,{renderCode:function(){return"<Stylish.Text styleNames={['Margin.Bottom']}>Default</Stylish.Text>\n<Stylish.Text styleNames={['Bold', 'Margin.Bottom']}>\n  A bold impression!\n</Stylish.Text>\n<Stylish.Text styleNames={['Small', 'Margin.Bottom.Large']}>\n  Small but powerfull!\n</Stylish.Text>\n\n<Stylish.Text styleNames={['H1', 'Color.Primary']}>H1</Stylish.Text>\n<Stylish.Text styleNames={['H2', 'Color.Info']}>H2</Stylish.Text>\n<Stylish.Text styleNames={['H3', 'Color.Warning']}>H3</Stylish.Text>\n<Stylish.Text\n  styleNames={['H4', 'Color.Danger', 'Margin.Bottom.Large']}>\n  H4\n</Stylish.Text>\n\n<Stylish.Text styleNames={['Paragraph', 'Align.Center']}>\n  Stylo follows a philosophy called Styles only, with which it provides\n  only the style definitions & does not provide any behavioral/action\n  components like Card, Badge, Picker etc. The library provides\n  extensive style definitions enough to style/create all kinds of\n  components, right from simple Text to complicated Pickers & Forms.\n</Stylish.Text>"},imageAlt:"Text",imageUrl:"showcase-text.png"})},h=n(7655),p=n(9077),g=function(){return(0,r.jsx)(c.Z,{renderNavigation:function(){return(0,r.jsx)(h.Z,{})},renderContent:function(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"Text | Stylo theme | React Native Stylo"})}),(0,r.jsxs)("article",{children:[(0,r.jsx)(s.Z,{children:"Text"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(y.Z,{id:"type-definition",level:5,children:"Type definition"}),(0,r.jsx)(p.Z,{display:["TFontColorStyle","TMarginStyle","TBadgeStyle","TButtonStyle","TTagStyle"]}),(0,r.jsx)(a.Z,{children:"type TTextStyle =\n  | TFontColorStyle\n  | TMarginStyle\n  | TBadgeTextStyle\n  | TButtonTextStyle\n  | TTagTextStyle\n  | 'Align.Center'\n  | 'Align.Right'\n  | 'Bold'\n  | 'Bold.Semi'\n  | 'H1'\n  | 'H2'\n  | 'H3'\n  | 'H4'\n  | 'Small'\n  | 'Large'\n  | 'Paragraph';"})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(y.Z,{id:"usage",level:5,children:"Usage"}),(0,r.jsx)(d,{})]})]})]})}})}}},function(e){e.O(0,[9814,1447,9774,2888,179],(function(){return t=9354,e(e.s=t);var t}));var t=e.O();_N_E=t}]);