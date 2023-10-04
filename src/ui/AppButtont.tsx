import colors from '@utils/colors';
import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import Loader from './Loader';

interface Props {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
  borderRadius?: number;
}

const AppButtont: FC<Props> = ({title, onPress, isLoading, borderRadius}) => {
  return (
    <Pressable
      style={[styles.container, {borderRadius: borderRadius || 8}]}
      onPress={onPress}>
      {isLoading ? <Loader /> : <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.onSecondary,
    fontSize: 18,
  },
});

export default AppButtont;
