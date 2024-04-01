import * as React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { MaterialCommunityIcons } from '@expo/vector-icons';
//<MaterialCommunityIcons name="basket-unfill" size={24} color="black" />

import { NavigationContainer,
         DefaultTheme,
        DarkTheme,
     } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/HomeScreen';
import PantryScreen from './screens/PantryScreen';
import MealScreen from './screens/MealScreen';

// Screen names
const homeName = 'Home';
const pantryName = 'Breathe';
const mealName = 'Fidget'

const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
    }
}

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === pantryName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === mealName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingButton: 10, fontSize: 10},
                style: {
                    padding: 10, 
                    height: 70,
                    backgroundColor: 'transparent',
                    elevation: 0,
                    position: 'abosolute',}
            }}
            
            >

            <Tab.Screen name={pantryName} component={PantryScreen}/>
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={mealName} component={MealScreen}/>


            </Tab.Navigator>
        </NavigationContainer>
    )
}