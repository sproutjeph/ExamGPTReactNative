import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Exams: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Exams</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Exams;
