import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Videos: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Videos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Videos;
