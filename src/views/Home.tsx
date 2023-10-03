import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
