'use client';

import { Button } from '@component/ui/Button';
import { Dropdown } from '@component/ui/Dropdown';
import { navigationItemsConfig } from '@source/configurations/navigation-items';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiTwotoneFolderOpen } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';

import { NavigationMenu } from './navigation-menu';

export const NavigationHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <header className="top-0 z-40 w-full text-sm">
      <div className="flex h-24 w-full items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-3 transition-all hover:opacity-70">
            <AiTwotoneFolderOpen className="text-sm" />
            <p className="font-medium tracking-tighter text-black">
              {navigationItemsConfig.title}
            </p>
          </div>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <NavigationMenu
            items={navigationItemsConfig.navigation}
            className="hidden md:flex"
          />
          <Button
            intent={'primary'}
            size={'small'}
            className="hidden gap-2 md:flex"
          >
            <GoPlus />
            <span>Submit</span>
          </Button>
          <Button onClick={toggleDropdown} size={'small'} className="md:hidden">
            <AiOutlineMenu className="text-2xl" />
          </Button>
        </div>
      </div>
      {isDropdownOpen && (
        <Dropdown
          items={navigationItemsConfig.navigation}
          onClickLink={toggleDropdown}
          isOverlay={true}
        />
      )}
    </header>
  );
};
