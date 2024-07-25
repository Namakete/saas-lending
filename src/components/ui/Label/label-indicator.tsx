type LabelIndecatorProps = {
  newToolsCount: number;
};

export const LabelIndecator = (props: LabelIndecatorProps) => {
  const { newToolsCount } = props;

  return (
    <label className="flex w-max flex-row items-center gap-2 rounded bg-gray-100 px-3 text-[14px]">
      <div className="circle-indecator" />
      <p className="text-[12px] text-gray-700">
        {newToolsCount} new tools added this week
      </p>
    </label>
  );
};
