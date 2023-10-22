import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface Props {
  data: any[];
  buttontext: string;
}

const AppSelect: FC<Props> = ({data, buttontext}) => {
  return (
    <View style={styles.container}>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem;
        }}
        rowTextForSelection={item => {
          return item;
        }}
        renderDropdownIcon={() => (
          <MaterialComIcon name="chevron-down" size={20} />
        )}
        dropdownStyle={styles.buttonStyle}
        defaultButtonText={buttontext}
        buttonTextStyle={styles.buttonText}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonStyle: {
    padding: 0,
    borderRadius: 4,
    maxWidth: 150,
    margin: 0,
  },
  buttonText: {
    fontSize: 13,
  },
});

export default AppSelect;
