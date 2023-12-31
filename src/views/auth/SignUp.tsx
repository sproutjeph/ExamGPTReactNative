import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SnackbarPosition, SnackbarType} from '@components/Snackbar';
import GoogleSignInButton from '@components/GoogleSignInButton';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import PasswordVisiblityIcon from '@ui/PasswordVisiblityIcon';
import LoginAnimation from '@animations/LoginAnimation';
import AuthInputField from '@components/AuthInputField';
import {updateSanckbar} from '@feauters/sanckbarSlice';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {axiosInstance} from '@utils/axiosInstance';
import {AuthStackParamList} from '@utils/types';
import {useAppDispatch} from '@store/hooks';
import AppButton from '@ui/AppButton';
import React, {useState} from 'react';
import Applink from '@ui/Applink';
import * as z from 'zod';

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

const SignUp = () => {
  const dispatch = useAppDispatch();
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
    try {
      const res = await axiosInstance.post('/register-user', data);
      if (res.status) {
        dispatch(
          updateSanckbar({
            message: `${res.data.message}`,
            open: true,
            position: SnackbarPosition.TOP,
            type: SnackbarType.SUCCESS,
          }),
        );
        navigation.navigate('Activation', {
          activationToken: `${res.data.activationToken}`,
        });
      }
    } catch (error: any) {
      dispatch(
        updateSanckbar({
          message: `${error.message}`,
          open: true,
          position: SnackbarPosition.TOP,
          type: SnackbarType.ERROR,
        }),
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <LoginAnimation />
      <Text style={styles.header}>Welcome to Exam-GPT</Text>
      <Text style={styles.subHeader}>Let's start by Sign up!</Text>

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
          title="Register"
          onPress={handleSubmit(onSubmit)}
          isLoading={isSubmitting}
        />
      </View>
      <View style={styles.linkContainer}>
        <Text>Alrady have an account? </Text>
        <Applink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          title="Sign In"
          active
        />
      </View>

      <Text style={styles.or}>Or continue</Text>

      <View>
        <GoogleSignInButton />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 11,
    marginBottom: 10,
  },
  submitButtonContainer: {
    marginTop: 14,
  },
  or: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 18,
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
