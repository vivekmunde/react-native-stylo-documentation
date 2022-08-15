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

const StyloThemeNavigation: React.FC = () => (
  <nav>
    <ul>
      <li>
        <ul className="mb-8">
          <NavLink href="/stylo-theme">
            <h5 className="mb-4 p-0">
              Stylo theme
            </h5>
          </NavLink>
          <li>
            <ul className="mb-4">
              <li>
                <NavLink href="/stylo-theme-colors">
                  Colors
                </NavLink>
                <ul className="ml-4 mt-1 border-l">
                  <SubMenuLink href="/stylo-theme-colors#light-theme">
                    Light
                  </SubMenuLink>
                  <SubMenuLink href="/stylo-theme-colors#dark-theme">
                    Dark
                  </SubMenuLink>
                </ul>
              </li>
              <li>
                <NavLink href="/stylo-theme-variables">
                  Variables
                </NavLink>
                <ul className="ml-4 mt-1 border-l">
                  <SubMenuLink href="/stylo-theme-variables#light-theme">
                    Light
                  </SubMenuLink>
                  <SubMenuLink href="/stylo-theme-variables#dark-theme">
                    Dark
                  </SubMenuLink>
                </ul>
              </li>
              <li>
                <NavLink href="/stylo-theme-style-namespaces">
                  StyleNamespaces
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="/stylo-theme-generic-styles">
              <h5 className="text-base m-0 p-0">
                Generic styles
              </h5>
            </NavLink>
            <ul className="mb-4">
              <li>
                <NavLink href="/stylo-theme-background-color-styles">
                  BackgroundColor
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-border-styles">
                  Border
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-flex-styles">
                  Flex
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-font-color-styles">
                  FontColor
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-margin-styles">
                  Margin
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-padding-styles">
                  Padding
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="/stylo-theme-component-styles">
              <h5 className="text-base m-0 p-0">
                Component styles
              </h5>
            </NavLink>
            <ul className="mb-4">
              <li>
                <NavLink href="/stylo-theme-icon-styles">
                  Icon
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-image-styles">
                  Image
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-image-background-styles">
                  ImageBackground
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-pressable-styles">
                  Pressable
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-scroll-view-styles">
                  ScrollView
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-text-styles">
                  Text
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-text-input-styles">
                  TextInput
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-touchable-opacity-styles">
                  TouchableOpacity
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-touchable-highlight-styles">
                  TouchableHighlight
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-view-styles">
                  View
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="/stylo-theme-assorted-styles">
              <h5 className="text-base m-0 p-0">
                Assorted styles
              </h5>
            </NavLink>
            <ul className="mb-4">
              <li>
                <NavLink href="/stylo-theme-avatar-styles">
                  Avatar
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-badge-styles">
                  Badge
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-button-styles">
                  Button
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-form-styles">
                  Form
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-horizontal-styles">
                  Horizontal
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-list-styles">
                  List
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-screen-styles">
                  Screen
                </NavLink>
              </li>
              <li>
                <NavLink href="/stylo-theme-tag-styles">
                  Tag
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="/stylo-theme-customization">
              <h5 className="text-base m-0 p-0">
                Customizing Stylo theme
              </h5>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink href="/">
          <h5 className="mb-4 p-0">
            Documentation
          </h5>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default StyloThemeNavigation;
