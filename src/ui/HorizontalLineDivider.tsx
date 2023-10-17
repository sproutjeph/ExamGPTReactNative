import {View, StyleSheet, ViewStyle} from 'react-native';
import React, {FC} from 'react';

interface Props {
  color: string;
  height: number;
  width?: ViewStyle;
  marginVertical?: number;
}

const HorizontalLineDivider: FC<Props> = ({
  color,
  height,
  marginVertical = 10,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {
          backgroundColor: color,
          height: height,
          marginVertical: marginVertical,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});

export default HorizontalLineDivider;
