import { TIconsNames } from 'src/components/_icons/icons.types';

export type TCoreIconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.SVGProps<SVGSVGElement>['onClick'];

  size: number;
  name: TIconsNames;
};
