'use client';

import { Combobox } from '@component/ui/Combobox';
import { InputWithIcon } from '@component/ui/Input';
import { CiSearch } from 'react-icons/ci';
import { FaSort } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import { RiArrowDownSLine } from 'react-icons/ri';

type ToolFilterProps = {
  onSortChange: (option: string) => void;
};

export const ToolFilter = (props: ToolFilterProps) => {
  const { onSortChange } = props;

  const sortByOptions = ['a-z', 'z-a'];

  const handleSortByOptions = (option: string) => onSortChange(option);

  return (
    <div className="flex w-full flex-col items-center gap-2 md:flex-row">
      <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
        <Combobox
          icon={<FaSort />}
          options={sortByOptions}
          title={'Sort by'}
          onOptionSelect={handleSortByOptions}
        />

        <Combobox
          icon={<IoFilter />}
          options={sortByOptions}
          title={'Show filters'}
          onOptionSelect={handleSortByOptions}
        />

        <Combobox
          icon={<RiArrowDownSLine />}
          options={sortByOptions}
          title={'Items per page'}
          onOptionSelect={handleSortByOptions}
        />
      </div>
      <div className="w-full md:ml-auto md:w-auto">
        <InputWithIcon
          type={'text'}
          placeholder={'Search tools'}
          icon={<CiSearch className="text-gray-400" />}
          buttonText={'Search'}
        />
      </div>
    </div>
  );
};
