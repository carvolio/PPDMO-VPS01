import './App.css';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from 'react-native';

function App1({ isVisible, tituloEnquete, setTituloEnquete, opcaoEnquete, setOpcaoEnquete, loading, adicionarEnquete }) {
  return (
    <View>
        <Text>Titulo da Enquete</Text>
        <TextInput
        placeholder="Digite o titulo da enquete"
        value={tituloEnquete}
        onChangeText={setTituloEnquete}
        />

        <Text>Opções da Enquete</Text>
        <TextInput
        placeholder="Digite Sim ou Não para a enquete"
        value={opcaoEnquete}
        onChangeText={setOpcaoEnquete}
        />4
        <Button
        title={loading? "Adicionando..." : "Adicionar Enquete"}
        onPress={adicionarEnquete}
        color="#6b8e23"
        />
    </View>
  );
}

export default App1;