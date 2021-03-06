import Head from 'next/head';
import React from 'react';

import ArticleHeading from '../components/article-heading';
import ExternalLink from '../components/external-link';
import Layout from '../components/layout';
import MainNavigation from '../components/main-navigation';

const ImageShowcase: React.FC<{
  imageUrl: string;
  imageAlt: string;
}> = ({ imageUrl, imageAlt }) => (
  <img
    alt={imageAlt}
    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/${imageUrl}`}
    className="rounded-2xl border-4 border-gray-600"
    style={{ maxHeight: '90vh' }} />
);

const BuiltUsingStylo: React.FC = () => (
  <Layout
    renderNavigation={() => <MainNavigation />}
    renderContent={() => (
      <React.Fragment>
        <Head>
          <title>Built using Stylo | React Native Stylo</title>
        </Head>
        <article>
          <ArticleHeading>Built using Stylo &amp; its theme</ArticleHeading>

          <section className="pt-[1px] pb-[1px] mb-12">
            <div className="grid gird-cols-1 lg:grid-cols-2">
              <h3 className="font-light text-center md:text-left">Zaycare Admin</h3>
              <div className="flex flex-row justify-center lg:justify-end items-center mb-4 lg:mt-4 lg:mb-0">
                <ExternalLink href="https://apps.apple.com/sr/app/zaycare/id1558651732">
                  <img
                    className="mr-1 bus-store-image"
                    alt="App Store"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/app-store.png`} />
                </ExternalLink>
                <ExternalLink href="https://play.google.com/store/apps/details?id=zay.works.zaycare">
                  <img
                    className="bus-store-image"
                    alt="Play Store"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/play-store.png`} />
                </ExternalLink>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-home-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-children-attendance-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-children-attendance-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-children-attendance-3.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-children-attendance-4.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-children-attendance-5.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-children-attendance-6.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-teachers-attendance-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-feed-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-feed-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-feed-3.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-feed-4.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-feed-5.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-menu-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-children-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-child-profile-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-child-profile-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-child-parents-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-child-contract-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-child-schedule-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/admin-child-schedule-2.png" />
            </div>
          </section>

          <section className="pt-[1px] pb-[1px] mb-12">
            <div className="grid gird-cols-1 lg:grid-cols-2">
              <h3 className="font-light text-center md:text-left">Zaycare Parent</h3>
              <div className="flex flex-row justify-center lg:justify-end items-center mb-4 lg:mt-4 lg:mb-0">
                <ExternalLink href="https://apps.apple.com/sr/app/zaycare-parent/id1566116225">
                  <img
                    className="mr-1 bus-store-image"
                    alt="App Store"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/app-store.png`} />
                </ExternalLink>
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.zaycare.parent">
                  <img
                    className="bus-store-image"
                    alt="Play Store"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/play-store.png`} />
                </ExternalLink>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-home-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-home-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-home-3.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-child-profile-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-child-profile-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-feed-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-feed-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-child-invoices-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-child-schedule-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-child-contract-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-book-day-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-book-day-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-book-day-3.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-book-day-4.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-book-day-5.png" />
              <ImageShowcase imageAlt="Home" imageUrl="built-using-stylo/parent-food-menu-1.png" />
            </div>
          </section>
        </article>
      </React.Fragment>
    )}
  />
);

export default BuiltUsingStylo;
