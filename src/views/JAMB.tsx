import AppPopover from '@ui/AppPopover';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Jamb: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>JAMB PAST QUESTION</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {/* <SubjectButton /> */}

        <AppPopover
          title="English"
          content={[{examYear: 2010}, {examYear: 2011}, {examYear: 2012}]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Jamb;
