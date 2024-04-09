import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Dados from '../context/dadosContext'
import CardImage1 from '../assets/img1.png';
import CardImage2 from '../assets/img2.png'; 
import CardImage3 from '../assets/img3.jpg';
import CardImage4 from '../assets/img4.jpg';
import Home from './Home'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/ftPerfil.jpg')}
        style={styles.headerImage}
      />
    </View>
  );
};

const App = ({ navigation }) => {

  const { receitas, setReceitas, despesas, setDespesas } = useContext(Dados);

  let totalReceitas = receitas.reduce((soma, item) => soma + parseFloat(item.valor), 0);
  let totalDespesas = despesas.reduce((soma, item) => soma + parseFloat(item.valor), 0);

  const handleButtonPress = () => {
    console.log('Olá, Usuário');
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleButtonPress('Usuário')}>
          <AntDesign name="right" size={30} color="white" style={styles.iconRight} />
        </TouchableOpacity>
        <Text style={styles.contentHeading}>Rendimento</Text>
        <Text style={styles.contentText}>R$</Text>
        <Text style={styles.iconText}>Receitas</Text>
        <Text style={styles.iconTextbaixo}>R$ {totalReceitas} </Text>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="arrowup" size={40} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.downIconContainer}>
          <AntDesign name="arrowdown" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.iconText2}>Despesas</Text>
        <Text style={styles.iconTextbaixo2}>R$ {totalDespesas}</Text>
        <Text style={styles.textCursosE}>Cursos e links:</Text>

        {/* ScrollView para os cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={CardImage1} style={styles.cardImage} />
          </View>
          <View style={styles.card}>
            <Image source={CardImage2} style={styles.cardImage} />
          </View>
          <View style={styles.card}>
            <Image source={CardImage3} style={styles.cardImage} />
          </View>
          <View style={styles.card}>
            <Image source={CardImage4} style={styles.cardImage} />
          </View>
        </ScrollView>

        {/* Texto embaixo dos cards */}
        <Text style={styles.textoEmbaixoDosCards}>Sobre a Trivo</Text>
        
        <Text style={styles.textoEmbaixoDosCards3}>Na mundo dos investimentos, a Trivo se destaca como uma empresa líder, impulsionando indivíduos e  instituições a alcançarem seus objetivos financeiros com confiança e inteligência.
Com uma abordagem centrada no cliente, oferecemos uma ampla gama de gestão de investimentos sendo receitas e despesas e rendimento em relação as duas, adaptados às necessidades específicas de cada cliente. Seja você um investidor iniciante ou experiente, nossos especialistas estão aqui para orientá-lo em todas as etapas do processo de gestão do seu dinheiro.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: '#3BBB44',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 90,
    position: 'relative',
  },
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 80,
    position: 'absolute',
    bottom: 0,
    right: 40,
    marginVertical: 30,
    borderWidth: 2, 
    borderColor: 'white',
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  contentHeading: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
    right: 132,
    marginTop: 20
  },
  contentText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    right: 120,
  },
  iconContainer: {
    top: -10,
    right: 160,
    backgroundColor: '#7FFF00',
    borderRadius: 80,
  },
  downIconContainer: {
    left: 40,
    backgroundColor: '#7FFF00', 
    borderRadius: 80,
    top: -49
  },
  iconText: {
    color: 'white',
    right: 95,
    top: 30,
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconTextbaixo: {
    color: 'white',
    top: 35,
    right: 90,
  },
  iconText2: {
    color: 'white',
    left: 110,
    top: -93,
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconTextbaixo2: {
    color: 'white',
    top: -88,
    left: 110,
  },
  iconRight: {
    marginRight: 10,
  },
  iconButton: {
    position: 'absolute',
    top: 25,
    right: 40,
  },
  textCursosE: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    right: 130
  },
  cardContainer: {
    paddingHorizontal: 10,
    marginTop: 10, 
  },
  card: {
    width: 150,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textoEmbaixoDosCards: {
    color: 'white',
    fontSize: 20,
    marginTop: 30,
    right: 140,
    fontWeight: 'bold',
  },
  textoEmbaixoDosCards3: {
    color: 'white',
    fontSize: 15,
    marginTop: 7,
    marginLeft: 13
  },
});

export default App;
