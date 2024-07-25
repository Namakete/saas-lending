type CardProps = {
  name: string;
  logo: string;
  description: string;
  category?: string;
  data?: string;
  rating?: number;
};

export const Card = (props: CardProps) => {
  const { name, logo, description, category, data, rating } = props;

  return (
    <div className="card flex cursor-pointer flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-opacity hover:opacity-70">
      <div className="flex items-center">
        <div className="logo-container flex rounded border bg-white shadow">
          <img src={logo} alt={`${name} logo`} className="logo-image" />
        </div>
        <h3 className="ml-4 font-semibold text-gray-700">{name}</h3>
      </div>
      <p className="line-clamp-3 text-sm text-gray-500">{description}</p>
      <div className="divider mt-2 h-px bg-gray-200"></div>
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-center">
          <p className="text-sm text-gray-500">Category</p>
          <div className="my-2 flex-grow border border-gray-200"></div>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-500">Added</p>
          <div className="my-2 flex-grow border border-gray-200"></div>
          <p className="text-sm text-gray-500">{data}</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-500">Rating</p>
          <div className="my-2 flex-grow border border-gray-200"></div>
          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-500">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
