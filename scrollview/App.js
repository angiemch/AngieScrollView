import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text>navbar</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container2}>
      <Text>Image/Video</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container3}>

    <View style={styles.subcontainer3}/>
    <Text style={styles.subcontainter3}>Halfs</Text>
    <View style={styles.subcontainer3b}/>
    <Text style={styles.subcontainer3b}>Halfs</Text>

      <StatusBar style="auto" />
    </View>
    <View style={styles.container4}>
      <Text>Footer</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  totalcontainer: { height: '100%', width: '100%' },

  container: { flex: 1, flexDirection: 'row' },
  
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  container3: {
    flex: 5,
    backgroundColor: 'pink',
    flexDirection: 'row'
  },
  subcontainer3: {
    flex: 5,
    backgroundColor: 'powderblue',
    flexDirection: 'row',
    textAlign: 'center'
  },
  subcontainer3b: {
    flex: 4,
    backgroundColor: 'pink',
    flexDirection: 'row'
  },
  container4: {
    flex: .8,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
});