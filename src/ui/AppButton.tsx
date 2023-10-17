import {DimensionValue, Pressable} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import colors from '@utils/colors';
import React, {FC} from 'react';
import Loader from './Loader';

interface Props {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
  borderRadius?: number;
  width?: DimensionValue;
  bgColor?: string;
}

const AppButton: FC<Props> = ({
  title,
  onPress,
  isLoading,
  borderRadius,
  width = '100%',
  bgColor = colors.primary,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          borderRadius: borderRadius || 8,
          width: width,
          backgroundColor: bgColor,
        },
      ]}
      onPress={onPress}>
      {isLoading ? <Loader /> : <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.onSecondary,
    fontSize: 18,
    letterSpacing: 1,
  },
});

export default AppButton;
