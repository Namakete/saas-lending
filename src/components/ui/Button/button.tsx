import React from 'react';
import { ComponentPropsWithoutRef } from 'react';

import { type ButtonVariants, buttonVariants } from './button-variants';

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, intent, size, className, ...rest } = props;

    const buttonClass = buttonVariants({ intent, size, className });

    return (
      <button {...rest} className={buttonClass} ref={ref}>
        {children}
      </button>
    );
  },
);
