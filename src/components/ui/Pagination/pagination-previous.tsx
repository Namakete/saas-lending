import { cn } from '@shared/utils/cn';

type PaginationPreviousProps = {
  className?: string;
  onClick?: () => void;
};
export const PaginationPrevious = (props: PaginationPreviousProps) => {
  const { onClick, className } = props;

  return (
    <a
      onClick={onClick}
      className={cn(
        `cursor-pointe rounded px-3 py-1 hover:bg-gray-200`,
        className,
      )}
    >
      previous
    </a>
  );
};
