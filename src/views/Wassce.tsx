import {View, StyleSheet, Text} from 'react-native';
import {useSubject} from '@hooks/useGetSubject';
import AppPopover from '@ui/AppPopover';
import React, {FC} from 'react';

interface Props {}

const Wassce: FC<Props> = ({}) => {
  const {isLoading, subjects} = useSubject('WASSCE');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WASSCE PAST QUESTION</Text>
      <View style={styles.subjectsContainer}>
        {!isLoading &&
          subjects?.data.map((item, i) => (
            <AppPopover title={item.name} key={i} content={item.examYears} />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    textAlign: 'center',
    marginVertical: 10,
  },
  subjectsContainer: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
});

export default Wassce;
