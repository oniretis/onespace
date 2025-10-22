import { forwardRef, ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

export type LabelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LabelWeight = 'regular' | 'medium' | 'semibold';

export type LabelProps = {
  children: ReactNode;
  size?: LabelSize;
  weight?: LabelWeight;
  className?: string;
  style?: TextStyle | TextStyle[];
} & TextProps;

const sizeClass: Record<LabelSize, string> = {
  xs: 'text-[10px]',
  sm: 'text-[12px]',
  md: 'text-[14px]',
  lg: 'text-[16px]',
  xl: 'text-[18px]',
};

const weightClass: Record<LabelWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
};

export const Label = forwardRef<Text, LabelProps>(
  ({ children, size = 'md', weight = 'regular', className, style, ...textProps }, ref) => {
    const classes = `font-jakarta ${sizeClass[size]} ${weightClass[weight]} ${className ?? ''}`.trim();

    return (
      <Text ref={ref} className={classes} style={style} {...textProps}>
        {children}
      </Text>
    );
  },
);

Label.displayName = 'Label';

export const LabelXS = (p: Omit<LabelProps, 'size'>) => <Label {...p} size="xs" />;
export const LabelSM = (p: Omit<LabelProps, 'size'>) => <Label {...p} size="sm" />;
export const LabelMD = (p: Omit<LabelProps, 'size'>) => <Label {...p} size="md" />;
export const LabelLG = (p: Omit<LabelProps, 'size'>) => <Label {...p} size="lg" />;
export const LabelXL = (p: Omit<LabelProps, 'size'>) => <Label {...p} size="xl" />;
