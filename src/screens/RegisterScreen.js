import { View, StyleSheet, ScrollView, Image, Alert, LogBox } from 'react-native'
import { Avatar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { Accordion, Input, Block, Card, theme, withGalio, GalioProvider, Button, Text } from 'galio-framework';

LogBox.ignoreAllLogs();
export default function RegisterScreen(props, navigation) {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [name, setName] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [tipeUser, setTipeUser] = React.useState("");
    const [items, setItems] = React.useState([
        { label: 'Alumno', value: '1' },
        { label: 'Maestro', value: '2' }
    ]);

    const alerta =(texto) => {
        Alert.alert(
            "Advertencia",
            texto,
            [
                {
                    text:"aceptar",
                    onPress:()=>console.log("Aceptar")
                }
            ]
        )
    }

    const onIconPress = () => {
        const { navigate } = props.navigation;
        console.log("hola si funciono");
        console.log(name);
        console.log(mail);
        console.log(password);
        console.log(password2);
        console.log(phone);
        console.log(tipeUser);
        if(name==""){
            alerta("Ingresa un nombre de usuario");

        }else if(mail==""){
            alerta("Ingresa un correo valido");
        }else if(password==""){
            alerta("Ingresa una contraseña");
            
        }else if(password2==""){
            alerta("Ingresa una contraseña");
            
        }else if(phone==""){
            alerta("Ingresa un numero de telefono");
            
        }else if(tipeUser==""){
            alerta("Selecciona un tipo de usuario");
            
        }else{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, email: mail, password: password, telefono: phone, clv_tipo_usuario: tipeUser })
            };
            fetch('https://practicasmari.ludamino.proyectostics.com/api/register1', requestOptions)
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData);
                    navigate("Login");
                }).catch((error) => { });
        }
        // Simple POST request with a JSON body using fetch
        
    }
    return (
        <View style={styles.Fondo}>
            <ScrollView>
            <View style={styles.container}>
                    <Image style={{ width: 180, height: 100 }} source={require('../../assets/logo_transparent.png')} />
            </View>
            <View style={styles.container1}>
                    <Input value={name} onChangeText={(value) => setName(value)} placeholder="Nombre"></Input>
                    <Input value={mail} onChangeText={(value) => setMail(value)} placeholder="Correo" type='email-addres'></Input>
                    <Input value={password} onChangeText={(value) => setPassword(value)} placeholder="Contraceña" password viewPass />
                    <Input value={password2} onChangeText={(value) => setPassword2(value)} placeholder="Confirmar Contraceña" password viewPass />
                    <Input value={phone} onChangeText={(value) => setPhone(value)} placeholder="Telefono" type='phone-pad' />
                <DropDownPicker
                        style={{ borderColor: "#BBB8BA" }}
                        placeholder='Tipo de usuario'
                    open={open}
                        value={tipeUser}
                    items={items}
                    setOpen={setOpen}
                        setValue={setTipeUser}
                    setItems={setItems}
                />
                    <Button onPress={() => onIconPress()} color="#555273">Registrarse</Button>
                <Text>¿ya estas registrado?</Text>
            </View>
            </ScrollView>
        </View>
    )


}

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



//linkApi
//https://practicasmari.ludamino.proyectostics.com/api/register1