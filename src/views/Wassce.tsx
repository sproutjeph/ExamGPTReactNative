import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Wassce: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>WASSCE PAST QUESTION</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Wassce;
