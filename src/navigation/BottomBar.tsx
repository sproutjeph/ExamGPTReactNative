/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@views/Home';
import Profile from '@views/Exams';
import Upload from '@views/Books';
import Settings from '@views/Settings';
import colors from '@utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CBT from '@views/CBT';

const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.PRIMARY,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name={'home'} color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          tabBarLabel: 'User',
        }}
      />
      <Tab.Screen
        name="AI"
        component={Upload}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="comment" color={color} size={size} />
          ),
          tabBarLabel: 'AI',
        }}
      />
      <Tab.Screen
        name="CBT"
        component={CBT}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
          tabBarLabel: 'CBT',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomBar;
