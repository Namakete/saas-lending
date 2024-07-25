import React from 'react';

type CombineClassesType = (string | boolean | undefined)[];

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const combineClasses = (...classes: CombineClassesType): string =>
      classes.filter(Boolean).join(' ');

    const defaultClasses =
      'flex w-full rounded px-3 py-1 text-sm border border-gray-200 bg-transparent';

    const classes = combineClasses(defaultClasses, props.className);

    return <input {...props} ref={ref} className={classes} />;
  },
);
