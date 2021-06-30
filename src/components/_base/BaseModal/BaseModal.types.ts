export type TBaseModalProps = {
  className?: string;
  style?: React.CSSProperties;
  /**
   *  If true, the modal is open.
   */
  open: boolean;
  /**
   *  If placement is related type, modal will be sticked to this element
   */
  anchorEl?: HTMLElement;
  /**
   * 	Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   */
  disablePortal?: boolean;
  /**
   *  Distance from anchorEl
   */
  offset?: number;
  /**
   *  Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Modal.
   */
  keepMounted?: boolean;
  /**
   *  Position relative to anchorEl or window for values with 'window-*'
   */
  placement?:
    | 'window-center'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  /**
   * Callback fired on click or touch outside modal.
   */
  onOutsideClick?: () => void;
};
