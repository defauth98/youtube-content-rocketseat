import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from '../routes/app.routes';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
  // Se dentro do AppRoutes tiver um botão de logout que mude o estado do signed
  // O app vai voltar para as rotas de autenticação
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
