import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Books: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Books</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Books;
