import Snackbar, {SnackbarPosition} from '@components/Snackbar';
import React, {FC, useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

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
      <Text>Home</Text>
      <Button title="Toggle Snack Bar" onPress={() => setShow(!show)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
});

export default Home;
