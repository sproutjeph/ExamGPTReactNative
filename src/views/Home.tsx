import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      {/* <SignIn /> */}
      <SignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
