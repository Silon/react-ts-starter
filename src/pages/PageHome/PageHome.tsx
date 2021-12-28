import { CoreIcon } from 'src/components/_core/CoreIcon';
import React from 'react';
import { TPageHomeProps } from './PageHome.types';
import s from './PageHome.module.scss';

export const PageHome: React.FC<TPageHomeProps> = () => {
  return (
    <div className={s.container}>
      Home
      <br />
      <CoreIcon name="icon-arrow" size={20} />
    </div>
  );
};
