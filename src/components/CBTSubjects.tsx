import {useGetAllSubjects} from '@hooks/useGetAllSubjects';
import {View, StyleSheet} from 'react-native';
import CBTSubject from './CBTSubject';
import {ISubject} from '@utils/types';
import React, {FC} from 'react';

interface Props {}

const CBTSubjects: FC<Props> = ({}) => {
  const {isLoading, subjects} = useGetAllSubjects();
  return (
    <View style={styles.container}>
      {!isLoading &&
        subjects?.data.map((subject: ISubject) => (
          <CBTSubject subject={subject} key={subject._id} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CBTSubjects;
