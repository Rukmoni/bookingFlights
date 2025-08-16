import React from 'react';
import { Text, TextProps } from 'react-native';
import { colors, typography } from '../../theme';

type Props = TextProps & {
  variant?: keyof typeof typography;
  color?: string;
};

export const AppText: React.FC<Props> = ({
  variant = 'body',
  color = colors.text,
  style,
  children,
  ...rest
}) => {
  return (
    <Text style={[typography[variant], { color }, style]} {...rest}>
      {children}
    </Text>
  );
};
