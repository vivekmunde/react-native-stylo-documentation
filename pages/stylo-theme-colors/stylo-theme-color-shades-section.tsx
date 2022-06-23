import React from 'react';

import SectionHeading from '../../components/section-heading';
import StyloThemeColorBox from './stylo-theme-color-box';

const StyloThemeColorShadesSection: React.FC<{
  id: string;
  title: string;
  colors: { [name: string]: string };
}> = ({ id, title, colors }) => (
  <section className="no-vertical-margin-collapse">
    <SectionHeading id={id} level={5}>
      {title}
    </SectionHeading>
    <ul className="mb-4">
      {Object.keys(colors).map((key, index) => (
        <li key={key} className="mb-1">
          <StyloThemeColorBox color={colors[key]}>
            <span style={{ color: index < 5 ? '#000' : '#FFF' }}>
              {key}
            </span>
            <span style={{ color: index < 5 ? '#000' : '#FFF', textTransform: 'uppercase' }}>
              {colors[key]}
            </span>
          </StyloThemeColorBox>
        </li>
      ))}
    </ul>
  </section>
);

export default StyloThemeColorShadesSection;
