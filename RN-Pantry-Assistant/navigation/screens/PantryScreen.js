import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Dimensions, Animated } from 'react-native';
import { useState, useRef } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const { width, height } = Dimensions.get("screen");
const circleWidth = width / 2;

export default function PantryScreen({ navigation }) {

    const move = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(1)).current;

    const startAnimation = () => {

        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(textOpacity, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(move, {
                        toValue: 1,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(textOpacity, {
                        delay: 100,
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(move, {
                        delay: 1000,
                        toValue: 0,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                ])
            ]),
            { iterations: breathCount}
        ).start();
    }

    const translate = move.interpolate({
        inputRange: [0,1],
        outputRange: [0, circleWidth / 6],
    });
    const exhale = textOpacity.interpolate({
        inputRange: [0,1],
        outputRange: [1, 0],
    });
        
    const [ breathCount, setBreathCount ] = useState("");

    return(
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/breathBackground.jpg')}
                resizeMode='cover'
                style= {{flex : 1}}>

                <View style={styles.counter}>
                    <View style={styles.picker}>
                        <Text>How many breaths?</Text>
                        <RNPickerSelect
                            className='meditationInput'
                            useNativeAndroidPickerStyle={false}
                            selectedValue={breathCount}
                            style={{...pickerSelectStyles}}
                            onValueChange={(breathCount) => setBreathCount(breathCount)}
                            items={[
                                { label: "3 Breaths", value: "3" },
                                { label: "5 Breaths", value: "5" },
                                { label: "7 Breaths", value: "7" },
                                { label: "10 Breaths", value: "10"}
                            ]}
                        /> 
                    </View>
                    {/* CIRCLE ANIMATION */}
                    <View style={styles.circleContainer}>
                        <Animated.View
                            style={{
                                width: circleWidth,
                                height: circleWidth,
                                ...StyleSheet.absoluteFill,
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: textOpacity
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: '600'}}>Inhale</Text>
                        </Animated.View>
                        <Animated.View
                            style={{
                                width: circleWidth,
                                height: circleWidth,
                                ...StyleSheet.absoluteFill,
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: exhale,
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: '600'}}>Exhale</Text>
                        </Animated.View>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                            const rotation = move.interpolate({
                                inputRange: [0,1],
                                outputRange: [`${item * 45}deg`, `${item * 45 +180}deg`],
                            }); 
                            return(
                            <Animated.View
                                key={item}
                                style={{
                                    opacity: 0.1,
                                    backgroundColor: '#0492C2',
                                    width: circleWidth,
                                    height: circleWidth,
                                    borderRadius: circleWidth / 2,
                                    ...StyleSheet.absoluteFill,
                                    transform: [
                                        {
                                            rotateZ: rotation,
                                        },
                                        {translateX: translate},
                                        {translateY: translate}
                                    ],
                                }}
                            ></Animated.View>
                            );
                            })}
                    </View>
                <Text className='breaths'>Breaths remaining: {breathCount}</Text>
                <Text className='instructions'>Are you ready to begin?</Text>
                <Button className='startBreath'
                    onPress={startAnimation()}
                    title="Begin"
                />
                </View>
            </ImageBackground>
        </View>
    );
}

// FUNCTIONS
function startAnimation() {
    return <h1>hi</h1>;
}

// ---------- STYLES ----------------

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
    counter: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
    },
    circleContainer: {
        flex: 1,
        width: width / 2,
        top: height / 4,
    },
    picker: {
        top: height / 8,
        textAlign: 'center',
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      alignItems: 'center', 
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      alignItems: 'center',
    },
  });