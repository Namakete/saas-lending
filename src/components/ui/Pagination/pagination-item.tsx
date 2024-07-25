import { cn } from '@shared/utils/cn';

type PaginationItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const PaginationItem = (props: PaginationItemProps) => {
  const { children, className } = props;

  return <li className={cn(`cursor-pointer`, className)}>{children}</li>;
};
