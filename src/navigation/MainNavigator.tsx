import React from "react";
import { ROUTE_KEYS } from "../utils/types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import { RandomItem } from "../utils/RandomItem";
import { Register } from "../hooks/Register";
import { LoginOrRegister } from "../hooks/LoginOrRegister";
import { Login } from "../hooks/Login";
interface Course {
    id: string;  
    title: string;
    description: string;
    teacher: string;
    price: number;
    duration: string;
    imageSource: string;
  }
export type MainNavigatorStackParams = {
    [ROUTE_KEYS.HOME_SCREEN] : undefined;
    [ROUTE_KEYS.DETAIL_SCREEN] : {item:Course};
    [ROUTE_KEYS.REGISTER_SCREEN]: undefined;
    [ROUTE_KEYS.LOGIN_SCREEN]: undefined;
    [ROUTE_KEYS.LR_SCREEN]: undefined;


};

const Stack = createNativeStackNavigator<MainNavigatorStackParams>();

function MainNavigator() {
    return (
        <NavigationContainer>
           <Stack.Navigator
                initialRouteName={ROUTE_KEYS.LR_SCREEN}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name={ROUTE_KEYS.LR_SCREEN}
                    component={LoginOrRegister}
                />
                <Stack.Screen
                    name={ROUTE_KEYS.HOME_SCREEN}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name={ROUTE_KEYS.DETAIL_SCREEN}
                    component={DetailScreen}
                />
                 <Stack.Screen
                    name={ROUTE_KEYS.REGISTER_SCREEN}
                    component={Register}
                />
                 <Stack.Screen
                    name={ROUTE_KEYS.LOGIN_SCREEN}
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default MainNavigator;
