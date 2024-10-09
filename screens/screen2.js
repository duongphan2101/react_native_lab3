import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, {useState} from 'react';

export default function App({navigation}) {
    const [data, setData] = useState([
        {key: '1', type: 'Vegetable', name: 'Apple', price: '28.00', image: require('../assets/Image101.png')},
        {key: '1', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/Image102.png')},
        {key: '1', type: 'Vegetable', name: 'Avocado', price: '28.00', image: require('../assets/Image103.png')},
        {key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Image105.png')},
        {key: '1', type: 'Vegetable', name: 'Orange', price: '28.00', image: require('../assets/Image106.png')},
        {key: '1', type: 'Vegetable', name: 'Peach', price: '28.00', image: require('../assets/Image107.png')},
        {key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Image105.png')},

        {key: '1', type: 'Seafood', name: 'Seafood 1', price: '28.00', image: require('../assets/Image95.png')},
        {key: '1', type: 'Seafood', name: 'Seafood 2', price: '28.00', image: require('../assets/Image95.png')},
        {key: '1', type: 'Seafood', name: 'Seafood 3', price: '28.00', image: require('../assets/Image95.png')},
        {key: '1', type: 'Seafood', name: 'Seafood 4', price: '28.00', image: require('../assets/Image95.png')},
        {key: '1', type: 'Seafood', name: 'Seafood 5', price: '28.00', image: require('../assets/Image95.png')},

        {key: '1', type: 'Dink', name: 'Dink 1', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 2', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 3', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 4', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 5', price: '28.00', image: require('../assets/Image_96.png')},
        {key: '1', type: 'Dink', name: 'Dink 6', price: '28.00', image: require('../assets/Image_96.png')},
    ])
    const [type, setType] = useState('Vegetable');
    const [selectedBtn, setSelectedBtn, ] = useState('Vegetable');
    const [initiaItemCount, setInitiaItemCount] = useState(6);
  return (
    <ScrollView stickyHeaderIndices={[0]}>
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
                navigation.navigate("Scr1");
            }}>
               <Image source={require('../assets/Image183.png')}
                style={{
                    width:25,
                    height: 25,
                }}
               />

            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Scr3");
            }}>
               <Image source={require('../assets/Image182.png')}
                style={{
                    width:25,
                    height: 25,
                }}
               />

            </TouchableOpacity>
        </View>
        <View style={{
            width:'100%',
        }}>
            <TextInput style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 10,
                    width: '90%',
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 20,
                    paddingLeft: 20,
                    fontSize: 20,
                }}
                placeholder='Search ...'
            />
        </View>
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 20,
            }}>
            <TouchableOpacity onPress={() => {
                setType('Vegetable'); setInitiaItemCount(6)
            }}
            style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 40,
                backgroundColor: type == 'Vegetable' ? 'green' : 'white',
            }}
            >
                <Text style={{fontSize: 18,
                    fontWeight: 'bold',
                    color: 'blue'
                }}>
                    Vegetable
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setType('Seafood'); setInitiaItemCount(6)
            }}
            style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 40,
                backgroundColor: type == 'Seafood' ? 'green' : 'white',
            }}
            >
                <Text style={{fontSize: 18,
                    fontWeight: 'bold',
                    color: 'blue'
                }}>
                    Seafood
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setType('Drink'); setInitiaItemCount(6)
                }}
                style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 40,
                    backgroundColor: type == 'Drinks' ? 'green' : 'white',
                }}
            >
                <Text style={{fontSize: 18,
                    fontWeight: 'bold',
                    color: 'blue'
                }}>
                    Drink
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginTop: 20,
            }}>
            <Text style={{ fontSize: 25, color: 'green'}}>
                Order your favorite
            </Text>
            <TouchableOpacity onPress={() => {
                setInitiaItemCount(data.length)
                }}
            >
                <Text style={{fontSize: 25,
                    color: 'pink'
                }}>
                    See All
                </Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={((
                data.filter((item) => item.type == type)
            )).splice(0, initiaItemCount)}
            renderItem={
                ({item}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: '2.5%',
                        width: '45%',
                        marginVertical: '2.5%',
                        padding: 15,
                    }}>
                         <TouchableOpacity onPress={() => {
                            navigation.navigate("Scr3");
                            }}>
                            <Image source={require('../assets/Image182.png')}
                            style={{
                                width: 150,
                                height: 150,
                            }}
                            resizeMode='contain'
                        />

                        </TouchableOpacity>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>{item.name}</Text>
                    </View>
                )
            }
            numColumns={2}
        />
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
