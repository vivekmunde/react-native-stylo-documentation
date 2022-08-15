import React from 'react';

import InlineCode from '../../components/inline-code';
import Paragraph from '../../components/paragraph';
import SectionHeading from '../../components/section-heading';
import StyloThemeAlphaColorShades from './stylo-theme-alpha-color-shades';

const StyloThemeAlphaInvertedColors: React.FC<{
  colors: { [name: string]: string };
  textColor: string;
  idPrefix: string;
}> = ({ colors, textColor, idPrefix }) => (
  <section className="no-vertical-margin-collapse">
    <SectionHeading id={`${idPrefix}-inverted-alpha-colors`} level={4}>
      Inverted Alpha colors
    </SectionHeading>
    <Paragraph>
      Inverted Alpha colors are an extension of <InlineCode>rgb()</InlineCode> color values with an <InlineCode>alpha</InlineCode> value i.e. opacity.
    </Paragraph>
    <Paragraph>
      For demonstration purpose, the Inverted Alpha color boxes are displayed on different background colors.
    </Paragraph>
    <StyloThemeAlphaColorShades colors={colors} textColor={textColor} />
  </section>
);

export default StyloThemeAlphaInvertedColors;
