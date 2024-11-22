import './App.css';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from 'react-native';
import { tituloEnquete, setTituloEnquete, opcaoEnquete, setOpcaoEnquete, loading, adicionarEnquete } from './App';

function App2({ isVisible }) {
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
        />
        <Button
        title={loading? "Adicionando..." : "Adicionar Enquete"}
        onPress={adicionarEnquete}
        color="#6b8e23"
        />
    </View>
  );
}

export default App2;