import {View, StyleSheet, Text, TextInput, Keyboard} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SnackbarPosition, SnackbarType} from '@components/Snackbar';
import React, {FC, useEffect, useRef, useState} from 'react';
import {AuthStackParamList} from 'src/@types/navigation';
import {updateSanckbar} from '@feauters/sanckbarSlice';
import {axiosInstance} from '@utils/axiosInstance';
import {useAppDispatch} from '@store/hooks';
import AppButton from '@ui/AppButton';
import OTPFiled from '@ui/OTPFiled';
import Applink from '@ui/Applink';

type Props = NativeStackScreenProps<AuthStackParamList, 'Activation'>;
const otpFields = new Array(6).fill('');

const Activation: FC<Props> = ({route}) => {
  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState([...otpFields]);
  const [activeField, setActiveField] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const {activationToken} = route.params;

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const handleChange = (key: string, index: number) => {
    const newOtp = [...otp];
    if (key === 'Backspace') {
      if (!newOtp[index]) {
        setActiveField(index - 1);
      }
      newOtp[index] = '';
    } else {
      setActiveField(index + 1);
      newOtp[index] = key;
    }

    setOtp([...newOtp]);
  };

  const handlePaste = (key: string) => {
    if (key.length === 6) {
      Keyboard.dismiss();
      const newOtp = key.split('');
      setOtp([...newOtp]);
    }
  };
  const isValidOtp = otp.every(value => {
    return value.trim();
  });

  const onSubmit = async () => {
    if (!isValidOtp) {
      return dispatch(
        updateSanckbar({
          message: 'Invalid OTP',
          open: true,
          position: SnackbarPosition.TOP,
          type: SnackbarType.ERROR,
        }),
      );
    }
    setIsLoading(true);
    try {
      const {data} = await axiosInstance.post('/activate-user', {
        activationToken: activationToken,
        activationCode: otp.join(''),
      });
      console.log(data);
      console.log(data.success);

      if (data.success) {
        setIsLoading(false);
        dispatch(
          updateSanckbar({
            message: 'Activation Successful',
            open: true,
            position: SnackbarPosition.TOP,
            type: SnackbarType.SUCCESS,
          }),
        );
        navigation.navigate('SignIn');
      }
    } catch (error: any) {
      console.log(error.response.data.msg);

      dispatch(
        updateSanckbar({
          message: `${error.response.data.msg}`,
          open: true,
          position: SnackbarPosition.TOP,
          type: SnackbarType.ERROR,
        }),
      );
      setIsLoading(false);
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeField]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify Your Account</Text>
      <View style={styles.optContainer}>
        {otpFields.map((_, i) => (
          <OTPFiled
            key={i}
            placeholder="*"
            ref={activeField === i ? inputRef : null}
            onKeyPress={({nativeEvent}) => {
              handleChange(nativeEvent.key, i);
            }}
            keyboardType="numeric"
            onChangeText={handlePaste}
            value={otp[i] || ''}
          />
        ))}
      </View>
      <View style={{marginBottom: 20}} />
      <AppButton title="submit" isLoading={isLoading} onPress={onSubmit} />
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
