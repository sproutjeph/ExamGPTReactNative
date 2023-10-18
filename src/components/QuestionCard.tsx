import {NavigationProp, useNavigation} from '@react-navigation/native';
import HorizontalLineDivider from '@ui/HorizontalLineDivider';
import {ExamStackParamList, IQuestion} from '@utils/types';
import {saveCurrentQuestion} from '@feauters/askAISlice';
import {View, StyleSheet, Text} from 'react-native';
import QuestionOption from '@ui/QuestionOption';
import {useAppDispatch} from '@store/hooks';
import React, {FC, useState} from 'react';
import AppButton from '@ui/AppButton';
import colors from '@utils/colors';

interface Props {
  question: IQuestion;
  questionIndex: number;
}

const QuestionCard: FC<Props> = ({question, questionIndex}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<ExamStackParamList>>();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleOptionSelect = (index: any) => {
    setSelectedOptionIndex(index);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.questionNumber}>Question({questionIndex + 1})</Text>
        <Text style={styles.question}>{question.question}</Text>
        <HorizontalLineDivider color={colors.onSurface} height={1} />
        <Text style={styles.optionText}>Select from the Options</Text>
        <View style={styles.optionsContainer}>
          {Object.keys(question.options)?.map((option, index) => (
            <QuestionOption
              optionLetter={option}
              optionValue={question.options[option]}
              index={index}
              selectedOptionIndex={selectedOptionIndex}
              onSelect={handleOptionSelect}
              key={index}
            />
          ))}
        </View>
        <HorizontalLineDivider color={colors.onSurface} height={1} />
        <View style={styles.buttonsContainer}>
          <AppButton title="Check Ans" width={'45%'} bgColor={colors.outline} />
          <AppButton
            title="Ask AI"
            width={'45%'}
            bgColor={colors.secondary}
            onPress={() => {
              dispatch(saveCurrentQuestion(question.question));
              navigation.navigate('AskAi');
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  questionNumber: {
    marginBottom: 8,
    fontSize: 18,
    textAlign: 'center',
  },
  question: {
    color: colors.primary,
  },
  optionText: {
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
});

export default QuestionCard;
