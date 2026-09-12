import { Stack, router } from "expo-router";
import { Button, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Prova() {
  return (


    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Abrir prova" }} />

    <View style={styles.tela}>


      {/* cabeçalho é fio da tela e pai do resto que ta nele */}
      <View style={styles.cabecalho}>
        <View style={styles.circulo} />



{/*filhos do cabecalho*/}
        <View style={styles.textoCabecalho}>
          <Text style={styles.titulo}>React Native</Text>
          <Text style={styles.subtitulo}>Avaliação dia 04/09</Text>
        </View>
      </View>

      


      {/* retangulo */}
      <View style={styles.conteudo}>
        <View style={styles.cartao}>
          <Text style={styles.textoCartao}>
            Batatas são macias.
          </Text>
        </View>



{/*botao*/}

        <View style={styles.botao}>
          <Text style={styles.textoBotao}>ENVIAR</Text>
        </View>
      </View>

 </View>
     <Button title="VOLTAR" onPress={() => router.back()} />

     </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor:'silver',  //n lembrei da cor em numero, perdão
    paddingTop: 50,
    paddingHorizontal: 20,
  },


  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },


  circulo: {
    height:70,
    width:70,
    borderRadius:35,
    backgroundColor: 'pink',
  },


  textoCabecalho: {
    justifyContent: 'center',
  },


  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',    //escrevendo as cores pois n lembro delas de cor
  },



  subtitulo: {
    fontSize: 16,
    color: 'gray',   //mesma coisa 
  },


  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,



  },


  cartao: {
    width: 410,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  
  },




  textoCartao: {
    fontSize: 16,
    color: 'black',
  },



  botao: {
    width: 230,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },




  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});
