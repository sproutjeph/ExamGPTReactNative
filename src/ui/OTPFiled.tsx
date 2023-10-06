import colors from '@utils/colors';
import React, {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {}

const OTPFiled: FC<Props> = Props => {
  return <TextInput {...Props} style={[styles.input]} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: 'center',
    color: colors.onBackground,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 0,
  },
});

export default OTPFiled;
