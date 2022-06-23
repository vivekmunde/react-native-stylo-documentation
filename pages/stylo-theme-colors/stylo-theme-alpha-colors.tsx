import React from 'react';

import InlineCode from '../../components/inline-code';
import Paragraph from '../../components/paragraph';
import SectionHeading from '../../components/section-heading';
import { alphaColors } from '../../constants/stylo-theme-colors';
import StyloThemeAlphaColorShades from './stylo-theme-alpha-color-shades';

const StyloThemeAlphaColors: React.FC = () => (
  <section className="no-vertical-margin-collapse">
    <SectionHeading id="alpha-colors" level={4}>
      Alpha colors
    </SectionHeading>
    <Paragraph>
      Alpha colors are an extension of <InlineCode>rgb()</InlineCode> color values with an <InlineCode>alpha</InlineCode> value i.e. opacity.
      Its RGB value is <InlineCode>rgb(255, 255, 255)</InlineCode> &amp; the alpha value ranges from <InlineCode>0.1</InlineCode> to <InlineCode>1</InlineCode>.
    </Paragraph>
    <Paragraph>
      For demonstration purpose, the Alpha color boxes are displayed on different background colors.
    </Paragraph>
    <StyloThemeAlphaColorShades colors={alphaColors} textColor="#000" />
  </section>
);

export default StyloThemeAlphaColors;
