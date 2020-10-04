import React from 'react';
import 'react-native-gesture-handler';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './src/contexts/auth';

const App: React.FC = () => {
  const { signed } = useAuth();

  console.log(signed);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
