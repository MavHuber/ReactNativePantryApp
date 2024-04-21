import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/plant-background.jpg')}
                resizeMode='cover'
                style= {{flex : 1}}>

                <View>
                    <Text style={styles.heading}>Welcome, friend!</Text> 
                </View>
                <View style={styles.quoteSpace}>
                    <Text style={styles.quoteTitle}>
                        Quote of the Day
                    </Text>
                    <FontAwesome5 name="quote-left" style={{fontSize:20,marginBottom:-12}} color="#000" />
                    <Text style={styles.quote}>
                        You can't have a rainbow without a little rain.
                    </Text>
                    <FontAwesome5 name="quote-right" style={{fontSize:20, marginTop:-20,marginBottom:20}} color="#000" />
                    <Text 
                        style={{
                            textAlign: 'right', 
                            fontWeight: '300', 
                            fontStyle:'italic', 
                            fontSize: 16, 
                            color: '#000'
                            }}>
                                --- Author Name
                            </Text>
                    <TouchableOpacity onPress={() => {}} style={{backgroundColor: 'blue', padding: 20, borderRadius: 30, marginVertical: 20,}}>
                        <Text style={{color:'#fff', fontSize: 18, textAlign: 'center'}}>
                            New Quote
                        </Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => {}} style={{}}>
                            <FontAwesome name="volume-up" size={22} color="" />
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
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
    quoteSpace: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,

    },
    quoteTitle: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
    },
    quote: {
        color: '#000',
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 1.1,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 30,
    },
})