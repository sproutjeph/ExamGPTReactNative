import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const JAMB: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>JAMB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default JAMB;
