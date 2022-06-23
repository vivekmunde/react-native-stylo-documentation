import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink: React.FC<{
  children: React.ReactNode;
  href: string;
}> = ({ children, href }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={router.pathname.toLowerCase() === href.toLowerCase() ? 'font-medium' : 'text-gray-800'}
        style={{ display: 'block' }}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
