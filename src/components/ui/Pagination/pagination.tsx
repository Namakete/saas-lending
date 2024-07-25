import { cn } from '@shared/utils/cn';

type PagginationProps = {
  children: React.ReactNode;
  className?: string;
};

export const Pagination = (props: PagginationProps) => {
  const { children, className } = props;
  return <nav className={cn(`flex justify-center`, className)}>{children}</nav>;
};
