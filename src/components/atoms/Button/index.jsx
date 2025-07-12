import React from 'react';
import clsx from 'clsx';

export default function Button({
  children,
  href,
  variant = 'secondary',
  className = '',
  type = 'button',
  ...rest
}) {
  const baseClasses = 'group relative';
  const variantClassName = clsx({
    'button hover:bg-transparent': variant === 'primary',
    'hidden md:inline-block': variant === 'secondary',
  });

  const underline = () => {
    if (variant === 'secondary') {
      return (
        <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
      );
    }
    if (variant === 'primary') {
      return (
        <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
      );
    }
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        className={clsx(baseClasses, variantClassName, className)}
        {...rest}
      >
        <span className="relative w-fit">
          {underline()}
          <span>{children}</span>
        </span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={clsx(baseClasses, variantClassName, className)}
      {...rest}
    >
      <span className="relative w-fit">
        {underline()}
        <span>{children}</span>
      </span>
    </button>
  );
};
