(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3204],{5368:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylo-theme-customization",function(){return t(7494)}])},1590:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.children;return(0,r.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,r.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:n})})}},6734:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.children;return(0,r.jsx)("small",{children:(0,r.jsx)("code",{className:"text-black bg-gray-100 p-1 rounded",children:n})})}},6900:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.children,t=e.className,s=e.style;return(0,r.jsx)("p",{className:"mb-4 ".concat(null!==t&&void 0!==t?t:""),style:s,children:n})}},7687:function(e,n,t){"use strict";var r=t(5893);t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}n.Z=function(e){var n=e.children,t=e.id,s=e.level,o=function(){return(0,r.jsx)("a",{href:"#".concat(t),children:n})},a={className:"heading",id:t};return 1===s?(0,r.jsx)("h1",i({},a,{children:o()})):2===s?(0,r.jsx)("h2",i({},a,{children:o()})):3===s?(0,r.jsx)("h3",i({},a,{children:o()})):4===s?(0,r.jsx)("h4",i({},a,{children:o()})):(0,r.jsx)("h5",i({},a,{children:o()}))}},7494:function(e,n,t){"use strict";t.r(n);var r=t(5893),s=t(9008),i=t.n(s),o=t(7294),a=t(3830),l=t(1590),d=t(6734),c=t(4743),h=t(6900),u=t(7687),m=t(7655);n.default=function(){return(0,r.jsx)(c.Z,{renderNavigation:function(){return(0,r.jsx)(m.Z,{})},renderContent:function(){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Customizing Stylo theme | React Native Stylo"})}),(0,r.jsxs)("article",{children:[(0,r.jsx)(a.Z,{children:"Customizing Stylo theme"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"theme-structure",level:4,children:"Theme structure"}),(0,r.jsx)(l.Z,{children:"themes\n    |- default\n      |- __generated__\n      |- assorted\n      |- components\n      |- generic\n    |- types\n      |- __generated__\n      |- assorted\n      |- components\n      |- generic"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"types",level:5,children:"types"}),(0,r.jsxs)(h.Z,{children:["All the types are defined under the directory called ",(0,r.jsx)(d.Z,{children:"types"}),"."]})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"default",level:5,children:"default"}),(0,r.jsxs)(h.Z,{children:["It's"," the Stylo theme."]})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"__generated__",level:5,children:"__generated__"}),(0,r.jsxs)(h.Z,{children:["The default style definitions, created by Stylo, are defined under directory called ",(0,r.jsx)(d.Z,{children:"__generated__"}),". These style definitions are used across all the other files in the theme. Do not directly modify the files under ",(0,r.jsx)(d.Z,{children:"__generated__"}),"."]})]})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"customize",level:3,children:"How to customize?"}),(0,r.jsxs)(h.Z,{children:["Any file which is outside of the directory ",(0,r.jsx)(d.Z,{children:"__generated__"})," can be modified. All the files, which are meant to be modified, clearly state that they can be modified, like below."]}),(0,r.jsx)(l.Z,{children:"/* -------------------------------------------------------------------------------- */\n  /*                               react-native-stylo                                 */\n  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */\n  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */\n  /* -------------------------------------------------------------------------------- */\n  \n  /* -------------------------------------------------------------------------------- */\n  /*                           Customize as per your needs                            */\n  /* -------------------------------------------------------------------------------- */"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"customize-variables",level:5,children:"Variables"}),(0,r.jsxs)(h.Z,{children:["All the variables are defined in the file called ",(0,r.jsx)(d.Z,{children:"variable.ts"}),". Open the ",(0,r.jsx)(d.Z,{children:"variable.ts"})," file from the theme & modify them as per your needs."]})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(u.Z,{id:"customize-style-defs",level:3,children:"Examples"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)("h5",{children:"Background colors"}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)("strong",{className:"font-semibold",children:"1. Add type definition"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Open the file ",(0,r.jsx)(d.Z,{children:"types/generic/background-color.ts"}),". Add new background color names as per your need."]}),(0,r.jsx)(l.Z,{children:"/* -------------------------------------------------------------------------------- */\n  /*                               react-native-stylo                                 */\n  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */\n  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */\n  /* -------------------------------------------------------------------------------- */\n  \n  /* -------------------------------------------------------------------------------- */\n  /*                           Customize as per your needs                            */\n  /* -------------------------------------------------------------------------------- */\n  \n  import _TBackgroundColorStyle from '../__generated__/generic/background-color';\n  \n  type TBackgroundColorStyle = _TBackgroundColorStyle | 'BackgroundColor.Pink' | 'BackgroundColor.Violet';\n  \n  export default TBackgroundColorStyle;"}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)("strong",{className:"font-semibold",children:"2. Add style definition"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Open the file ",(0,r.jsx)(d.Z,{children:"default/generic/background-color.ts"}),". Add new background colors, against the types defined in step 1, as per your need."]}),(0,r.jsx)(l.Z,{children:"/* -------------------------------------------------------------------------------- */\n  /*                               react-native-stylo                                 */\n  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */\n  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */\n  /* -------------------------------------------------------------------------------- */\n  \n  /* -------------------------------------------------------------------------------- */\n  /*                           Customize as per your needs                            */\n  /* -------------------------------------------------------------------------------- */\n  \n  import { StyleSheet } from 'react-native';\n  import _BackgroundColorStyles from '../__generated__/generic/background-color-styles';\n  \n  const BackgroundColorStyles = StyleSheet.create({\n    ..._BackgroundColorStyles,\n    'BackgroundColor.Pink': {\n      backgroundColor: '#FF69B4',\n    },\n    'BackgroundColor.Violet': {\n      backgroundColor: '#EE82EE',\n    }\n  });\n  \n  export default BackgroundColorStyles;"})]}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)("h5",{children:"Extend theme by adding new styles: Card"}),(0,r.jsxs)(h.Z,{children:["You can easily add a new styles which do not exist in the theme. For example, Card styles.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("strong",{className:"font-semibold",children:"1. Define style types"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Create a new file under directory ",(0,r.jsx)(d.Z,{children:"types"})," as ",(0,r.jsx)(d.Z,{children:"types/assorted/card.ts"}),"."]}),(0,r.jsx)(l.Z,{children:"/* -------------------------------------------------------------------------------- */\n  /*                               react-native-stylo                                 */\n  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */\n  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */\n  /* -------------------------------------------------------------------------------- */\n  \n  /* -------------------------------------------------------------------------------- */\n  /*                           Customize as per your needs                            */\n  /* -------------------------------------------------------------------------------- */\n  \n  export type TCardStyle = 'Card' | 'Card.Header' | 'Card.Body' | 'Card.Footer';"}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)("strong",{className:"font-semibold",children:"2. Create style definitions"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Create a new file under directory ",(0,r.jsx)(d.Z,{children:"default"})," as ",(0,r.jsx)(d.Z,{children:"default/assorted/card.ts"}),"."]}),(0,r.jsx)(l.Z,{children:"/* -------------------------------------------------------------------------------- */\n  /*                               react-native-stylo                                 */\n  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */\n  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */\n  /* -------------------------------------------------------------------------------- */\n  \n  /* -------------------------------------------------------------------------------- */\n  /*                           Customize as per your needs                            */\n  /* -------------------------------------------------------------------------------- */\n  \n  import { StyleSheet } from 'react-native';\n  import Variables from '../variables';\n  \n  const CardStyles = StyleSheet.create({\n    Card: {\n      borderRadius: Variables['Border.Radius'],\n      flexDirection: 'column',\n    },\n    'Card.Header': {\n      padding: Variables.Padding,\n      borderTopLeftRadius: Variables['Border.Radius'],\n      borderTopRightRadius: Variables['Border.Radius'],\n      borderBottomWidth: 1,\n      borderBottomColor: Variables['Border.Color'],\n    },\n    'Card.Body': {\n      padding: Variables.Padding,\n    },\n    'Card.Footer': {\n      padding: Variables.Padding,\n      borderBottomLeftRadius: Variables['Border.Radius'],\n      borderBottomRightRadius: Variables['Border.Radius'],\n      borderTopWidth: 1,\n      borderTopColor: Variables['Border.Color'],\n    },\n  });\n  \n  export default CardStyles;"}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)("strong",{className:"font-semibold",children:"3. Add these styles to View & Touchable styles"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Open ",(0,r.jsx)(d.Z,{children:"default/components/view-styles.ts"})]}),(0,r.jsx)(l.Z,{children:"/* -------------------------------------------------------------------------------- */\n  /*                               react-native-stylo                                 */\n  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */\n  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */\n  /* -------------------------------------------------------------------------------- */\n  \n  /* -------------------------------------------------------------------------------- */\n  /*                           Customize as per your needs                            */\n  /* -------------------------------------------------------------------------------- */\n  \n  import { StyleSheet } from 'react-native';\n  import CardStyles from '../assorted/card-styles';\n  ... // other imports\n  \n  const ViewStyles = StyleSheet.create({\n    ... // other styles\n    ...CardStyles,\n  });\n  \n  export default ViewStyles;"}),(0,r.jsxs)(h.Z,{children:["Open ",(0,r.jsx)(d.Z,{children:"default/components/touchable-styles.ts"})]}),(0,r.jsx)(l.Z,{children:"/* -------------------------------------------------------------------------------- */\n  /*                               react-native-stylo                                 */\n  /*           GitHub: https://github.com/vivekmunde/react-native-stylo               */\n  /*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */\n  /* -------------------------------------------------------------------------------- */\n  \n  /* -------------------------------------------------------------------------------- */\n  /*                           Customize as per your needs                            */\n  /* -------------------------------------------------------------------------------- */\n  \n  import { StyleSheet } from 'react-native';\n  import CardStyles from '../assorted/card-styles';\n  ... // other imports\n  \n  const TouchableStyles = StyleSheet.create({\n    ... // other styles\n    ...CardStyles,\n  });\n  \n  export default TouchableStyles;"})]})]})]})]})]})}})}}},function(e){e.O(0,[9814,1447,9774,2888,179],(function(){return n=5368,e(e.s=n);var n}));var n=e.O();_N_E=n}]);