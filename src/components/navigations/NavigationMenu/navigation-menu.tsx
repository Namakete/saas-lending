'use client';

import { NavigationItemType } from '@/src/shared/types/navigation-item.type';
import { cn } from '@shared/utils/cn';
import Link from 'next/link';

type NavigationMenuProps = {
  items?: NavigationItemType[];
  className?: string;
};

export const NavigationMenu = (props: NavigationMenuProps) => {
  const { items, className } = props;

  return (
    <nav className={cn('flex flex-row gap-4', className)}>
      {items?.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(item.disabled && 'cursor-not-allowed opacity-80')}
          >
            {item.title}
          </Link>
        ) : null,
      )}
    </nav>
  );
};
