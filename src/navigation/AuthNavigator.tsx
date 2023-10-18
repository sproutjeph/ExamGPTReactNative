import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Activation from '@views/auth/Activation';
import {AuthStackParamList} from '@utils/types';
import SignIn from '@views/auth/SignIn';
import SignUp from '@views/auth/SignUp';
import React, {FC} from 'react';

interface Props {}
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: FC<Props> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Activation" component={Activation} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
