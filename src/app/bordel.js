import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("tarefas.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    texto TEXT NOT NULL
  );
`);

// Adiciona a coluna caso o banco já exista com a estrutura antiga.
const colunas = db.getAllSync("PRAGMA table_info(tarefas)");
if (!colunas.some((coluna) => coluna.name === "cor")) {
  db.execSync("ALTER TABLE tarefas ADD COLUMN cor TEXT NOT NULL DEFAULT ''");
}

function listar() {
  return db.getAllSync("SELECT * FROM tarefas ORDER BY id DESC");
}

function adicionar(nome, cor) {
  db.runSync("INSERT INTO tarefas (texto, cor) VALUES (?, ?)", [nome, cor]);
}

function excluirTodas() {
  db.runSync("DELETE FROM tarefas");
}

export default function ListaDb() {
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");
  const [lista, setLista] = useState([]);

  function carregar() {
    setLista(listar());
  }

  useEffect(() => {
    carregar();
  }, []);

  function salvar() {
    const nomeLimpo = nome.trim();
    if (!nomeLimpo) return;

    adicionar(nomeLimpo, cor.trim());
    setNome("");
    setCor("");
    carregar();
  }

  function apagarTudo() {
    excluirTodas();
    carregar();
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Nome bordel" }} />

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Novo bordel"
      />

      <TextInput
        style={styles.campo}
        value={cor}
        onChangeText={setCor}
        placeholder="Nova cor"
      />

      <Button title="Adicionar bordel" color="black" onPress={salvar} />
      <Button title="Atualizar" color="purple" onPress={carregar} />
      <Button title="Apagar todos" color="blue" onPress={apagarTudo} />

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.texto}{item.cor ? ` — ${item.cor}` : ""}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor:"white",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  campo: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "black",
    marginBottom: 12,
  },
  lista: {
    flex: 1,
    marginTop: 16,
  },
  item: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    fontSize: 15,
    color: "black",
  },
});