(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{8465:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core-concept",function(){return s(7280)}])},5603:function(e,t,s){"use strict";var n=s(5893),i=s(1664),a=s.n(i),r=s(1163),l=(s(7294),function(e){var t=e.children,s=e.href,i=(0,r.useRouter)();return(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:s,children:(0,n.jsx)("a",{className:i.pathname.toLowerCase()===s.toLowerCase()?"":"text-gray-800",children:t})})})});t.Z=function(e){var t=e.children;(0,r.useRouter)();return(0,n.jsx)("div",{className:"lg:container lg:mx-auto flex flex-col",children:(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsxs)("nav",{className:"p-4",style:{minWidth:"240px"},children:[(0,n.jsxs)("ul",{className:"mb-4",children:[(0,n.jsx)("li",{className:"mt-4 mb-8",children:(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("a",{className:"font-bold",children:"React Native Stylo"})})}),(0,n.jsx)(l,{href:"/core-concept",children:"Core concept"}),(0,n.jsx)(l,{href:"/installation-configuration",children:"Installation & configuration"}),(0,n.jsx)(l,{href:"/theme-provider",children:"Theme provider"}),(0,n.jsx)(l,{href:"/use-styles",children:"useStyles hook"}),(0,n.jsx)(l,{href:"/styles",children:"Styles component"}),(0,n.jsx)(l,{href:"/stylers",children:"Stylers"}),(0,n.jsx)(l,{href:"/stylish",children:"Stylish"})]}),(0,n.jsx)("footer",{children:"Footer"})]}),(0,n.jsx)("main",{className:"border-l p-4",style:{minHeight:"90vh"},children:t})]})})}},7280:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s(5893),i=s(9008),a=s.n(i),r=(s(7294),function(e){var t=e.children;return(0,n.jsx)("p",{className:"p-4 bg-gray-100 rounded",children:(0,n.jsx)("small",{children:(0,n.jsx)("code",{style:{whiteSpace:"pre"},children:t})})})}),l=function(e){var t=e.href,s=e.children;return(0,n.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:s})},o=function(e){var t=e.children;return(0,n.jsx)("small",{children:(0,n.jsx)("code",{className:"bg-gray-100 p-1 rounded",children:t})})},c=s(5603),d=function(){return(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Core concept | React Native Stylo"}),(0,n.jsx)("meta",{name:"description",content:"Completely detached and highly scalable React Native styles"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("article",{children:[(0,n.jsx)("h1",{className:"font-extralight",children:"Core concept"}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h4",{className:"heading",id:"styles-and-themes",children:(0,n.jsx)("a",{href:"#styles-and-themes",children:"Styles & Theme"})}),(0,n.jsxs)("p",{children:["Theme is nothing but a collection of styles defined using the React Native API ",(0,n.jsx)(o,{children:"StyleSheet.create()"}),". The theme is used by the library and its hooks/components to apply styles to the React Native components."]})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h4",{className:"heading",id:"styles-only",children:(0,n.jsx)("a",{href:"#styles-only",children:"Styles only"})}),(0,n.jsxs)("p",{children:["Each mobile app has its own requirements of components, so a set of predefined components, like Screen, Card, List, Form etc., cannot be completely suitable for mobiles apps. Also, having predefined components cannot be highly scalable or flexible enough to serve all requirements. These predefined components need to expose few props to add scalability & behavioral flexibility, but again these extra props neither make them fully scalable nor completely suitable.\xa0",(0,n.jsx)("strong",{children:"React Native Stylo"})," only provides style definitions and does not provide any layout/behavioral/action components like Card, Badge, Picker etc. However, the library provides all the style definitions needed to build all kinds of components, right from text to complicated pickers & forms."]})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h4",{className:"heading",id:"styles-completely-detached",children:(0,n.jsx)("a",{href:"#styles-completely-detached",children:"Styles completely detached"})}),(0,n.jsxs)("p",{children:["The style definitions or themes are completely detached from the library. The library only provides a set of hooks and extended ",(0,n.jsx)(l,{href:"https://reactnative.dev",children:"React Native"})," components. The style definitions can be defined (not just customized) by the consumer application the way it wants and not the way the library wants. The consumer application has the entire ownership & liberty of defining the style names (similar to class name in css/web) or their patterns. However, it provides a set of predefined themes. These can be used as is or can be considered as a guidelines or which can be customized easily as per needs."]})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h4",{className:"heading",id:"strongly-typed-styles",children:(0,n.jsx)("a",{href:"#strongly-typed-styles",children:"Strongly typed styles"})}),(0,n.jsx)("p",{children:"The styles are strongly typed. So the accidental usage of using wrong style name is completely avoided out of the box. On top of that, the style names are strongly typed per React Native component, like View, Text, TouchableOpacity etc. This adds an extra level of strong typing with which only the styles names which are intended for the component can be used."})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h4",{className:"heading",id:"react-components",children:(0,n.jsx)("a",{href:"#react-components",children:"After all, these are just React Native components"})}),(0,n.jsxs)("p",{children:["The library just adds a new property called ",(0,n.jsx)(o,{children:"styleNames"})," to ",(0,n.jsx)(l,{href:"https://reactnative.dev",children:"React Native"})," components. The property ",(0,n.jsx)(o,{children:"styleNames"})," in React Native mobile app is just like ",(0,n.jsx)(o,{children:"class"})," in web app. The style names are defined in the theme, e.g. ",(0,n.jsx)(o,{children:"List"}),", ",(0,n.jsx)(o,{children:"List.Item"}),", ",(0,n.jsx)(o,{children:"Color.Primary"}),", ",(0,n.jsx)(o,{children:"Border"}),", ",(0,n.jsx)(o,{children:"Size.Large"})," etc. Just supply these names of the styles to the prop ",(0,n.jsx)(o,{children:"styleNames"})," and it will pick the style definitions from theme and apply to the React Native component. The library does not add any other behavior or action to the React Native components. This keeps the React Native components as pure as they are defined by React Native."]}),(0,n.jsx)(r,{children:"<View styleNames={['Card', 'Border', 'Border.Radius', 'BackgroundColor.Primary']}>\n  <View styleNames={['Card.Header]}>\n    <Text styleNames={['Card.Title']}>\n      React Native Stylo\n    </Text>\n  </View>\n  <View styleNames={['Card.Body]}>\n    <Text>\n      Highly scalable style definitions & components\n    </Text>\n  </View>\n</View>"}),(0,n.jsxs)("p",{children:["Using ",(0,n.jsx)(o,{children:"TouchableOpacity"})," as ",(0,n.jsx)(o,{children:"Card"}),"."]}),(0,n.jsx)(r,{children:"<TouchableOpacity\n  styleNames={['Card', 'Border', 'Border.Radius', 'BackgroundColor.Primary']}\n  onPress={()=> {\n    navigation.navigateTo('ReactNativeStylo');\n  }}\n>\n  <View styleNames={['Card.Header]}>\n    <Text styleNames={['Card.Title']}>\n      React Native Stylo\n    </Text>\n  </View>\n  <View styleNames={['Card.Body]}>\n    <Text>\n      Highly scalable style definitions & components\n    </Text>\n  </View>\n</TouchableOpacity>"})]})]})]})}}},function(e){e.O(0,[814,774,888,179],(function(){return t=8465,e(e.s=t);var t}));var t=e.O();_N_E=t}]);