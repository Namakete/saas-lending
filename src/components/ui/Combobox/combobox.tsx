'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Dropdown } from '../Dropdown';

type ComboboxProps = {
  icon?: React.ReactNode;
  options: string[];
  title: string;
  onOptionSelect: (option: string) => void;
};

export const Combobox = (props: ComboboxProps) => {
  const { icon, options, title, onOptionSelect } = props;

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const handleOptionSelect = (option: string) => {
    setDropdownVisible(false);
    onOptionSelect(option);
  };

  const handleMouseEnter = () => {
    if (options && options.length > 0) {
      setDropdownVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button intent={'primary'} size={'small'} className="gap-2" onClick={toggleDropdown}>
        {icon}
        {title}
      </Button>
      <AnimatePresence>
        {isDropdownVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className=""
          >
            <Dropdown
              items={options}
              onOptionSelect={handleOptionSelect}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
