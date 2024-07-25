'use client';

import { NavigationItemType } from '@shared/types/navigation-item.type';
import Link from 'next/link';
import React, { useCallback } from 'react';

type ItemType = string | NavigationItemType;

type DropdownProps = {
  items: string[] | NavigationItemType[];
  isOverlay?: boolean;
  onOptionSelect?: (option: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClickLink?: () => void;
};

export const Dropdown = (props: DropdownProps) => {
  const {
    items,
    isOverlay,
    onOptionSelect,
    onMouseEnter,
    onMouseLeave,
    onClickLink,
  } = props;

  const isNavigationItem = (item: ItemType): item is NavigationItemType => {
    return (item as NavigationItemType).title !== undefined;
  };

  const handleItemClick = useCallback(
    (item: ItemType) => {
      if (!isNavigationItem(item) && onOptionSelect) {
        onOptionSelect(item as string);
      }
    },
    [onOptionSelect],
  );

  return (
    <>
      {isOverlay && (
        <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-50"></div>
      )}
      <ul
        className={`absolute z-20 mt-2 w-full rounded border border-gray-300 bg-white shadow-lg ${isOverlay ? 'z-20' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className="cursor-pointer border-b border-gray-300 px-4 py-2 last:border-b-0 hover:bg-gray-200"
          >
            {isNavigationItem(item) ? (
              <Link
                href={item.href!}
                onClick={onClickLink}
                className="flex w-full"
              >
                {item.title}
              </Link>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
