import SelectDropdown from 'react-native-select-dropdown';
import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface Props {}

const AppSelect: FC<Props> = ({}) => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <View style={styles.container}>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppSelect;
