import { forwardRef, ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type BodySize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type TypographyProps = {
  children: ReactNode;
  category?: 'heading' | 'body';
  size?: HeadingSize | BodySize;
  weight?: 'bold' | 'semibold' | 'medium';
  className?: string;
  style?: TextStyle | TextStyle[];
} & TextProps;

const headingSizeClass: Record<HeadingSize, string> = {
  h1: 'text-[48px]',
  h2: 'text-[40px]',
  h3: 'text-[32px]',
  h4: 'text-[24px]',
  h5: 'text-[20px]',
  h6: 'text-[18px]',
};

const bodySizeClass: Record<BodySize, string> = {
  xl: 'text-[18px]',
  lg: 'text-[16px]',
  md: 'text-[14px]',
  sm: 'text-[12px]',
  xs: 'text-[10px]',
};

const weightClass: Record<NonNullable<TypographyProps['weight']>, string> = {
  bold: 'font-bold',
  semibold: 'font-semibold',
  medium: 'font-medium',
};

export const Typography = forwardRef<Text, TypographyProps>(
  (
    {
      children,
      category = 'body',
      size = category === 'heading' ? 'h4' : 'md',
      weight = 'medium',
      className,
      style,
      ...textProps
    },
    ref,
  ) => {
    const sizeClass =
      category === 'heading'
        ? headingSizeClass[(size as HeadingSize) || 'h4']
        : bodySizeClass[(size as BodySize) || 'md'];

    const classes = `font-jakarta ${sizeClass} ${weightClass[weight]} ${className ?? ''}`.trim();

    return (
      <Text ref={ref} className={classes} style={style} {...textProps}>
        {children}
      </Text>
    );
  },
);

Typography.displayName = 'Typography';

export const H1 = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="heading" size="h1" />
);
export const H2 = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="heading" size="h2" />
);
export const H3 = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="heading" size="h3" />
);
export const H4 = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="heading" size="h4" />
);
export const H5 = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="heading" size="h5" />
);
export const H6 = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="heading" size="h6" />
);

export const BodyXL = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="body" size="xl" />
);
export const BodyLG = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="body" size="lg" />
);
export const BodyMD = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="body" size="md" />
);
export const BodySM = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="body" size="sm" />
);
export const BodyXS = (p: Omit<TypographyProps, 'category' | 'size'>) => (
  <Typography {...p} category="body" size="xs" />
);
