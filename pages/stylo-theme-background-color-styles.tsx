import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import BackgroundColorShowCase from '../components/showcase/background-color-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeBackgroundColors: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>BackgroundColor | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>BackgroundColor</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <Paragraph>
              Ref:
              {' '}
              <Link href="/stylo-theme-colors">Colors</Link>
              {' '}
              for <InlineCode>Background.[Color]</InlineCode>
            </Paragraph>
            <CodeSnippet>
              {`type TBackgroundColorStyle = 
  | 'BackgroundColor.Alpha1'
  | 'BackgroundColor.Alpha2'
  | 'BackgroundColor.Alpha3'
  | 'BackgroundColor.Alpha4'
  | 'BackgroundColor.Alpha5'
  | 'BackgroundColor.Alpha6'
  | 'BackgroundColor.Alpha7'
  | 'BackgroundColor.Alpha8'
  | 'BackgroundColor.Alpha9'
  | 'BackgroundColor.Alpha10'
  | 'BackgroundColor.AlphaInverted1'
  | 'BackgroundColor.AlphaInverted2'
  | 'BackgroundColor.AlphaInverted3'
  | 'BackgroundColor.AlphaInverted4'
  | 'BackgroundColor.AlphaInverted5'
  | 'BackgroundColor.AlphaInverted6'
  | 'BackgroundColor.AlphaInverted7'
  | 'BackgroundColor.AlphaInverted8'
  | 'BackgroundColor.AlphaInverted9'
  | 'BackgroundColor.AlphaInverted10'
  | 'BackgroundColor.Backdrop'
  | 'BackgroundColor.Blue1'
  | 'BackgroundColor.Blue2'
  | 'BackgroundColor.Blue3'
  | 'BackgroundColor.Blue4'
  | 'BackgroundColor.Blue5'
  | 'BackgroundColor.Blue6'
  | 'BackgroundColor.Blue7'
  | 'BackgroundColor.Blue8'
  | 'BackgroundColor.Blue9'
  | 'BackgroundColor.Blue10'
  | 'BackgroundColor.Body'
  | 'BackgroundColor.Cyan1'
  | 'BackgroundColor.Cyan2'
  | 'BackgroundColor.Cyan3'
  | 'BackgroundColor.Cyan4'
  | 'BackgroundColor.Cyan5'
  | 'BackgroundColor.Cyan6'
  | 'BackgroundColor.Cyan7'
  | 'BackgroundColor.Cyan8'
  | 'BackgroundColor.Cyan9'
  | 'BackgroundColor.Cyan10'
  | 'BackgroundColor.Danger'
  | 'BackgroundColor.Danger1'
  | 'BackgroundColor.Danger2'
  | 'BackgroundColor.Danger3'
  | 'BackgroundColor.Danger4'
  | 'BackgroundColor.Danger5'
  | 'BackgroundColor.Danger6'
  | 'BackgroundColor.Danger7'
  | 'BackgroundColor.Danger8'
  | 'BackgroundColor.Danger9'
  | 'BackgroundColor.Danger10'
  | 'BackgroundColor.Gold1'
  | 'BackgroundColor.Gold2'
  | 'BackgroundColor.Gold3'
  | 'BackgroundColor.Gold4'
  | 'BackgroundColor.Gold5'
  | 'BackgroundColor.Gold6'
  | 'BackgroundColor.Gold7'
  | 'BackgroundColor.Gold8'
  | 'BackgroundColor.Gold9'
  | 'BackgroundColor.Gold10'
  | 'BackgroundColor.Green1'
  | 'BackgroundColor.Green2'
  | 'BackgroundColor.Green3'
  | 'BackgroundColor.Green4'
  | 'BackgroundColor.Green5'
  | 'BackgroundColor.Green6'
  | 'BackgroundColor.Green7'
  | 'BackgroundColor.Green8'
  | 'BackgroundColor.Green9'
  | 'BackgroundColor.Green10'
  | 'BackgroundColor.Grey1'
  | 'BackgroundColor.Grey2'
  | 'BackgroundColor.Grey3'
  | 'BackgroundColor.Grey4'
  | 'BackgroundColor.Grey5'
  | 'BackgroundColor.Grey6'
  | 'BackgroundColor.Grey7'
  | 'BackgroundColor.Grey8'
  | 'BackgroundColor.Grey9'
  | 'BackgroundColor.Grey10'
  | 'BackgroundColor.Info'
  | 'BackgroundColor.Info1'
  | 'BackgroundColor.Info2'
  | 'BackgroundColor.Info3'
  | 'BackgroundColor.Info4'
  | 'BackgroundColor.Info5'
  | 'BackgroundColor.Info6'
  | 'BackgroundColor.Info7'
  | 'BackgroundColor.Info8'
  | 'BackgroundColor.Info9'
  | 'BackgroundColor.Info10'
  | 'BackgroundColor.Lime1'
  | 'BackgroundColor.Lime2'
  | 'BackgroundColor.Lime3'
  | 'BackgroundColor.Lime4'
  | 'BackgroundColor.Lime5'
  | 'BackgroundColor.Lime6'
  | 'BackgroundColor.Lime7'
  | 'BackgroundColor.Lime8'
  | 'BackgroundColor.Lime9'
  | 'BackgroundColor.Lime10'
  | 'BackgroundColor.Magenta1'
  | 'BackgroundColor.Magenta2'
  | 'BackgroundColor.Magenta3'
  | 'BackgroundColor.Magenta4'
  | 'BackgroundColor.Magenta5'
  | 'BackgroundColor.Magenta6'
  | 'BackgroundColor.Magenta7'
  | 'BackgroundColor.Magenta8'
  | 'BackgroundColor.Magenta9'
  | 'BackgroundColor.Magenta10'
  | 'BackgroundColor.Orange1'
  | 'BackgroundColor.Orange2'
  | 'BackgroundColor.Orange3'
  | 'BackgroundColor.Orange4'
  | 'BackgroundColor.Orange5'
  | 'BackgroundColor.Orange6'
  | 'BackgroundColor.Orange7'
  | 'BackgroundColor.Orange8'
  | 'BackgroundColor.Orange9'
  | 'BackgroundColor.Orange10'
  | 'BackgroundColor.Primary'
  | 'BackgroundColor.Primary1'
  | 'BackgroundColor.Primary2'
  | 'BackgroundColor.Primary3'
  | 'BackgroundColor.Primary4'
  | 'BackgroundColor.Primary5'
  | 'BackgroundColor.Primary6'
  | 'BackgroundColor.Primary7'
  | 'BackgroundColor.Primary8'
  | 'BackgroundColor.Primary9'
  | 'BackgroundColor.Primary10'
  | 'BackgroundColor.Purple1'
  | 'BackgroundColor.Purple2'
  | 'BackgroundColor.Purple3'
  | 'BackgroundColor.Purple4'
  | 'BackgroundColor.Purple5'
  | 'BackgroundColor.Purple6'
  | 'BackgroundColor.Purple7'
  | 'BackgroundColor.Purple8'
  | 'BackgroundColor.Purple9'
  | 'BackgroundColor.Purple10'
  | 'BackgroundColor.Red1'
  | 'BackgroundColor.Red2'
  | 'BackgroundColor.Red3'
  | 'BackgroundColor.Red4'
  | 'BackgroundColor.Red5'
  | 'BackgroundColor.Red6'
  | 'BackgroundColor.Red7'
  | 'BackgroundColor.Red8'
  | 'BackgroundColor.Red9'
  | 'BackgroundColor.Red10'
  | 'BackgroundColor.Secondary'
  | 'BackgroundColor.Success'
  | 'BackgroundColor.Success1'
  | 'BackgroundColor.Success2'
  | 'BackgroundColor.Success3'
  | 'BackgroundColor.Success4'
  | 'BackgroundColor.Success5'
  | 'BackgroundColor.Success6'
  | 'BackgroundColor.Success7'
  | 'BackgroundColor.Success8'
  | 'BackgroundColor.Success9'
  | 'BackgroundColor.Success10'
  | 'BackgroundColor.Volcano1'
  | 'BackgroundColor.Volcano2'
  | 'BackgroundColor.Volcano3'
  | 'BackgroundColor.Volcano4'
  | 'BackgroundColor.Volcano5'
  | 'BackgroundColor.Volcano6'
  | 'BackgroundColor.Volcano7'
  | 'BackgroundColor.Volcano8'
  | 'BackgroundColor.Volcano9'
  | 'BackgroundColor.Volcano10'
  | 'BackgroundColor.Warning'
  | 'BackgroundColor.Warning1'
  | 'BackgroundColor.Warning2'
  | 'BackgroundColor.Warning3'
  | 'BackgroundColor.Warning4'
  | 'BackgroundColor.Warning5'
  | 'BackgroundColor.Warning6'
  | 'BackgroundColor.Warning7'
  | 'BackgroundColor.Warning8'
  | 'BackgroundColor.Warning9'
  | 'BackgroundColor.Warning10'
  | 'BackgroundColor.White'
  | 'BackgroundColor.Yellow1'
  | 'BackgroundColor.Yellow2'
  | 'BackgroundColor.Yellow3'
  | 'BackgroundColor.Yellow4'
  | 'BackgroundColor.Yellow5'
  | 'BackgroundColor.Yellow6'
  | 'BackgroundColor.Yellow7'
  | 'BackgroundColor.Yellow8'
  | 'BackgroundColor.Yellow9'
  | 'BackgroundColor.Yellow10';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <BackgroundColorShowCase />
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeBackgroundColors;
