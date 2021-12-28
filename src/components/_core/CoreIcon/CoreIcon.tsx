import { ICONS } from 'src/components/_icons/icons.map';
import React from 'react';
import { TCoreIconProps } from './CoreIcon.types';
import clsx from 'clsx';
import s from './CoreIcon.module.scss';

export const CoreIcon: React.FC<TCoreIconProps> = ({
  name,
  className = '',
  style = {},
  size,
  onClick,
}) => {
  const IconComponent = ICONS[name];

  if (!IconComponent) {
    throw new Error(`IconComponent (${name}) not found`);
  }

  return (
    <IconComponent
      className={clsx(s.icon, className)}
      style={{ ...style, maxWidth: size, maxHeight: size }}
      onClick={onClick}
    />
  );
};
