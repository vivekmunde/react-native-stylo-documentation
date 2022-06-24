import React from 'react';

import {
  dangerColor, infoColor, primaryColor, warningColor
} from '../../constants/stylo-theme-colors';
import StyloThemeColorBox from './stylo-theme-color-box';

const StyloThemeAlphaColorShades: React.FC<{
  colors: { [name: string]: string };
  textColor: string;
}> = ({ colors, textColor }) => (
  <div
    className="mb-4 pt-2 pr-2 pl-2 rounded"
    style={{
      backgroundImage: `linear-gradient(to right, ${primaryColor} 25%, ${infoColor} 25% 50%, ${warningColor} 50% 75%, ${dangerColor} 75% 100%)`,
      paddingBottom: '1px',
      width: '640px',
    }}
  >
    {Object.keys(colors).map((key) => (
      <div key={key} className="mb-2">
        <StyloThemeColorBox color={colors[key]} width="100%">
          <span style={{ color: textColor }}>
            {key}
          </span>
          <span style={{ color: textColor }}>
            {colors[key]}
          </span>
        </StyloThemeColorBox>
      </div>
    ))}
  </div>
);

export default StyloThemeAlphaColorShades;
