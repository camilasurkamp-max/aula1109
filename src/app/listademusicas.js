import { Stack } from "expo-router";
import { useState } from "react";
import {Button, FlatList, StyleSheet, Text,TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Lista() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function adicionar() {
    if (texto === "") {
      return;
    }

    setLista([...lista, texto]);
    setTexto("");
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Lista de músicas" }} />

      <Text style={styles.titulo}>Minhas músicas</Text>

      <TextInput
        style={styles.campo}
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite o nome da sua música"/>

      <Button title="Adicionar" onPress={adicionar} 
      style={styles.button}
      backgroundcolor= "red"/>

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "black",
  },

  campo: {
    borderColor: "grey",
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },

  lista: {
    marginTop: 16,
  },

  item: {
    backgroundColor: "silver",
    color: "#FFFFFF",
    padding: 16,
    marginBottom: 8,
    fontSize: 16,
  },
});