import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import JAMB from './JAMB';
import WASSEC from './WASSEC';

const Tab = createMaterialTopTabNavigator();

interface Props {}

const Exams: FC<Props> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="JAMB" component={JAMB} />
      <Tab.Screen name="WASSEC" component={WASSEC} />
      <Tab.Screen name="NECO" component={WASSEC} />
      <Tab.Screen name="POST-UTME" component={WASSEC} />
    </Tab.Navigator>
  );
};

export default Exams;
