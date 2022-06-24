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
      display={['TViewStyle', 'TAvatarStyle', 'TButtonStyle', 'TListStyle', 'TTagStyle']}
    />
    <CodeSnippet>
      {`export type TTouchableStyle =
  | TViewStyle
  | TAvatarViewStyle
  | TButtonStyle
  | TListStyle
  | TTagStyle;`}
    </CodeSnippet>
  </section>
);

export default StyloThemeTouchableStyleTypeDefinition;
