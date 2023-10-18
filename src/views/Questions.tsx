import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuestionCard from '@components/QuestionCard';
import {useQuestion} from '@hooks/useGetQuestion';
import {ExamStackParamList} from '@utils/types';
import React, {FC} from 'react';

type Props = NativeStackScreenProps<ExamStackParamList, 'Questions'>;

const Questions: FC<Props> = ({route}) => {
  const {examType, examYear, subject} = route.params;
  const {isLoading, questions} = useQuestion(examType, `${examYear}`, subject);

  const navigation = useNavigation<NavigationProp<ExamStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.backButtonContainer}
        onPress={() => navigation.navigate('ExamsNav')}>
        <FontAwesome name="arrow-left" size={20} />
        <Text>Back to Exams</Text>
      </Pressable>
      <Text style={styles.questionInfo}>
        {examYear} {examType} {subject.toUpperCase()} PAST QUESTIONS
      </Text>

      <View style={styles.questionContainer}>
        {!isLoading &&
          questions?.data.map((question, questionIndex) => (
            <QuestionCard
              key={question._id}
              question={question}
              questionIndex={questionIndex}
            />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  questionInfo: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
  questionContainer: {
    marginTop: 10,
    gap: 16,
    marginBottom: 50,
  },
});

export default Questions;
