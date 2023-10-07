import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import BottomBar from './BottomBar';
import colors from '@utils/colors';
import MyDrawer from './Drawer';
import AuthNavigator from './AuthNavigator';

interface Props {}
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    primary: colors.primary,
  },
};

const AppNavigator: FC<Props> = ({}) => {
  const isAuth = true;
  return (
    <NavigationContainer theme={AppTheme}>
      {/* <MyDrawer /> */}

      {isAuth ? <BottomBar /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
