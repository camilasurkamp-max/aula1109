import { Stack, router } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, TouchableHighlight } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Aula01() {
  return (

     <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Abrir" }} />

    <View style={styles.container}>
      <Text>goforit</Text>
      <Button
  title="Veja Mais"
  color="#f50f8d"
  accessibilityLabel="Learn more about this purple button"/>
  <Pressable >
  <Text>hellou</Text>
</Pressable>

<TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD"
  onPress={() => alert('Pressed!')}>
  <Text>Batata</Text>
</TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  
<Button title="VOLTAR" onPress={() => router.back()} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});