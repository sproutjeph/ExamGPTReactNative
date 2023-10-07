import HomeLink from '@components/HomeLink';
import GridView from '@ui/GridView';
import {routes} from '@utils/constants';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <GridView
        data={routes}
        renderItem={item => {
          return <HomeLink item={item} key={item.route} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
});

export default Home;
