import {View, Text, StyleSheet, Pressable, ViewStyle} from 'react-native';
import colors from '@utils/colors';
import React from 'react';

interface FloatingActionButtonProps {
  onPress: () => void;
  text: string;
  style?: ViewStyle;
}

const FAB: React.FC<FloatingActionButtonProps> = ({onPress, text, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onPress} style={styles.fab}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    right: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: 20}],
  },
  fab: {
    width: 100,
    height: 46,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  text: {
    fontSize: 18,
    color: colors.onPrimary,
  },
});

export default FAB;
