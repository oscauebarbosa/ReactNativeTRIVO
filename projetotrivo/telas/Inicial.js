import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';


const App = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logocompleta.png')} style={styles.logo} />

      <TouchableOpacity style={[styles.button, styles.entryButton]} 
      onPress={() => navigation.navigate("Entrar")}>
          <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.entryButton]} 
        onPress={() => navigation.navigate("Cadastrar")}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
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
    justifyContent: 'center'
  },
  logo: {
    width: 210,
    height: 230,
    marginBottom: 20,
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
  },
  buttonText: {
    color: '#7FFF00',
    fontSize: 20,
    fontWeight: 'bold'
  },
  entryButton: {
    borderColor: '#7FFF00',
    borderWidth: 3,
  },
});

export default App;