import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {}

const Home: FC<Props> = ({}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
