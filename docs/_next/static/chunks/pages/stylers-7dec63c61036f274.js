(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{4829:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stylers",function(){return s(6608)}])},6734:function(e,t,s){"use strict";var n=s(5893);s(7294);t.Z=function(e){var t=e.children;return(0,n.jsx)("small",{children:(0,n.jsx)("code",{className:"text-black bg-gray-100 p-1 rounded",children:t})})}},9122:function(e,t,s){"use strict";var n=s(5893);s(7294);t.Z=function(){return(0,n.jsx)("small",{className:"font-light text-red-500",children:"(Required)"})}},6608:function(e,t,s){"use strict";s.r(t);var n=s(5893),l=s(9008),r=s.n(l),o=s(1664),i=s.n(o),c=s(7294),a=s(3830),y=s(5740),m=s(1590),h=s(6734),d=s(4743),S=s(7370),u=s(6900),x=s(9122),j=s(7687);t.default=function(){return(0,n.jsx)(d.Z,{renderNavigation:function(){return(0,n.jsx)(S.Z,{})},renderContent:function(){return(0,n.jsxs)(c.Fragment,{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:"Stylers | React Native Stylo"})}),(0,n.jsxs)("article",{children:[(0,n.jsx)(a.Z,{children:"Stylers"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"Stylers"})," are the styling hooks. Stylers accept ",(0,n.jsx)(i(),{href:"/theme#style-name",children:"StyleNames"})," as its argument & return the style object. They read the styles defined for the ",(0,n.jsx)(h.Z,{children:"StyleNames"})," in the theme, combines these styles into one & returns the final style, a standard React Native style object."]}),(0,n.jsxs)(u.Z,{children:["Stylo's"," objective is to provide a styling hook for each React Native component. This way it plans to cover the styling requirements of all the components."]}),(0,n.jsxs)(u.Z,{children:["Each React Native component has its own style type. E.g. ",(0,n.jsx)(h.Z,{children:"Text"})," component needs style object of type ",(0,n.jsx)(h.Z,{children:"StyleProp<TextStyle>"}),",  ",(0,n.jsx)(h.Z,{children:"View"})," component needs style object of type ",(0,n.jsx)(h.Z,{children:"StyleProp<ViewStyle>"})," etc. So each styler is tightly coupled with a React Native component which returns a style object specific to that component."]}),(0,n.jsxs)(y.Z,{children:["All styler hooks use the ",(0,n.jsx)(i(),{href:"/use-styles",children:"useStyles()"})," hook internally to create & return the style object from ",(0,n.jsx)(h.Z,{children:"styleNames"})," supplied to them as an argument. A rule of thumb, prefer ",(0,n.jsx)(i(),{href:"/stylish",children:"Stylish"})," components over Stylers, use Styler hooks in cases where the use of ",(0,n.jsx)(i(),{href:"/stylish",children:"Stylish"})," components is not possible."]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"styler-arguments",level:4,children:"Styler arguments"}),(0,n.jsx)(u.Z,{children:"All stylers accept one argument."}),(0,n.jsxs)("section",{children:[(0,n.jsxs)("h5",{className:"text-lg",children:[(0,n.jsx)(h.Z,{children:"styleNames"})," ",(0,n.jsx)(x.Z,{})]}),(0,n.jsxs)(u.Z,{children:["The ",(0,n.jsx)(i(),{href:"/theme#style-name",children:"StyleNames"})," which define the styles."]})]})]}),(0,n.jsxs)(y.Z,{children:["All the code samples below use ",(0,n.jsx)(i(),{href:"/stylo-theme",children:"Stylo theme"}),". The code samples below do not display the pictorial outcomes. Also, the code samples below are not tightly coupled to the ",(0,n.jsx)(i(),{href:"/theme#style-name",children:"StyleName"})," types. If you have not yet gone through the tight coupling of style types then you can read the document ",(0,n.jsx)(i(),{href:"/tight-coupling",children:"Tight coupling"}),"."]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-icon-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useIconStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"function useIconStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<TextStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"IconStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { StyleSheet } from 'react-native';\nimport AntDesign from 'react-native-vector-icons/AntDesign';\nimport { useIconStyles } from 'react-native-stylo';\nimport { TIconStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      iconStyle: useIconStyles<TIconStyle>(['Color.Primary', 'Large']),\n    })\n  ).current;\n\n  return (\n    <AntDesign style={styles.iconStyle} name=\"home\" {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-image-background-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useImageBackgroundStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"function useImageBackgroundStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"ImageBackgroundStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { ImageBackground, StyleSheet } from 'react-native';\nimport { useImageBackgroundStyles } from 'react-native-stylo';\nimport { TImageBackgroundStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      imageBackgroundStyle: useImageBackgroundStyles<TImageBackgroundStyle>(['BackgroundColor.Grey2']),\n    })\n  ).current;\n\n  return (\n    <ImageBackground style={styles.imageBackgroundStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-image-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useImageStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"function useImageStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ImageStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"ImageStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { Image, StyleSheet } from 'react-native';\nimport { useImageStyles } from 'react-native-stylo';\nimport { TImageStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      imageStyle: useImageStyles<TImageStyle>(['Avatar', 'Avatar.Square', 'Avatar.Large']),\n    })\n  ).current;\n\n  return (\n    <Image style={styles.imageStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-safe-area-view-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useSafeAreaViewStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"function useSafeAreaViewStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"SafeAreaViewStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { SafeAreaView } from 'react-native';\nimport { useSafeAreaViewStyles } from 'react-native-stylo';\nimport { TViewStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      safeAreaViewStyle: useSafeAreaViewStyles<TViewStyle>(['BackgroundColor.Body']),\n    })\n  ).current;\n\n  return (\n    <SafeAreaView style={styles.safeAreaViewStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-scroll-view-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useScrollViewStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"export function useScrollViewStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"ScrollViewStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { ScrollView, StyleSheet } from 'react-native';\nimport { useScrollViewStyles } from 'react-native-stylo';\nimport { TViewStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      scrollViewStyle: useScrollViewStyles<TViewStyle>(['Padding', 'BackgroundColor.Grey1']),\n    })\n  ).current;\n\n  return (\n    <ScrollView style={styles.scrollViewStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-scroll-view-content-container-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useScrollViewContentContainerStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"export function useScrollViewContentContainerStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"ScrollViewContentContainerStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { ScrollView, StyleSheet } from 'react-native';\nimport { useScrollViewStyles, useScrollViewContentContainerStyles } from 'react-native-stylo';\nimport { TViewStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      scrollViewStyle: useScrollViewStyles<TViewStyle>(['BackgroundColor.Grey1']),\n      scrollViewContentContainerStyle: useScrollViewContentContainerStyles<TViewStyle>(['Padding']),\n    })\n  ).current;\n\n  return (\n    <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.scrollViewContentContainerStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-text-input-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useTextInputStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"function useImageStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<TextStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"TextInputStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { TextInput, StyleSheet } from 'react-native';\nimport { useTextInputStyles } from 'react-native-stylo';\nimport { TTextInputStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      textInputStyle: useTextInputStyles<TTextInputStyle>(['Border', 'Border.Color.Primary']),\n    })\n  ).current;\n\n  return (\n    <TextInput style={styles.textInputStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-text-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useTextStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"function useTextStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<TextStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"TextStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { Text, StyleSheet } from 'react-native';\nimport { useTextStyles } from 'react-native-stylo';\nimport { TTextStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      textStyle: useTextStyles<TTextStyle>(['H1', 'Bold', 'Color.Primary']),\n    })\n  ).current;\n\n  return (\n    <Text style={styles.textStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-touchable-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useTouchableStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"function useTouchableStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"TouchableStyles"})]}),(0,n.jsxs)(u.Z,{children:["The ",(0,n.jsx)(h.Z,{children:"useTouchableStyles()"})," hook can be used for ",(0,n.jsx)(h.Z,{children:"TouchableOpacity"}),", ",(0,n.jsx)(h.Z,{children:"TouchableHighlight"})," & ",(0,n.jsx)(h.Z,{children:"Pressable"})," component."]}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { TouchableOpacity, StyleSheet } from 'react-native';\nimport { useTouchableStyles } from 'react-native-stylo';\nimport { TTouchableStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      buttonStyle: useTouchableStyles<TTouchableStyle>(['Button', 'Button.Large', 'BackgroundColor.Primary']),\n    })\n  ).current;\n\n  return (\n    <TouchableOpacity style={styles.buttonStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsxs)("section",{className:"no-vertical-margin-collapse",children:[(0,n.jsx)(j.Z,{id:"use-view-styles",level:4,children:(0,n.jsx)(h.Z,{children:"useViewStyles()"})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Type definition"})}),(0,n.jsx)(m.Z,{children:"function useViewStyles<TStyleName extends string>(styleNames: TStyleName[]): StyleProp<ViewStyle>"}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("strong",{className:"font-semibold",children:"StyleNamespace:"})," ",(0,n.jsx)(h.Z,{children:"ViewStyles"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("strong",{className:"font-semibold",children:"Usage"})}),(0,n.jsx)(m.Z,{children:"import React, { useRef } from 'react';\nimport { View, StyleSheet } from 'react-native';\nimport { useViewStyles } from 'react-native-stylo';\nimport { TViewStyle } from '../themes/types';\n\nconst ComponentA = () => {\n  const styles = useRef(\n    StyleSheet.create({\n      cardStyle: useViewStyles<TViewStyle>(['Padding', 'Border', 'Border.Radius.Large', 'Border.Color.Primary2', 'BackgroundColor.Primary1']),\n    })\n  ).current;\n\n  return (\n    <View style={styles.cardStyle} {...otherProps} />\n  );\n}"})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("i",{children:"Note: New Stylers for remaining React Native components will be added soon."})})]})]})}})}}},function(e){e.O(0,[9814,3876,9774,2888,179],(function(){return t=4829,e(e.s=t);var t}));var t=e.O();_N_E=t}]);