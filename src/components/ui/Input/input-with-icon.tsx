import { Button } from '../Button/button';
import { Input } from './input';

type InputWithIconProps = {
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  buttonText: string;
};

export const InputWithIcon = (props: InputWithIconProps) => {
  const { type, placeholder, icon, buttonText } = props;

  return (
    <div className="flex w-full items-center space-x-2">
      <div className="relative flex-grow">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
        <Input
          type={type}
          placeholder={placeholder}
          className="ml-auto w-full pl-10"
        />
      </div>
      <Button intent={'primary'} size={'small'}>
        {buttonText}
      </Button>
    </div>
  );
};
