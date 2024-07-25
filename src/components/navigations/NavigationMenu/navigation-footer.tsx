'use client';

import { navigationItemsConfig } from '@/src/configurations/navigation-items';

import { InputWithButton } from '../../ui/Input';
import { NavigationMenu } from './navigation-menu';

export const NavigationFooter = () => {
  return (
    <footer className="flex flex-col justify-center border-t py-5">
      <div className="mb-4 mt-8 flex w-full flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 flex flex-col md:mb-0 md:w-3/5">
          <h1 className="text-xl font-bold">Newsletter</h1>
          <p className="text-sm text-gray-500 md:w-4/5">
            Get updates on new tools, alternatives, and other cool stuff
          </p>
        </div>
        <div className="w-full md:w-2/5">
          <InputWithButton
            type="mail"
            placeholder={'Subscribe to our newsletter'}
            buttonText={'Subscribe'}
          />
        </div>
      </div>
      <div className="mt-10 flex flex-row gap-4 text-gray-500">
        <p className="font-bold text-gray-800">Explore:</p>
        <NavigationMenu items={navigationItemsConfig.navigation} />
      </div>
    </footer>
  );
};
