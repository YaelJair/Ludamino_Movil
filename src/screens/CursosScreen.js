import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar, Card, Searchbar } from 'react-native-paper';
import React,{useEffect} from 'react'
import { Button, Text } from 'galio-framework';
import { width, height } from "../../styles/HomeStyles";
import MapView from 'react-native-maps';


export default function CursosScreen(props, navigation) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [Materias, setMaterias] = React.useState([]);

    useEffect(() => {


            console.log("soy el useEffectc");
            console.log("soy el useEffectc");
            fetch('https://practicasmari.ludamino.proyectostics.com/api/mdl_materias')
        .then(response => response.json())
        .then(data => setMaterias(data));
       
    }, []);

    return (
        <View>
            <ScrollView>
                <Card style={{ backgroundColor: "#F5F5F5" }} >
                    <Card.Content>
                        <View>
                            <Searchbar
                                placeholder="Search"
                            />
                        </View>
                    </Card.Content>

                </Card >
                {Materias.map((event) => (
                     <Card style={[styles.bigBlue, { height: height / 5 }]}>
                     <View style={[styles.card1, { paddingTop: height / 40 }]}>
                         <View style={styles.card2}>
                             <Image style={styles.Image} source={require('../../assets/estadistica.jpg')} />
                         </View>
                         <View style={[styles.card4, { paddingTop: height / 50 }]}>
                             <Text style={{ color: "#FFFFFF", fontSize: height / 50, paddingLeft: width / 15 }} bold h6>{event.materia} </Text>
                             <View style={{ paddingTop: height / 30, paddingLeft: width / 15 }}>
                                 <Button style={{ width: width / 2.2 }} round size="small" color="#4AD187">Ver actividad del curso</Button>
                             </View>
                         </View>
                     </View>
 
                 </Card>
                    ))}
               
                
            </ScrollView>
        </View>
    )
}






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