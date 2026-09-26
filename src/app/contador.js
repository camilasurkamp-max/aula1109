
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("contagem mudou para", contador);
  }, [contador]);

  function aumentarContador() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function diminuirContador() {
    setContador((valorAtual) => valorAtual - 1);
  }

  return (
    <View style={styles.tela}>
      <View style={styles.cabecalho}>
        <Text style={styles.cartaoTitulo}>Contador</Text>
        <Text style={styles.contador}>{contador}</Text>
      </View>

      <View style={styles.cartao}>
        <Button title="+" onPress={aumentarContador} />
        <Button title="-" onPress={diminuirContador} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cabecalho: {
    backgroundColor: "silver",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 8,
  },
  cartao: {
    marginBottom: 50,
    gap: 12,
  },
  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  contador: {
    fontSize: 50,
    color: "blue",
    textAlign: "center",
    padding: 35,
  },
});