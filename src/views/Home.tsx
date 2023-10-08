import HomeLink from '@components/HomeLink';
import GridView from '@ui/GridView';
import colors from '@utils/colors';
import {routes} from '@utils/constants';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <View>
      <Text style={styles.title}>Solve O-Level Past Questions with AI</Text>
      <Text style={styles.subTitle}>
        Learn with the smartest AI - Experience the power of AI
      </Text>
      <View style={styles.gridContainer}>
        <GridView
          data={routes}
          renderItem={item => {
            return <HomeLink item={item} key={item.route} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: colors.primary,
  },
  subTitle: {
    textAlign: 'center',
    color: colors.tertiary,
  },
  gridContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
});

export default Home;
