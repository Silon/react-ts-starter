import { TIconsNames } from 'src/components/_base/_icons/icons.types';

export type TBaseIconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.SVGProps<SVGSVGElement>['onClick'];

  size: number;
  name: TIconsNames;
};
