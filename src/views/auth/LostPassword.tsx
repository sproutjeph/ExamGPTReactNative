import AuthInputField from '@components/AuthInputField';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AppButton from '@ui/AppButton';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AuthStackParamList} from '@utils/types';

interface Props {}

const LostPassword: FC<Props> = ({}) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lost Password</Text>
      <AuthInputField
        label="Email"
        placeholder="example@gmail.com"
        name="email"
      />

      <View style={styles.submitButtonContainer}>
        <AppButton title="Submit" />
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
});

export default LostPassword;
