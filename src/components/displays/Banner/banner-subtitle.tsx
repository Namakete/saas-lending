type BannerSubtitleProps = {
  subTitle: string;
};

export const BannerSubtitle = (props: BannerSubtitleProps) => {
  const { subTitle } = props;

  return (
    <p className="text-base tracking-tight text-gray-500 md:w-4/5">
      {subTitle}
    </p>
  );
};
