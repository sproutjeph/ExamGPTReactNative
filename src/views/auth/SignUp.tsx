import AuthInputField from '@components/AuthInputField';
import GoogleSignInButton from '@components/GoogleSignInButton';
import AppButton from '@ui/AppButton';
import colors from '@utils/colors';
import React, {FC} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

interface Props {}

const SignUp: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register Account</Text>
      <AuthInputField label="Name" placeholder="John" name="email" />
      <AuthInputField
        label="Email"
        placeholder="example@gmail.com"
        name="email"
      />
      <AuthInputField
        label="Password"
        placeholder="*******"
        name="email"
        containerStyle={{marginVertical: 10}}
      />

      <View style={styles.submitButtonContainer}>
        <AppButton title="Sign up" />
      </View>

      <Text style={styles.or}>Or</Text>

      <View>
        <GoogleSignInButton />
      </View>
      <View style={styles.linkContainer}>
        <Text>Dont have an account? </Text>
        <Pressable>
          <Text style={{color: colors.primary}}>Sign in</Text>
        </Pressable>
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
  submitButtonContainer: {
    marginTop: 10,
  },
  or: {
    marginVertical: 25,
    textAlign: 'center',
    fontSize: 18,
    color: colors.tertiary,
  },
  googleIcon: {
    color: 'green',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default SignUp;