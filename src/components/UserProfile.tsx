import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import Popover from 'react-native-popover-view';
import {logout} from '@feauters/authSlice';
import React, {FC, useState} from 'react';
import colors from '@utils/colors';

interface Props {}

const UserProfile: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const [showPopover, setShowPopover] = useState(false);
  const {userData} = useAppSelector(state => state.auth);
  const imageSource = userData?.avatar?.url
    ? userData?.avatar?.url
    : require('../assets/no-photo.jpg');

  return (
    <Popover
      isVisible={showPopover}
      onRequestClose={() => setShowPopover(false)}
      from={
        <Pressable onPress={() => setShowPopover(true)}>
          <Image source={imageSource} style={styles.profileImage} />
        </Pressable>
      }>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image source={imageSource} style={styles.profileImage} />
          <View>
            <Text style={styles.userName}> {userData?.name}</Text>
            <Text style={styles.userEmail}>{userData?.email}</Text>
          </View>
        </View>
        <Pressable style={styles.manageAccount}>
          <FontAwesome name="gear" size={20} />
          <Text>Manage Account</Text>
        </Pressable>
        <Pressable
          style={styles.logoutButton}
          onPress={() => dispatch(logout())}>
          <Text style={styles.buttonTitle}>Logout</Text>
        </Pressable>
      </View>
    </Popover>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: 250,
    height: 200,
    padding: 20,
    // justifyContent: 'space-between',
  },
  title: {
    color: colors.onPrimary,
    textTransform: 'capitalize',
  },

  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: colors.errorContainer,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 38,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 'auto',
  },
  buttonTitle: {
    color: colors.onErrorContainer,
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
  },
  userEmail: {
    color: colors.tertiary,
    fontSize: 12,
  },
  manageAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
    marginLeft: 15,
  },
});

export default UserProfile;
