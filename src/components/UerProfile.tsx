import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import Popover from 'react-native-popover-view';
import React, {FC, useState} from 'react';
import colors from '@utils/colors';

interface Props {}

const UserProfile: FC<Props> = ({}) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <Popover
      isVisible={showPopover}
      onRequestClose={() => setShowPopover(false)}
      from={
        <Pressable onPress={() => setShowPopover(true)}>
          <Image
            source={require('../assets/no-photo.jpg')}
            style={styles.profileImage}
          />
        </Pressable>
      }>
      <View style={styles.contentContainer}>
        <Pressable>
          <Text>Logout</Text>
        </Pressable>
      </View>
    </Popover>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.onPrimary,
    textTransform: 'capitalize',
  },
  contentContainer: {
    width: 250,
    height: 300,
    padding: 10,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
  },
});

export default UserProfile;
