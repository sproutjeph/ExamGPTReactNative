import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet, Text} from 'react-native';
import AppCheckButton from '@ui/AppCheckButton';
import {ISubject} from '@utils/types';
import AppSelect from './AppSelect';
import React, {FC} from 'react';
import Card from '@ui/Card';

interface Props {
  subject: ISubject;
}

const CBTSubject: FC<Props> = ({subject}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.subject}>
          <AppCheckButton />
          <Text style={styles.text}>
            {subject.name} {subject.exam}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <MaterialComIcon name="calendar-month" size={24} />
            <Text>Exam Year</Text>
          </View>
          <AppSelect />
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <MaterialComIcon name="format-list-bulleted" size={24} />
            <Text>Number of Question</Text>
          </View>
          <AppSelect />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  card: {
    padding: 14,
  },
  text: {
    textTransform: 'capitalize',
  },
  subject: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    gap: 4,
  },
});

export default CBTSubject;
