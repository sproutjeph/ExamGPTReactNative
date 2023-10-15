import {ReactQueryProvider} from '@providers/ReactQueryProvider';
import {ReduxProviders} from '@providers/ReduxProvider';
import AppNavigator from '@navigation/index';
import Snackbar from '@components/Snackbar';
import React from 'react';

const App = ({}) => {
  return (
    <ReactQueryProvider>
      <ReduxProviders>
        <Snackbar />
        <AppNavigator />
      </ReduxProviders>
    </ReactQueryProvider>
  );
};

export default App;
