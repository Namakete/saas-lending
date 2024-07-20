import Link from 'next/link'
import { NavigationItemType } from '@/src/shared/types/navigation-item.type'

interface NavigationMenuProps {
  items?: NavigationItemType[]
}

export const NavigationMenu = (props: NavigationMenuProps) => {
  const { items } = props

  return (
    <>
      {items?.length ? (
        <nav>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link key={index} href={item.href}>
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </>
  )
}
