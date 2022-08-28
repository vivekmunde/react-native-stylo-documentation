(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5834],{1960:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylo-theme-button-styles",function(){return e(7943)}])},1590:function(t,n,e){"use strict";var o=e(5893);e(7294);n.Z=function(t){var n=t.children;return(0,o.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,o.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:n})})}},7687:function(t,n,e){"use strict";var o=e(5893);e(7294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),o.forEach((function(n){l(t,n,e[n])}))}return t}n.Z=function(t){var n=t.children,e=t.id,l=t.level,r=function(){return(0,o.jsx)("a",{href:"#".concat(e),children:n})},a={className:"heading",id:e};return 1===l?(0,o.jsx)("h1",i({},a,{children:r()})):2===l?(0,o.jsx)("h2",i({},a,{children:r()})):3===l?(0,o.jsx)("h3",i({},a,{children:r()})):4===l?(0,o.jsx)("h4",i({},a,{children:r()})):(0,o.jsx)("h5",i({},a,{children:r()}))}},747:function(t,n,e){"use strict";var o=e(5893),l=e(7294),i=e(1590),r=function(t){var n=t.imageAlt,e=t.imageUrl,i=(0,l.useState)("Light"),r=i[0],a=i[1],s="border",c="border bg-pink-50 border-pink-100";return(0,o.jsxs)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:[(0,o.jsx)("div",{className:"p-2 pl-4 pr-4",children:(0,o.jsxs)("div",{className:"flex flex-row align-center justify-center",children:[(0,o.jsx)("button",{className:"p-1 text-sm rounded-l ".concat("Light"===r?c:s," border-r-[0]"),style:{width:"96px"},onClick:function(){a("Light")},children:"Light"}),(0,o.jsx)("button",{className:"p-1 text-sm rounded-r ".concat("Dark"===r?c:s," border-l-[0]"),style:{width:"96px"},onClick:function(){a("Dark")},children:"Dark"})]})}),(0,o.jsx)("img",{className:"rounded-3xl border-4 border-gray-700 mb-4",alt:n,src:"".concat("/react-native-stylo-documentation","/images/").concat("Light"===r?e.light:e.dark)})]})};n.Z=function(t){var n=t.renderCode,e=t.imageAlt,l=t.imageUrl;return(0,o.jsxs)("div",{className:"grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4",children:[(0,o.jsx)("div",{className:"col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8",children:(0,o.jsx)(i.Z,{children:n()})}),(0,o.jsx)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:"string"===typeof l?(0,o.jsx)("img",{className:"rounded-3xl border-4 border-gray-700 mb-4",alt:e,src:"".concat("/react-native-stylo-documentation","/images/").concat(l)}):(0,o.jsx)(r,{imageAlt:e,imageUrl:l})})]})}},7943:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return m}});var o=e(5893),l=e(9008),i=e.n(l),r=e(7294),a=e(3830),s=e(1590),c=e(4743),h=e(7687),y=e(747),u=function(){return(0,o.jsx)(y.Z,{renderCode:function(){return"<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'BackgroundColor.Primary', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Color.White']}>\n      Submit\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Small', 'BackgroundColor.Info', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Small', 'Color.White']}>\n      Small\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Large', 'BackgroundColor.Warning', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Large', 'Color.White']}>\n      Large\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n</Stylish.View>\n\n<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Border', 'Border.Color.Primary', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Color.Primary']}>\n      Bordered\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Small', 'Border', 'Border.Color.Info', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Small', 'Color.Info']}>\n      Small\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Large', 'Border', 'Border.Color.Warning', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Large', 'Color.Warning']}>\n      Large\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n</Stylish.View>\n\n<Stylish.View styleNames={['Flex.Row']}>\n  <Stylish.TouchableOpacity\n    style={{ flex: 1 }}\n    styleNames={['Button', 'BackgroundColor.Info', 'Margin.Right.Mini', 'Margin.Bottom']}>\n    <Stylish.Icon.AntDesign name=\"left\" styleNames={['Button.Icon', 'Button.Icon.Left', 'Color.White']} />\n    <Stylish.Text styleNames={['Button.Text', 'Color.White']}>\n      Previous\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n  <Stylish.TouchableOpacity\n    style={{ flex: 1 }}\n    styleNames={['Button', 'BackgroundColor.Info', 'Margin.Left.Mini', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Color.White']}>\n      Next\n    </Stylish.Text>\n    <Stylish.Icon.AntDesign name=\"right\" styleNames={['Button.Icon', 'Button.Icon.Right', 'Color.White']} />\n  </Stylish.TouchableOpacity>\n</Stylish.View>\n\n<Stylish.View styleNames={['Flex.Row']}>\n  <Stylish.TouchableOpacity\n    style={{ flex: 1 }}\n    styleNames={['Button', 'Border', 'Border.Color.Danger', 'Flex.JustifyContent.SpaceBetween', 'BackgroundColor.White', 'Margin.Right.Mini', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Color.Danger']}>\n      More\n    </Stylish.Text>\n    <Stylish.Icon.AntDesign name=\"arrowright\" styleNames={['Button.Icon', 'Color.Danger']} />\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    style={{ flex: 1 }}\n    styleNames={['Button', 'Border', 'Border.Color.Warning', 'Flex.JustifyContent.SpaceBetween', 'BackgroundColor.White', 'Margin.Left.Mini', 'Margin.Bottom']}>\n    <Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>\n      <Stylish.Icon.AntDesign name=\"home\" styleNames={['Button.Icon', 'Button.Icon.Left', 'Color.Warning']} />\n      <Stylish.Text styleNames={['Button.Text', 'Color.Warning']}>\n        Home\n      </Stylish.Text>\n    </Stylish.View>\n    <Stylish.Icon.AntDesign name=\"right\" styleNames={['Button.Icon', 'Color.Warning']} />\n  </Stylish.TouchableOpacity>\n</Stylish.View>\n\n<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Round', 'BackgroundColor.Primary', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Color.White']}>\n      Submit\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Round', 'Button.Small', 'BackgroundColor.Info', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Small', 'Color.White']}>\n      Small\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Round', 'Button.Large', 'BackgroundColor.Warning', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Large', 'Color.White']}>\n      Large Button\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n</Stylish.View>\n\n<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Round', 'Border', 'Border.Color.Primary', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Color.Primary']}>\n      Submit\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Round', 'Button.Small', 'Border', 'Border.Color.Info', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Small', 'Color.Info']}>\n      Small\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Round', 'Button.Large', 'Border', 'Border.Color.Warning', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Text styleNames={['Button.Text', 'Large', 'Color.Warning']}>\n      Large Button\n    </Stylish.Text>\n  </Stylish.TouchableOpacity>\n</Stylish.View>\n\n<Stylish.View styleNames={['Flex.Row', 'Flex.AlignItems.Center']}>\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Circle', 'BackgroundColor.Primary', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Icon.AntDesign name=\"left\" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Color.White']} />\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Small', 'Button.Circle', 'BackgroundColor.Info', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Icon.AntDesign name=\"home\" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Button.Circle.Icon.Small', 'Color.White']} />\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Large', 'Button.Circle', 'BackgroundColor.Warning', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Icon.AntDesign name=\"right\" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Button.Circle.Icon.Large', 'Color.White']} />\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Circle', 'Border', 'Border.Color.Primary', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Icon.AntDesign name=\"left\" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Color.Primary']} />\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Small', 'Button.Circle', 'Border', 'Border.Color.Info', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Icon.AntDesign name=\"home\" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Button.Circle.Icon.Small', 'Color.Info']} />\n  </Stylish.TouchableOpacity>\n\n  <Stylish.TouchableOpacity\n    styleNames={['Button', 'Button.Large', 'Button.Circle', 'Border', 'Border.Color.Warning', 'BackgroundColor.White', 'Margin.Right', 'Margin.Bottom']}>\n    <Stylish.Icon.AntDesign name=\"right\" styleNames={['Button.Icon', 'Button.Circle.Icon', 'Button.Circle.Icon.Large', 'Color.Warning']} />\n  </Stylish.TouchableOpacity>\n</Stylish.View>\n\n<Stylish.TouchableOpacity\n  styleNames={['Button', 'BackgroundColor.Primary', 'Flex.JustifyContent.SpaceBetween', 'Margin.Bottom']}>\n  <Stylish.Text styleNames={['Button.Text', 'Color.White']}>\n    Submit\n  </Stylish.Text>\n  <ActivityIndicator size=\"small\" color={colorWhite} />\n</Stylish.TouchableOpacity>\n\n<Stylish.TouchableOpacity\n  styleNames={['Button', 'Border', 'Border.Color.Primary', 'Margin.Bottom']}>\n  <ActivityIndicator size=\"small\" color={colorPrimary} />\n</Stylish.TouchableOpacity>"},imageAlt:"Button",imageUrl:{light:"showcase-button-light.png",dark:"showcase-button-dark.png"}})},g=e(7655),m=function(){return(0,o.jsx)(c.Z,{renderNavigation:function(){return(0,o.jsx)(g.Z,{})},renderContent:function(){return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(i(),{children:(0,o.jsx)("title",{children:"Button | Stylo theme | React Native Stylo"})}),(0,o.jsxs)("article",{children:[(0,o.jsx)(a.Z,{children:"Button"}),(0,o.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,o.jsx)(h.Z,{id:"type-definition",level:5,children:"Type definition"}),(0,o.jsx)(s.Z,{children:"type TButtonStyle =\n  | 'Button'\n  | 'Button.Circle'\n  | 'Button.Small'\n  | 'Button.Large'\n  | 'Button.Round'\n  | 'Button.Transparent';\n\ntype TButtonTextStyle = 'Button.Text';\n\ntype TButtonIconStyle =\n  | 'Button.Icon'\n  | 'Button.Icon.Left'\n  | 'Button.Icon.Right'\n  | 'Button.Circle.Icon'\n  | 'Button.Circle.Icon.Small'\n  | 'Button.Circle.Icon.Large';"})]}),(0,o.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,o.jsx)(h.Z,{id:"style-names-hierarchy",level:5,children:"StyleNames hierarchy"}),(0,o.jsx)(s.Z,{children:"'Button'\n  |- 'Button.Icon'\n  |- 'Button.Text';"})]}),(0,o.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,o.jsx)(h.Z,{id:"usage",level:5,children:"Usage"}),(0,o.jsx)(u,{})]})]})]})}})}}},function(t){t.O(0,[9814,1447,9774,2888,179],(function(){return n=1960,t(t.s=n);var n}));var n=t.O();_N_E=n}]);