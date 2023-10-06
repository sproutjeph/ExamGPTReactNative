import colors from '@utils/colors';
import React, {FC} from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
  color?: boolean;
  active?: boolean;
}

const Applink: FC<Props> = ({title, onPress, color, active}) => {
  return (
    <Pressable onPress={active ? onPress : null}>
      <Text style={color ? styles.error : styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
  },
  error: {
    color: colors.error,
  },
});

export default Applink;
