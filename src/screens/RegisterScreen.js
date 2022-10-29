import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
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

            <View style={styles.container}>
                <Image style={{ width: 360, height: 200 }} source={require('../../assets/logo_transparent.png')} />
            </View>
            <View style={styles.container1}>
                <Input placeholder="Nombre"></Input>
                <Input placeholder="Correo" type='email-addres'></Input>
                <Input placeholder="Contraceña" password viewPass />
                <Input placeholder="Confirmar Contraceña" password viewPass />
                <Input placeholder="Telefono" type='phone-pad' />
                <DropDownPicker
                    style={{ borderColor: "#BBB8BA" }}
                    placeholder='Tipo de usuario'
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
        </View>
    )
}

export default RegisterScreen

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
        paddingTop: "20%"
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