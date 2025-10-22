import React, { forwardRef, useMemo, useState } from 'react';
import { TextInput, TextInputProps, Pressable, View } from 'react-native';
import { Label } from './Label';
import { Icon } from './Icon';
import { IconName } from '@/assets/icons';

export type InputSize = 'md' | 'lg';

export type InputProps = {
  label?: string;
  size?: InputSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
  onPressRightIcon?: () => void;
  clearButton?: boolean;
  onClear?: () => void;
  secureToggle?: boolean;
  error?: string;
  disabled?: boolean;
  leftChip?: { type: 'dot' | 'number'; value?: number };
  rightChip?: { type: 'dot' | 'number'; value?: number };
  containerClassName?: string;
  inputClassName?: string;
} & Omit<TextInputProps, 'style'>;

const sizeStyle: Record<InputSize, { height: number; radius: number; paddingX: string; text: string }> = {
  md: { height: 48, radius: 24, paddingX: 'px-4', text: 'text-[14px]' },
  lg: { height: 56, radius: 28, paddingX: 'px-5', text: 'text-[16px]' },
};

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      size = 'md',
      leftIcon,
      rightIcon,
      onPressRightIcon,
      clearButton,
      onClear,
      secureToggle,
      error,
      disabled,
      leftChip,
      rightChip,
      containerClassName,
      inputClassName,
      placeholder = 'Type here...',
      multiline,
      ...textInputProps
    },
    ref,
  ) => {
    const [value, setValue] = useState<string>((textInputProps.value as string) ?? '');
    const [secure, setSecure] = useState<boolean>(!!textInputProps.secureTextEntry);
    const [focused, setFocused] = useState<boolean>(false);

    const s = sizeStyle[size];

    const rightAccessory = useMemo(() => {
      if (secureToggle) {
        return (
          <Pressable onPress={() => setSecure((v) => !v)} disabled={disabled} className="pl-2">
            <Icon name={secure ? 'hideEye' : 'hideEyeDisable'} size={20} />
          </Pressable>
        );
      }
      if (rightIcon) {
        return (
          <Pressable onPress={onPressRightIcon} disabled={!onPressRightIcon || disabled} className="pl-2">
            <Icon name={rightIcon} size={20} />
          </Pressable>
        );
      }
      return null;
    }, [onPressRightIcon, rightIcon, secure, secureToggle, disabled]);

    const showClear = clearButton && !!value?.length;

    return (
      <View className={containerClassName}>
        {label ? (
          <Label size="sm" weight="medium" className="text-gray-80 mb-2">
            {label}
          </Label>
        ) : null}

        <View
          className={[
            'w-full flex-row items-center border',
            disabled ? 'bg-gray-20 border-gray-40' : 'bg-secondary',
            error ? 'border-error' : focused && !disabled ? 'border-primary' : !disabled ? 'border-line' : 'border-gray-40',
            'rounded-full',
            s.paddingX,
            multiline ? 'py-3' : '',
            disabled ? 'opacity-60' : '',
          ].join(' ')}
          style={{ height: multiline ? undefined : s.height, borderRadius: s.radius }}
        >
          {leftChip ? (
            <View className="mr-2 items-center justify-center" style={{ width: 36, height: 36 }}>
              <View
                className={[
                  'items-center justify-center rounded-full',
                  leftChip.type === 'number' ? 'border border-primary' : '',
                ].join(' ')}
                style={{ width: 32, height: 32 }}
              >
                {leftChip.type === 'dot' ? (
                  <Icon name="dot" size={10} />
                ) : (
                  <Label size="md" weight="semibold" className="text-primary">
                    {leftChip.value ?? 0}
                  </Label>
                )}
              </View>
            </View>
          ) : null}

          {leftIcon ? (
            <View className="mr-2">
              <Icon name={leftIcon} size={20} />
            </View>
          ) : null}

          <TextInput
            ref={ref}
            className={[
              'flex-1 text-gray-90 font-jakarta',
              s.text,
              inputClassName ?? '',
            ].join(' ')}
            placeholder={placeholder}
            placeholderTextColor={disabled ? '#BFC6CC' : '#9CA4AB'}
            value={textInputProps.value !== undefined ? (textInputProps.value as string) : value}
            onChangeText={(t) => {
              setValue(t);
              textInputProps.onChangeText?.(t);
            }}
            onFocus={(e) => {
              setFocused(true);
              textInputProps.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              textInputProps.onBlur?.(e);
            }}
            multiline={multiline}
            numberOfLines={multiline ? 4 : undefined}
            secureTextEntry={secureToggle ? secure : textInputProps.secureTextEntry}
            editable={textInputProps.editable ?? !disabled}
            {...textInputProps}
          />

          {showClear ? (
            <Pressable onPress={() => { if (disabled) return; setValue(''); onClear?.(); }} disabled={disabled} className="pl-2">
              <Icon name="close" size={18} />
            </Pressable>
          ) : null}

          {rightAccessory}

          {rightChip ? (
            <View className="pl-2 items-center justify-center" style={{ width: 36, height: 36 }}>
              <View
                className={[
                  'items-center justify-center rounded-full',
                  rightChip.type === 'number' ? 'border border-primary' : '',
                ].join(' ')}
                style={{ width: 32, height: 32 }}
              >
                {rightChip.type === 'dot' ? (
                  <Icon name="dot" size={10} />
                ) : (
                  <Label size="md" weight="semibold" className="text-primary">
                    {rightChip.value ?? 0}
                  </Label>
                )}
              </View>
            </View>
          ) : null}
        </View>

        {error ? (
          <Label size="xs" weight="medium" className="text-error mt-1">
            {error}
          </Label>
        ) : null}
      </View>
    );
  },
);

Input.displayName = 'Input';

export default Input;
