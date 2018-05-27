export enum Sizes {
  small = 'small',
  regular = 'regular',
  big = 'big',
}

export enum Types {
  primary = 'primary',
  secondary = 'secondary',
  default = 'tertiary',
  negative = 'negative',
  deal = 'deal',
}

export const test = {
  hello: 'hello',
};

export type Props = {
  size: 'small' | 'regular' | 'big';
  type: 'primary' | 'secondary' | 'default' | 'negative' | 'deal';
  children: any;
};
