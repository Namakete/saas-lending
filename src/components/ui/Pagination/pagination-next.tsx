import { cn } from '@shared/utils/cn';

type PagginationNextProps = {
  className?: string;
  onClick?: () => void;
};

export const PaginationNext = (props: PagginationNextProps) => {
  const { className, onClick } = props;
  return (
    <a
      onClick={onClick}
      className={cn(
        `cursor-pointe rounded px-3 py-1 hover:bg-gray-200`,
        className,
      )}
    >
      next
    </a>
  );
};
