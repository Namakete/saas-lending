type BannerTitleProps = {
  title: string;
};

export const BannerTitle = (props: BannerTitleProps) => {
  const { title } = props;

  return (
    <h1 className="bg-gradient-to-b from-black to-gray-500 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:w-4/5 md:text-5xl">
      {title}
    </h1>
  );
};
