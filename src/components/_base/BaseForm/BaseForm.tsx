import React, { FormEvent } from 'react';

import { TBaseFormProps } from './BaseForm.types';
import classNames from 'classnames';
import s from './BaseForm.module.scss';

export const BaseForm: React.FC<TBaseFormProps> = ({
  children,
  className,
  style,
  id,
  onSubmit,
}) => {
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      const form = e.currentTarget;
      const formData = new FormData(form);
      onSubmit(formData);
    }
  };

  return (
    <form
      className={classNames(s.container, className)}
      style={style}
      onSubmit={onFormSubmit}
      id={id}>
      {children}
    </form>
  );
};
