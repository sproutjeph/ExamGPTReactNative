import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import BottomBar from './BottomBar';
import colors from '@utils/colors';

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
      <BottomBar />
    </NavigationContainer>
  );
};

export default AppNavigator;
