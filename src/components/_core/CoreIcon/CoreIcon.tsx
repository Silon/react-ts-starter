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
  console.log({ IconComponent });

  return (
    <IconComponent
      className={clsx(s.icon, className)}
      style={{ ...style, width: size, height: size }}
      onClick={onClick}
    />
  );
};
