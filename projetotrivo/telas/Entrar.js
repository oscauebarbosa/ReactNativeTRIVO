import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Vibration } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const App = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticatedMessage, setAuthenticatedMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware) {
      setErrorMessage('Dispositivo não possui hardware de biometria.');
    } else if (!isEnrolled) {
      setErrorMessage('Biometria não está configurada neste dispositivo.');
    }
  };

  const authenticateUser = async () => {
    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autentique-se',
      cancelLabel: 'Cancelar',
      fallbackLabel: 'Use senha',
    });

    if (success) {
      setAuthenticatedMessage('Autenticado com sucesso');
      Vibration.vibrate();
      setShowAlert(true);
    } else {
      setErrorMessage('Falha na autenticação');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo-completa.png')} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu email"
          placeholderTextColor="#FFF"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua Senha"
          placeholderTextColor="#FFF"
        />
      </View>

      <TouchableOpacity style={styles.buttonEntry} onPress={() => navigation.navigate("TelaInicio")}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
        <Text style={styles.cadastroText}>Não possui uma conta? Cadastre-se!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={authenticateUser} style={styles.buttonBiometria}>
        <Image source={require('./assets/digital.png')} style={styles.icon} />
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      {showAlert && (
        <View style={styles.alertCard}>
          <Text style={styles.alertText}>{authenticatedMessage}</Text>
          <Image source={require('./assets/verificar.png')} style={styles.checkImage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 210,
    height: 230,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 2,
  },
  input: {
    backgroundColor: '#000',
    color: '#FFF',
    fontSize: 14,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 43,
  },
  buttonEntry: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: 175,
    padding: 10,
    margin: 10,
    borderRadius: 18,
    borderColor: '#7FFF00',
    borderWidth: 3,
  },
  buttonText: {
    color: '#7FFF00',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cadastroText: {
    color: '#7FFF00',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  buttonBiometria: {
    top: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 90,
    height: 90,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 14,
    marginTop: 10,
  },
  alertCard: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
  alertText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  checkImage: {
    width: 30,
    height: 30,
  },
});

export default App;