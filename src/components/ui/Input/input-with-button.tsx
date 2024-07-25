import { Button } from '../Button/button';
import { Input } from './input';

type InputWithButtonProps = {
  type: string;
  placeholder: string;
  buttonText: string;
};

export const InputWithButton = (props: InputWithButtonProps) => {
  const { type, placeholder, buttonText } = props;

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type={type} placeholder={placeholder} />
      <Button intent={'secondary'} size={'small'}>
        {buttonText}
      </Button>
    </div>
  );
};
