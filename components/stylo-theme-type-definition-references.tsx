import Link from 'next/link';
import React from 'react';

import Paragraph from './paragraph';

type TTypeDefinition =
  | 'TBackgroundColor' | 'TBorderStyle' | 'TFlexStyle' | 'TFontColor' | 'TMarginStyle' | 'TPaddingStyle'
  | 'TImageStyle' | 'TImageBackgroundStyle' | 'TScrollViewStyle' | 'TTextStyle' | 'TTextInputStyle' | 'TTouchableStyle' | 'TViewStyle'
  | 'TAvatarStyle' | 'TBadgeStyle' | 'TButtonStyle' | 'TFormStyle' | 'THorizontalStyle' | 'TListStyle' | 'TScreenStyle' | 'TTagStyle';

const typeDefinitions: {
  type: TTypeDefinition;
  route: string;
}[] = [
    { type: 'TBackgroundColor', route: 'background-color' },
    { type: 'TBorderStyle', route: 'border' },
    { type: 'TFlexStyle', route: 'flex' },
    { type: 'TFontColor', route: 'font-color' },
    { type: 'TMarginStyle', route: 'margin' },
    { type: 'TPaddingStyle', route: 'padding' },
    { type: 'TImageStyle', route: 'image' },
    { type: 'TImageBackgroundStyle', route: 'image-background' },
    { type: 'TScrollViewStyle', route: 'scroll-view' },
    { type: 'TTextStyle', route: 'text' },
    { type: 'TTextInputStyle', route: 'text-input' },
    { type: 'TTouchableStyle', route: 'touchable' },
    { type: 'TViewStyle', route: 'view' },
    { type: 'TAvatarStyle', route: 'avatar' },
    { type: 'TBadgeStyle', route: 'badge' },
    { type: 'TButtonStyle', route: 'button' },
    { type: 'TFormStyle', route: 'form' },
    { type: 'THorizontalStyle', route: 'horizontal' },
    { type: 'TListStyle', route: 'list' },
    { type: 'TScreenStyle', route: 'screen' },
    { type: 'TTagStyle', route: 'tag' }
  ];

const StyloThemeTypeDefinitionReferences: React.FC<{
  display: TTypeDefinition[];
}> = ({ display }) => (
  <Paragraph>
    Ref:
    {' '}
    {typeDefinitions
      .filter((masterTypeDef) => !!display.find((it) => it === masterTypeDef.type))
      .map((typeDef, index) => (
        <React.Fragment key={typeDef.route}>
          <Link href={`/stylo-theme-${typeDef.route}-styles#type-definition`}>{typeDef.type}</Link>
          {index < (display.length - 1) ? ', ' : null}
        </React.Fragment>
      ))}
  </Paragraph>
);

export default StyloThemeTypeDefinitionReferences;
