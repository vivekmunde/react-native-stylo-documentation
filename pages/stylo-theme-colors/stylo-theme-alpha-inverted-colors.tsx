import React from 'react';

import InlineCode from '../../components/inline-code';
import Paragraph from '../../components/paragraph';
import SectionHeading from '../../components/section-heading';
import { alphaInvertedColors } from '../../constants/stylo-theme-colors';
import StyloThemeAlphaColorShades from './stylo-theme-alpha-color-shades';

const StyloThemeAlphaInvertedColors: React.FC = () => (
  <section className="no-vertical-margin-collapse">
    <SectionHeading id="inverted-alpha-colors" level={4}>
      Inverted Alpha colors
    </SectionHeading>
    <Paragraph>
      Inverted Alpha colors are an extension of <InlineCode>rgb()</InlineCode> color values with an <InlineCode>alpha</InlineCode> value i.e. opacity.
      Its RGB value is <InlineCode>rgb(0, 0, 0)</InlineCode> &amp; the alpha value ranges from <InlineCode>0.1</InlineCode> to <InlineCode>1</InlineCode>.
    </Paragraph>
    <Paragraph>
      For demonstration purpose, the Inverted Alpha color boxes are displayed on different background colors.
    </Paragraph>
    <StyloThemeAlphaColorShades colors={alphaInvertedColors} textColor="#FFF" />
  </section>
);

export default StyloThemeAlphaInvertedColors;
