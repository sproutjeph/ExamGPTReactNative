import AppButton from '@ui/AppButton';
import HorizontalLineDivider from '@ui/HorizontalLineDivider';
import QuestionOption from '@ui/QuestionOption';
import colors from '@utils/colors';
import React, {FC, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const QuestionCard: FC<Props> = ({}) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleOptionSelect = (index: any) => {
    setSelectedOptionIndex(index);
  };

  const options = [
    {letter: 'A', value: '4%'},
    {letter: 'B', value: '8%'},
    {letter: 'C', value: '10%'},
    {letter: 'D', value: '6%'},
    {letter: 'E', value: '6%'},
  ];
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.questionNumber}>Question(1)</Text>
        <Text style={styles.question}>
          A machine has a velocity ration of 5, if it requires a 50kg weigth to
          overcome 200kg weight, the efficiency is?
        </Text>
        <HorizontalLineDivider color={colors.onSurface} height={1} />
        <Text style={styles.optionText}>Select from the Options</Text>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <QuestionOption
              optionLetter={option.letter}
              optionValue={option.value}
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
          <AppButton title="Ask AI" width={'45%'} bgColor={colors.secondary} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
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
