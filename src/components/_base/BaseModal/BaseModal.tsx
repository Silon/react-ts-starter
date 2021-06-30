import React, { useRef, useState } from 'react';

import ReactDOM from 'react-dom';
import { TBaseModalProps } from './BaseModal.types';
import classNames from 'classnames';
import s from './BaseModal.module.scss';
import { useCallback } from 'react';
import { useEffect } from 'react';
import useOutsideClick from 'src/hooks/useOutsideClick';

export const BaseModal: React.FC<TBaseModalProps> = ({
  className,
  children,
  style = {},
  anchorEl,
  disablePortal,
  placement,
  offset = 0,
  open,
  keepMounted = false,
  onOutsideClick,
}) => {
  const portalElement = document.getElementById('app-root');
  const { transform: styleTransform, ...styleRest } = style;
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });

  if (!portalElement) {
    throw new Error('Cannot find #app-root element for React.portal');
  }

  const recalculatePosition = useCallback(() => {
    const modalElement = modalRef.current;

    if (!modalElement) return;

    const modalBr = modalElement?.getBoundingClientRect();
    let left = 0;
    let top = 0;

    if (!modalBr) return { left, top };

    if (placement === 'window-center') {
      left = window.innerWidth / 2 - modalBr.width / 2;
      top = window.innerHeight / 2 - modalBr.height / 2;
    }

    if (anchorEl) {
      const anchorBr = anchorEl.getBoundingClientRect();
      if (placement?.includes('bottom')) {
        top = anchorBr.top + anchorBr.height + offset;
      } else if (placement?.includes('right')) {
        left = anchorBr.left + anchorBr.width + offset;
      } else if (placement?.includes('left')) {
        left = anchorBr.left - modalBr.width - offset;
      } else if (placement?.includes('top')) {
        top = anchorBr.top - modalBr.height - offset;
      }

      if (placement?.includes('bottom') || placement?.includes('top')) {
        if (placement.includes('start')) {
          left = anchorBr.left - modalBr.width;
        } else if (placement.includes('end')) {
          left = anchorBr.left + anchorBr.width;
        } else {
          left = anchorBr.left + anchorBr.width / 2 - modalBr.width / 2;
        }
      }

      if (placement?.includes('left') || placement?.includes('right')) {
        if (placement.includes('start')) {
          top = anchorBr.top - modalBr.height;
        } else if (placement.includes('end')) {
          top = anchorBr.top + anchorBr.height;
        } else {
          top = anchorBr.top + anchorBr.height / 2 - modalBr.height / 2;
        }
      }
    }

    setPosition({
      left: Math.round(left),
      top: Math.round(top),
    });
  }, [anchorEl, offset, placement]);

  const modalRefCallback = useCallback(
    (node) => {
      modalRef.current = node;
      recalculatePosition();
    },
    [recalculatePosition],
  );

  useOutsideClick(modalRef, () => {
    if (onOutsideClick) onOutsideClick();
  });

  useEffect(() => {
    recalculatePosition();
    window.addEventListener('resize', recalculatePosition);
    return () => {
      window.removeEventListener('resize', recalculatePosition);
    };
  }, [recalculatePosition]);

  if (keepMounted && !open) {
    styleRest.visibility = 'hidden';
  } else {
    styleRest.visibility = undefined;
  }

  const modal = (
    <div
      ref={modalRefCallback}
      className={classNames(s.container, className)}
      style={{
        transform: `translate(${position.left}px, ${position.top}px)${
          styleTransform ? styleTransform : ''
        }`,
        ...styleRest,
      }}>
      {children}
    </div>
  );

  if (!open && !keepMounted) return null;

  if (disablePortal) return modal;

  return ReactDOM.createPortal(modal, portalElement);
};
