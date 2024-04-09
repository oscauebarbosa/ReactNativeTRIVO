import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dados from './context/dadosContext';
import Inicial from './telas/Inicial';
import Entrar from './telas/Entrar';
import Cadastrar from './telas/Cadastrar';
import TelaFoto from './telas/TelaFoto';
import TelaInicio from './telas/TelaInicio';
import Home from './telas/Home';
import Receitas from './telas/Receitas';
import AddReceitas from './telas/AddReceitas';
import Despesas from './telas/Despesas';
import AddDespesas from './telas/AddDespesas';

const Stack = createStackNavigator();

export default function App() {
  const [entrar, setEntrar] = useState([]);
  const [cadastrar, setCadastrar] = useState([]);
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  return (
    <Dados.Provider
      value={{
        entrar,
        setEntrar,
        cadastrar,
        setCadastrar,
        receitas,
        setReceitas,
        despesas,
        setDespesas,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="TelaFoto">
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="Entrar" component={Entrar} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
          <Stack.Screen name="TelaFoto" component={TelaFoto} />
          <Stack.Screen name="TelaInicio" component={TelaInicio} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Receitas" component={Receitas} />
          <Stack.Screen name="AddReceitas" component={AddReceitas} />
          <Stack.Screen name="Despesas" component={Despesas} />
          <Stack.Screen name="AddDespesas" component={AddDespesas} />
        </Stack.Navigator>
      </NavigationContainer>
    </Dados.Provider>
  );
}
