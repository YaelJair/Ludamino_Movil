import { createDrawerNavigator } from "@react-navigation/drawer";
import { Header } from "react-native/Libraries/NewAppScreen";
import CursosScreen from "../screens/CursosScreen";
import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ActivivdadesScreen from "../screens/ActivivdadesScreen";
const Drawer = createDrawerNavigator()

export function DrawerNavigation() {
    return (
        < Drawer.Navigator screenOptions={{
            drawerStyle: {
                width: 240
            },
            headerTintColor: { color: "#555273" },
            headerStyle: {
                height: 80,
                backgroundColor: "#555273"
            },

            headerTitleStyle: {
                color: "#ffffff"
            },
            drawerActiveBackgroundColor: "#555273",
            drawerActiveTintColor: "white"
        }} >
            <Drawer.Screen name="Inicio" component={Home} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Registrarse" component={RegisterScreen} />
            <Drawer.Screen name="Cursos" component={CursosScreen} />
            <Drawer.Screen name="Temas" component={ActivivdadesScreen} />

        </Drawer.Navigator >
    )
}