import React from 'react';

import InlineCode from '../inline-code';
import Paragraph from '../paragraph';
import SectionHeading from '../section-heading';
import StyloThemeAlphaColorShades from './stylo-theme-alpha-color-shades';

const StyloThemeAlphaColors: React.FC<{
  colors: { [name: string]: string };
  textColor: string;
  idPrefix: string;
}> = ({ colors, textColor, idPrefix }) => (
  <section className="no-vertical-margin-collapse">
    <SectionHeading id={`${idPrefix}-alpha-colors`} level={4}>
      Alpha colors
    </SectionHeading>
    <Paragraph>
      Alpha colors are an extension of <InlineCode>rgb()</InlineCode> color values with an <InlineCode>alpha</InlineCode> value i.e. opacity.
    </Paragraph>
    <Paragraph>
      For demonstration purpose, the Alpha color boxes are displayed on different background colors.
    </Paragraph>
    <StyloThemeAlphaColorShades colors={colors} textColor={textColor} />
  </section>
);

export default StyloThemeAlphaColors;
