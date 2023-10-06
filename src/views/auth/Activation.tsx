import AppButton from '@ui/AppButton';
import Applink from '@ui/Applink';
import OTPFiled from '@ui/OTPFiled';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}
const otpFileds = new Array(6).fill('');

const Activation: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify Your Account</Text>
      <View style={styles.optContainer}>
        {otpFileds.map((_, i) => (
          <OTPFiled key={i} />
        ))}
      </View>
      <View style={{marginBottom: 20}} />
      <AppButton title="submit" />
      <View style={styles.appLinkContainer}>
        <Applink title="Resend OTP" active={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  optContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  appLinkContainer: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
});

export default Activation;
