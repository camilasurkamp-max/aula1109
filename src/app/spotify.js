import { Stack, router } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Spotify() {
  return (
    //tela


   <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Abrir atividade" }} />

    <View style={styles.tela}>
      <StatusBar style="light" />

      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <View style={styles.perfil} />
        <Text style={styles.titulo}>Sua Biblioteca</Text>
      </View>

      {/* Filtros */}
      <View style={styles.filtros}>
        <View style={styles.filtro}>
          <Text style={styles.textoFiltro}>Playlists</Text>
        </View>
        <View style={styles.filtro}>
          <Text style={styles.textoFiltro}>Podcasts</Text>
        </View>
        <View style={styles.filtro}>
          <Text style={styles.textoFiltro}>Álbuns</Text>
        </View>
        <View style={styles.filtro}>
          <Text style={styles.textoFiltro}>Artistas</Text>
        </View>
      </View>

      <View style={styles.recentes}>
        <View style={styles.ordenacao}>
          <View style={styles.icone} />
          <Text style={styles.textoFiltro}>Recentes</Text>
        </View>
        <View style={styles.icone} />
      </View>

      {/* Lista da biblioteca */}
      <ScrollView style={styles.lista} showsVerticalScrollIndicator={false}>
        <View style={styles.item}>
          <View style={styles.foto} />
          <View style={styles.informacoes}>
            <Text style={styles.nome}>Músicas curtidas</Text>
            <View style={styles.linhaDescricao}>
              <View style={styles.fixado} />
              <Text style={styles.descricao}>Playlist · Mila</Text>
            </View>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.foto} />
          <View style={styles.informacoes}>
            <Text style={styles.nome}>Rihanna</Text>
            <View style={styles.linhaDescricao}>
              <View style={styles.fixado} />
              <Text style={styles.descricao}>Artista</Text>
            </View>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.foto} />
          <View style={styles.informacoes}>
            <Text style={styles.nome}>As suas músicas mais ouvidas em 2023</Text>
            <View style={styles.linhaDescricao}>
              <View style={styles.fixado} />
              <Text style={styles.descricao}>Playlist · Feita para Mila</Text>
            </View>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.foto} />
          <View style={styles.informacoes}>
            <Text style={styles.nome}>As mais tocadas no seu 2022</Text>
            <View style={styles.linhaDescricao}>
              <View style={styles.fixado} />
              <Text style={styles.descricao}>Playlist · Feita para Mila</Text>
            </View>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.foto} />
          <View style={styles.informacoes}>
            <Text style={styles.nome}>Novos episódios</Text>
            <Text style={styles.descricao}>Atualizado ontem</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.foto} />
          <View style={styles.informacoes}>
            <Text style={styles.nome}>ARIRANG</Text>
            <Text style={styles.descricao}>Álbum · BTS</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.foto} />
          <View style={styles.informacoes}>
            <Text style={styles.nome}>Arctic Monkeys</Text>
            <Text style={styles.descricao}>Artista</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.foto} />
          <View style={styles.informacoes}>
            <Text style={styles.nome}>This Is Tate McRae</Text>
            <Text style={styles.descricao}>Playlist · Spotify</Text>
          </View>
        </View>
      </ScrollView>

      {/* Música */}
      <View style={styles.musica}>
        <View style={styles.capaMusica} />
        <View style={styles.informacoes}>
          <Text style={styles.nomeMusica}>Better</Text>
          <Text style={styles.artistaMusica}>Khalid</Text>
        </View>
        <View style={styles.controlesMusica}>
          <View style={styles.icone} />
          <View style={styles.icone} />
          <View style={styles.icone} />
        </View>
      </View>

      {/* Menu de baixo */}
      <View style={styles.menu}>
        <View style={styles.opcaoMenu}>
          <View style={styles.iconeMenu} />
          <Text style={styles.textoMenu}>Início</Text>
        </View>
        <View style={styles.opcaoMenu}>
          <View style={styles.iconeMenu} />
          <Text style={styles.textoMenu}>Buscar</Text>
        </View>
        <View style={styles.opcaoMenu}>
          <View style={styles.iconeMenu} />
          <Text style={styles.textoMenuSelecionado}>Sua Biblioteca</Text>
        </View>
        <View style={styles.opcaoMenu}>
          <View style={styles.iconeMenu} />
          <Text style={styles.textoMenu}>Criar</Text>
        </View>
      </View>
    </View>
     <Button title="VOLTAR" onPress={() => router.back()} />

     </SafeAreaView>
  );
}
//caixinhas 
const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#111111',
    paddingTop: 45,
    paddingBottom: 30,
    paddingHorizontal: 12,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  perfil: {
    width: 30,
    height: 30,
    backgroundColor: '#888888',
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  filtros: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 20,
  },
  filtro: {
    flex: 1,
    backgroundColor: '#292929',
    paddingVertical: 10,
    alignItems: 'center',
  },
  textoFiltro: {
    color: 'white',
    fontSize: 13,
  },
  recentes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  ordenacao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icone: {
    width: 16,
    height: 16,
    backgroundColor: '#aaaaaa',
  },
  lista: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 15,
  },
  foto: {
    width: 55,
    height: 55,
    backgroundColor: '#888888',
  },
  informacoes: {
    flex: 1,
  },
  nome: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4,
  },
  linhaDescricao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  fixado: {
    width: 8,
    height: 8,
    backgroundColor: '#aaaaaa',
  },
  descricao: {
    flexShrink: 1,
    color: '#b3b3b3',
    fontSize: 12,
  },
  musica: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#06466a',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  capaMusica: {
    width: 40,
    height: 40,
    backgroundColor: '#888888',
  },
  nomeMusica: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  artistaMusica: {
    color: '#c6d5df',
    fontSize: 12,
  },
  controlesMusica: {
    flexDirection: 'row',
    gap: 12,
  },
  menu: {
    flexDirection: 'row',
    marginTop: 15,
  },
  opcaoMenu: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  iconeMenu: {
    width: 22,
    height: 22,
    backgroundColor: '#aaaaaa',
  },
  textoMenu: {
    color: '#b3b3b3',
    fontSize: 11,
    textAlign: 'center',
  },
  textoMenuSelecionado: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
  },
});