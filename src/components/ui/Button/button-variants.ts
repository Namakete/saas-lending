import { type VariantProps, cva } from 'class-variance-authority';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 text-base',
  ],
  {
    variants: {
      intent: {
        primary: [
          'border',
          'border-gray-300',
          'bg-white',
          'text-gray-800',
          'hover:bg-gray-100',
        ],
        secondary: [
          'border',
          'border-gray-300',
          'bg-black',
          'text-white',
          'hover:bg-gray-800',
        ],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
        large: ['text-lg', 'py-3', 'px-6'],
        icon: ['h-9', 'w-9'],
      },
    },
    compoundVariants: [
      {
        intent: 'primary',
        size: 'medium',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
);
