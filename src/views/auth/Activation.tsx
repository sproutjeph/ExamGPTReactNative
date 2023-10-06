import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Activation: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Activation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Activation;
