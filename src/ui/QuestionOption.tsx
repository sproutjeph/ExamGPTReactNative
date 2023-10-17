import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import colors from '@utils/colors';
import React, {FC} from 'react';

interface Props {
  optionLetter: string;
  optionValue: string;
  index: number;
  selectedOptionIndex: number | null;
  onSelect: (index: React.SetStateAction<number>) => void;
}

const QuestionOption: FC<Props> = ({
  optionLetter,
  optionValue,
  index,
  selectedOptionIndex,
  onSelect,
}) => {
  return (
    <Pressable
      onPress={() => {
        onSelect(index);
      }}
      style={styles.selectorContainer}>
      {selectedOptionIndex === index ? (
        <MaterialComIcon
          name="radiobox-marked"
          color={colors.primary}
          size={20}
        />
      ) : (
        <MaterialComIcon
          name="radiobox-blank"
          color={colors.secondary}
          size={20}
        />
      )}
      <View style={styles.valueContainer}>
        <Text>{optionLetter}: </Text>
        <Text>{optionValue}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default QuestionOption;
