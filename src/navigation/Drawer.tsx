import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Exams from '@views/Exams';
import Home from '@views/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Home} />
      <Drawer.Screen name="Article" component={Exams} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
