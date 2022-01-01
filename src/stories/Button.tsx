import React, { VFC } from 'react';
import './button.css';

type ButtonProps = {
  label: string;
  primary: boolean;
  backgroundColor: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
};

/**
 * Primary UI component for user interaction
 */
export const Button: VFC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {label}
    </button>
  );
};
