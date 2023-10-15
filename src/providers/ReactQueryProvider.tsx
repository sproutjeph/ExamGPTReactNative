import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

import {useState} from 'react';
import {queryClient} from './queryClient';

export const ReactQueryProvider = ({children}: {children: React.ReactNode}) => {
  const [client] = useState(queryClient);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
