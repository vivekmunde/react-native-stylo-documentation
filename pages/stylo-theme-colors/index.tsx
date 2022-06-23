import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../../components/article-heading';
import Layout from '../../components/layout';
import Paragraph from '../../components/paragraph';
import SectionHeading from '../../components/section-heading';
import StyloThemeNavigation from '../../components/stylo-theme-navigation';
import {
  blueColors, bodyColor, borderColor, cyanColors, dangerColor, dangerColors, fontColor, goldColors, greenColors, greyColors,
  infoColor, infoColors, limeColors, magentaColors, orangeColors, primaryColor, primaryColors,
  purpleColors, redColors, secondaryColor, volcanoColors, warningColor, warningColors, yellowColors
} from '../../constants/stylo-theme-colors';
import StyloThemeAlphaColors from './stylo-theme-alpha-colors';
import StyloThemeAlphaInvertedColors from './stylo-theme-alpha-inverted-colors';
import StyloThemeColorBox from './stylo-theme-color-box';
import StyloThemeColorShadesSection from './stylo-theme-color-shades-section';

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

              <StyloThemeColorBox color={fontColor}>
                <span style={{ color: '#FFF' }}>
                  Font
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {fontColor}
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

              <StyloThemeColorBox color={secondaryColor}>
                <span style={{ color: '#FFF' }}>
                  Secondary
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {secondaryColor}
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
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeColors;
