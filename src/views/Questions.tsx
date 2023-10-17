import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import React, {FC} from 'react';
import QuestionCard from '@components/QuestionCard';

interface Props {}

const Questions: FC<Props> = ({}) => {
  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.backButtonContainer}>
        <FontAwesome name="arrow-left" size={20} />
        <Text>Back to Exams</Text>
      </Pressable>
      <Text style={styles.questionInfo}>2010 JAMB Physice Past Questions</Text>

      <View style={styles.questionContainer}>
        <QuestionCard />
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
  },
});

export default Questions;
