import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthStackParamList} from 'src/@types/navigation';

interface Props {
  item: {
    label: string;
    icon: string;
    route: string;
    backgroundColor: any;
    color: any;
  };
}

const HomeLink: FC<Props> = ({item}) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  return (
    <Pressable
      style={[styles.container, {backgroundColor: item.backgroundColor}]}
      onPress={() => {
        navigation.navigate(item.route);
      }}>
      <Icon name={item.icon} size={30} />
      <Text style={{color: item.color}}>{item.label}</Text>
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
