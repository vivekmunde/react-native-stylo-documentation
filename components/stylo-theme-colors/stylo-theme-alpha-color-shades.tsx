import React from 'react';

import {
  dangerColor, infoColor, primaryColor, warningColor
} from '../../constants/stylo-theme-colors';
import StyloThemeColorBox from './stylo-theme-color-box';

const StyloThemeAlphaColorShades: React.FC<{
  colors: { [name: string]: string };
  textColor: string;
}> = ({ colors, textColor }) => (
  <div className="grid lg:grid-cols-5">
    <div
      className="mb-4 pt-2 pr-2 pl-2 pb-[1px] rounded lg:col-span-4 xl:col-span-3"
      style={{
        backgroundImage: `linear-gradient(to right, ${primaryColor} 25%, ${infoColor} 25% 50%, ${warningColor} 50% 75%, ${dangerColor} 75% 100%)`,
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
  </div>
);

export default StyloThemeAlphaColorShades;
