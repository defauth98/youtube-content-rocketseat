import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useAuth } from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { signed, signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sing In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default SignIn;
