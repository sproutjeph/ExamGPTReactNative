import AuthInputField from '@components/AuthInputField';
import GoogleSignInButton from '@components/GoogleSignInButton';
import Snackbar, {SnackbarPosition, SnackbarType} from '@components/Snackbar';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Applink from '@ui/Applink';
import colors from '@utils/colors';
import React, {FC, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AuthStackParamList} from 'src/@types/navigation';
import PasswordVisiblityIcon from '@ui/PasswordVisiblityIcon';
import {useForm, Controller} from 'react-hook-form';
import AppButton from '@ui/AppButton';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {axiosInstance} from '@utils/axiosInstance';

interface Props {}
export interface IRegUser {
  name: string;
  email: string;
  password: string;
}
const registerFormSchema = z.object({
  name: z.string().min(1, 'First Name is Required').max(100),

  email: z.string().email('Invalid email').min(1, 'Email is Required'),
  password: z
    .string()
    .min(6, 'password must be greater than 6 characters')
    .max(20),
});

const SignUp: FC<Props> = ({}) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [secureEntry, setSecureEntry] = useState(true);

  const togglePasswordVisiblity = () => {
    setSecureEntry(!secureEntry);
  };
  const {
    handleSubmit,
    control,
    formState: {errors, isSubmitting},
  } = useForm<IRegUser>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },

    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = async (data: IRegUser) => {
    console.log(data);
    try {
      const res = await axiosInstance.post('/register-user', data);
      if (res.status) {
        <Snackbar
          message={res.data.message}
          open={true}
          position={SnackbarPosition.TOP}
          type={SnackbarType.SUCCESS}
        />;
        navigation.navigate('Activation');
      }
    } catch (error: any) {
      <Snackbar
        message={error.message}
        open={true}
        position={SnackbarPosition.TOP}
        type={SnackbarType.ERROR}
      />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register Account</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AuthInputField
            placeholder="John Doe"
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            name="name"
            label="Name"
            errors={errors}
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AuthInputField
            placeholder="example@gmail.com"
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            name="email"
            label="Email"
            errors={errors}
            autoCapitalize="none"
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AuthInputField
            placeholder="*******"
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            name="password"
            label="Password"
            errors={errors}
            autoCapitalize="none"
            rightIcon={<PasswordVisiblityIcon privateIcon={secureEntry} />}
            onRightIconPressed={() => {
              togglePasswordVisiblity();
            }}
            secureTextEntry={secureEntry}
          />
        )}
        name="password"
      />

      <View style={styles.submitButtonContainer}>
        <AppButton
          title={isSubmitting ? 'Loading...' : 'Register'}
          onPress={handleSubmit(onSubmit)}
        />
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
