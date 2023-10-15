import colors from '@utils/colors';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Popover from 'react-native-popover-view';

interface PopoverProps {
  title: string;
  content: any[];
}

const AppPopover: React.FC<PopoverProps> = ({title, content = []}) => {
  const [showPopover, setShowPopover] = useState(false);

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
        {content.map((item, index) => (
          <Pressable
            key={index}
            style={styles.container}
            onPress={() => setShowPopover(false)}>
            <Text style={styles.title}>{item.examYear}</Text>
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
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 5,
    padding: 10,
  },
});

export default AppPopover;
