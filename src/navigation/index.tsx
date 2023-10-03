import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import BottomBar from './BottomBar';

interface Props {}

const AppNavigator: FC<Props> = ({}) => {
  return (
    <NavigationContainer>
      <BottomBar />
    </NavigationContainer>
  );
};

export default AppNavigator;
