import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeColors: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Font colors | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Font colors</ArticleHeading>

          <Paragraph>
            <strong className="font-semibold">Type definition</strong>
          </Paragraph>
          <CodeSnippet>
            {`export type TFontColor = 
  | 'Color.Alpha1' | 'Color.Alpha2' | 'Color.Alpha3' | 'Color.Alpha4' | 'Color.Alpha5' | 'Color.Alpha6' | 'Color.Alpha7' | 'Color.Alpha8' | 'Color.Alpha9' | 'Color.Alpha10'
  | 'Color.Blue1' | 'Color.Blue2' | 'Color.Blue3' | 'Color.Blue4' | 'Color.Blue5' | 'Color.Blue6' | 'Color.Blue7' | 'Color.Blue8' | 'Color.Blue9' | 'Color.Blue10'
  | 'Color.Cyan1' | 'Color.Cyan2' | 'Color.Cyan3' | 'Color.Cyan4' | 'Color.Cyan5' | 'Color.Cyan6' | 'Color.Cyan7' | 'Color.Cyan8' | 'Color.Cyan9' | 'Color.Cyan10'
  | 'Color.Danger'
  | 'Color.Danger1' | 'Color.Danger2' | 'Color.Danger3' | 'Color.Danger4' | 'Color.Danger5' | 'Color.Danger6' | 'Color.Danger7' | 'Color.Danger8' | 'Color.Danger9' | 'Color.Danger10'
  | 'Color.Gold1' | 'Color.Gold2' | 'Color.Gold3' | 'Color.Gold4' | 'Color.Gold5' | 'Color.Gold6' | 'Color.Gold7' | 'Color.Gold8' | 'Color.Gold9' | 'Color.Gold10'
  | 'Color.Green1' | 'Color.Green2' | 'Color.Green3' | 'Color.Green4' | 'Color.Green5' | 'Color.Green6' | 'Color.Green7' | 'Color.Green8' | 'Color.Green9' | 'Color.Green10'
  | 'Color.Grey1' | 'Color.Grey2' | 'Color.Grey3' | 'Color.Grey4' | 'Color.Grey5' | 'Color.Grey6' | 'Color.Grey7' | 'Color.Grey8' | 'Color.Grey9' | 'Color.Grey10'
  | 'Color.Info'
  | 'Color.Info1' | 'Color.Info2' | 'Color.Info3' | 'Color.Info4' | 'Color.Info5' | 'Color.Info6' | 'Color.Info7' | 'Color.Info8' | 'Color.Info9' | 'Color.Info10'
  | 'Color.Lime1' | 'Color.Lime2' | 'Color.Lime3' | 'Color.Lime4' | 'Color.Lime5' | 'Color.Lime6' | 'Color.Lime7' | 'Color.Lime8' | 'Color.Lime9' | 'Color.Lime10'
  | 'Color.Magenta1' | 'Color.Magenta2' | 'Color.Magenta3' | 'Color.Magenta4' | 'Color.Magenta5' | 'Color.Magenta6' | 'Color.Magenta7' | 'Color.Magenta8' | 'Color.Magenta9' | 'Color.Magenta10'
  | 'Color.Opaque'
  | 'Color.Orange1' | 'Color.Orange2' | 'Color.Orange3' | 'Color.Orange4' | 'Color.Orange5' | 'Color.Orange6' | 'Color.Orange7' | 'Color.Orange8' | 'Color.Orange9' | 'Color.Orange10'
  | 'Color.Primary'
  | 'Color.Primary1' | 'Color.Primary2' | 'Color.Primary3' | 'Color.Primary4' | 'Color.Primary5' | 'Color.Primary6' | 'Color.Primary7' | 'Color.Primary8' | 'Color.Primary9' | 'Color.Primary10'
  | 'Color.Purple1' | 'Color.Purple2' | 'Color.Purple3' | 'Color.Purple4' | 'Color.Purple5' | 'Color.Purple6' | 'Color.Purple7' | 'Color.Purple8' | 'Color.Purple9' | 'Color.Purple10'
  | 'Color.Red1' | 'Color.Red2' | 'Color.Red3' | 'Color.Red4' | 'Color.Red5' | 'Color.Red6' | 'Color.Red7' | 'Color.Red8' | 'Color.Red9' | 'Color.Red10'
  | 'Color.Secondary'
  | 'Color.Success'
  | 'Color.Success1' | 'Color.Success2' | 'Color.Success3' | 'Color.Success4' | 'Color.Success5' | 'Color.Success6' | 'Color.Success7' | 'Color.Success8' | 'Color.Success9' | 'Color.Success10'
  | 'Color.Volcano1' | 'Color.Volcano2' | 'Color.Volcano3' | 'Color.Volcano4' | 'Color.Volcano5' | 'Color.Volcano6' | 'Color.Volcano7' | 'Color.Volcano8' | 'Color.Volcano9' | 'Color.Volcano10'
  | 'Color.Warning'
  | 'Color.Warning1' | 'Color.Warning2' | 'Color.Warning3' | 'Color.Warning4' | 'Color.Warning5' | 'Color.Warning6' | 'Color.Warning7' | 'Color.Warning8' | 'Color.Warning9' | 'Color.Warning10'
  | 'Color.White'
  | 'Color.Yellow1' | 'Color.Yellow2' | 'Color.Yellow3' | 'Color.Yellow4' | 'Color.Yellow5' | 'Color.Yellow6' | 'Color.Yellow7' | 'Color.Yellow8' | 'Color.Yellow9' | 'Color.Yellow10';`}
          </CodeSnippet>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeColors;
