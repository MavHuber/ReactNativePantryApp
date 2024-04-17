import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Dimensions, Animated } from 'react-native';

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome, friend!</Text> 
            <View style={styles.quote}>
                <Text>Quote</Text>
                <View></View>
            </View>
            

        </View>
    );
}

//STYLES

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    quote: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,

    }
})