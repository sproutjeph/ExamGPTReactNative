import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useAppSelector} from '@store/hooks';
import AuthNavigator from './AuthNavigator';
import BottomBar from './BottomBar';
import colors from '@utils/colors';
import React, {FC} from 'react';

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
  const {isAuthenticated} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer theme={AppTheme}>
      {/* <MyDrawer /> */}
      {isAuthenticated ? <BottomBar /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
