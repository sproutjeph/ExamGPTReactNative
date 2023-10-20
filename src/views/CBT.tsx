import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CBTSubjects from '@components/CBTSubjects';
import CBTOptions from '@components/CBTOptions';
import {StyleSheet, Text} from 'react-native';
import colors from '@utils/colors';
import React, {FC} from 'react';

interface Props {}

const Tab = createMaterialTopTabNavigator();
const CBT: FC<Props> = ({}) => {
  return (
    <>
      <Text style={styles.title}>Test Your Knowledge</Text>
      <Text style={styles.subTitle}>Select the subject you want</Text>
      <Tab.Navigator initialRouteName="Subjects">
        <Tab.Screen name="Subjects" component={CBTSubjects} />
        <Tab.Screen name="Options" component={CBTOptions} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.outline,
  },
});

export default CBT;
