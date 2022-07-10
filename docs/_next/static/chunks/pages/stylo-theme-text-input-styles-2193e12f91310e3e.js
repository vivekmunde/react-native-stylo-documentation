(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9546],{5008:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylo-theme-text-input-styles",function(){return n(230)}])},1590:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,r.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},6900:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className,o=e.style;return(0,r.jsx)("p",{className:"mb-4 ".concat(n),style:o,children:t})}},7687:function(e,t,n){"use strict";var r=n(5893);n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}t.Z=function(e){var t=e.children,n=e.id,o=e.level,a=function(){return(0,r.jsx)("a",{href:"#".concat(n),children:t})},i={className:"heading",id:n};return 1===o?(0,r.jsx)("h1",l({},i,{children:a()})):2===o?(0,r.jsx)("h2",l({},i,{children:a()})):3===o?(0,r.jsx)("h3",l({},i,{children:a()})):4===o?(0,r.jsx)("h4",l({},i,{children:a()})):(0,r.jsx)("h5",l({},i,{children:a()}))}},747:function(e,t,n){"use strict";var r=n(5893),o=(n(7294),n(1590));t.Z=function(e){var t=e.renderCode,n=e.imageAlt,l=e.imageUrl;return(0,r.jsxs)("div",{className:"grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4",children:[(0,r.jsx)("div",{className:"col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8",children:(0,r.jsx)(o.Z,{children:t()})}),(0,r.jsx)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:(0,r.jsx)("img",{className:"rounded-3xl border-4 border-pink-200",alt:n,src:"".concat("/react-native-stylo-documentation","/images/").concat(l)})})]})}},9077:function(e,t,n){"use strict";var r=n(5893),o=n(1664),l=n.n(o),a=n(7294),i=n(6900),s=[{type:"TBackgroundColorStyle",route:"background-color"},{type:"TBorderStyle",route:"border"},{type:"TFlexStyle",route:"flex"},{type:"TFontColorStyle",route:"font-color"},{type:"TMarginStyle",route:"margin"},{type:"TPaddingStyle",route:"padding"},{type:"TImageStyle",route:"image"},{type:"TImageBackgroundStyle",route:"image-background"},{type:"TScrollViewStyle",route:"scroll-view"},{type:"TTextStyle",route:"text"},{type:"TTextInputStyle",route:"text-input"},{type:"TTouchableStyle",route:"touchable"},{type:"TViewStyle",route:"view"},{type:"TAvatarStyle",route:"avatar"},{type:"TBadgeStyle",route:"badge"},{type:"TButtonStyle",route:"button"},{type:"TFormStyle",route:"form"},{type:"THorizontalStyle",route:"horizontal"},{type:"TListStyle",route:"list"},{type:"TScreenStyle",route:"screen"},{type:"TTagStyle",route:"tag"}];t.Z=function(e){var t=e.display;return(0,r.jsxs)(i.Z,{children:["Ref:"," ",s.filter((function(e){return!!t.find((function(t){return t===e.type}))})).map((function(e,n){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(l(),{href:"/stylo-theme-".concat(e.route,"-styles#type-definition"),children:e.type}),n<t.length-1?", ":null]},e.route)}))]})}},230:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),o=n(9008),l=n.n(o),a=n(7294),i=n(3830),s=n(1590),c=n(4743),u=n(7687),d=n(747),y=function(){return(0,r.jsx)(d.Z,{renderCode:function(){return"<Stylish.TextInput\n  styleNames={['Border', 'BackgroundColor.White', 'Margin.Bottom.Large']}\n  value=\"Stylo\" />\n\n<Stylish.TextInput\n  styleNames={['Border', 'Border.Color.Grey7', 'BackgroundColor.White', 'Bold', 'Margin.Bottom.Large']}\n  value=\"A Bold Impression!\" />\n\n<Stylish.TextInput\n  styleNames={['Border', 'Border.Color.Danger', 'Color.Danger', 'BackgroundColor.Danger1', 'Margin.Bottom.Large']}\n  value=\"An invalid value\" />\n\n<Stylish.TextInput\n  styleNames={['Align.Center', 'Border', 'BackgroundColor.White', 'Margin.Bottom.Large']}\n  value=\"Center\" />\n\n<Stylish.TextInput\n  styleNames={['Align.Right', 'Border', 'BackgroundColor.White', 'Margin.Bottom.Large']}\n  value=\"Right\" />\n\n<Stylish.TextInput\n  styleNames={['Border', 'BackgroundColor.White', 'Small', 'Margin.Bottom.Large']}\n  value=\"A small input\" />\n\n<Stylish.TextInput\n  styleNames={['Border', 'BackgroundColor.White', 'Large', 'Margin.Bottom.Large']}\n  value=\"A larger input\" />\n\n<Stylish.TextInput\n  styleNames={['Border', 'BackgroundColor.White', 'Padding.Large', 'Margin.Bottom.Large']}\n  value=\"A relaxed input\" />"},imageAlt:"TextInput",imageUrl:"showcase-text-input.png"})},g=n(7655),p=n(9077),h=function(){return(0,r.jsx)(c.Z,{renderNavigation:function(){return(0,r.jsx)(g.Z,{})},renderContent:function(){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"TextInput | Stylo theme | React Native Stylo"})}),(0,r.jsxs)("article",{children:[(0,r.jsx)(i.Z,{children:"TextInput"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"type-definition",level:5,children:"Type definition"}),(0,r.jsx)(p.Z,{display:["TBackgroundColorStyle","TFontColorStyle","TMarginStyle","TPaddingStyle","TBorderStyle"]}),(0,r.jsx)(s.Z,{children:"type TTextInputStyle =\n  | TBackgroundColorStyle\n  | TFontColorStyle\n  | TMarginStyle\n  | TPaddingStyle\n  | TBorderStyle\n  | 'Align.Center'\n  | 'Align.Right'\n  | 'Bold'\n  | 'Bold.Semi'\n  | 'Small'\n  | 'Large';"})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"usage",level:5,children:"Usage"}),(0,r.jsx)(y,{})]})]})]})}})}}},function(e){e.O(0,[9814,1447,9774,2888,179],(function(){return t=5008,e(e.s=t);var t}));var t=e.O();_N_E=t}]);