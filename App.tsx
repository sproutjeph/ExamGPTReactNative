import AppNavigator from '@navigation/index';
import {ReduxProviders} from '@providers/ReduxProvider';
import React from 'react';

const App = ({}) => {
  return (
    <ReduxProviders>
      <AppNavigator />
    </ReduxProviders>
  );
};

export default App;
