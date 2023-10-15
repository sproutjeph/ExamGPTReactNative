import Snackbar from '@components/Snackbar';
import AppNavigator from '@navigation/index';
import {ReactQueryProvider} from '@providers/ReactQueryProvider';
import {ReduxProviders} from '@providers/ReduxProvider';
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
