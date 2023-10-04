import colors from '@utils/colors';
import React, {FC} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onPress?: () => void;
}

const GoogleSignInButton: FC<Props> = ({onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {backgroundColor: pressed ? '#DD4B39' : '#4285F4'},
      ]}
      onPress={onPress}>
      <Icon name="google" size={20} color="white" style={styles.icon} />
      <Text style={styles.text}>Sign in with Google</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: colors.onPrimary,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});

export default GoogleSignInButton;
