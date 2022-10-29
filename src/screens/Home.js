import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
import React from 'react'
import { Button, Text } from 'galio-framework';
import { width, height } from "../../styles/HomeStyles";
import MapView from 'react-native-maps';
import LoginScreen from './LoginScreen';
const Home = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <Card style={{ backgroundColor: "#F5F5F5" }} >
                    <Card.Content>
                        <View>
                            <Text style={styles.negro} bold Paragraph>Conoce ludamino</Text>
                            <Text bold h6>La app de clases mas efectiva</Text>
                        </View>
                    </Card.Content>
                    <View style={styles.container}>
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate("Login")} round size="small" color="#555273">Ingresar</Button>
                        </Card.Actions>
                    </View>

                </Card >
                <Card style={[styles.bigBlue, { height: height / 5 }]}>
                    <View style={[styles.card1, { paddingTop: height / 40 }]}>
                        <View style={styles.card2}>
                            <Image style={styles.Image} source={require('../../assets/clases-de-matematica-online.jpg')} />
                        </View>
                        <View style={[styles.card4, { paddingTop: height / 50 }]}>
                            <Text style={{ color: "#FFFFFF" }} bold h6>Bienvenid@ introducete al maravilloso mundo de las matematicas </Text>
                            <Text style={{ color: "#FFFFFF" }} bold h6>La app de clases mas efectiva</Text>
                        </View>
                    </View>
                </Card>

                <Card style={{ backgroundColor: "#F5F5F5" }}>
                    <View>
                        <View style={styles.cardmateria}>
                            <Text style={{ color: "#555273" }} bold h6> Asignaturas disponibles </Text>
                        </View>
                        <View style={styles.cardmateria}>
                            <Image style={styles.Image} source={require('../../assets/las-matematicas-lo-explican-todo-600.jpg')} />
                        </View>
                        <View style={styles.cardmateria}>
                            <Text onPress={() => navigation.navigate("Cursos")} style={{ color: "#555273" }} bold h6>Matematicas</Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.bigBlue}>
                    <View style={styles.cardmateria}>
                        <Text style={{ color: "#FFFFFF" }} h6>Nuestra ubicacion</Text>
                        <MapView initialRegion={{
                            latitude: 21.155896866182253,
                            longitude: -98.38112534534982,
                            latitudeDelta: 0.003,
                            longitudeDelta: 0.003,
                        }} style={styles.map} />
                    </View>
                </Card>

            </ScrollView>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        textAlign: "left",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    bigBlue: {
        backgroundColor: '#636080',

    },
    red: {
        color: '#ffffff',
        fontSize: 25,
    },
    negro: {
        color: '#555273',
        fontSize: width / 9,
    },
    card1: {
        flexDirection: "row",
    },
    card2: {
        paddingLeft: 10,
        paddingTop: 10,
        padding: 10
    },
    cardmateria: {
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        paddingTop: 10,

    },
    Image: {
        width: width / 3,
        height: height / 7
    },
    card4: {
        paddingEnd: width / 3
    },
    card5: {
        textalign: "center"
    },
    map: {
        width: width / 1.2,
        height: height / 3,
    },
});
