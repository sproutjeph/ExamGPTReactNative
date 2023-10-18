import {View, StyleSheet, Text} from 'react-native';
import {useSubject} from '@hooks/useGetSubject';
import AppPopover from '@ui/AppPopover';
import React, {FC} from 'react';

interface Props {}

const Neco: FC<Props> = ({}) => {
  const {isLoading, subjects} = useSubject('NECO');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>NECO PAST QUESTION</Text>
      <View style={styles.subjectsContainer}>
        {!isLoading &&
          subjects?.data.map((item, i) => (
            <AppPopover
              examType="NECO"
              title={item.name}
              key={i}
              content={item.examYears}
            />
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

export default Neco;
