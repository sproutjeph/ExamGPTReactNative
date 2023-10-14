import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import BottomBar from './BottomBar';
import colors from '@utils/colors';
import AuthNavigator from './AuthNavigator';
import {useAppSelector} from '@store/hooks';

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
