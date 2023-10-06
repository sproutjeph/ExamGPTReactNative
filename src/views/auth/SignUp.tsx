import AuthInputField from '@components/AuthInputField';
import GoogleSignInButton from '@components/GoogleSignInButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AppButton from '@ui/AppButton';
import Applink from '@ui/Applink';
import colors from '@utils/colors';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AuthStackParamList} from 'src/@types/navigation';

interface Props {}

const SignUp: FC<Props> = ({}) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
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
        <Applink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          title="Sign In"
          active
        />
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
