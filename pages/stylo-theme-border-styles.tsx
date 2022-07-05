import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import CodeSnippet from '../components/code-snippet';
import InlineCode from '../components/inline-code';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeading from '../components/section-heading';
import BorderShowCase from '../components/showcase/border-showcase';
import StyloThemeNavigation from '../components/stylo-theme-navigation';

const StyloThemeBorder: React.FC = () => (
  <Layout
    renderNavigation={() => (
      <StyloThemeNavigation />
    )}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Border | Stylo theme | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Border</ArticleHeading>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="type-definition" level={5}>
              Type definition
            </SectionHeading>
            <Paragraph>
              Ref:
              {' '}
              <Link href="/stylo-theme-colors">Colors</Link>
              {' '}
              for <InlineCode>Border.Color.[Color]</InlineCode>
            </Paragraph>
            <CodeSnippet>
              {`type TBorderColorStyle = 
  | 'Border.Color.Blue1'
  | 'Border.Color.Blue2'
  | 'Border.Color.Blue3'
  | 'Border.Color.Blue4'
  | 'Border.Color.Blue5'
  | 'Border.Color.Blue6'
  | 'Border.Color.Blue7'
  | 'Border.Color.Blue8'
  | 'Border.Color.Blue9'
  | 'Border.Color.Blue10'
  | 'Border.Color.Cyan1'
  | 'Border.Color.Cyan2'
  | 'Border.Color.Cyan3'
  | 'Border.Color.Cyan4'
  | 'Border.Color.Cyan5'
  | 'Border.Color.Cyan6'
  | 'Border.Color.Cyan7'
  | 'Border.Color.Cyan8'
  | 'Border.Color.Cyan9'
  | 'Border.Color.Cyan10'
  | 'Border.Color.Danger'
  | 'Border.Color.Danger1'
  | 'Border.Color.Danger2'
  | 'Border.Color.Danger3'
  | 'Border.Color.Danger4'
  | 'Border.Color.Danger5'
  | 'Border.Color.Danger6'
  | 'Border.Color.Danger7'
  | 'Border.Color.Danger8'
  | 'Border.Color.Danger9'
  | 'Border.Color.Danger10'
  | 'Border.Color.Gold1'
  | 'Border.Color.Gold2'
  | 'Border.Color.Gold3'
  | 'Border.Color.Gold4'
  | 'Border.Color.Gold5'
  | 'Border.Color.Gold6'
  | 'Border.Color.Gold7'
  | 'Border.Color.Gold8'
  | 'Border.Color.Gold9'
  | 'Border.Color.Gold10'
  | 'Border.Color.Green1'
  | 'Border.Color.Green2'
  | 'Border.Color.Green3'
  | 'Border.Color.Green4'
  | 'Border.Color.Green5'
  | 'Border.Color.Green6'
  | 'Border.Color.Green7'
  | 'Border.Color.Green8'
  | 'Border.Color.Green9'
  | 'Border.Color.Green10'
  | 'Border.Color.Grey1'
  | 'Border.Color.Grey2'
  | 'Border.Color.Grey3'
  | 'Border.Color.Grey4'
  | 'Border.Color.Grey5'
  | 'Border.Color.Grey6'
  | 'Border.Color.Grey7'
  | 'Border.Color.Grey8'
  | 'Border.Color.Grey9'
  | 'Border.Color.Grey10'
  | 'Border.Color.Info'
  | 'Border.Color.Info1'
  | 'Border.Color.Info2'
  | 'Border.Color.Info3'
  | 'Border.Color.Info4'
  | 'Border.Color.Info5'
  | 'Border.Color.Info6'
  | 'Border.Color.Info7'
  | 'Border.Color.Info8'
  | 'Border.Color.Info9'
  | 'Border.Color.Info10'
  | 'Border.Color.Lime1'
  | 'Border.Color.Lime2'
  | 'Border.Color.Lime3'
  | 'Border.Color.Lime4'
  | 'Border.Color.Lime5'
  | 'Border.Color.Lime6'
  | 'Border.Color.Lime7'
  | 'Border.Color.Lime8'
  | 'Border.Color.Lime9'
  | 'Border.Color.Lime10'
  | 'Border.Color.Magenta1'
  | 'Border.Color.Magenta2'
  | 'Border.Color.Magenta3'
  | 'Border.Color.Magenta4'
  | 'Border.Color.Magenta5'
  | 'Border.Color.Magenta6'
  | 'Border.Color.Magenta7'
  | 'Border.Color.Magenta8'
  | 'Border.Color.Magenta9'
  | 'Border.Color.Magenta10'
  | 'Border.Color.Orange1'
  | 'Border.Color.Orange2'
  | 'Border.Color.Orange3'
  | 'Border.Color.Orange4'
  | 'Border.Color.Orange5'
  | 'Border.Color.Orange6'
  | 'Border.Color.Orange7'
  | 'Border.Color.Orange8'
  | 'Border.Color.Orange9'
  | 'Border.Color.Orange10'
  | 'Border.Color.Primary'
  | 'Border.Color.Primary1'
  | 'Border.Color.Primary2'
  | 'Border.Color.Primary3'
  | 'Border.Color.Primary4'
  | 'Border.Color.Primary5'
  | 'Border.Color.Primary6'
  | 'Border.Color.Primary7'
  | 'Border.Color.Primary8'
  | 'Border.Color.Primary9'
  | 'Border.Color.Primary10'
  | 'Border.Color.Purple1'
  | 'Border.Color.Purple2'
  | 'Border.Color.Purple3'
  | 'Border.Color.Purple4'
  | 'Border.Color.Purple5'
  | 'Border.Color.Purple6'
  | 'Border.Color.Purple7'
  | 'Border.Color.Purple8'
  | 'Border.Color.Purple9'
  | 'Border.Color.Purple10'
  | 'Border.Color.Red1'
  | 'Border.Color.Red2'
  | 'Border.Color.Red3'
  | 'Border.Color.Red4'
  | 'Border.Color.Red5'
  | 'Border.Color.Red6'
  | 'Border.Color.Red7'
  | 'Border.Color.Red8'
  | 'Border.Color.Red9'
  | 'Border.Color.Red10'
  | 'Border.Color.Secondary'
  | 'Border.Color.Success'
  | 'Border.Color.Success1'
  | 'Border.Color.Success2'
  | 'Border.Color.Success3'
  | 'Border.Color.Success4'
  | 'Border.Color.Success5'
  | 'Border.Color.Success6'
  | 'Border.Color.Success7'
  | 'Border.Color.Success8'
  | 'Border.Color.Success9'
  | 'Border.Color.Success10'
  | 'Border.Color.Volcano1'
  | 'Border.Color.Volcano2'
  | 'Border.Color.Volcano3'
  | 'Border.Color.Volcano4'
  | 'Border.Color.Volcano5'
  | 'Border.Color.Volcano6'
  | 'Border.Color.Volcano7'
  | 'Border.Color.Volcano8'
  | 'Border.Color.Volcano9'
  | 'Border.Color.Volcano10'
  | 'Border.Color.Warning'
  | 'Border.Color.Warning1'
  | 'Border.Color.Warning2'
  | 'Border.Color.Warning3'
  | 'Border.Color.Warning4'
  | 'Border.Color.Warning5'
  | 'Border.Color.Warning6'
  | 'Border.Color.Warning7'
  | 'Border.Color.Warning8'
  | 'Border.Color.Warning9'
  | 'Border.Color.Warning10'
  | 'Border.Color.White'
  | 'Border.Color.Yellow1'
  | 'Border.Color.Yellow2'
  | 'Border.Color.Yellow3'
  | 'Border.Color.Yellow4'
  | 'Border.Color.Yellow5'
  | 'Border.Color.Yellow6'
  | 'Border.Color.Yellow7'
  | 'Border.Color.Yellow8'
  | 'Border.Color.Yellow9'
  | 'Border.Color.Yellow10';`}
            </CodeSnippet>

            <CodeSnippet>
              {`type TBorderStyle =
  | TBorderColorStyle
  | 'Border'
  | 'Border.Style.Solid'
  | 'Border.Style.Dotted'
  | 'Border.Style.Dashed'
  | 'Border.Top'
  | 'Border.Right'
  | 'Border.Bottom'
  | 'Border.Left'
  | 'Border.Radius'
  | 'Border.Radius.Small'
  | 'Border.Radius.Large'
  | 'Border.Radius.TopLeft'
  | 'Border.Radius.TopRight'
  | 'Border.Radius.BottomLeft'
  | 'Border.Radius.BottomRight'
  | 'Border.Radius.TopLeft.Small'
  | 'Border.Radius.TopRight.Small'
  | 'Border.Radius.BottomLeft.Small'
  | 'Border.Radius.BottomRight.Small'
  | 'Border.Radius.TopLeft.Large'
  | 'Border.Radius.TopRight.Large'
  | 'Border.Radius.BottomLeft.Large'
  | 'Border.Radius.BottomRight.Large';`}
            </CodeSnippet>
          </section>

          <section className="no-vertical-margin-collapse">
            <SectionHeading id="usage" level={5}>
              Usage
            </SectionHeading>
            <BorderShowCase />
          </section>
        </article>
      </React.Fragment >
    )}
  />
);

export default StyloThemeBorder;
