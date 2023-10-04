import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import BottomBar from './BottomBar';
import colors from '@utils/colors';
import MyDrawer from './Drawer';

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
  return (
    <NavigationContainer theme={AppTheme}>
      {/* <MyDrawer /> */}

      <BottomBar />
    </NavigationContainer>
  );
};

export default AppNavigator;
