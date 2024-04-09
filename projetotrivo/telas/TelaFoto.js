import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

async function pickImage(setImageUri) {
  // Pedir permissão para acessar a biblioteca de fotos
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permissão necessária', 'Você precisa conceder permissões da biblioteca de fotos para fazer isso funcionar!');
    return;
  }

  // Permitir que o usuário selecione uma imagem da biblioteca
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.cancelled) {
    setImageUri(result.uri);
  }
}

export default function App({ navigation }) {
  const [imageUri, setImageUri] = useState(null);

  const takePhoto = async () => {
    // Pedindo permissão para acessar a câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Você precisa conceder permissões de câmera para fazer isso funcionar!');
      return;
    }

    // Abrir a câmera para o usuário tirar uma foto
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Permite editar a foto após capturar
      aspect: [1, 1], // Aspecto da área de edição, se a edição estiver habilitada
      quality: 1, // Qualidade da imagem
    });

    // Se a foto foi tirada e não cancelada, atualizar o estado da imagem
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logocompleta.png')} style={styles.logo} />

      <View style={styles.buttonContainer}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        <TouchableOpacity onPress={() => pickImage(setImageUri)} style={styles.buttonFoto}>
          <Text style={styles.buttonFotoText}>Escolher Foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        <TouchableOpacity title="Tirar Foto" onPress={takePhoto} style={styles.buttonFoto}>
          <Text style={styles.buttonFotoText}>Tirar Foto</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.buttonSalvar, styles.entryButton]} onPress={() => navigation.navigate("TelaInicio")}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
        <Text style={styles.btnVoltar}>☚</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  buttonContainer: {
    marginTop: 20, // Adicionando margem entre a imagem e o botão
    alignItems: 'center', // Centraliza horizontalmente
  },
  buttonFoto: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza verticalmente
    width: 175,
    padding: 10,
    margin: 10,
    borderRadius: 18,
    borderColor: 'white',
    borderWidth: 3,
  },
  buttonSalvar:{
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza verticalmente
    width: 175,
    padding: 10,
    margin: 10,
    borderRadius: 18,
    borderColor: '#7FFF00',
    borderWidth: 3,
  },
  buttonFotoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
  buttonText: {
    color: '#7FFF00',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnVoltar: {
    color: '#7FFF00',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

// Exportação padrão do componente
