import { forwardRef, ReactNode } from 'react';
import { ActivityIndicator, Pressable, PressableProps, View } from 'react-native';
import { Label } from './Label';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
} & Omit<PressableProps, 'children'>;

const sizeStyle: Record<ButtonSize, { container: string; text: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }> = {
  sm: { container: 'h-8 px-3', text: 'sm' },
  md: { container: 'h-11 px-4', text: 'md' },
  lg: { container: 'h-13 px-5', text: 'lg' },
};

const baseContainer = 'rounded-full flex-row items-center justify-center gap-2';

const variants: Record<
  ButtonVariant,
  { enabled: string; pressed: string; text: string; outline?: string }
> = {
  primary: {
    enabled: 'bg-primary',
    pressed: 'bg-primary/90',
    text: 'text-white',
  },
  secondary: {
    enabled: 'bg-transparent',
    pressed: 'bg-secondary',
    text: 'text-primary',
    outline: 'border border-primary',
  },
  tertiary: {
    enabled: 'bg-transparent',
    pressed: 'bg-secondary',
    text: 'text-primary',
  },
  success: {
    enabled: 'bg-success',
    pressed: 'bg-success/90',
    text: 'text-white',
  },
};

const disabledStyles = {
  container: 'bg-gray-30',
  text: 'text-gray-70',
  outline: 'border-gray-40',
};

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled,
      loading,
      leftIcon,
      rightIcon,
      fullWidth,
      className,
      ...pressableProps
    },
    ref,
  ) => {
    const sizeCfg = sizeStyle[size];
    const v = variants[variant];

    return (
      <Pressable
        ref={ref as any}
        disabled={disabled || loading}
        className={[
          baseContainer,
          sizeCfg.container,
          fullWidth ? 'w-full' : '',
          disabled
            ? `${disabledStyles.container} ${variant === 'secondary' ? `border ${disabledStyles.outline}` : ''}`
            : `${v.enabled} ${v.outline ?? ''}`,
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        android_ripple={{ color: 'rgba(0,0,0,0.06)', borderless: false }}
        {...pressableProps}
      >
        {loading ? (
          <ActivityIndicator size="small" color={variant === 'secondary' ? '#6758db' : '#FEFEFE'} />
        ) : (
          <View className="flex-row items-center gap-2">
            {leftIcon ? <View className="mr-1">{leftIcon}</View> : null}
            <Label size={sizeCfg.text} weight="semibold" className={disabled ? disabledStyles.text : v.text}>
              {children}
            </Label>
            {rightIcon ? <View className="ml-1">{rightIcon}</View> : null}
          </View>
        )}
      </Pressable>
    );
  },
);

Button.displayName = 'Button';

export default Button;
