import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const App = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleButtonPress = () => {
    navigation.navigate("Home", { username });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logocompleta.png')} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome de usuário</Text>
        <TextInput
          style={styles.input}
          placeholder=" Digite seu nome"
          placeholderTextColor="#FFF"
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder=" Insira seu email"
          placeholderTextColor="#FFF"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder=" Insira sua Senha"
          placeholderTextColor="#FFF"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.entryButton]} onPress={() => navigation.navigate("TelaInicio")}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Entrar")}>
        <Text style={styles.entrarText}>
          Já possui uma conta? Entre!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
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
    marginTop: 2
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
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    alignItems: 'center',
    width: 175,
    padding: 10,
    margin: 10,
    borderRadius: 18,
    borderColor: '#7FFF00',
    borderWidth: 3
  },
  buttonText: {
    color: '#7FFF00',
    fontSize: 20,
    fontWeight: 'bold'
  },
  entrarText: {
    color: '#7FFF00',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  }
});

export default App;