import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import SectionHeading from '../components/section-heading';
import StyloThemeAlphaColors from '../components/stylo-theme-colors/stylo-theme-alpha-colors';
import StyloThemeAlphaInvertedColors from '../components/stylo-theme-colors/stylo-theme-alpha-inverted-colors';
import StyloThemeColorBox from '../components/stylo-theme-colors/stylo-theme-color-box';
import StyloThemeColorShadesSection from '../components/stylo-theme-colors/stylo-theme-color-shades-section';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import {
  blueColors, bodyColor, borderColor, cyanColors, dangerColor, dangerColors, fontColor,
  greenColors, greyColors, infoColor, infoColors, magentaColors, orangeColors, primaryColor,
  primaryColors, purpleColors, redColors, secondaryColor, warningColor, warningColors, whiteColor,
  yellowColors
} from '../constants/stylo-theme-colors';

const StyloThemeColors: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Colors | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Colors</ArticleHeading>
          <section className="no-vertical-margin-collapse">
            <SectionHeading id="principal-colors" level={4}>
              Principal colors
            </SectionHeading>
            <div className="grid lg:grid-cols-4 lg:gap-x-12 mb-4">
              <StyloThemeColorBox color={bodyColor}>
                <span style={{ color: '#000' }}>
                  Body
                </span>
                <span style={{ color: '#000', textTransform: 'uppercase' }}>
                  {bodyColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={whiteColor}>
                <span style={{ color: '#000' }}>
                  White
                </span>
                <span style={{ color: '#000', textTransform: 'uppercase' }}>
                  {whiteColor}
                </span>
              </StyloThemeColorBox>
            </div>

            <div className="grid lg:grid-cols-4 gap-1 lg:gap-x-12 mb-4">
              <StyloThemeColorBox color={fontColor}>
                <span style={{ color: '#FFF' }}>
                  Font
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {fontColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={secondaryColor}>
                <span style={{ color: '#FFF' }}>
                  Secondary
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {secondaryColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={borderColor}>
                <span style={{ color: '#000' }}>
                  Border
                </span>
                <span style={{ color: '#000', textTransform: 'uppercase' }}>
                  {borderColor}
                </span>
              </StyloThemeColorBox>
            </div>

            <div className="grid lg:grid-cols-4 gap-1 lg:gap-x-12 mb-4">
              <StyloThemeColorBox color={primaryColor}>
                <span style={{ color: '#FFF' }}>
                  Primary
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {primaryColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={infoColor}>
                <span style={{ color: '#FFF' }}>
                  Info
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {infoColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={warningColor}>
                <span style={{ color: '#FFF' }}>
                  Warning
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {warningColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={dangerColor}>
                <span style={{ color: '#FFF' }}>
                  Danger
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {dangerColor}
                </span>
              </StyloThemeColorBox>
            </div>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="principal-color-shades" level={4}>
              Principal color shades
            </SectionHeading>
            <div className="grid lg:grid-cols-4 gap-x-12">
              <StyloThemeColorShadesSection id="primary-colors" title="Primary" colors={primaryColors} />
              <StyloThemeColorShadesSection id="info-colors" title="Info" colors={infoColors} />
              <StyloThemeColorShadesSection id="warning-colors" title="Warning" colors={warningColors} />
              <StyloThemeColorShadesSection id="danger-colors" title="Danger" colors={dangerColors} />
            </div>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="color-palette" level={4}>
              Color palette
            </SectionHeading>
            <div className="grid lg:grid-cols-3 gap-x-12">
              <StyloThemeColorShadesSection id="grey-colors" title="Grey" colors={greyColors} />
              <StyloThemeColorShadesSection id="blue-colors" title="Blue" colors={blueColors} />
              <StyloThemeColorShadesSection id="cyan-colors" title="Cyan" colors={cyanColors} />
              <StyloThemeColorShadesSection id="green-colors" title="Green" colors={greenColors} />
              <StyloThemeColorShadesSection id="magenta-colors" title="Magenta" colors={magentaColors} />
              <StyloThemeColorShadesSection id="orange-colors" title="Orange" colors={orangeColors} />
              <StyloThemeColorShadesSection id="purple-colors" title="Purple" colors={purpleColors} />
              <StyloThemeColorShadesSection id="red-colors" title="Red" colors={redColors} />
              <StyloThemeColorShadesSection id="yellow-colors" title="Yellow" colors={yellowColors} />
            </div>
          </section>

          <StyloThemeAlphaColors />
          <StyloThemeAlphaInvertedColors />

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <CodeSnippet>
              {`type TColor = 
  | 'Color.Alpha1'
  | 'Color.Alpha2'
  | 'Color.Alpha3'
  | 'Color.Alpha4'
  | 'Color.Alpha5'
  | 'Color.Alpha6'
  | 'Color.Alpha7'
  | 'Color.Alpha8'
  | 'Color.Alpha9'
  | 'Color.Alpha10'
  | 'Color.Blue1'
  | 'Color.Blue2'
  | 'Color.Blue3'
  | 'Color.Blue4'
  | 'Color.Blue5'
  | 'Color.Blue6'
  | 'Color.Blue7'
  | 'Color.Blue8'
  | 'Color.Blue9'
  | 'Color.Blue10'
  | 'Color.Cyan1'
  | 'Color.Cyan2'
  | 'Color.Cyan3'
  | 'Color.Cyan4'
  | 'Color.Cyan5'
  | 'Color.Cyan6'
  | 'Color.Cyan7'
  | 'Color.Cyan8'
  | 'Color.Cyan9'
  | 'Color.Cyan10'
  | 'Color.Danger'
  | 'Color.Danger1'
  | 'Color.Danger2'
  | 'Color.Danger3'
  | 'Color.Danger4'
  | 'Color.Danger5'
  | 'Color.Danger6'
  | 'Color.Danger7'
  | 'Color.Danger8'
  | 'Color.Danger9'
  | 'Color.Danger10'
  | 'Color.Green1'
  | 'Color.Green2'
  | 'Color.Green3'
  | 'Color.Green4'
  | 'Color.Green5'
  | 'Color.Green6'
  | 'Color.Green7'
  | 'Color.Green8'
  | 'Color.Green9'
  | 'Color.Green10'
  | 'Color.Grey1'
  | 'Color.Grey2'
  | 'Color.Grey3'
  | 'Color.Grey4'
  | 'Color.Grey5'
  | 'Color.Grey6'
  | 'Color.Grey7'
  | 'Color.Grey8'
  | 'Color.Grey9'
  | 'Color.Grey10'
  | 'Color.Info'
  | 'Color.Info1'
  | 'Color.Info2'
  | 'Color.Info3'
  | 'Color.Info4'
  | 'Color.Info5'
  | 'Color.Info6'
  | 'Color.Info7'
  | 'Color.Info8'
  | 'Color.Info9'
  | 'Color.Info10'
  | 'Color.Magenta1'
  | 'Color.Magenta2'
  | 'Color.Magenta3'
  | 'Color.Magenta4'
  | 'Color.Magenta5'
  | 'Color.Magenta6'
  | 'Color.Magenta7'
  | 'Color.Magenta8'
  | 'Color.Magenta9'
  | 'Color.Magenta10'
  | 'Color.Orange1'
  | 'Color.Orange2'
  | 'Color.Orange3'
  | 'Color.Orange4'
  | 'Color.Orange5'
  | 'Color.Orange6'
  | 'Color.Orange7'
  | 'Color.Orange8'
  | 'Color.Orange9'
  | 'Color.Orange10'
  | 'Color.Primary'
  | 'Color.Primary1'
  | 'Color.Primary2'
  | 'Color.Primary3'
  | 'Color.Primary4'
  | 'Color.Primary5'
  | 'Color.Primary6'
  | 'Color.Primary7'
  | 'Color.Primary8'
  | 'Color.Primary9'
  | 'Color.Primary10'
  | 'Color.Purple1'
  | 'Color.Purple2'
  | 'Color.Purple3'
  | 'Color.Purple4'
  | 'Color.Purple5'
  | 'Color.Purple6'
  | 'Color.Purple7'
  | 'Color.Purple8'
  | 'Color.Purple9'
  | 'Color.Purple10'
  | 'Color.Red1'
  | 'Color.Red2'
  | 'Color.Red3'
  | 'Color.Red4'
  | 'Color.Red5'
  | 'Color.Red6'
  | 'Color.Red7'
  | 'Color.Red8'
  | 'Color.Red9'
  | 'Color.Red10'
  | 'Color.Secondary'
  | 'Color.Success'
  | 'Color.Success1'
  | 'Color.Success2'
  | 'Color.Success3'
  | 'Color.Success4'
  | 'Color.Success5'
  | 'Color.Success6'
  | 'Color.Success7'
  | 'Color.Success8'
  | 'Color.Success9'
  | 'Color.Success10'
  | 'Color.Warning'
  | 'Color.Warning1'
  | 'Color.Warning2'
  | 'Color.Warning3'
  | 'Color.Warning4'
  | 'Color.Warning5'
  | 'Color.Warning6'
  | 'Color.Warning7'
  | 'Color.Warning8'
  | 'Color.Warning9'
  | 'Color.Warning10'
  | 'Color.White'
  | 'Color.Yellow1'
  | 'Color.Yellow2'
  | 'Color.Yellow3'
  | 'Color.Yellow4'
  | 'Color.Yellow5'
  | 'Color.Yellow6'
  | 'Color.Yellow7'
  | 'Color.Yellow8'
  | 'Color.Yellow9'
  | 'Color.Yellow10';`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeColors;
