import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainNavigatorStackParams } from "../navigation/MainNavigator";
import { ROUTE_KEYS } from "../utils/types";

type NavigationProp = StackNavigationProp<MainNavigatorStackParams, typeof ROUTE_KEYS.LOGIN_SCREEN>;

export function LoginOrRegister() {
    const navigation = useNavigation<NavigationProp>();

    const handleLogin = () => {
        navigation.navigate(ROUTE_KEYS.LOGIN_SCREEN);
    };

    const handleRegister = () => {
        navigation.navigate(ROUTE_KEYS.REGISTER_SCREEN);
    };

    return (
        <SafeAreaView style={styles.container}>
             <Text style={styles.wel}>Welcome</Text>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}
            >
                <Text>Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#FFFF99'
    },
    loginButton: {
        backgroundColor: 'pink',
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'30%',
        borderRadius:50,
    },
    registerButton: {
        backgroundColor: 'yellow',
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'30%',
        borderRadius:40    },
    wel:{
        fontSize:40,
        fontWeight:'bold',
        justifyContent:'center',
        color:'pink',
        marginTop:'20%'
    }
});
