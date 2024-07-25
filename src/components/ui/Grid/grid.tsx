type GridProps = {
  children: React.ReactNode;
};

export const Grid = (props: GridProps) => {
  const { children } = props;

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
      {children}
    </div>
  );
};
