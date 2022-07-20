"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1263],{1590:function(e,t,n){var i=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,i.jsx)("p",{className:"mb-4 p-4 bg-gray-100 rounded",style:{overflow:"auto",maxHeight:"90vh"},children:(0,i.jsx)("code",{className:"text-black text-xs",style:{whiteSpace:"pre"},children:t})})}},6734:function(e,t,n){var i=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,i.jsx)("small",{children:(0,i.jsx)("code",{className:"text-black bg-gray-100 p-1 rounded",children:t})})}},6900:function(e,t,n){var i=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className,s=e.style;return(0,i.jsx)("p",{className:"mb-4 ".concat(null!==n&&void 0!==n?n:""),style:s,children:t})}},7687:function(e,t,n){var i=n(5893);n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){s(e,t,n[t])}))}return e}t.Z=function(e){var t=e.children,n=e.id,s=e.level,r=function(){return(0,i.jsx)("a",{href:"#".concat(n),children:t})},a={className:"heading",id:n};return 1===s?(0,i.jsx)("h1",l({},a,{children:r()})):2===s?(0,i.jsx)("h2",l({},a,{children:r()})):3===s?(0,i.jsx)("h3",l({},a,{children:r()})):4===s?(0,i.jsx)("h4",l({},a,{children:r()})):(0,i.jsx)("h5",l({},a,{children:r()}))}},747:function(e,t,n){var i=n(5893),s=(n(7294),n(1590));t.Z=function(e){var t=e.renderCode,n=e.imageAlt,l=e.imageUrl;return(0,i.jsxs)("div",{className:"grid grid-cols-12 lg:grid-cols-12 lg:grid-gap-4",children:[(0,i.jsx)("div",{className:"col-span-12 md:col-span-7 lg:col-span-7 lg:col-span-8",children:(0,i.jsx)(s.Z,{children:t()})}),(0,i.jsx)("div",{className:"pl-4 pr-4 col-span-12 md:col-span-5 lg:col-span-4",children:(0,i.jsx)("img",{className:"rounded-3xl border-4 border-pink-200 mb-4",alt:n,src:"".concat("/react-native-stylo-documentation","/images/").concat(l)})})]})}},1263:function(e,t,n){n.r(t);var i=n(5893),s=n(9008),l=n.n(s),r=n(1664),a=n.n(r),o=n(7294),d=n(3830),c=n(1590),y=n(8046),h=n(6734),p=n(4743),m=n(7370),x=n(6900),g=n(7687),u=n(747),f={id:"styles-only",title:"Styles only"},S={id:"theme-style-name",title:"Theme & StyleName"},j={id:"detached-styles-owned-by-app",title:"Detached styles, owned by app, not by library"},T={id:"strongly-typed-intellisense-friendly-styles",title:"Strongly typed & intellisense friendly styles"},v={id:"infinitely-scalable",title:"Infinitely scalable"},w={id:"stylish-react-components",title:"Stylish React Native components"};t.default=function(){return(0,i.jsx)(p.Z,{renderNavigation:function(){return(0,i.jsx)(m.Z,{})},renderContent:function(){return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:"Core concept | React Native Stylo"})}),(0,i.jsxs)("article",{children:[(0,i.jsx)(d.Z,{children:"Core concept"}),(0,i.jsx)("nav",{className:"p-4 mt-8 mb-4 bg-pink-50 rounded",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#".concat(f.id),children:f.title})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#".concat(S.id),children:S.title})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#".concat(w.id),children:w.title})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#".concat(T.id),children:T.title})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#".concat(v.id),children:v.title})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#".concat(j.id),children:j.title})})]})}),(0,i.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,i.jsx)(g.Z,{id:f.id,level:4,children:f.title}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("strong",{className:"font-semibold",children:"Stylo"})," follows a philosophy called ",(0,i.jsx)("strong",{className:"font-semibold",children:"Styles only"}),", with which it provides a wide range of style definitions required for any React Native app. Stylo believes that separating the styles from React Native components can provide the high flexibility & infinite scalability. Instead of providing components like ",(0,i.jsx)(h.Z,{children:"Button"}),", ",(0,i.jsx)(h.Z,{children:"Badge"}),", ",(0,i.jsx)(h.Z,{children:"Avatar"}),", ",(0,i.jsx)(h.Z,{children:"Form"})," etc, Stylo provides all the styles needed for these components & with the same naming convention ",(0,i.jsx)(h.Z,{children:"Button"}),", ",(0,i.jsx)(h.Z,{children:"Badge"}),", ",(0,i.jsx)(h.Z,{children:"Avatar"}),", ",(0,i.jsx)(h.Z,{children:"Form"})," etc. By simply applying these styles to React Native components, like ",(0,i.jsx)(h.Z,{children:"TouchableOpacity"}),", ",(0,i.jsx)(h.Z,{children:"View"}),", ",(0,i.jsx)(h.Z,{children:"Text"})," etc, one can create beautiful Buttons, Badges, Forms & so on. The library provides extensive style definitions enough to style/create all kinds of components, right from simple Text to complicated Pickers & Forms."]}),(0,i.jsxs)(x.Z,{children:["In practice, there are scenarios where a Badge can technically either be a ",(0,i.jsx)(h.Z,{children:"View"})," or be a ",(0,i.jsx)(h.Z,{children:"TouchableOpacity"}),". Similarly, a list item can be a non-touchable ",(0,i.jsx)(h.Z,{children:"View"})," or ",(0,i.jsx)(h.Z,{children:"TouchableOpacity"}),", so on & so forth. With Stylo, you can easily define & configure the styles such a way that it allows applying same styles or selected styles to ",(0,i.jsx)(h.Z,{children:"View"}),", ",(0,i.jsx)(h.Z,{children:"TouchableOpacity"}),", ",(0,i.jsx)(h.Z,{children:"Text"})," or ",(0,i.jsx)(h.Z,{children:"Image"})," etc."]}),(0,i.jsxs)(x.Z,{children:["Stylo provides a ",(0,i.jsx)(a(),{href:"/stylo-theme",children:"default theme"})," with all the pre-defined style types & styles with which you can create all kind of components like Avatar, Badge, Form, List etc. You can easily ",(0,i.jsx)(a(),{href:"/usage",children:"install & setup"})," the theme & then can immediately start using it or even modify it as per needs."]})]}),(0,i.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,i.jsx)(g.Z,{id:S.id,level:4,children:S.title}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("strong",{className:"font-semibold",children:"Theme"})," is nothing but a collection of styles defined using the ",(0,i.jsxs)(y.Z,{href:"https://reactnative.dev/docs/stylesheet",children:["React ","Native's"," ",(0,i.jsx)(h.Z,{children:"StyleSheet.create()"})," API"]}),". The theme is used by the library and its hooks/components to apply styles to the React Native components. There is no restriction on the format of the style names, these can be defined as per the needs."]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("strong",{className:"font-semibold",children:"StyleName"})," is the name of a standard style definition provided to the ",(0,i.jsx)(h.Z,{children:"StyleSheet.create"})," API. In the code snippet below ",(0,i.jsx)(h.Z,{children:"'Align.Center'"}),", ",(0,i.jsx)(h.Z,{children:"H1"}),", ",(0,i.jsx)(h.Z,{children:"Small"})," are the style names."]}),(0,i.jsx)(c.Z,{children:"const TextStyles = StyleSheet.create({\n  Default: { color: '#000000', fontSize: 16, fontWeight: '400', lineHeight: 24 },\n  'Align.Center': { textAlign: 'center' },\n  'Align.Right': { textAlign: 'right' },\n  H1: { fontSize: 32, fontWeight: '400', lineHeight: 40, marginBottom: 16 },\n  H2: { fontSize: 28, fontWeight: '400', lineHeight: 36, marginBottom: 16 },\n  H3: { fontSize: 24, fontWeight: '400', lineHeight: 32, marginBottom: 8 },\n  Small: { fontSize: 12, lineHeight: 18 },\n  'Size.Tiny': { fontSize: 8, lineHeight: 14 },\n  ...\n});\n\nconst TextInputStyles = StyleSheet.create({\n  Default: { borderRadius: 8, color: '#000000', fontSize: 16, paddingTop: 12, paddingBottom: 12, paddingLeft: 8, paddingRight: 8 },\n  Small: { fontSize: 12, paddingTop: 8, paddingBottom: 8 },\n  ...\n});\nconst ViewStyles = StyleSheet.create({ ... });\n\nexport const Theme = {\n  TextStyles,\n  TextInputStyles,\n  ViewStyles,\n};"})]}),(0,i.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,i.jsx)(g.Z,{id:w.id,level:4,children:w.title}),(0,i.jsxs)(x.Z,{children:["The library just adds a new property called ",(0,i.jsx)(h.Z,{children:"styleNames"})," to the ",(0,i.jsx)(y.Z,{href:"https://reactnative.dev",children:"React Native components"}),". The property ",(0,i.jsx)(h.Z,{children:"styleNames"})," in React Native mobile app is just like ",(0,i.jsx)(h.Z,{children:"class"})," in web app. The style names are defined in the theme, e.g. ",(0,i.jsx)(h.Z,{children:"List"}),", ",(0,i.jsx)(h.Z,{children:"List.Item"}),", ",(0,i.jsx)(h.Z,{children:"Color.Primary"}),", ",(0,i.jsx)(h.Z,{children:"Border"}),", ",(0,i.jsx)(h.Z,{children:"Size.Large"})," etc. Just supply these names of the styles to the prop ",(0,i.jsx)(h.Z,{children:"styleNames"})," and it will pick the style definitions from theme and apply to the React Native component. The library does not add any other behavior or action to the React Native components.\xa0",(0,i.jsx)("mark",{className:"font-medium bg-pink-100 rounded text-black",children:"\xa0This keeps the React Native components as pure as they are defined by React Native. After all, these are just React Native components.\xa0"})]}),(0,i.jsx)(u.Z,{renderCode:function(){return"import React from 'react';\nimport { Image, SafeAreaView, Text, View } from 'react-native-stylo';\n\n// styles defined inside your app\nimport { TImageStyle, TSafeAreaViewStyle, TTextStyle, TViewStyle } from '../../stylo/themes/types';\n\nconst data = [\n  { name: 'Narayan Naresh Nathani', profileUrl: require('../../images/face-icon-1.png'), role: 'UI Developer' },\n  { name: 'Sumitra Suresh Sundaram', profileUrl: require('../../images/face-icon-2.png'), role: 'UX Designer' },\n  { name: 'Indumati Indraneel Iyengar', profileUrl: require('../../images/face-icon-3.png'), role: 'Software Developer' },\n];\n\nconst StylishComponents = () => (\n  <View<TViewStyle> styleNames={['Screen', 'BackgroundColor.Primary1']}>\n    <SafeAreaView<TSafeAreaViewStyle> />\n    <View<TViewStyle> styleNames={['Screen.Header', 'Padding']}>\n      <Text<TTextStyle> styleNames={['H1']}>\n        Stylish Components\n      </Text>\n    </View>\n    <View<TViewStyle> styleNames={['Screen.Body', 'Padding']}>\n      <View<TViewStyle> styleNames={['List', 'Border.Radius', 'BackgroundColor.White', 'Margin.Bottom.Large']}>\n        {data.map((it, index) => (\n          <View<TViewStyle> key={index} styleNames={index > 0 ? ['List.Item', 'Border.Top'] : ['List.Item']}>\n            <View<TViewStyle> styleNames={['List.Item.Left']}>\n              <Image<TImageStyle> styleNames={['Avatar']} source={it.profileUrl} />\n            </View>\n            <View<TViewStyle> styleNames={['List.Item.Body']}>\n              <Text<TTextStyle> styleNames={['Bold.Semi']}>\n                {it.name}\n              </Text>\n              <Text<TTextStyle> styleNames={['Color.Secondary', 'Small']}>\n                {it.role}\n              </Text>\n            </View>\n          </View>\n        ))}\n      </View>\n\n      <View<TViewStyle> styleNames={['List', 'Margin.Top.Large']}>\n        {data.map((it, index) => (\n          <View<TViewStyle>\n            key={index}\n            styleNames={['List.Item', 'Border.Radius', 'BackgroundColor.White', 'Margin.Bottom']}>\n            <View<TViewStyle> styleNames={['List.Item.Left']}>\n              <Image<TImageStyle> styleNames={['Avatar', 'Avatar.Large', 'Avatar.Square']} source={it.profileUrl} />\n            </View>\n            <View<TViewStyle> styleNames={['List.Item.Body', 'Flex.JustifyContent.Center']}>\n              <Text<TTextStyle> styleNames={['Large', 'Bold.Semi']}>\n                {it.name}\n              </Text>\n              <Text<TTextStyle> styleNames={['Color.Secondary']}>\n                {it.role}\n              </Text>\n            </View>\n          </View>\n        ))}\n      </View>\n    </View>\n  </View>\n);"},imageAlt:"Stylish Components",imageUrl:"showcase-core-concept-stylish-react-native-components.png"})]}),(0,i.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,i.jsx)(g.Z,{id:T.id,level:4,children:T.title}),(0,i.jsx)(x.Z,{children:"The styles are strongly typed. So the accidental usage of using wrong style name is completely avoided out of the box. These style types are defined inside the consumer app and not inside the Stylo library. The app can use any naming convention to define these types."}),(0,i.jsx)(c.Z,{children:"export type TFontColorStyle = 'Color.Primary' | 'Color.Secondary' | 'Color.Info' | 'Color.Success' | 'Color.Warning' | 'Color.Danger';\nexport type TBackgroundColorStyle = 'BackgroundColor.Primary' | 'BackgroundColor.Secondary' | 'BackgroundColor.Info' | 'BackgroundColor.Success' | 'BackgroundColor.Warning' | 'BackgroundColor.Danger';\nexport type TPaddingStyle = 'Padding' | 'Padding.Top' | 'Padding.Right' | 'Padding.Bottom' | 'Padding.left';\nexport type TMarginStyle = 'Margin' | 'Margin.Top' | 'Margin.Right' | 'Margin.Bottom' | 'Margin.left';\nexport type TBorderStyle = 'Border' | 'Border.Radius' | 'Border.Radius.Small' | 'Border.Radius.Large';\n\nexport type TTextStyle = TFontColorStyle | TBackgroundColorStyle | 'Bold' | 'H1' | 'H2' | 'H3' | 'H4' | 'Small' | 'Size.Tiny';\nexport type TTextInputStyle = TFontColorStyle | TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | 'Align.Center' | 'Align.Right' | 'Small' | 'Size.Tiny';\nexport type TViewStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle;"}),(0,i.jsx)(x.Z,{children:"On top of that, the style names are strongly typed per React Native component, like View, Text, TouchableOpacity etc. This adds an extra level of strong typing with which only the styles names which are intended for the component can be used."}),(0,i.jsxs)(x.Z,{children:["E.g. Alignment styles for ",(0,i.jsx)(h.Z,{children:"View"})," & ",(0,i.jsx)(h.Z,{children:"Text"})," are different. As you start typing the alignment styles, the editor intellisense helps you choose correct styles for ",(0,i.jsx)(h.Z,{children:"View"})," & ",(0,i.jsx)(h.Z,{children:"Text"}),"."]}),(0,i.jsxs)("div",{className:"grid grid-cols-1 grid-cols-12 gap-4 mb-4",children:[(0,i.jsx)("img",{className:"border rounded p-2 col-span-12 lg:col-span-11 xl:col-span-10",alt:"Strongly typed styles: View",src:"".concat("/react-native-stylo-documentation","/images/style-names-intellisense-1.png")}),(0,i.jsx)("img",{className:"border rounded p-2 col-span-12 lg:col-span-11 xl:col-span-10",alt:"Strongly typed styles: Text",src:"".concat("/react-native-stylo-documentation","/images/style-names-intellisense-2.png")})]}),(0,i.jsx)(x.Z,{children:"The Stylo library provides default style types, which can be copied into the app and can be easily customized, if needed."})]}),(0,i.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,i.jsx)(g.Z,{id:v.id,level:4,children:v.title}),(0,i.jsxs)(x.Z,{children:["As both the style types & the styles are defined by the consumer app & not by the library, the app can add/remove/modify as many styles as it wants and they way it wants. App can keep adding ","it's"," own types & styles as per the needs like ",(0,i.jsx)(h.Z,{children:"Card"}),", ",(0,i.jsx)(h.Z,{children:"Card.Header"}),", ",(0,i.jsx)(h.Z,{children:"Card.Body"}),", ",(0,i.jsx)(h.Z,{children:"Card.Footer"}),", ",(0,i.jsx)(h.Z,{children:"Picker"}),", ",(0,i.jsx)(h.Z,{children:"Picker.Header"})," & so on. Create these style types and styles and just add them to the Theme. ","That's"," it."]}),(0,i.jsx)(c.Z,{children:"//types.ts;\nexport type TCardStyle = 'Card' | 'Card.Header' | 'Card.Body' | 'Card.Footer';\nexport type TViewStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | TCard;\nexport type TTouchableStyle = TBackgroundColorStyle | TPaddingStyle | TMarginStyle | TBorderStyle | TCard;\n\n//card-styles.ts\nexport const CardStyles = StyleSheet.create({\n  Card: {...},\n  'Card.Header': {...},\n  'Card.Body': {...},\n  'Card.Footer': {...},\n});\n\n//theme.ts\nexport const Theme = {\n  ViewStyles: {\n    ...[ExistingViewStyles],\n    ...CardStyles,\n  },\n  TouchableStyles: {\n    ...[ExistingTouchableStyles],\n    ...CardStyles,\n  },\n};\n"}),(0,i.jsx)(x.Z,{children:"Stylo library provides predefined style types and styles. App can copy these and then extend them infinitely. It can add new types/styles, change names of existing types/styles or modify the style definitions."})]}),(0,i.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,i.jsx)(g.Z,{id:j.id,level:4,children:j.title}),(0,i.jsxs)(x.Z,{children:["The style definitions or themes are completely detached from the Stylo library. The style types & styles/themes reside inside the app not inside the library. The library only provides a set of hooks and extended React Native components.\xa0",(0,i.jsx)("mark",{className:"font-medium bg-pink-100 rounded text-black",children:"\xa0The consumer application has the entire ownership & liberty of defining the style types, styles & their names (any naming pattern/convention).\xa0"})]}),(0,i.jsx)(c.Z,{children:"MobileApp\n  |- components\n  |- screens\n  |- stylo\n    |- themes\n        |- types\n          |- text-style-types.ts\n          |- text-input-style-types.ts\n          |- touchable-style-types.ts\n          |- view-style-types.ts\n          |- ...\n        |- light\n          |- text-styles.ts\n          |- text-input-styles.ts\n          |- touchable-styles.ts\n          |- view-styles.ts\n          |- ...\n        |- dark\n          |- text-styles.ts\n          |- text-input-styles.ts\n          |- touchable-styles.ts\n          |- view-styles.ts\n          |- ..."}),(0,i.jsx)(x.Z,{children:"The library provides a set of predefined style types & themes. These can be used as is or can be considered as a guidelines or can be simply copied into the app & customized/modified easily as per the needs."})]})]})]})}})}}}]);