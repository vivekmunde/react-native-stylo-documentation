import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import StyloThemeNavigation from '../components/stylo-theme-navigation';
import { borderColor, fontColor } from '../constants/stylo-theme-colors';

const StyloThemeVariables: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Variables | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Variables</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <Paragraph>
              Ref: <Link href="/stylo-theme-colors#type-definition">TColor</Link>
            </Paragraph>
            <CodeSnippet>
              {`type TVariable = 
  | TColor
  | 'Body.Color'
  | 'Font.Color'
  | 'Font.Size'
  | 'Font.Size.Small'
  | 'Font.Size.Large'
  | 'Font.Weight'
  | 'Font.Weight.Bold'
  | 'Border.Color'
  | 'Border.Width'
  | 'Border.Radius'
  | 'Border.Radius.Small'
  | 'Border.Radius.Large'
  | 'Margin'
  | 'Margin.Mini'
  | 'Margin.Small'
  | 'Margin.Large'
  | 'Padding'
  | 'Padding.Mini'
  | 'Padding.Small'
  | 'Padding.Large'
  | 'Avatar.Size'
  | 'Avatar.Size.Small'
  | 'Avatar.Size.Large';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="values" level={5}>
              Values
            </SectionHeading>
            <Paragraph>
              Ref: <Link href="/stylo-theme-colors">Colors</Link>
            </Paragraph>
            <CodeSnippet>
              {`const Colors = 
  'Color.Alpha1': 'rgba(255,255,255,0.1)',
  'Color.Alpha2': 'rgba(255,255,255,0.2)',
  'Color.Alpha3': 'rgba(255,255,255,0.3)',
  'Color.Alpha4': 'rgba(255,255,255,0.4)',
  'Color.Alpha5': 'rgba(255,255,255,0.5)',
  'Color.Alpha6': 'rgba(255,255,255,0.6)',
  'Color.Alpha7': 'rgba(255,255,255,0.7)',
  'Color.Alpha8': 'rgba(255,255,255,0.8)',
  'Color.Alpha9': 'rgba(255,255,255,0.9)',
  'Color.Alpha10': 'rgba(255,255,255,1)',
  'Color.AlphaInverted1': 'rgba(0,0,0,0.1)',
  'Color.AlphaInverted2': 'rgba(0,0,0,0.2)',
  'Color.AlphaInverted3': 'rgba(0,0,0,0.3)',
  'Color.AlphaInverted4': 'rgba(0,0,0,0.4)',
  'Color.AlphaInverted5': 'rgba(0,0,0,0.5)',
  'Color.AlphaInverted6': 'rgba(0,0,0,0.6)',
  'Color.AlphaInverted7': 'rgba(0,0,0,0.7)',
  'Color.AlphaInverted8': 'rgba(0,0,0,0.8)',
  'Color.AlphaInverted9': 'rgba(0,0,0,0.9)',
  'Color.AlphaInverted10': 'rgba(0,0,0,1)',
  'Color.Blue1': '#e6f7ff',
  'Color.Blue2': '#bae7ff',
  'Color.Blue3': '#91d5ff',
  'Color.Blue4': '#69c0ff',
  'Color.Blue5': '#40a9ff',
  'Color.Blue6': '#1890ff',
  'Color.Blue7': '#096dd9',
  'Color.Blue8': '#0050b3',
  'Color.Blue9': '#003a8c',
  'Color.Blue10': '#002766',
  'Color.Body': '#ffffff',
  'Color.Border': '#f0f0f0',
  'Color.Cyan1': '#e6fffb',
  'Color.Cyan2': '#b5f5ec',
  'Color.Cyan3': '#87e8de',
  'Color.Cyan4': '#5cdbd3',
  'Color.Cyan5': '#36cfc9',
  'Color.Cyan6': '#13c2c2',
  'Color.Cyan7': '#08979c',
  'Color.Cyan8': '#006d75',
  'Color.Cyan9': '#00474f',
  'Color.Cyan10': '#002329',
  'Color.Danger': '#ff4d4f',
  'Color.Danger1': '#fff1f0',
  'Color.Danger2': '#ffccc7',
  'Color.Danger3': '#ffa39e',
  'Color.Danger4': '#ff7875',
  'Color.Danger5': '#ff4d4f',
  'Color.Danger6': '#f5222d',
  'Color.Danger7': '#cf1322',
  'Color.Danger8': '#a8071a',
  'Color.Danger9': '#820014',
  'Color.Danger10': '#5c0011',
  'Color.Font': '#434343',
  'Color.Gold1': '#fffbe6',
  'Color.Gold2': '#fff1b8',
  'Color.Gold3': '#ffe58f',
  'Color.Gold4': '#ffd666',
  'Color.Gold5': '#ffc53d',
  'Color.Gold6': '#faad14',
  'Color.Gold7': '#d48806',
  'Color.Gold8': '#ad6800',
  'Color.Gold9': '#874d00',
  'Color.Gold10': '#613400',
  'Color.Green1': '#f6ffed',
  'Color.Green2': '#d9f7be',
  'Color.Green3': '#b7eb8f',
  'Color.Green4': '#95de64',
  'Color.Green5': '#73d13d',
  'Color.Green6': '#52c41a',
  'Color.Green7': '#389e0d',
  'Color.Green8': '#237804',
  'Color.Green9': '#135200',
  'Color.Green10': '#092b00',
  'Color.Grey1': '#fafafa',
  'Color.Grey2': '#f5f5f5',
  'Color.Grey3': '#f0f0f0',
  'Color.Grey4': '#e0e0e0',
  'Color.Grey5': '#d9d9d9',
  'Color.Grey6': '#bfbfbf',
  'Color.Grey7': '#8c8c8c',
  'Color.Grey8': '#595959',
  'Color.Grey9': '#434343',
  'Color.Grey10': '#262626',
  'Color.Info': '#36cfc9',
  'Color.Info1': '#e6fffb',
  'Color.Info2': '#b5f5ec',
  'Color.Info3': '#87e8de',
  'Color.Info4': '#5cdbd3',
  'Color.Info5': '#36cfc9',
  'Color.Info6': '#13c2c2',
  'Color.Info7': '#08979c',
  'Color.Info8': '#006d75',
  'Color.Info9': '#00474f',
  'Color.Info10': '#002329',
  'Color.Lime1': '#fcffe6',
  'Color.Lime2': '#f4ffb8',
  'Color.Lime3': '#eaff8f',
  'Color.Lime4': '#d3f261',
  'Color.Lime5': '#bae637',
  'Color.Lime6': '#a0d911',
  'Color.Lime7': '#7cb305',
  'Color.Lime8': '#5b8c00',
  'Color.Lime9': '#3f6600',
  'Color.Lime10': '#254000',
  'Color.Magenta1': '#fff0f6',
  'Color.Magenta2': '#ffd6e7',
  'Color.Magenta3': '#ffadd2',
  'Color.Magenta4': '#ff85c0',
  'Color.Magenta5': '#f759ab',
  'Color.Magenta6': '#eb2f96',
  'Color.Magenta7': '#c41d7f',
  'Color.Magenta8': '#9e1068',
  'Color.Magenta9': '#780650',
  'Color.Magenta10': '#520339',
  'Color.Orange1': '#fff7e6',
  'Color.Orange2': '#ffe7ba',
  'Color.Orange3': '#ffd591',
  'Color.Orange4': '#ffc069',
  'Color.Orange5': '#ffa940',
  'Color.Orange6': '#fa8c16',
  'Color.Orange7': '#d46b08',
  'Color.Orange8': '#ad4e00',
  'Color.Orange9': '#873800',
  'Color.Orange10': '#612500',
  'Color.Primary': '#EC4899',
  'Color.Primary1': '#FFF0F5',
  'Color.Primary2': '#FFC9DF',
  'Color.Primary3': '#FFA1CA',
  'Color.Primary4': '#FA75B3',
  'Color.Primary5': '#EC4899',
  'Color.Primary6': '#C73482',
  'Color.Primary7': '#A1226A',
  'Color.Primary8': '#7A1451',
  'Color.Primary9': '#540D3A',
  'Color.Primary10': '#2E0520',
  'Color.Purple1': '#f9f0ff',
  'Color.Purple2': '#efdbff',
  'Color.Purple3': '#d3adf7',
  'Color.Purple4': '#b37feb',
  'Color.Purple5': '#9254de',
  'Color.Purple6': '#722ed1',
  'Color.Purple7': '#531dab',
  'Color.Purple8': '#391085',
  'Color.Purple9': '#22075e',
  'Color.Purple10': '#120338',
  'Color.Red1': '#fff1f0',
  'Color.Red2': '#ffccc7',
  'Color.Red3': '#ffa39e',
  'Color.Red4': '#ff7875',
  'Color.Red5': '#ff4d4f',
  'Color.Red6': '#f5222d',
  'Color.Red7': '#cf1322',
  'Color.Red8': '#a8071a',
  'Color.Red9': '#820014',
  'Color.Red10': '#5c0011',
  'Color.Secondary': '#8c8c8c',
  'Color.Success': '#73d13d',
  'Color.Success1': '#f6ffed',
  'Color.Success2': '#d9f7be',
  'Color.Success3': '#b7eb8f',
  'Color.Success4': '#95de64',
  'Color.Success5': '#73d13d',
  'Color.Success6': '#52c41a',
  'Color.Success7': '#389e0d',
  'Color.Success8': '#237804',
  'Color.Success9': '#135200',
  'Color.Success10': '#092b00',
  'Color.Volcano1': '#fff2e8',
  'Color.Volcano2': '#ffd8bf',
  'Color.Volcano3': '#ffbb96',
  'Color.Volcano4': '#ff9c6e',
  'Color.Volcano5': '#ff7a45',
  'Color.Volcano6': '#fa541c',
  'Color.Volcano7': '#d4380d',
  'Color.Volcano8': '#ad2102',
  'Color.Volcano9': '#871400',
  'Color.Volcano10': '#610b00',
  'Color.Warning': '#fa8c16',
  'Color.Warning1': '#fff7e6',
  'Color.Warning2': '#ffe7ba',
  'Color.Warning3': '#ffd591',
  'Color.Warning4': '#ffc069',
  'Color.Warning5': '#ffa940',
  'Color.Warning6': '#fa8c16',
  'Color.Warning7': '#d46b08',
  'Color.Warning8': '#ad4e00',
  'Color.Warning9': '#873800',
  'Color.Warning10': '#612500',
  'Color.White': '#ffffff',
  'Color.Yellow1': '#feffe6',
  'Color.Yellow2': '#ffffb8',
  'Color.Yellow3': '#fffb8f',
  'Color.Yellow4': '#fff566',
  'Color.Yellow5': '#ffec3d',
  'Color.Yellow6': '#fadb14',
  'Color.Yellow7': '#d4b106',
  'Color.Yellow8': '#ad8b00',
  'Color.Yellow9': '#876800',
  'Color.Yellow10': '#614700',
};`}
            </CodeSnippet>
            <CodeSnippet>
              {`const Variables = 
  ...Colors,
  'Body.Color': '#FFFFFF',
  'Font.Color': '${fontColor.toUpperCase()}',
  'Font.Size': 16,
  'Font.Size.Small': 12,
  'Font.Size.Large': 20,
  'Font.Weight': '400',
  'Font.Weight.Bold': '700',
  'Border.Color': '${borderColor.toUpperCase()}',
  'Border.Width': 1,
  'Border.Radius': 4,
  'Border.Radius.Small': 8,
  'Border.Radius.Large': 12,
  Margin: 12,
  'Margin.Mini': 4,
  'Margin.Small': 8,
  'Margin.Large': 24,
  Padding: 12,
  'Padding.Mini': 4,
  'Padding.Small': 8,
  'Padding.Large': 24,
  'Avatar.Size': 40,
  'Avatar.Size.Small': 24,
  'Avatar.Size.Large': 64,
};`}
            </CodeSnippet>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default StyloThemeVariables;
