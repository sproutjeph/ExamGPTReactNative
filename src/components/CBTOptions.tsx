import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet, Text} from 'react-native';
import AppCheckButton from '@ui/AppCheckButton';
import colors from '@utils/colors';
import React, {FC} from 'react';
import Card from '@ui/Card';
import AppSelect from './AppSelect';
import FAB from '@ui/FAB';

interface Props {}

const CBTOptions: FC<Props> = ({}) => {
  return (
    <>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text>Shuffle Questions</Text>
          <AppCheckButton />
        </Card>
        <Card style={styles.card}>
          <Text>Shuffle Options</Text>
          <AppCheckButton />
        </Card>
        <Card style={styles.card}>
          <View style={styles.examModeContainer}>
            <MaterialComIcon name="book" color={colors.primary} size={24} />
            <Text>Exam Mode</Text>
          </View>
          <View style={styles.examModeOptionContainer}>
            <View style={styles.examModeOption}>
              <AppSelect
                buttontext="Select"
                data={['Mock', 'Practice', 'Study']}
              />
            </View>
          </View>
        </Card>
      </View>
      <FAB text="Start" onPress={() => {}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  examModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  examModeOptionContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  examModeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
});

export default CBTOptions;
