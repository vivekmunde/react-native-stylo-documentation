(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{8643:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylish",function(){return t(9938)}])},6734:function(e,s,t){"use strict";var n=t(5893);t(7294);s.Z=function(e){var s=e.children;return(0,n.jsx)("small",{children:(0,n.jsx)("code",{className:"text-black bg-gray-100 p-1 rounded",children:s})})}},9938:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var n=t(5893),o=t(9008),r=t.n(o),l=t(1664),i=t.n(l),a=t(7294),c=t(3830),m=t(5740),d=t(1590),h=t(8046),p=t(6734),y=t(4743),x=t(7370),j=function(){return(0,n.jsx)("small",{className:"font-light text-green-600",children:"(Optional)"})},g=t(6900),N=t(7687),f=function(){return(0,n.jsx)(y.Z,{renderNavigation:function(){return(0,n.jsx)(x.Z,{})},renderContent:function(){return(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:"Stylish | React Native Stylo"})}),(0,n.jsxs)("article",{children:[(0,n.jsx)(c.Z,{children:"Stylish"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"Stylish"})," components are nothing but enhanced ",(0,n.jsx)(h.Z,{href:"https://reactnative.dev/docs/components-and-apis",children:"React Native components"}),". Stylo adds a property ",(0,n.jsx)(p.Z,{children:"styleNames"}),"(ref: ",(0,n.jsx)(i(),{href:"/theme#style-name",children:"StyleName"}),") to the React Native components, on top of core properties provided by React Native. Stylo does not make any behavioral changes to these enhanced stylish components and keeps them as pure as they are defined by React Native. Stylish component reads the styles defined for the ",(0,n.jsx)(p.Z,{children:"styleNames"})," from the ",(0,n.jsx)(i(),{href:"/theme",children:"theme"}),", combines these styles into one to create a standard React Native style object & applies this style to the React Native component."]}),(0,n.jsxs)(g.Z,{children:["Stylo's"," objective is to provide an enhanced Stylish component against for React Native component. This way it plans to cover all the React Native components."]}),(0,n.jsxs)(g.Z,{children:["Each React Native component has its own style type. E.g. ",(0,n.jsx)(p.Z,{children:"Text"})," component needs style object of type ",(0,n.jsx)(p.Z,{children:"StyleProp<TextStyle>"}),",  ",(0,n.jsx)(p.Z,{children:"View"})," component needs style object of type ",(0,n.jsx)(p.Z,{children:"StyleProp<ViewStyle>"})," etc. So each stylish component is tightly coupled with a React Native component which applies the style object specific to that component."]}),(0,n.jsxs)(m.Z,{children:["All stylish components use a matching ",(0,n.jsx)(i(),{href:"/stylers",children:"Styler"})," hook internally to create the style object from ",(0,n.jsx)(p.Z,{children:"styleNames"})," supplied to them as prop."]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"stylish-props",level:4,children:"Stylish props"}),(0,n.jsxs)(g.Z,{children:["All stylish components have an extra prop called ",(0,n.jsx)(p.Z,{children:"styleNames"})," other than the default props provided by React Native. The ",(0,n.jsx)(p.Z,{children:"styleNames"})," prop is purposefully made optional, so that these Stylish components can still be used as plain React Native components."]}),(0,n.jsxs)("section",{children:[(0,n.jsxs)("h5",{className:"text-lg",children:[(0,n.jsx)(p.Z,{children:"styleNames"})," ",(0,n.jsx)(j,{})]}),(0,n.jsxs)(g.Z,{children:["The ",(0,n.jsx)(i(),{href:"/theme#style-name",children:"StyleNames"})," which define the styles."]})]})]}),(0,n.jsxs)(m.Z,{children:["All the code samples below use ",(0,n.jsx)(i(),{href:"/stylo-theme",children:"Stylo theme"}),". The code samples below do not display the pictorial outcomes. Please refer to ",(0,n.jsx)(i(),{href:"/stylo-theme",children:"Stylo theme"})," for detailed code samples & their pictorial appearances. Also, the code samples below are not tightly coupled to the ",(0,n.jsx)(i(),{href:"/theme#style-name",children:"StyleName"})," types. If you have not yet gone through the tight coupling of style types then you can read the document ",(0,n.jsx)(i(),{href:"/tight-coupling",children:"Tight coupling"}),"."]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"icon",level:4,children:(0,n.jsx)(p.Z,{children:"<Icon />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TIconProps<TStyleName extends string> = TStylesProps<TStyleName> & {\n  name: string;\n  size?: number | undefined;\n  color?: string | undefined;\n  style?: Omit<StyleProp<TextStyle>, 'color'>;\n};"}),(0,n.jsxs)(g.Z,{children:["Stylo uses ",(0,n.jsx)(h.Z,{href:"https://www.npmjs.com/package/react-native-vector-icons",children:"Vector Icons"}),", so it has a peer dependency of ",(0,n.jsx)(p.Z,{children:"react-native-vector-icons"}),"@^9.1.0. Vector ","Icon's"," all components are available as static members of the ",(0,n.jsx)(p.Z,{children:"Icon"})," component. Like, ",(0,n.jsx)(p.Z,{children:"Icon.AntDesign"}),", ",(0,n.jsx)(p.Z,{children:"Icon.FontAwesome"})," etc."]}),(0,n.jsx)(d.Z,{children:"Icon.AntDesign\nIcon.Entypo\nIcon.EvilIcons\nIcon.FontAwesome\nIcon.FontAwesome5\nIcon.FontAwesome5Pro\nIcon.Fontisto\nIcon.Foundation\nIcon.Ionicons\nIcon.MaterialCommunityIcons\nIcon.MaterialIcons\nIcon.Octicons\nIcon.SimpleLineIcons\nIcon.Zocial"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"IconStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { Icon } from 'react-native-stylo';\nimport { TIconStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <Icon.AntDesign<TIconStyle> styleNames={['Color.Grey2', 'Large]} name=\"home\" {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"image-background",level:4,children:(0,n.jsx)(p.Z,{children:"<ImageBackground />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TImageBackgroundProps<TStyleName extends string> \n = ReactNative.ImageBackgroundProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"ImageBackgroundStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { ImageBackground } from 'react-native-stylo';\nimport { TImageBackgroundStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <ImageBackground<TImageBackgroundStyle> styleNames={['BackgroundColor.Grey2']} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"image",level:4,children:(0,n.jsx)(p.Z,{children:"<Image />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TImageProps<TStyleName extends string> \n = ReactNative.ImageProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"ImageStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { Image } from 'react-native-stylo';\nimport { TImageStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <Image<TImageStyle> styleNames={['Avatar', 'Avatar.Square', 'Avatar.Large']} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"safe-area-view",level:4,children:(0,n.jsx)(p.Z,{children:"<SafeAreaView />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TSafeAreaViewProps<TStyleName extends string> \n = ReactNative.ViewProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"SafeAreaViewStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { SafeAreaView } from 'react-native-stylo';\nimport { TSafeAreaViewStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <SafeAreaView<TSafeAreaViewStyle> styleNames={['BackgroundColor.Body']} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"scroll-view",level:4,children:(0,n.jsx)(p.Z,{children:"<ScrollView />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TScrollViewProps<\n  TScrollViewStyleName extends string,\n  TScrollViewContentContainerStyleName extends string,\n> = ReactNative.ViewProps & {\n  styleNames?: TScrollViewStyleName[];\n  contentContainerStyleNames?: TScrollViewStyleName[];\n}"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespaces:"})," ",(0,n.jsx)(p.Z,{children:"ScrollViewStyles"})," & ",(0,n.jsx)(p.Z,{children:"ScrollViewContentContainerStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { ScrollView } from 'react-native-stylo';\nimport { TScrollViewStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <ScrollView<TScrollViewStyle, TScrollViewContentContainerStyle>\n      styleNames={['BackgroundColor.Grey1']}\n      contentContainerStyleNames={['Padding']}\n      {...otherProps}\n    />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"text-input",level:4,children:(0,n.jsx)(p.Z,{children:"<TextInput />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TTextInputProps<TStyleName extends string> \n = ReactNative.TextInputProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"TextInputStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { TextInput } from 'react-native-stylo';\nimport { TTextInputStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <TextInput<TTextInputStyle> styleNames={['Border', 'Border.Color.Primary']} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"text",level:4,children:(0,n.jsx)(p.Z,{children:"<Text />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TTextProps<TStyleName extends string> \n = ReactNative.TextProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"TextStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { Text } from 'react-native-stylo';\nimport { TTextStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <Text<TTextStyle> styleNames={['Border', 'Border.Color.Primary']} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"pressable",level:4,children:(0,n.jsx)(p.Z,{children:"<Pressable />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TPressableProps<TStyleName extends string> \n = ReactNative.PressableProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"TouchableStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { Pressable } from 'react-native-stylo';\nimport { TTouchableStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <Pressable<TTouchableStyle> styleNames={['Button', 'Button.Large', 'BackgroundColor.Primary']} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"touchable-highlight",level:4,children:(0,n.jsx)(p.Z,{children:"<TouchableHighlight />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TTouchableHighlightProps<TStyleName extends string> \n = ReactNative.TouchableHighlightProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"TouchableStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { TouchableHighlight } from 'react-native-stylo';\nimport { TTouchableStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <TouchableHighlight<TTouchableStyle> styleNames={['Button', 'Button.Large', 'BackgroundColor.Primary']} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"touchable-opacity",level:4,children:(0,n.jsx)(p.Z,{children:"<TouchableOpacity />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TTouchableOpacityProps<TStyleName extends string> \n = ReactNative.TouchableOpacityProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"TouchableStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { TouchableOpacity } from 'react-native-stylo';\nimport { TTouchableStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <TouchableOpacity<TTouchableStyle> styleNames={['Button', 'Button.Large', 'BackgroundColor.Primary']} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(N.Z,{id:"view",level:4,children:(0,n.jsx)(p.Z,{children:"<View />"})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Props type definition"})}),(0,n.jsx)(d.Z,{children:"type TViewProps<TStyleName extends string> \n = ReactNative.ViewProps & { styleNames?: TStyleName[]; }"}),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(p.Z,{children:"ViewStyles"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(d.Z,{children:"import React from 'react';\nimport { View } from 'react-native-stylo';\nimport { TViewStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  return (\n    <View<TViewStyle> styleNames={['Padding', 'Border', 'Border.Radius.Large', 'Border.Color.Primary2', 'BackgroundColor.Primary1']} {...otherProps} />\n  );\n}"})]}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("i",{children:"Note: New Stylish components for remaining React Native components will be added soon."})})]})]})}})}}},function(e){e.O(0,[9814,3876,9774,2888,179],(function(){return s=8643,e(e.s=s);var s}));var s=e.O();_N_E=s}]);