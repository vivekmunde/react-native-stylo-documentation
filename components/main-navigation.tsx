import React from 'react';

import NavLink from './nav-link';

const MainNavigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <ul className="mb-8">
            <li>
              <NavLink href="/">
                Core concept
              </NavLink>
            </li>
            <li>
              <NavLink href="/usage">
                Usage
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h5 className="text-base m-0">
            Core members
          </h5>
          <ul className="mb-8">
            <li>
              <NavLink href="/use-styles">
                {`useStyles()`}
              </NavLink>
            </li>
            <li>
              <NavLink href="/styles">
                {`<Styles />`}
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h5 className="text-base m-0">
            Hooks &amp; components
          </h5>
          <ul className="mb-8">
            <li>
              <NavLink href="/theme">
                Theme
              </NavLink>
            </li>
            <li>
              <NavLink href="/theme-provider">
                {`<ThemeProvider />`}
              </NavLink>
            </li>
            <li>
              <NavLink href="/use-variables">
                {`useVariables()`}
              </NavLink>
            </li>
            <li>
              <NavLink href="/stylish">
                Stylish
              </NavLink>
            </li>
            <li>
              <NavLink href="/stylers">
                Stylers
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <ul className="mb-8">
            <li>
              <NavLink href="/default-styles">
                Default styles
              </NavLink>
            </li>
            <li>
              <NavLink href="/style-names-sequence">
                StyleNames sequence
              </NavLink>
            </li>
            <li>
              <NavLink href="/tight-coupling">
                Tightly coupled
              </NavLink>
            </li>
            <li>
              <NavLink href="/creating-theme">
                Creating a theme
              </NavLink>
            </li>
            {/* <li>
              <NavLink href="/showcase">
                Showcase
              </NavLink>
            </li>
            <li>
              <NavLink href="/caveats">
                Caveats
              </NavLink>
            </li> */}
          </ul>
        </li>
        <li>
          <h5 className="text-base m-0">
            <NavLink href="/stylo-theme">
              Stylo theme
            </NavLink>
          </h5>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
