import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Pressable} from 'react-native';
import React, {FC, useState} from 'react';
import colors from '@utils/colors';

interface Props {}

const AppCheckButton: FC<Props> = ({}) => {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setChecked(!checked);
      }}
      style={styles.selectorContainer}>
      {checked ? (
        <MaterialComIcon
          name="checkbox-marked"
          color={colors.primary}
          size={24}
        />
      ) : (
        <MaterialComIcon
          name="checkbox-blank-outline"
          color={colors.secondary}
          size={24}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selectorContainer: {},
});

export default AppCheckButton;
