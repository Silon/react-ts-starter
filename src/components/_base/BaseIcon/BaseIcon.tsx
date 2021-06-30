import { ICONS_MAP } from 'src/components/_base/_icons/icons.map';
import React from 'react';
import { TBaseIconProps } from './BaseIcon.types';
import classnames from 'classnames';
import s from './BaseIcon.module.scss';

export const BaseIcon: React.FC<TBaseIconProps> = React.memo(function BaseIcon({
  name,
  className = '',
  style = {},
  size,
  onClick,
}) {
  const IconComponent = ICONS_MAP[name];

  return (
    <IconComponent
      className={classnames(s.icon, className)}
      style={{ ...style, width: size, height: size }}
      onClick={onClick}
    />
  );
});
