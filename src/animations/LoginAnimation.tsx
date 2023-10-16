import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';

export default function LoginAnimation() {
  return (
    <View>
      <LottieView
        source={require('../lottie/working.json')}
        autoPlay
        loop
        style={styles.LottieStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  LottieStyle: {
    height: 300,
  },
});
