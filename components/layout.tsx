import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink: React.FC<{
  children: React.ReactNode;
  href: string;
}> = ({ children, href }) => {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <a
          className={router.pathname.toLowerCase() === href.toLowerCase() ? 'font-medium' : 'text-gray-800'}
          style={{ display: 'block' }}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="lg:container lg:mx-auto flex flex-col">
      <div className="grid grid-cols-7 xl:grid-cols-5 grid-flow-col">
        <nav className="p-4 col-span-2 xl:col-span-1">
          <ul>
            <li>
              <ul className="mt-4 mb-8">
                <li>
                  <Link href="/">
                    <a className="font-bold">
                      React Native Stylo
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className="mb-8">
                <NavLink href="/core-concept">
                  Core concept
                </NavLink>
                <NavLink href="/usage">
                  Usage
                </NavLink>
              </ul>
            </li>
            <li>
              <h5 className="text-base" style={{ margin: 0 }}>
                Core members
              </h5>
              <ul className="mb-8">
                <NavLink href="/use-styles">
                  {`useStyles()`}
                </NavLink>
                <NavLink href="/styles">
                  {`<Styles />`}
                </NavLink>
              </ul>
            </li>
            <li>
              <h5 className="text-base" style={{ margin: 0 }}>
                Hooks &amp; components
              </h5>
              <ul className="mb-8">
                <NavLink href="/theme">
                  Theme
                </NavLink>
                <NavLink href="/theme-provider">
                  {`<ThemeProvider />`}
                </NavLink>
                <NavLink href="/use-variables">
                  {`useVariables()`}
                </NavLink>
                <NavLink href="/stylish">
                  Stylish
                </NavLink>
                <NavLink href="/stylers">
                  Stylers
                </NavLink>
              </ul>
            </li>
            <li>
              <ul className="mb-8">
                <NavLink href="/tight-coupling">
                  Tightly coupled
                </NavLink>
              </ul>
            </li>
          </ul>
          {/* <footer>Footer</footer> */}
        </nav>
        <main className="border-l p-4 col-span-5 xl:col-span-4" style={{ minHeight: '100vh' }}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
