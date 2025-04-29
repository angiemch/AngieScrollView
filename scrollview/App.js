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
      <Text>Section 2</Text>
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
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  container3: {
    flex: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  container4: {
    flex: .8,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
});