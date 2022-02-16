import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-web';
import Routes from "./routes";


export const Settings = ({navigation}) => {

    return (
        <SafeAreaView style={styles.main}>

            <View style={styles.namePage}>
                <Text style={styles.textPage}>
                    Настройки
                </Text>
            </View>


            <View style={styles.trenBox1}>

                <TouchableOpacity style={styles.trenBut2}>

                    <View style={styles.setOne}>
                        <Text style={styles.mainText}>
                            Тип тренеровок:
                        </Text>
                    </View>

                    <View style={styles.setTwo}>
                        <Text style={styles.mainText}>
                            функциональная
                        </Text>
                    </View>


                </TouchableOpacity>
            </View>


            <View style={styles.trenBox2}>

                <TouchableOpacity style={styles.trenBut2}>

                    <View style={styles.setOne}>
                        <Text style={styles.mainText}>
                            Язык:
                        </Text>
                    </View>

                    <View style={styles.setTwo}>
                        <Text style={styles.mainText}>
                            русский
                        </Text>
                    </View>


                </TouchableOpacity>
            </View>

            <View style={styles.trenBox2}>

                <TouchableOpacity style={styles.trenBut2}>

                    <View style={styles.setOne}>
                        <Text style={styles.mainText}>
                            Тема:
                        </Text>
                    </View>

                    <View style={styles.setTwo}>
                        <Text style={styles.mainText}>
                            темная
                        </Text>
                    </View>


                </TouchableOpacity>
            </View>


            <View style={styles.downButtonBox}>
                <TouchableOpacity style={styles.butBox} onPress={() => navigation.navigate(Routes.TrainScreen)}>
                    <Text>GO!</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: "#000",
    },

    namePage: {
        height: "30px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3vh",
    },

    textPage: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "30px",
    },

    setOne: {
        width: "50%",

    },

    setTwo: {
        width: "70%",
        left: "12%"

    },

    trenBox1: {
        marginTop: '15vh',
    },

    trenBox2: {
        marginTop: "5vh",
    },

    trenBut2: {

        flexDirection: "row"
    },

    mainText: {
        color: "#fff",
        fontSize: '17px;',
        fontWeight: 'bold'
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

    butStyles: {
        marginTop: '10vh',
        width: '100%',
        height: '10vh',
        justifyContent: 'center',
        alignItems: 'center',
    },

    downButtonBox: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50vh",
        top: "50%",
    }

});


