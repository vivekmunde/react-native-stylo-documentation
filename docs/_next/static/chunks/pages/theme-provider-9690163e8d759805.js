(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8641],{4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme-provider",function(){return n(9635)}])},1590:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,r.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},6734:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("small",{children:(0,r.jsx)("code",{className:"text-black bg-gray-100 p-1 rounded",children:t})})}},6900:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className,s=e.style;return(0,r.jsx)("p",{className:"mb-4 ".concat(null!==n&&void 0!==n?n:""),style:s,children:t})}},9122:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(){return(0,r.jsx)("small",{className:"font-light text-red-500",children:"(Required)"})}},7687:function(e,t,n){"use strict";var r=n(5893);n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}t.Z=function(e){var t=e.children,n=e.id,s=e.level,l=function(){return(0,r.jsx)("a",{href:"#".concat(n),children:t})},c={className:"heading",id:n};return 1===s?(0,r.jsx)("h1",i({},c,{children:l()})):2===s?(0,r.jsx)("h2",i({},c,{children:l()})):3===s?(0,r.jsx)("h3",i({},c,{children:l()})):4===s?(0,r.jsx)("h4",i({},c,{children:l()})):(0,r.jsx)("h5",i({},c,{children:l()}))}},9635:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(9008),i=n.n(s),l=n(1664),c=n.n(l),a=n(7294),o=n(3830),h=n(1590),d=n(8046),u=n(6734),f=n(4743),x=n(7370),m=n(6900),j=n(9122),p=n(7687);t.default=function(){return(0,r.jsx)(f.Z,{renderNavigation:function(){return(0,r.jsx)(x.Z,{})},renderContent:function(){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsxs)("title",{children:["<ThemeProvider />"," | React Native Stylo"]})}),(0,r.jsxs)("article",{children:[(0,r.jsx)(o.Z,{children:"<ThemeProvider />"}),(0,r.jsxs)(m.Z,{children:["As the name says, the ",(0,r.jsx)("strong",{className:"font-semibold",children:"ThemeProvider"})," is a component responsible for providing the theme values across the application. The ",(0,r.jsx)(u.Z,{children:"ThemeProvider"})," creates a ",(0,r.jsx)(d.Z,{href:"https://reactjs.org/docs/context.html",children:"React Context"})," to hold the theme values & ideally sits at the root of the application layout."]}),(0,r.jsxs)(m.Z,{children:["In the main file of the application, wrap the application inside the ",(0,r.jsx)(u.Z,{children:"ThemeProvider"})," & supply the theme values to it."]}),(0,r.jsx)(h.Z,{children:"import { ThemeProvider } from 'react-native-stylo';\n\nimport { variables, styles } from './themes/default';\n\nconst App = () => (\n  <ThemeProvider variables={variables} styles={styles}>\n    // Application layout\n  </ThemeProvider>\n);"}),(0,r.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,r.jsx)(p.Z,{id:"props",level:4,children:"Props"}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("h5",{className:"text-lg",children:[(0,r.jsx)(u.Z,{children:"variables"})," ",(0,r.jsx)(j.Z,{})]}),(0,r.jsxs)(m.Z,{children:["The ",(0,r.jsx)(c(),{href:"/theme#variables",children:"variables"})," defined in the theme. These variables can be accessed across the application using the hook ",(0,r.jsx)(c(),{href:"/use-variables",children:"useVariables()"}),"."]})]}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("h5",{className:"text-lg",children:[(0,r.jsx)(u.Z,{children:"styles"})," ",(0,r.jsx)(j.Z,{})]}),(0,r.jsxs)(m.Z,{children:["The style definitions defined in the theme. These styles are used by the ",(0,r.jsx)(c(),{href:"/stylish",children:"Stylish"})," components & ",(0,r.jsx)(c(),{href:"/stylers",children:"Styler"})," hooks to apply them to components."]})]})]})]})]})}})}}},function(e){e.O(0,[9814,529,9774,2888,179],(function(){return t=4,e(e.s=t);var t}));var t=e.O();_N_E=t}]);