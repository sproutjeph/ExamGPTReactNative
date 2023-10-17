import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import React, {FC, useState} from 'react';
import colors from '@utils/colors';

interface Props {
  optionLetter: string;
  optionValue: string;
  index: number;
}

const QuestionOption: FC<Props> = ({optionLetter, optionValue, index}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function handleSelect() {
    if (selectedIndex === index) {
      // If the current option is already selected, deselect it
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  }
  return (
    <Pressable
      onPress={() => {
        handleSelect();
      }}
      style={styles.selectorContainer}>
      {selectedIndex === index ? (
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
