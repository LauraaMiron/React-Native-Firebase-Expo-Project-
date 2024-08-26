import React, { useState } from "react";
import { auth, signInWithEmailAndPassword} from "../../firebase";
import { SafeAreaView, TextInput, TouchableOpacity, View ,Text,StyleSheet} from "react-native";
import { MainNavigatorStackParams } from "../navigation/MainNavigator";
import { ROUTE_KEYS } from "../utils/types";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


type LoginPageNavigationProp = StackNavigationProp<MainNavigatorStackParams, typeof ROUTE_KEYS.HOME_SCREEN>;

export function Login() {
    const navigation = useNavigation<LoginPageNavigationProp>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate(ROUTE_KEYS.HOME_SCREEN);
        } catch (e) {
            console.error(e); 
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.heading}>Login</Text>
                <View style={styles.inputContainer}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor:'#FFFF99'
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: 'pink',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Login;