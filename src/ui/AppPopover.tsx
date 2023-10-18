import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Popover from 'react-native-popover-view';
import React, {useState} from 'react';
import colors from '@utils/colors';
import {ExamStackParamList} from '@utils/types';

interface PopoverProps {
  examType: string;
  title: string;
  content: {
    examYear: number;
    _id: string;
    isActive: boolean;
  }[];
}

const AppPopover: React.FC<PopoverProps> = ({title, content, examType}) => {
  const [showPopover, setShowPopover] = useState(false);
  const navigation = useNavigation<NavigationProp<ExamStackParamList>>();

  return (
    <Popover
      isVisible={showPopover}
      onRequestClose={() => setShowPopover(false)}
      from={
        <Pressable
          style={styles.container}
          onPress={() => setShowPopover(true)}>
          <Text style={styles.title}>{title}</Text>
        </Pressable>
      }>
      <View style={styles.contentContainer}>
        {[...new Set(content.map(year => year.examYear))].map((item, i) => (
          <Pressable
            key={i}
            style={styles.container}
            onPress={() => {
              setShowPopover(false);
              navigation.navigate('Questions', {
                examType: examType,
                examYear: item,
                subject: title,
              });
            }}>
            <Text style={styles.title}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </Popover>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 42,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  title: {
    color: colors.onPrimary,
    textTransform: 'capitalize',
  },
  contentContainer: {
    width: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    padding: 10,
  },
});

export default AppPopover;
