import { TPageHomeProps } from './PageHome.types';
import React from 'react';
import s from './PageHome.module.scss';

export const PageHome: React.FC<TPageHomeProps> = () => {
  return (
    <div className={s.container}>PageHome</div>
  )
};
