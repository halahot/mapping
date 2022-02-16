import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import Routes from "./routes";


export const Home = ({navigation}) => {
    const [tren, setTren] = useState([
        {text: "Отжимания", index: 1},
        {text: "Пресс база", index: 2},
        {text: "Отжимания", index: 3},
        {text: "Пресс база", index: 4},
        {text: "Отжимания", index: 5},
        {text: "Пресс база", index: 6},
        {text: "Стойка змеи", index: 7},
        {text: "Растяжка проем", index: 8},
    ])


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.mainImg}>
                <Image style={styles.img} source={require('./assets/Splinter.png')} resizeMode='contain'/>
            </View>
            <View style={styles.treningView}>
                <FlatList
                    data={tren}
                    renderItem={({item}) => (
                        <Text style={styles.List}>{item.text}</Text>
                    )

                    }
                />
            </View>

            <View style={styles.butStyles}>


                <TouchableOpacity style={styles.butBox} onPress={() => navigation.navigate(Routes.TrainScreen)}>
                    <Text>GO!</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.butBox2} onPress={() => navigation.navigate(Routes.SettingsScreen)}>
                <Text>S</Text>
            </TouchableOpacity>

            <View>


            </View>

            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',

    },
    mainImg: {
        height: 210,
        width: "100%",
        alignItems: "center",
        marginTop: 20,

    },
    img: {
        height: 205,
        width: "96%"
    },
    treningView: {
        justifyContent: "center",
        alignItems: "center"
    },
    List: {
        color: "#FFF",
        marginTop: 20,
        fontSize: 20,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: "#fff"
    },

    butStyles: {
        marginTop: '10vh',
        width: '100%',
        height: '10vh',
        justifyContent: 'center',
        alignItems: 'center',
    },

    butBox: {
        color: "#fff",
        height: "50px",
        width: "95%",
        backgroundColor: "#A66EFA",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px;"

    },

    butBox2: {
        justifyContent: "center",
        alignItems: "center",
        height: "5vh",
        width: "5vh",
        backgroundColor: "#A66EFA",
        color: "#000",
        marginLeft: "1.5vh",
        borderRadius: "10px;"
    }


});


