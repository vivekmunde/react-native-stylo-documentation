(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9466],{467:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tight-coupling",function(){return n(3640)}])},1590:function(e,t,n){"use strict";var s=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,s.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,s.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},6734:function(e,t,n){"use strict";var s=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,s.jsx)("small",{children:(0,s.jsx)("code",{className:"text-black bg-gray-100 p-1 rounded",children:t})})}},6900:function(e,t,n){"use strict";var s=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className,o=e.style;return(0,s.jsx)("p",{className:"mb-4 ".concat(null!==n&&void 0!==n?n:""),style:o,children:t})}},7687:function(e,t,n){"use strict";var s=n(5893);n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){o(e,t,n[t])}))}return e}t.Z=function(e){var t=e.children,n=e.id,o=e.level,l=function(){return(0,s.jsx)("a",{href:"#".concat(n),children:t})},i={className:"heading",id:n};return 1===o?(0,s.jsx)("h1",r({},i,{children:l()})):2===o?(0,s.jsx)("h2",r({},i,{children:l()})):3===o?(0,s.jsx)("h3",r({},i,{children:l()})):4===o?(0,s.jsx)("h4",r({},i,{children:l()})):(0,s.jsx)("h5",r({},i,{children:l()}))}},8468:function(e,t,n){"use strict";n.d(t,{e:function(){return s},y:function(){return o}});var s="/node_modules/react-native-stylo/lib/stylo",o="/node_modules/react-native-stylo/lib/stylo/themes"},3640:function(e,t,n){"use strict";n.r(t);var s=n(5893),o=n(9008),r=n.n(o),l=n(1664),i=n.n(l),c=n(7294),a=n(3830),h=n(1590),y=n(6734),d=n(4743),m=n(7370),p=n(6900),u=n(7687),x=n(8468);t.default=function(){return(0,s.jsx)(d.Z,{renderNavigation:function(){return(0,s.jsx)(m.Z,{})},renderContent:function(){return(0,s.jsxs)(c.Fragment,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"Tight coupling | React Native Stylo"})}),(0,s.jsxs)("article",{children:[(0,s.jsx)(a.Z,{children:"Tight coupling"}),(0,s.jsxs)(p.Z,{children:["To avoid passing the type of the ",(0,s.jsx)(i(),{href:"/theme#style-name",children:"StyleNames"})," each time to the ",(0,s.jsx)(i(),{href:"/stylish",children:"Stylish"})," components & ",(0,s.jsx)(i(),{href:"/stylers",children:"Styler"})," hooks, you can tightly couple the types to the ",(0,s.jsx)("strong",{className:"font-semibold",children:"Stylish"})," components & ",(0,s.jsx)("strong",{className:"font-semibold",children:"Styler"})," hooks easily. Simply create wrapper components & hooks which will internally pass the desired style type and then use these components & hooks without need to pass the style types."]}),(0,s.jsx)(p.Z,{children:(0,s.jsx)("strong",{className:"font-semibold",children:"Text.tsx"})}),(0,s.jsx)(h.Z,{children:"import React from 'react';\nimport { Text as StyloText, TTextProps } from 'react-native-stylo';\n\nimport { TTextStyle } from '../themes/types';\n\nconst View: React.FC<TTextProps<TTextStyle>> = props => <StyloText {...props} />;\n\nexport default Text;\n"}),(0,s.jsx)(p.Z,{children:(0,s.jsx)("strong",{className:"font-semibold",children:"useTextStyles.ts"})}),(0,s.jsx)(h.Z,{children:"import { useTextStyles as useStyloTextStyles } from 'react-native-stylo';\n\nimport { TTextStyle } from '../themes/types';\n\nconst useTextStyles = (styleNames: TTextStyle[] | undefined) => useStyloTextStyles<TTextStyle>(styleNames);\n\nexport default useTextStyles;\n"}),(0,s.jsx)(p.Z,{children:(0,s.jsx)("strong",{className:"font-semibold",children:"ComponentA.tsx"})}),(0,s.jsx)(h.Z,{children:"import Text from '../stylish/Text';\n\nconst ComponentA = () => (\n  <Text styleNames={['H1', 'Bold', 'Align.Center']}>\n    {...}\n  </Text>\n);"}),(0,s.jsx)(h.Z,{children:"import useTextStyles from '../stylers/useTextStyles';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      text: useTextStyles(['H1', 'Bold', 'Align.Center']),\n    }),\n  ).current;\n\n  return (\n    <Text style={styles.text}>\n      {...}\n    </Text>\n  );\n};"}),(0,s.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,s.jsx)(u.Z,{id:"predefined-tightly-coupled-hooks-components",level:4,children:"Stylo at your help"}),(0,s.jsxs)(p.Z,{children:["To save time & effort, Stylo provides these wrapper hooks & components, which are located at ",(0,s.jsx)("strong",{className:"font-semibold",children:x.e}),". Simply copy these to you app. Please note, these wrapper hooks & components import the types using a relative path ",(0,s.jsx)(y.Z,{children:"import { TTextStyle } from '../themes/types'"}),". If your theme types are defined at some other location then just change these type import paths in these hooks & components."]}),(0,s.jsxs)(p.Z,{children:["Wrappers for ",(0,s.jsx)(y.Z,{children:"Styler"})," hooks & ",(0,s.jsx)(y.Z,{children:"Stylish"})," components are located as below."]}),(0,s.jsx)(h.Z,{children:"[root]\n  |- node_modules\n    |- react-native-stylo\n      |- lib\n        |- stylo\n          |- stylers\n          |- stylish\n          |- themes\n            |- types\n            |- default"}),(0,s.jsx)(p.Z,{children:"Copy them to your app like below."}),(0,s.jsx)(h.Z,{children:"[root]\n  |- app\n    |- components\n    |- screens\n    |- stylo\n      |- stylers\n      |- stylish\n      |- themes\n        |- types\n        |- default"}),(0,s.jsx)(p.Z,{children:(0,s.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,s.jsx)(h.Z,{children:"import React from 'react';\nimport Stylish from '../stylo/stylish';\n\nconst ComponentA = () => {\n  return (\n    <Stylish.View styleNames={['Border', 'Border.Radius', 'Border.Color.Primary']}>\n      <Stylish.View styleNames={['Padding', 'Border.Bottom', 'Border.Color.Primary']}>\n        <Stylish.Text styleNames={['H2']}>\n          Stylish component\n        </Stylish.Text>\n      </Stylish.View>\n      <Stylish.View>\n        <Stylish.Text styleNames={['Bold']}>\n          Stylish components are nothing but enhanced React Native components.\n          Stylo adds an extra property styleNamesto the React Native components,\n          on top of core properties provided by React Native.\n        </Stylish.Text>\n      </Stylish.View>\n    </Stylish.View>\n  );\n};"}),(0,s.jsx)(h.Z,{children:"import React, { useRef } from 'react';\nimport { Text, StyleSheet } from 'react-native';\nimport { useTextStyles } from '../stylo/stylers';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      textStyle: useTextStyles(['H1', 'Bold', 'Color.Primary']),\n    })\n  ).current;\n\n  return (\n    <Text style={styles.textStyle} {...otherProps} />\n  );\n}"})]})]})]})}})}}},function(e){e.O(0,[9814,529,9774,2888,179],(function(){return t=467,e(e.s=t);var t}));var t=e.O();_N_E=t}]);