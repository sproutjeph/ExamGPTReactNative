import colors from '@utils/colors';
import React, {FC} from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  item: {
    label: string;
    icon: string;
    route: string;
    backgroundColor: any;
  };
}

const HomeLink: FC<Props> = ({item}) => {
  return (
    <Pressable style={[styles.container]}>
      <Icon name={item.icon} size={30} />
      <Text>{item.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    gap: 2,
  },
});

export default HomeLink;
