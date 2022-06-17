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
        <a className={router.pathname.toLowerCase() === href.toLowerCase() ? '' : 'text-gray-800'}>
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
          <ul className="mb-4">
            <li className="mt-4 mb-8">
              <Link href="/">
                <a className="font-bold">
                  React Native Stylo
                </a>
              </Link>
            </li>
            <NavLink href="/core-concept">
              Core concept
            </NavLink>
            <NavLink href="/installation-configuration">
              Installation &amp; configuration
            </NavLink>
            <NavLink href="/theme">
              Theme
            </NavLink>
            <NavLink href="/theme-provider">
              Theme provider
            </NavLink>
            <NavLink href="/use-styles">
              useStyles hook
            </NavLink>
            <NavLink href="/styles">
              Styles component
            </NavLink>
            <NavLink href="/stylers">
              Stylers
            </NavLink>
            <NavLink href="/stylish">
              Stylish
            </NavLink>
          </ul>
          <footer>Footer</footer>
        </nav>
        <main className="border-l p-4 col-span-5 xl:col-span-4" style={{ minHeight: '90vh' }}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
