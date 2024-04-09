import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import Dados from '../context/dadosContext';

const App = ({ navigation }) => {
  const [recipeName, setRecipeName] = useState('');
  const [originLocation, setOriginLocation] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  const { despesas, setDespesas } = useContext(Dados);

  const handleRegistration = () => {
    let aux = [...despesas];

    if (recipeName === '' || date === '' || value === 0) {
      return Alert.alert('Os campos são obrigatórios');
    }

    aux.push({
      nome: recipeName,
      data: date,
      valor: value,
    });
    setDespesas(aux);

    navigation.navigate('Despesas');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logocompleta.png')}
        style={styles.logo}
      />
      <Text style={styles.addRecipesText}>ADICIONAR DESPESAS</Text>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>Nome da despesas</Text>
          <TextInput
            style={[styles.input, styles.roundedInput]}
            placeholder="Insira o nome da despesa"
            placeholderTextColor="#FFF"
            value={recipeName}
            onChangeText={setRecipeName}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '94%',
        }}>
        <View style={[styles.inputContainer, { width: '35%' }]}>
          <View>
            <Text style={styles.label}>Data</Text>
            <TextInput
              style={styles.input}
              placeholder="___/___/___"
              placeholderTextColor="#FFF"
              value={date}
              onChangeText={setDate}
            />
          </View>
        </View>

        <View style={[styles.inputContainer, { width: '35%' }]}>
          <View>
            <Text style={styles.label}>Valor</Text>
            <TextInput
              style={styles.input}
              placeholder="R$--------,--"
              placeholderTextColor="#FFF"
              keyboardType="numeric"
              value={value}
              onChangeText={setValue}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
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
  addRecipesText: {
    color: '#7FFF00',
    fontSize: 20,
    marginBottom: 40,
    marginTop: -30,
    fontWeight: '900',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 8,
    marginTop: 2,
  },
  input: {
    backgroundColor: '#000',
    color: '#FFF',
    fontSize: 14,
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  roundedInput: {
    borderRadius: 30,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5269FF',
    alignItems: 'center',
    width: 175,
    padding: 10,
    margin: 10,
    borderRadius: 18,
    borderColor: '#5269FF',
    borderWidth: 3,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;
