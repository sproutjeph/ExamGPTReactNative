import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import PostUtme from './PostUtme';
import Wassce from './Wassce';
import Jamb from './Jamb';
import Neco from './Neco';

const Tab = createMaterialTopTabNavigator();

interface Props {}

const Exams: FC<Props> = ({}) => {
  return (
    <Tab.Navigator initialRouteName="Jamb">
      <Tab.Screen name="JAMB" component={Jamb} />
      <Tab.Screen name="WASSEC" component={Wassce} />
      <Tab.Screen name="NECO" component={Neco} />
      <Tab.Screen name="POST-UTME" component={PostUtme} />
    </Tab.Navigator>
  );
};

export default Exams;
