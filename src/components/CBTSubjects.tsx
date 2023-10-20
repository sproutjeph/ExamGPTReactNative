import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const CBTSubjects: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>CBTSubjects</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CBTSubjects;
