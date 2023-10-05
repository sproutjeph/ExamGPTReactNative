import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '@views/auth/SignIn';
import SignUp from '@views/auth/SignUp';
import React, {FC} from 'react';
import {AuthStackParamList} from 'src/@types/navigation';

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
    </Stack.Navigator>
  );
};

export default AuthNavigator;
