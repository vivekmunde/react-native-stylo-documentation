import React from 'react';

import NavLink from './nav-link';

const StyloThemeNavigation: React.FC = () => (
  <nav>
    <ul>
      <li>
        <div className="mb-4">
          <NavLink href="/">
            Docs
          </NavLink>
        </div>
      </li>
      <li>
        <ul className="mb-4">
          <h5 className="text-base" style={{ margin: 0 }}>
            Stylo theme
          </h5>
          <li>
            <NavLink href="/stylo-theme-colors">
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme-style-namespaces">
              StyleNamespaces
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme-font-colors">
              Font colors
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme-background-colors">
              Background colors
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme">
              Variables
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme">
              ViewStyles
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme">
              ScrollViewStyles
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme">
              TextInputStyles
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme">
              TextStyles
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme">
              ImageStyles
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme">
              ImageBackgroundStyles
            </NavLink>
          </li>
          <li>
            <NavLink href="/stylo-theme">
              TouchableStyles
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default StyloThemeNavigation;
