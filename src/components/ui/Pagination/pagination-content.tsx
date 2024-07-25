import { cn } from '@shared/utils/cn';

type PaginationContentProps = {
  children: React.ReactNode;
  className?: string;
};
export const PaginationContent = (props: PaginationContentProps) => {
  const { children, className } = props;

  return <ul className={cn(`list-noner flex`, className)}>{children}</ul>;
};
