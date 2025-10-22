import React from 'react';
import { Image, ImageProps, ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { Icons, IconName } from '@/assets/icons';

export type IconProps = {
  name?: IconName;
  source?: number;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle | ImageStyle>;
  imageProps?: Omit<ImageProps, 'source' | 'style'>;
};

export function Icon({ name, source, size = 24, color, style, imageProps }: IconProps) {
  const entry = name ? Icons[name] : undefined;
  const resolved = source ?? entry;

  if (!resolved) return null;

  const commonSize: StyleProp<ImageStyle> = [
    { width: size, height: size, ...(color ? { tintColor: color } : null) } as ImageStyle,
    style as ImageStyle,
  ];

  return <Image source={resolved as number} style={commonSize} {...imageProps} />;
}

export default Icon;
