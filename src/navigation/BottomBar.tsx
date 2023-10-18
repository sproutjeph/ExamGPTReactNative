/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserProfile from '@components/UserProfile';
import ExamNavigator from './ExamNavigator';
import Settings from '@views/Settings';
import colors from '@utils/colors';
import AskAi from '@views/AskAi';
import Home from '@views/Home';
import CBT from '@views/CBT';
import React from 'react';

const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        headerRight: props => {
          return <UserProfile {...props} />;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size}) => <FontAwesome name={'home'} size={size} />,
          tabBarLabel: 'HOME',
          tabBarLabelStyle: {
            // color: colors.primary,
          },
          tabBarIconStyle: {
            color: colors.onBackground,
          },
        }}
      />
      <Tab.Screen
        name="Exams"
        component={ExamNavigator}
        options={{
          tabBarIcon: ({size}) => <FontAwesome name="user" size={size} />,
          tabBarLabel: 'EXAMS',
          tabBarIconStyle: {
            color: colors.onBackground,
          },
        }}
      />
      <Tab.Screen
        name="AskAi"
        component={AskAi}
        options={{
          tabBarIcon: ({size}) => (
            <FontAwesome
              name="comment"
              color={colors.onBackground}
              size={size}
            />
          ),
          tabBarLabel: 'AI',
        }}
      />
      <Tab.Screen
        name="CBT"
        component={CBT}
        options={{
          tabBarIcon: ({size}) => (
            <FontAwesome name="book" color={colors.onBackground} size={size} />
          ),
          tabBarLabel: 'CBT',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({size}) => (
            <FontAwesome name="gear" color={colors.onBackground} size={size} />
          ),
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomBar;
