import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const WASSEC: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>WASSEC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default WASSEC;