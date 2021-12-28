import { TCoreIconProps } from './CoreIcon.types';
import React from 'react';
import s from './CoreIcon.module.scss';

export const CoreIcon: React.FC<TCoreIconProps> = () => {
  return (
    <div className={s.container}>CoreIcon</div>
  )
};
