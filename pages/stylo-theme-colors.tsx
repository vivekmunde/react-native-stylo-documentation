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
    goldColors, greenColors, greyColors, infoColor, infoColors, limeColors, magentaColors,
    orangeColors, primaryColor, primaryColors, purpleColors, redColors, secondaryColor,
    volcanoColors, warningColor, warningColors, whiteColor, yellowColors
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
            <div className="grid grid-cols-4 mb-4">
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

            <div className="grid grid-cols-4 mb-4">
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

            <div className="grid grid-cols-4 mb-4">
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
            <div className="grid grid-cols-4">
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
            <div className="grid grid-cols-4">
              <StyloThemeColorShadesSection id="blue-colors" title="Blue" colors={blueColors} />
              <StyloThemeColorShadesSection id="cyan-colors" title="Cyan" colors={cyanColors} />
              <StyloThemeColorShadesSection id="gold-colors" title="Gold" colors={goldColors} />
              <StyloThemeColorShadesSection id="green-colors" title="Green" colors={greenColors} />
              <StyloThemeColorShadesSection id="grey-colors" title="Grey" colors={greyColors} />
              <StyloThemeColorShadesSection id="lime-colors" title="Lime" colors={limeColors} />
              <StyloThemeColorShadesSection id="magenta-colors" title="Magenta" colors={magentaColors} />
              <StyloThemeColorShadesSection id="orange-colors" title="Orange" colors={orangeColors} />
              <StyloThemeColorShadesSection id="purple-colors" title="Purple" colors={purpleColors} />
              <StyloThemeColorShadesSection id="red-colors" title="Red" colors={redColors} />
              <StyloThemeColorShadesSection id="volcano-colors" title="Volcano" colors={volcanoColors} />
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
              {`export type TColor = 
  | 'Alpha1' | 'Alpha2' | 'Alpha3' | 'Alpha4' | 'Alpha5' | 'Alpha6' | 'Alpha7' | 'Alpha8' | 'Alpha9' | 'Alpha10'
  | 'Blue1' | 'Blue2' | 'Blue3' | 'Blue4' | 'Blue5' | 'Blue6' | 'Blue7' | 'Blue8' | 'Blue9' | 'Blue10'
  | 'Cyan1' | 'Cyan2' | 'Cyan3' | 'Cyan4' | 'Cyan5' | 'Cyan6' | 'Cyan7' | 'Cyan8' | 'Cyan9' | 'Cyan10'
  | 'Danger'
  | 'Danger1' | 'Danger2' | 'Danger3' | 'Danger4' | 'Danger5' | 'Danger6' | 'Danger7' | 'Danger8' | 'Danger9' | 'Danger10'
  | 'Gold1' | 'Gold2' | 'Gold3' | 'Gold4' | 'Gold5' | 'Gold6' | 'Gold7' | 'Gold8' | 'Gold9' | 'Gold10'
  | 'Green1' | 'Green2' | 'Green3' | 'Green4' | 'Green5' | 'Green6' | 'Green7' | 'Green8' | 'Green9' | 'Green10'
  | 'Grey1' | 'Grey2' | 'Grey3' | 'Grey4' | 'Grey5' | 'Grey6' | 'Grey7' | 'Grey8' | 'Grey9' | 'Grey10'
  | 'Info'
  | 'Info1' | 'Info2' | 'Info3' | 'Info4' | 'Info5' | 'Info6' | 'Info7' | 'Info8' | 'Info9' | 'Info10'
  | 'Lime1' | 'Lime2' | 'Lime3' | 'Lime4' | 'Lime5' | 'Lime6' | 'Lime7' | 'Lime8' | 'Lime9' | 'Lime10'
  | 'Magenta1' | 'Magenta2' | 'Magenta3' | 'Magenta4' | 'Magenta5' | 'Magenta6' | 'Magenta7' | 'Magenta8' | 'Magenta9' | 'Magenta10'
  | 'Orange1' | 'Orange2' | 'Orange3' | 'Orange4' | 'Orange5' | 'Orange6' | 'Orange7' | 'Orange8' | 'Orange9' | 'Orange10'
  | 'Primary'
  | 'Primary1' | 'Primary2' | 'Primary3' | 'Primary4' | 'Primary5' | 'Primary6' | 'Primary7' | 'Primary8' | 'Primary9' | 'Primary10'
  | 'Purple1' | 'Purple2' | 'Purple3' | 'Purple4' | 'Purple5' | 'Purple6' | 'Purple7' | 'Purple8' | 'Purple9' | 'Purple10'
  | 'Red1' | 'Red2' | 'Red3' | 'Red4' | 'Red5' | 'Red6' | 'Red7' | 'Red8' | 'Red9' | 'Red10'
  | 'Secondary'
  | 'Success'
  | 'Success1' | 'Success2' | 'Success3' | 'Success4' | 'Success5' | 'Success6' | 'Success7' | 'Success8' | 'Success9' | 'Success10'
  | 'Volcano1' | 'Volcano2' | 'Volcano3' | 'Volcano4' | 'Volcano5' | 'Volcano6' | 'Volcano7' | 'Volcano8' | 'Volcano9' | 'Volcano10'
  | 'Warning'
  | 'Warning1' | 'Warning2' | 'Warning3' | 'Warning4' | 'Warning5' | 'Warning6' | 'Warning7' | 'Warning8' | 'Warning9' | 'Warning10'
  | 'White'
  | 'Yellow1' | 'Yellow2' | 'Yellow3' | 'Yellow4' | 'Yellow5' | 'Yellow6' | 'Yellow7' | 'Yellow8' | 'Yellow9' | 'Yellow10';`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeColors;
