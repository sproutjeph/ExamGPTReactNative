import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Jamb from './Jamb';
import Wassce from './Wassce';
import Neco from './Neco';
import PostUtme from './PostUtme';
import Exam from './Exam';

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
