import React from 'react';

import CodeSnippet from './code-snippet';
import Paragraph from './paragraph';

const DefaultStyleNamespacesCodeSnippet: React.FC = () => (
  <React.Fragment>
    <CodeSnippet>
      {`export type TStyleNamespace =
  | 'IconStyles'
  | 'ImageBackgroundStyles'
  | 'ImageStyles'
  | 'SafeAreaViewStyles'
  | 'TextInputStyles'
  | 'TextStyles'
  | 'TouchableStyles'
  | 'ViewStyles';`}
    </CodeSnippet>
    <Paragraph>
      <i>
        <small>
          Note: New StyleNamespaces for remaining components will be added soon.
        </small>
      </i>
    </Paragraph>
  </React.Fragment>
);

export default DefaultStyleNamespacesCodeSnippet;
