import React from 'react';

import CodeSnippet from './code-snippet';
import SectionHeading from './section-heading';
import StyloThemeTypeDefinitionReferences from './stylo-theme-type-definition-references';

const StyloThemeTouchableStyleTypeDefinition: React.FC = () => (
  <section className="no-vertical-margin-collapse">
    <SectionHeading id="type-definition" level={5}>
      Type definition
    </SectionHeading>
    <StyloThemeTypeDefinitionReferences
      display={[
        'TBackgroundColorStyle', 'TBorderStyle', 'TPaddingStyle', 'TMarginStyle', 'TFlexStyle', 'THorizontalStyle',
        'TBadgeStyle', 'TListStyle', 'TFormStyle', 'TScreenStyle', 'TTagStyle', 'TButtonStyle']}
    />
    <CodeSnippet>
      {`type TTouchableStyle =
  | TBackgroundColorStyle
  | TBorderStyle
  | TFlexStyle
  | TMarginStyle
  | TPaddingStyle
  | TAvatarJacketStyle
  | TBadgeStyle
  | TButtonStyle
  | TFormStyle
  | THorizontalStyle
  | TListStyle
  | TScreenStyle
  | TTagStyle;`}
    </CodeSnippet>
  </section>
);

export default StyloThemeTouchableStyleTypeDefinition;
