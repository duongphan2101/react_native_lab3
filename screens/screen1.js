import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.style1}>
            <Text style={{
                color: 'green',
                fontSize: 30,
                fontWeight: 'bold'
            }}>
                Order your favorite!
            </Text>
        </View>
            <View style={styles.style2}>
                <Image source={require('../assets/Image_96.png')}
                    style={{width: 150, height: 150, marginLeft: 215,}}
                />
                <Image source={require('../assets/Image 95.png')}
                    style={{width: 150, height: 150, marginLeft: 20, marginTop: -25}}
                />
                <Image source={require('../assets/Image 97.png')}
                    style={{width: 150, height: 150, marginLeft: 200, marginTop: 30,}}
                />
        </View>
        <View style={styles.style3}>
                <TouchableOpacity style={{
                    backgroundColor: 'green',
                    borderRadius: 40,
                    width: 60,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={() => {
                    navigation.navigate("Scr2") }}>
                <Text>
                    Get Started
                </Text>
                </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  style1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  style2: {
    flex: 3,
    backgroundColor: '#fff',
  },
  style3: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});