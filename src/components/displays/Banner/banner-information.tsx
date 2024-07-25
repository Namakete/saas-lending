'use client';

import { BannerSubtitle } from './banner-subtitle';
import { BannerTitle } from './banner-title';
import { InputWithButton } from '@component/ui/Input';
import { LabelIndecator } from '@component/ui/Label';

export const BannerInformation = () => {
  return (
    <section className="my-5 flex w-full flex-col gap-5">
      <LabelIndecator newToolsCount={5} />
      <BannerTitle
        title={'Discover Your Path to Success with Leading Solution'}
      />
      <BannerSubtitle
        subTitle={
          'Explore our curated directory of essental SaaS solutuions and startup development tools, designedto empower your business with innovatiove and efficient alternatives for daily operations'
        }
      />
      <InputWithButton
        type="mail"
        placeholder={'Subscribe to our newsletter'}
        buttonText={'Subscribe'}
      />
    </section>
  );
};
