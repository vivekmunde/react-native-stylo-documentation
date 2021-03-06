import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink: React.FC<{
  children: React.ReactNode;
  href: string;
  className?: string;
}> = ({ children, href, className }) => {
  const router = useRouter();
  const hash: string | undefined = router.asPath.split('#')[1];

  return (
    <Link href={href}>
      <a
        className={[
          (router.pathname.toLowerCase() === href.toLowerCase()
            || `${router.pathname.toLowerCase()}#${hash?.toLowerCase()}` === href.toLowerCase())
            ? 'font-medium'
            : 'text-gray-800',
          className,
        ].filter(Boolean).join(' ')}
        style={{ display: 'block' }}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
