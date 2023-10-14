import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SnackbarPosition, SnackbarType} from '@components/Snackbar';
import GoogleSignInButton from '@components/GoogleSignInButton';
import PasswordVisiblityIcon from '@ui/PasswordVisiblityIcon';
import {AuthStackParamList} from 'src/@types/navigation';
import AuthInputField from '@components/AuthInputField';
import {updateSanckbar} from '@feauters/sanckbarSlice';
import {useForm, Controller} from 'react-hook-form';
import {View, StyleSheet, Text} from 'react-native';
import {updateAuthState} from '@feauters/authSlice';
import {zodResolver} from '@hookform/resolvers/zod';
import {axiosInstance} from '@utils/axiosInstance';
import {useAppDispatch} from '@store/hooks';
import React, {useState} from 'react';
import AppButton from '@ui/AppButton';
import colors from '@utils/colors';
import Applink from '@ui/Applink';
import * as z from 'zod';

const FormSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is Required'),
  password: z
    .string()
    .min(6, 'password must be greater than 6 characters')
    .max(20),
});

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [secureEntry, setSecureEntry] = useState(true);

  const togglePasswordVisiblity = () => {
    setSecureEntry(!secureEntry);
  };

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (userData: any) => {
    try {
      const {data} = await axiosInstance.post('/login-user', userData);
      if (data.success) {
        dispatch(updateAuthState(true));
        dispatch(
          updateSanckbar({
            message: 'Login successfull',
            open: true,
            position: SnackbarPosition.TOP,
            type: SnackbarType.SUCCESS,
          }),
        );
      }
    } catch (error: any) {
      dispatch(
        updateSanckbar({
          message: `${error.response.data.msg}`,
          open: true,
          position: SnackbarPosition.TOP,
          type: SnackbarType.ERROR,
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

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
          title="Sign in"
          onPress={handleSubmit(onSubmit)}
          isLoading={isSubmitting}
        />
      </View>

      <Text style={styles.or}>Or Sign in with</Text>

      <View>
        <GoogleSignInButton />
      </View>
      <View style={styles.linkContainer}>
        <Text>Dont have an account? </Text>
        <Applink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          title="Sign Up"
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

export default SignIn;
