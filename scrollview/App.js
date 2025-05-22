import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View  style={styles.container10}>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={{height: 1}}>


<View style={styles.container1}>
 <Text style={styles.text1}>Section 1</Text>
</View>
<View style={styles.container2}>
 <Text style={styles.text2}>Section 2</Text>
</View>
<View style={styles.container3}>
<Text style={styles.text3}>Section 3</Text>
</View>
<View style={styles.container41}>
<Text style={styles.text4}>Section 4</Text>
</View>
<View style={styles.container5}>
 <Text style={styles.text5}>Section 5</Text>
</View>
<View style={styles.container6}>
 <Text style={styles.text6}>Section 6</Text>
</View>
<View style={styles.container7}>
<Text style={styles.text7}>Section 7</Text>
</View>
<View style={styles.container8}>
<Text style={styles.text8}>Section 8</Text>
</View>
<View style={styles.container9}>
 <Text style={styles.text9}>Section 9</Text>
</View>
<View style={styles.container20}>
 <Text style={styles.text20}>Section 10</Text>
</View>

  
</ScrollView>

    <View style={styles.root2}>
          <ScrollView contentContainerStyle={{ height: 1600 }}>   
          <View style={styles.containerb}>
  <View style={styles.subcontainer1b}>
  <Text style={styles.subtext}>Place for Introductory Image/Video</Text>
  </View>
  </View> 
          <View style={styles.containerb}>
  <View style={styles.subcontainer1bhalf}>
  <Text style={styles.subtext}>Halves</Text>
  </View>
 
  
  <View style={styles.subcontainer2bhalf}>
  <ScrollView contentContainerStyle={{ height: 1300}} nestedScrollEnabled={true}>
  <Text style={styles.subtext}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</Text>
  </ScrollView>
  </View>

  </View>

  <View style={styles.containerb}>
  <View style={styles.subcontainer2bthird}>
  <Text style={styles.subtext}>Thirds</Text>
  </View>
  <View style={styles.subcontainer1bthird}>
  <Text style={styles.subtext}>Thirds</Text>
  </View>
  <View style={styles.subcontainer2bthird2}>
  <Text style={styles.subtext}>Thirds</Text>
  </View>
  </View>

  <View style={styles.containerb}>
  <View style={styles.subcontainer1bfourth}>
  <Text style={styles.subtext}>Fourths</Text>
  </View>
  <View style={styles.subcontainer2bfourth}>
  <Text style={styles.subtext}>Fourths</Text>
  </View>
  <View style={styles.subcontainer1bfourth2}>
  <Text style={styles.subtext}>Fourths</Text>
  </View>
  <View style={styles.subcontainer2bfourth2}>
  <Text style={styles.subtext}>Fourths</Text>
  </View>
  </View>

  <View style={styles.containerb}>
  <View style={styles.subcontainer2bfifth}>
  <Text style={styles.subtext}>Fifths</Text>
  </View>
  <View style={styles.subcontainer1bfifth}>
  <Text style={styles.subtext}>Fifths</Text>
  </View>
  <View style={styles.subcontainer2bfifth2}>
  <Text style={styles.subtext}>Fifths</Text>
  </View>
  <View style={styles.subcontainer1bfifth2}>
  <Text style={styles.subtext}>Fifths</Text>
  </View>
  <View style={styles.subcontainer2bfifth3}>
  <Text style={styles.subtext}>Fifths</Text>
  </View>
  </View>
          </ScrollView>
        </View>

    <View style={styles.container4}>
      <Text style={styles.innerText4}> Footer </Text>
    </View>

  </View>
  );
}



const styles = StyleSheet.create({
   container1: {
    backgroundColor: '#7400b8',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    width: 115,
    height: 310,
  },
  text1: {
    fontSize: 20,
    color:"white"
  },
  container2: {
    height: 310,
    backgroundColor: '#6930c3',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 115
  },
  text2: {
    fontSize: 20,
    color:"white"
  },
  container3: {
    backgroundColor: '#5e60ce',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 115,
    height: 310,
  
  },
  text3: {
    fontSize: 20,
    color:"white"
  },

  container41: {
    backgroundColor: '#5390d9',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 115,
    height: 310,
  },

  text4: {
    fontSize: 20,
    color:"white"
  },

  container5: {
    backgroundColor: '#4ea8de',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    width: 115,
    height: 310,
  },
  text5: {
    fontSize: 20,
    color:"white"
  },

  container6: {
    backgroundColor: '#48bfe3',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    width: 115,
    height: 310,
  },
  text6: {
    fontSize: 20,
    color:"white"
  },

  container7: {
    backgroundColor: '#56cfe1',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    width: 115,
    height: 310,
  },
  text7: {
    fontSize: 20,
    color:"white"
  },

  container8: {
    backgroundColor: '#64dfdf',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    width: 115,
    height: 310,
  },
  text8: {
    fontSize: 20,
    color:"white"
  },

  container9: {
    backgroundColor: '#72efdd',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    width: 115,
    height: 310,
  },
  text9: {
    fontSize: 20,
    color:"white"
  },

  container20: {
    backgroundColor: '#80ffdb',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    width: 115,
    height: 310,
  },
  text20: {
    fontSize: 20,
    color:"white"
  },

  container4: {
    flex: .43,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerText1: {
    fontWeight: 'semibold',
    fontFamily: 'serif',
    fontSize: 25
  },

  innerText4: {
    fontWeight: 'semibold',
    fontFamily: 'serif',
    fontSize: 27,
    color: 'white'
  },

  container10: {
    flex: 1,
  },

  root2: {
    flex: 1, 
  },

  box1: {
    height: 100,
    backgroundColor: 'blue',
  },
  box2: {
    height: 100,
    backgroundColor: 'purple',
  },

  containerb: { flex: 1, flexDirection: 'row' },

  subcontainer1b: {
    flex: 1,
    backgroundColor: '#ff006e',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subcontainer1bhalf: {
    flex: 1,
    backgroundColor: '#00bbdd',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer2bhalf: {
    flex: 1,
    backgroundColor: '#ff6699',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subcontainer1bthird: {
    flex: 1,
    backgroundColor: '#9d0208',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer2bthird: {
    flex: 1,
    backgroundColor: '#003566',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer2bthird2: {
    flex: 1,
    backgroundColor: '#15616d',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subcontainer1bfourth: {
    flex: 1,
    backgroundColor: '#bbd0ff',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer2bfourth: {
    flex: 1,
    backgroundColor: '#c8b6ff',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer2bfourth2: {
    flex: 1,
    backgroundColor: '#ffd6ff',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer1bfourth2: {
    flex: 1,
    backgroundColor: '#f5cac3',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subcontainer1bfifth: {
    flex: 1,
    backgroundColor: '#ffbe0b',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer2bfifth: {
    flex: 1,
    backgroundColor: '#ff4d6d',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer2bfifth2: {
    flex: 1,
    backgroundColor: '#00b4d8',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer1bfifth2: {
    flex: 1,
    backgroundColor: '#7b2cbf',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer2bfifth3: {
    flex: 1,
    backgroundColor: '#008000',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtext: {
    fontSize: 20,
    color:"white"
  },
});
