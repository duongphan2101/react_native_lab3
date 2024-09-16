import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import React, {useState} from 'react';

export default function App({navigation}) {
    const [data, setData] = useState([
        {key: '1', type: 'Vegetable', name: 'Apple', price: '28.00', image: require('../assets/Image 101.png'), sl: 1},
        {key: '1', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/Image 102.png'), sl: 2},
        {key: '1', type: 'Vegetable', name: 'Avocado', price: '28.00', image: require('../assets/Image 103.png'), sl: 3},
        {key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Image 105.png'), sl: 1},
        {key: '1', type: 'Vegetable', name: 'Orange', price: '28.00', image: require('../assets/Image 106.png'), sl: 4},
        {key: '1', type: 'Vegetable', name: 'Peach', price: '28.00', image: require('../assets/Image 107.png'), sl: 1},
        {key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Image 105.png'), sl: 1},

        {key: '1', type: 'Seafood', name: 'Seafood 1', price: '28.00', image: require('../assets/Image 95.png')},
        {key: '1', type: 'Seafood', name: 'Seafood 2', price: '28.00', image: require('../assets/Image 95.png')},
        {key: '1', type: 'Seafood', name: 'Seafood 3', price: '28.00', image: require('../assets/Image 95.png')},
        {key: '1', type: 'Seafood', name: 'Seafood 4', price: '28.00', image: require('../assets/Image 95.png')},
        {key: '1', type: 'Seafood', name: 'Seafood 5', price: '28.00', image: require('../assets/Image 95.png')},

        {key: '1', type: 'Dink', name: 'Dink 1', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 2', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 3', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 4', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 5', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 6', price: '28.00', image: require('../assets/Image_96.png')},
    ])
    const [type, setType] = useState('Vegetable');
    const [selectedBtn, setSelectedBtn, ] = useState('Vegetable');
    const [initiaItemCount, setInitiaItemCount] = useState(1);
  return (
    <ScrollView stickyHeaderIndices={[0, -1]}>
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'white',
            }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Scr2");
            }}>
               <Image source={require('../assets/Image 183.png')}
                style={{
                    width:25,
                    height: 25,
                }}
               />

            </TouchableOpacity>
        </View>

        <View style={{
                width:'100%',
                justifyContent: 'center',
                height: 50,
                paddingHorizontal: 20,
            }}>
            <Text style={{ fontSize: 25, color: 'green', fontWeight: 'bold'}}>
                My Basket
            </Text>
        </View>
        <View>
            <FlatList
                data={((
                    data.filter((item) => item.type == type)
                ))}
                renderItem={
                    ({item}) => (
                        <View style={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: '2.5%',
                            width: '45%',
                            marginVertical: '2.5%',
                            padding: 15,
                            borderWidth: 1,
                            flexDirection: 'row',
                        }}>
                            <Image source={item.image}
                                style={{width: 70, height: 70, marginRight: 10}} resizeMode='contain'
                            />
                            <View>
                                <Text style={{ fontSize: 25, color: 'green', fontWeight: 'bold'}}>{item.price}</Text>
                                <Text style={{ fontSize: 18, color: 'silver'}}>{item.name}</Text>
                                <View>
                                    <Image source={require('../assets/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                    />
                                     <Image source={require('../assets/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                    />
                                     <Image source={require('../assets/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                    />
                                     <Image source={require('../assets/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                    />
                                     <Image source={require('../assets/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                    />
                                </View>
                            </View>
                            <View style={{marginLeft: 140, flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={require('../assets/Image 176.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                />
                                <Text style={{fontSize:15}}>{item.sl}</Text>
                                <Image source={require('../assets/Image 175.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                />
                            </View>
                        </View>
                    )
                }
            />
        </View>
        <View style={{
            backgroundColor: 'green',
            width: '100%',}}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                }}>
                 <Text style={{fontSize:30}}>total</Text>
                 <Text style={{fontSize:30}}>$ 320.00</Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Scr2")
                }}
                style={{
                    width: 240,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 40,
                    backgroundColor: 'green',
                    marginLeft: 90,
                    marginVertical: 20,
                    }}
            >
                <Text style={{fontSize: 20,
                    color: 'white'
                }}>
                    Payment
                </Text>
            </TouchableOpacity>
        </View>
        
    </ScrollView>
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
