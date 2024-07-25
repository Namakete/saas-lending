import { Card } from '@component/ui/Card/card';

type ToolCardProps = {
  technologies: any;
};

export const ToolCard = (props: ToolCardProps) => {
  const { technologies } = props;

  return (
    <>
      {technologies.map((technology: any) => (
        <Card
          key={technology.id}
          name={technology.name}
          logo={'/placeholder.svg'}
          description={technology.description}
          category={technology.category}
          data={technology.date}
          rating={technology.rating}
        />
      ))}
    </>
  );
};
