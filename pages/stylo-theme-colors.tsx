import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import StyloThemeAlphaColors from '../components/stylo-theme-colors/stylo-theme-alpha-colors';
import StyloThemeAlphaInvertedColors from '../components/stylo-theme-colors/stylo-theme-alpha-inverted-colors';
import StyloThemeColorBox from '../components/stylo-theme-colors/stylo-theme-color-box';
import StyloThemeDarkColorShadesSection from '../components/stylo-theme-colors/stylo-theme-dark-color-shades-section';
import StyloThemeLightColorShadesSection from '../components/stylo-theme-colors/stylo-theme-light-color-shades-section';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import * as darkColors from '../constants/stylo-theme-dark-colors';
import * as lightColors from '../constants/stylo-theme-light-colors';

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
  | 'Color.AlphaInverted1'
  | 'Color.AlphaInverted2'
  | 'Color.AlphaInverted3'
  | 'Color.AlphaInverted4'
  | 'Color.AlphaInverted5'
  | 'Color.AlphaInverted6'
  | 'Color.AlphaInverted7'
  | 'Color.AlphaInverted8'
  | 'Color.AlphaInverted9'
  | 'Color.AlphaInverted10'
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
  | 'Color.Yellow10'`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="light-theme" level={3}>
              Light Theme
            </SectionHeading>
            <section className="no-vertical-margin-collapse">
              <SectionHeading id="light-theme-principal-colors" level={4}>
                Principal colors
              </SectionHeading>
              <div className="grid lg:grid-cols-4 lg:gap-x-12 mb-4">
                <StyloThemeColorBox color={lightColors.screenBackgroundColor}>
                  <span style={{ color: '#000' }}>
                    Body
                  </span>
                  <span style={{ color: '#000', textTransform: 'uppercase' }}>
                    {lightColors.screenBackgroundColor}
                  </span>
                </StyloThemeColorBox>

                <StyloThemeColorBox color={lightColors.whiteColor}>
                  <span style={{ color: '#000' }}>
                    White
                  </span>
                  <span style={{ color: '#000', textTransform: 'uppercase' }}>
                    {lightColors.whiteColor}
                  </span>
                </StyloThemeColorBox>
              </div>

              <div className="grid lg:grid-cols-4 gap-1 lg:gap-x-12 mb-4">
                <StyloThemeColorBox color={lightColors.fontColor}>
                  <span style={{ color: '#FFF' }}>
                    Font
                  </span>
                  <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                    {lightColors.fontColor}
                  </span>
                </StyloThemeColorBox>

                <StyloThemeColorBox color={lightColors.fontColorSecondary}>
                  <span style={{ color: '#FFF' }}>
                    Font Secondary
                  </span>
                  <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                    {lightColors.fontColorSecondary}
                  </span>
                </StyloThemeColorBox>

                <StyloThemeColorBox color={lightColors.borderColor}>
                  <span style={{ color: '#000' }}>
                    Border
                  </span>
                  <span style={{ color: '#000', textTransform: 'uppercase' }}>
                    {lightColors.borderColor}
                  </span>
                </StyloThemeColorBox>
              </div>

              <div className="grid lg:grid-cols-4 gap-1 lg:gap-x-12 mb-4">
                <StyloThemeColorBox color={lightColors.primaryColor}>
                  <span style={{ color: '#FFF' }}>
                    Primary
                  </span>
                  <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                    {lightColors.primaryColor}
                  </span>
                </StyloThemeColorBox>

                <StyloThemeColorBox color={lightColors.infoColor}>
                  <span style={{ color: '#FFF' }}>
                    Info
                  </span>
                  <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                    {lightColors.infoColor}
                  </span>
                </StyloThemeColorBox>

                <StyloThemeColorBox color={lightColors.warningColor}>
                  <span style={{ color: '#FFF' }}>
                    Warning
                  </span>
                  <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                    {lightColors.warningColor}
                  </span>
                </StyloThemeColorBox>

                <StyloThemeColorBox color={lightColors.dangerColor}>
                  <span style={{ color: '#FFF' }}>
                    Danger
                  </span>
                  <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                    {lightColors.dangerColor}
                  </span>
                </StyloThemeColorBox>
              </div>
            </section>

            <section className="no-vertical-margin-collapse">
              <SectionHeading id="light-theme-principal-color-shades" level={4}>
                Principal color shades
              </SectionHeading>
              <div className="grid lg:grid-cols-4 gap-x-12">
                <StyloThemeLightColorShadesSection id="primary-colors" title="Primary" colors={lightColors.primaryColors} />
                <StyloThemeLightColorShadesSection id="info-colors" title="Info" colors={lightColors.infoColors} />
                <StyloThemeLightColorShadesSection id="warning-colors" title="Warning" colors={lightColors.warningColors} />
                <StyloThemeLightColorShadesSection id="danger-colors" title="Danger" colors={lightColors.dangerColors} />
              </div>
            </section>

            <section className="no-vertical-margin-collapse">
              <SectionHeading id="light-theme-color-palette" level={4}>
                Color palette
              </SectionHeading>
              <div className="grid lg:grid-cols-3 gap-x-12">
                <StyloThemeLightColorShadesSection id="grey-colors" title="Grey" colors={lightColors.greyColors} />
                <StyloThemeLightColorShadesSection id="blue-colors" title="Blue" colors={lightColors.blueColors} />
                <StyloThemeLightColorShadesSection id="cyan-colors" title="Cyan" colors={lightColors.cyanColors} />
                <StyloThemeLightColorShadesSection id="green-colors" title="Green" colors={lightColors.greenColors} />
                <StyloThemeLightColorShadesSection id="magenta-colors" title="Magenta" colors={lightColors.magentaColors} />
                <StyloThemeLightColorShadesSection id="orange-colors" title="Orange" colors={lightColors.orangeColors} />
                <StyloThemeLightColorShadesSection id="purple-colors" title="Purple" colors={lightColors.purpleColors} />
                <StyloThemeLightColorShadesSection id="red-colors" title="Red" colors={lightColors.redColors} />
                <StyloThemeLightColorShadesSection id="yellow-colors" title="Yellow" colors={lightColors.yellowColors} />
              </div>
            </section>

            <StyloThemeAlphaColors colors={lightColors.alphaColors} textColor="#000" idPrefix="light-theme" />
            <StyloThemeAlphaInvertedColors colors={lightColors.alphaInvertedColors} textColor="#fff" idPrefix="light-theme" />
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="dark-theme" level={3}>
              Dark Theme
            </SectionHeading>
            <Paragraph>
              Dark theme is built by simply reversing the order of the light theme colors.
              <br />
              Means, <InlineCode>Dark.Theme.Color.Primary1 = Light.Theme.Color.Primary10</InlineCode>, <InlineCode>Dark.Theme.Color.Primary2 = Light.Theme.Color.Primary9</InlineCode>, <InlineCode>Dark.Theme.Color.Primary3 = Light.Theme.Color.Primary7</InlineCode> &amp; so on for all the colors.
              <br />
              Similarly, alpha colors become, <InlineCode>Dark.Theme.Color.Alpha1 = Light.Theme.Color.AlphaInverted1</InlineCode>, <InlineCode>Dark.Theme.Color.AlphaInverted1 = Light.Theme.Color.Alpha1</InlineCode> &amp; so on.
            </Paragraph>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="dark-theme-principal-colors" level={4}>
              Principal colors
            </SectionHeading>
            <div className="grid lg:grid-cols-4 lg:gap-x-12 mb-4">
              <StyloThemeColorBox color={darkColors.screenBackgroundColor}>
                <span style={{ color: '#fff' }}>
                  Body
                </span>
                <span style={{ color: '#fff', textTransform: 'uppercase' }}>
                  {darkColors.screenBackgroundColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={darkColors.whiteColor}>
                <span style={{ color: '#000' }}>
                  White
                </span>
                <span style={{ color: '#000', textTransform: 'uppercase' }}>
                  {darkColors.whiteColor}
                </span>
              </StyloThemeColorBox>
            </div>

            <div className="grid lg:grid-cols-4 gap-1 lg:gap-x-12 mb-4">
              <StyloThemeColorBox color={darkColors.fontColor}>
                <span style={{ color: '#FFF' }}>
                  Font
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {darkColors.fontColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={darkColors.fontColorSecondary}>
                <span style={{ color: '#FFF' }}>
                  Font Secondary
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {darkColors.fontColorSecondary}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={darkColors.borderColor}>
                <span style={{ color: '#fff' }}>
                  Border
                </span>
                <span style={{ color: '#fff', textTransform: 'uppercase' }}>
                  {darkColors.borderColor}
                </span>
              </StyloThemeColorBox>
            </div>

            <div className="grid lg:grid-cols-4 gap-1 lg:gap-x-12 mb-4">
              <StyloThemeColorBox color={darkColors.primaryColor}>
                <span style={{ color: '#FFF' }}>
                  Primary
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {darkColors.primaryColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={darkColors.infoColor}>
                <span style={{ color: '#FFF' }}>
                  Info
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {darkColors.infoColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={darkColors.warningColor}>
                <span style={{ color: '#FFF' }}>
                  Warning
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {darkColors.warningColor}
                </span>
              </StyloThemeColorBox>

              <StyloThemeColorBox color={darkColors.dangerColor}>
                <span style={{ color: '#FFF' }}>
                  Danger
                </span>
                <span style={{ color: '#FFF', textTransform: 'uppercase' }}>
                  {darkColors.dangerColor}
                </span>
              </StyloThemeColorBox>
            </div>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="dark-theme-principal-color-shades" level={4}>
              Principal color shades
            </SectionHeading>
            <div className="grid lg:grid-cols-4 gap-x-12">
              <StyloThemeDarkColorShadesSection id="primary-colors" title="Primary" colors={darkColors.primaryColors} />
              <StyloThemeDarkColorShadesSection id="info-colors" title="Info" colors={darkColors.infoColors} />
              <StyloThemeDarkColorShadesSection id="warning-colors" title="Warning" colors={darkColors.warningColors} />
              <StyloThemeDarkColorShadesSection id="danger-colors" title="Danger" colors={darkColors.dangerColors} />
            </div>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="dark-theme-color-palette" level={4}>
              Color palette
            </SectionHeading>
            <div className="grid lg:grid-cols-3 gap-x-12">
              <StyloThemeDarkColorShadesSection id="grey-colors" title="Grey" colors={darkColors.greyColors} />
              <StyloThemeDarkColorShadesSection id="blue-colors" title="Blue" colors={darkColors.blueColors} />
              <StyloThemeDarkColorShadesSection id="cyan-colors" title="Cyan" colors={darkColors.cyanColors} />
              <StyloThemeDarkColorShadesSection id="green-colors" title="Green" colors={darkColors.greenColors} />
              <StyloThemeDarkColorShadesSection id="magenta-colors" title="Magenta" colors={darkColors.magentaColors} />
              <StyloThemeDarkColorShadesSection id="orange-colors" title="Orange" colors={darkColors.orangeColors} />
              <StyloThemeDarkColorShadesSection id="purple-colors" title="Purple" colors={darkColors.purpleColors} />
              <StyloThemeDarkColorShadesSection id="red-colors" title="Red" colors={darkColors.redColors} />
              <StyloThemeDarkColorShadesSection id="yellow-colors" title="Yellow" colors={darkColors.yellowColors} />
            </div>
          </section>

          <StyloThemeAlphaColors colors={darkColors.alphaColors} textColor="#fff" idPrefix="dark-theme" />
          <StyloThemeAlphaInvertedColors colors={darkColors.alphaInvertedColors} textColor="#000" idPrefix="dark-theme" />

        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeColors;
