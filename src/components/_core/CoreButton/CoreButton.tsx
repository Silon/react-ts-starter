import { TCoreButtonProps } from './CoreButton.types';
import React from 'react';
import s from './CoreButton.module.scss';

export const CoreButton: React.FC<TCoreButtonProps> = () => {
  return (
    <div className={s.container}>CoreButton</div>
  )
};
