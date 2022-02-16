import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';


export const Tren = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hiBox}>
                <Text style={styles.hiText}>
                    Выполняемое упрожнение
                </Text>
            </View>

            <View style={styles.downBox}>
                <Text style={styles.downText}> Место для таймера </Text>
                <Text style={styles.timeText}>
                    45сек.
                </Text>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },

    hiBox: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        marginTop: '10.5vh',

    },

    hiText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "20px;"
    },
    downText: {
        color: "#fff",
        fontSize: "15px",
        fontWeight: "bold",
    },

    timeText: {
        color: "#fff",
        fontSize: "50px",
        fontWeight: "bold"
    },
    downBox: {
        height: "100%",
        marginBottom: "15vh",
        alignItems: "center",
        marginTop: "50vh"
    }


});
