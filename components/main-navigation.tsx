import React from 'react';

import NavLink from './nav-link';

const SubMenuLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li className="mb-1">
    <NavLink href={href}>
      <span className="text-sm text-gray-300 mr-1 ml-[-1px] font-light">-</span>
      <span className="text-sm">
        {children}
      </span>
    </NavLink>
  </li>
);

const MainNavigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <ul className="mb-8">
            <li className="mb-1">
              <NavLink href="/">
                Core concept
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink href="/usage">
                Setup &amp; usage
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h5 className="text-base mt-0 mb-1 p-0">
            Core members
          </h5>
          <ul className="mb-8">
            <li className="mb-1">
              <NavLink href="/use-styles">
                {`useStyles()`}
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink href="/styles">
                {`<Styles />`}
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h5 className="text-base mt-0 mb-1 p-0">
            Theming
          </h5>
          <ul className="mb-8">
            <li className="mb-2">
              <NavLink href="/theme">
                Theme
              </NavLink>
              <ul className="ml-4 mt-1 border-l">
                <SubMenuLink href="/theme#style-name">
                  StyleName
                </SubMenuLink>
                <SubMenuLink href="/theme#reserved-style-name">
                  Reserved StyleName
                </SubMenuLink>
                <SubMenuLink href="/theme#style-namespace">
                  StyleNamespace
                </SubMenuLink>
                <SubMenuLink href="/theme#variables">
                  Variables
                </SubMenuLink>
                <SubMenuLink href="/theme#type-definitions">
                  Type definitions
                </SubMenuLink>
              </ul>
            </li>
            <li className="mb-1 font-medium">
              <NavLink href="/stylo-theme">
                <span className="text-pink-600">S</span>
                <span className="text-blue-600">t</span>
                <span className="text-red-600">y</span>
                <span className="text-purple-600">l</span>
                <span className="text-green-600">o</span>
                <span className="text-blue-600">{` t`}</span>
                <span className="text-pink-600">h</span>
                <span className="text-green-600">e</span>
                <span className="text-red-600">m</span>
                <span className="text-purple-600">e</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink href="/stylo-theme-customization">
                Customizing Stylo theme
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink href="/creating-theme">
                Creating a theme
              </NavLink>
              <ul className="ml-4 mt-1 border-l">
                <SubMenuLink href="/creating-theme#define-types">
                  Define types
                </SubMenuLink>
                <SubMenuLink href="/creating-theme#define-variables">
                  Define variables
                </SubMenuLink>
                <SubMenuLink href="/creating-theme#define-styles">
                  Define styles
                </SubMenuLink>
                <SubMenuLink href="/creating-theme#define-theme">
                  Define theme
                </SubMenuLink>
              </ul>
            </li>
            <li className="mb-1">
              <NavLink href="/default-styles">
                Default styles
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink href="/style-names-sequence">
                StyleNames sequence
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h5 className="text-base mt-0 mb-1 p-0">
            Hooks &amp; components
          </h5>
          <ul className="mb-8">
            <li className="mb-1">
              <NavLink href="/theme-provider">
                {`<ThemeProvider />`}
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink href="/stylish" className="mb-1">
                Stylish
              </NavLink>
              <ul className="ml-4 mt-1 border-l">
                <SubMenuLink href="/stylish#stylish-props">
                  Props
                </SubMenuLink>
                <SubMenuLink href="/stylish#icon">
                  {`<Icon />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#image-background">
                  {`<ImageBackground />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#image">
                  {`<Image />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#safe-area-view">
                  {`<SafeAreaView />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#scroll-view">
                  {`<ScrollView />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#pressable">
                  {`<Pressable />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#text">
                  {`<Text />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#text-input">
                  {`<TextInput />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#touchable-highlight">
                  {`<TouchableHighlight />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#touchable-opacity">
                  {`<TouchableOpacity />`}
                </SubMenuLink>
                <SubMenuLink href="/stylish#view">
                  {`<View />`}
                </SubMenuLink>
              </ul>
            </li>
            <li className="mb-2">
              <NavLink href="/stylers" className="mb-1">
                Stylers
              </NavLink>
              <ul className="ml-4 mt-1 border-l">
                <SubMenuLink href="/stylers#styler-arguments">
                  Arguments
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-icon-styles">
                  useIconStyles()
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-image-background-styles">
                  useImageBackgroundStyles()
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-image-styles">
                  useImageStyles()
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-safe-area-view-styles">
                  useSafeAreaViewStyles()
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-scroll-view-styles">
                  useScrollViewStyles()
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-text-styles">
                  useTextStyles()
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-text-input-styles">
                  useTextInputStyles()
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-touchable-styles">
                  useTouchableStyles()
                </SubMenuLink>
                <SubMenuLink href="/stylers#use-view-styles">
                  useViewStyles()
                </SubMenuLink>
              </ul>
            </li>
            <li className="mb-1">
              <NavLink href="/use-variables">
                {`useVariables()`}
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink href="/tight-coupling">
                Tight coupling
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="mb-8 font-bold">
          <NavLink href="/built-using-stylo">
            Built using Stylo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
