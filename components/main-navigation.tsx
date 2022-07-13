import React from 'react';
import ExternalLink from './external-link';

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
                Setup &amp; usage
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
            Theming
          </h5>
          <ul className="mb-8">
            <li>
              <NavLink href="/theme">
                Theme
              </NavLink>
            </li>
            <li>
              <NavLink href="/creating-theme">
                Creating a theme
              </NavLink>
            </li>
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
          </ul>
        </li>
        <li className="mb-8 font-bold">
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
        <li>
          <h5 className="text-base m-0">
            Hooks &amp; components
          </h5>
          <ul className="mb-8">
            <li>
              <NavLink href="/theme-provider">
                {`<ThemeProvider />`}
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
            <li>
              <NavLink href="/use-variables">
                {`useVariables()`}
              </NavLink>
            </li>
            <li>
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
