import { BaseModal } from 'src/components/_base/BaseModal';
import React from 'react';
import s from './Homepage.module.scss';
import { useState } from 'react';

export const Homepage: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Toggle Modal</button>
      <br />
      {modalIsOpen ? 'OPEN' : 'CLOSED'}
      <BaseModal placement="window-center" open={modalIsOpen} keepMounted>
        test window center
      </BaseModal>
    </div>
  );
};
