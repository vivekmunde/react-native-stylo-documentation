import Link from 'next/link';
import React from 'react';

const HeaderLogo: React.FC = () => (
  <Link href="/">
    <a
      style={{
        fontSize: '20px',
        fontWeight: '200',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <span>
        react-native-
      </span>
      <img
        alt='stylo'
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/logo.png`}
        style={{ height: '28px' }}
      />
    </a>
  </Link>
);

export default HeaderLogo;
