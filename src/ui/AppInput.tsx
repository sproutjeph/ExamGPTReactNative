import {StyleSheet, TextInputProps, TextInput} from 'react-native';
import colors from '@utils/colors';
import React, {FC} from 'react';

interface Props extends TextInputProps {}

const AppInput: FC<Props> = Props => {
  return <TextInput {...Props} style={[styles.input, Props.style]} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: colors.primary,
    borderWidth: 2,
    height: 45,
    borderRadius: 8,
    padding: 10,
    width: '100%',
    color: colors.onBackground,
  },
});

export default AppInput;
