import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Dados from '../context/dadosContext'
import CardImage1 from '../assets/img1.png';
import CardImage2 from '../assets/img2.png'; 
import CardImage3 from '../assets/img3.jpg';
import CardImage4 from '../assets/img4.jpg';
import Geral from './Geral'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Olá, Gustavo</Text>
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
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Geral")}>

          <Image style={styles.imagemicon} source={require('../assets/SetaDireita.png')}></Image>
        
        </TouchableOpacity>
        <Text style={styles.contentHeading}>Rendimento</Text>
        <Text style={styles.contentText}>R$</Text>
  
        <Image style={styles.setacima} source={require('../assets/SetaCima.png')}></Image>  
        <View style={styles.iconTextContainer}>
          <Text style={styles.iconText}>Receitas</Text>
          <Text style={styles.iconTextbaixo}>R$ {totalReceitas} </Text>
        </View>

        <Image style={styles.setabaixo} source={require('../assets/SetaBaixo.png')}></Image>
        <View style={styles.iconTextContainer2}>
          <Text style={styles.iconText2}>Despesas</Text>
          <Text style={styles.iconTextbaixo2}>R$ {totalDespesas}</Text>
        </View>
        
        
        
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
          <View style={styles.card}>
            <Image source={CardImage1} style={styles.cardImage} />
          </View>
          <View style={styles.card}>
            <Image source={CardImage4} style={styles.cardImage} />
          </View>
        </ScrollView>

        
        
        <Text style={styles.textoEmbaixoDosCards}>Sobre a Trivo</Text>
        
        <Text style={styles.textoEmbaixoDosCards3}>No mundo dos investimentos, a Trivo se destaca como uma empresa líder, impulsionando indivíduos e  instituições a alcançarem seus objetivos financeiros. Com uma abordagem centrada no cliente, oferecemos uma ampla gestão de investimentos sendo receitas e despesas e rendimento, adaptados às necessidades de cada cliente. Seja você um investidor iniciante ou experiente, nossos especialistas estão aqui para orientá-lo em todas as etapas do processo de gestão do seu dinheiro.</Text>
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
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 55,
    position: 'relative',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: -10,
    top: 100,
  },
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 80,
    borderWidth: 2, 
    borderColor: 'white',
    marginLeft: 120,
    top: 30
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  contentHeading: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 5,
    right: 138,
    marginTop: 20
  },
  imagemicon: {
    height: 30,
    width: 30,
    marginRight: -5,
    top: 10,
  },
  contentText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    right: 170,
  },
  setacima:{
    width: 60,
    height: 60,
    marginLeft: -310,
    top: 30
  },
  setabaixo:{
    width: 60,
    height: 60,
    marginLeft: 70,
    top: -73
  },
  iconTextContainer:{
    marginLeft: 38,
    top: -55,
  },
  iconTextContainer2:{
    marginLeft:20,
    top: -33,
  },
  iconText: {
    color: 'white',
    right: 95,
    top: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconTextbaixo: {
    color: 'white',
    fontSize: 20,
    top: 35,
    right: 95,
  },
  iconText2: {
    color: 'white',
    left: 110,
    top: -93,
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconTextbaixo2: {
    color: 'white',
    fontSize: 20,
    top: -88,
    left: 110,
  },
  iconButton: {
    position: 'absolute',
    top: 25,
    right: 40,
  },
  textCursosE: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    right: 109,
    top: -60,
  },
  cardContainer: {
    paddingHorizontal: 10,
    marginTop: 10, 
  },
  card: {
    marginLeft: 20,
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
