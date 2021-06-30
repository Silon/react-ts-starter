export type TBaseFormProps = {
  className?: string;
  style?: React.CSSProperties;

  /**
   * Form id
   */
  id?: string;
  /**
   * Callback triggered when form is submited
   */
  onSubmit?: (data: FormData) => void;
};
