import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const CBT: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>CBT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CBT;
