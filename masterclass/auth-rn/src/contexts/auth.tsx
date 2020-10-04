import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';

// O que o contexto irá passar para o outros componentes
interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

// Como o objeto de contexto vai iniciar
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Componente de contexto que irá por volta de todos os outros componentes
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNauth:user');
      const storagedToken = await AsyncStorage.getItem('@RNauth:token');

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadSoragedData();
  }, []);

  async function signIn() {
    // Requisição a api que vai fazer com que o usuário logue na aplicação
    const response = await auth.signIn();

    setUser(response.user);

    // Seta o token como padrão para todas as requisições
    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    // Use o multi get ao inver de dois await um seguido do outro
    await AsyncStorage.setItem('@RNauth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNauth:token', JSON.stringify(response.token));
  }

  async function signOut() {
    // Limpa a informação no asyncstorage
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    // O estado se o usuário está logado ou não depende se algo dentro do estado "user"
    // Ou seja se existir algo dentro do user ele irá retornar true
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
