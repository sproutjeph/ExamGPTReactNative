import {useSubject} from '@hooks/useGetSubject';
import AppPopover from '@ui/AppPopover';
import {ISubject} from '@utils/types';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Jamb: FC<Props> = ({}) => {
  const {isLoading, subjects} = useSubject('JAMB');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>JAMB PAST QUESTION</Text>
      <View style={styles.subjectsContainer}>
        {!isLoading &&
          subjects?.data.map((item: ISubject) => (
            <AppPopover
              title={item.name}
              key={item._id}
              content={item?.examYears}
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

export default Jamb;
