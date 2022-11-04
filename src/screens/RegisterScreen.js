import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { width, height } from "../../styles/HomeStyles";
import { Accordion, Input, Block, Card, theme, withGalio, GalioProvider, Button, Text } from 'galio-framework';
const RegisterScreen = () => {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Alumno', value: '1' },
        { label: 'Maestro', value: '2' }
    ]);
    return (
        <View style={styles.Fondo}>
            <ScrollView>
            <View style={styles.container}>
                    <Image style={{ width: width / 2, height: height / 7 }} source={require('../../assets/logo_transparent.png')} />
            </View>
            <View style={styles.container1}>
                    <Input style={{ borderColor: "#555273" }} placeholderTextColor={"#555273"} placeholder="Nombre"></Input>
                    <Input style={{ borderColor: "#555273" }} placeholderTextColor={"#555273"} placeholder="Correo" type='email-addres'></Input>
                    <Input style={{ borderColor: "#555273" }} placeholderTextColor={"#555273"} placeholder="Contraseña" password viewPass />
                    <Input style={{ borderColor: "#555273" }} placeholderTextColor={"#555273"} placeholder="Confirmar Contraseña" password viewPass />
                    <Input style={{ borderColor: "#555273" }} placeholderTextColor={"#555273"} placeholder="Telefono" type='phone-pad' />
                <DropDownPicker
                        style={{ borderColor: "#555273" }}
                    placeholder='Tipo de usuario'
                        placeholderTextColor={"#555273"}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                <Button color="#555273">Registrarse</Button>
                <Text>¿ya estas registrado?</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: height / 25
    },
    container1: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20%",
        paddingRight: width / 9,
        paddingLeft: width / 9
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