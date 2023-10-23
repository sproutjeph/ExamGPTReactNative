import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useGetAllSubjects} from '@hooks/useGetAllSubjects';
import {ScrollView, StyleSheet} from 'react-native';
import CBTSubject from './CBTSubject';
import {ISubject} from '@utils/types';
import React, {FC} from 'react';
import FAB from '@ui/FAB';

interface Props {}

const CBTSubjects: FC<Props> = ({}) => {
  const {isLoading, subjects} = useGetAllSubjects();
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <>
      <ScrollView style={styles.container}>
        {!isLoading &&
          subjects?.data.map((subject: ISubject) => {
            const examYears = subject.examYears.map(
              examYear => examYear.examYear,
            );
            const uniqueExamYears = [...new Set(examYears)];
            return (
              <CBTSubject
                subject={subject}
                key={subject._id}
                examYears={uniqueExamYears}
              />
            );
          })}
      </ScrollView>
      <FAB
        text="Continue"
        onPress={() => {
          navigation.navigate('Options');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CBTSubjects;
