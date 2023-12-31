import colors from '@utils/colors';
import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  ref: any;
}

const OTPField = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <TextInput
      {...props}
      ref={ref}
      style={[styles.input, props.style]}
      placeholderTextColor={colors.background}
    />
  );
});

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

export default OTPField;
