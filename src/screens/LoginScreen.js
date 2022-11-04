import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar } from 'react-native-paper';
import { width, height } from "../../styles/HomeStyles";

import React from 'react'
import { Input, Block, Card, theme, withGalio, GalioProvider, Button, Text } from 'galio-framework';
const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.Fondo}>

            <View style={styles.container}>
                <Image style={{ width: width / 2, height: height / 7 }} source={require('../../assets/logo_transparent.png')} />
            </View>
            <View style={styles.container1}>
                <Input style={{ borderColor: "#555273" }} placeholderTextColor={"#555273"} placeholder="Correo" type='email-addres'></Input>
                <Input style={{ borderColor: "#555273" }} placeholderTextColor={"#555273"} placeholder="Contraseña" password viewPass />
                <Button onPress={() => navigation.navigate("Cursos")} color="#555273">Ingresar</Button>
            </View>
        </View>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20%"
    },
    container1: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20%",
        paddingRight: width / 7,
        paddingLeft: width / 7
    },
    color: {
        backgroundColor: '#B21B9D',
    },
    Fondo: {
        backgroundColor: "#F8F8F8",
        flex: 1,

    },
    negro: {
        color: '#000000',
        fontSize: 25,
    },
});