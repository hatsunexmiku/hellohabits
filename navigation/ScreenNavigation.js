import * as React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MessegeScreen from '../screens/MessegeScreen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import Tab4Screen from '../screens/Tab4Screen';
import Tab5Screen from '../screens/Tab5Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Login';

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="ข้อความ"
                component={MessegeScreen}
            />
            <Tab.Screen
                name="ข้อมูลของฉัน"
                component={Tab2Screen}
            />
            <Tab.Screen
                name="ตั้งค่า"
                component={Tab3Screen}
            />
        </Tab.Navigator>
    )
}

const DrawerNavigator = () => {

}

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: null,
                    headerStyle: {
                        backgroundColor: "#28ADEF",
                        borderBottomWidth: 0,
                    },
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: null,
                    headerStyle: {
                        backgroundColor: "#28ADEF",
                        borderBottomWidth: 0,
                    },
                }}
            />
            <Stack.Screen
                name="TabBar"
                component={TabNavigator}
                options={{
                    title: null,
                    headerStyle: {
                        backgroundColor: "#28ADEF",
                        borderBottomWidth: 0,
                    },
                }}
            />
        </Stack.Navigator>
    );
}

