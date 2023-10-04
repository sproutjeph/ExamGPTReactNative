import Snackbar, {SnackbarPosition} from '@components/Snackbar';
import AppButtont from '@ui/AppButtont';
import AppInput from '@ui/AppInput';
import React, {FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {}

const Home: FC<Props> = ({}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      {show && (
        <Snackbar
          open={show}
          position={SnackbarPosition.BOTTOM}
          message="Snakbar"
        />
      )}
      <AppButtont title="Toggle Snack Bar" onPress={() => setShow(!show)} />
      <AppInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    marginHorizontal: 16,
  },
});

export default Home;
