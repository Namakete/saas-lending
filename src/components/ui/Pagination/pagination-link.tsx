import { cn } from '@/src/shared/utils/cn';

type PaginationLinkProps = {
  children: React.ReactNode;

  isActive: boolean;
  onClick?: () => void;
  className?: string;
};

export const PaginationLink = (props: PaginationLinkProps) => {
  const { children, isActive, onClick, className } = props;

  return (
    <a
      className={cn(
        `cursor-pointer rounded px-3 py-1.5 hover:bg-gray-200 hover:text-gray-500 ${isActive ? 'border hover:bg-gray-200' : ''}`,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
