import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Subscription: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Subscription</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Subscription;
