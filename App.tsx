import Snackbar from '@components/Snackbar';
import AppNavigator from '@navigation/index';
import {ReduxProviders} from '@providers/ReduxProvider';
import React from 'react';

const App = ({}) => {
  return (
    <ReduxProviders>
      <Snackbar />
      <AppNavigator />
    </ReduxProviders>
  );
};

export default App;
