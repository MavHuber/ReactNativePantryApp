import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Dimensions, Animated } from 'react-native';
import { useState, useRef } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const { width, height } = Dimensions.get("screen");
const circleWidth = width / 2;

export default function PantryScreen({ navigation }) {

    const [selectedValue, setSelectedValue] = useState("option1");

    const move = useRef(new Animated.Value(0)).current;
    Animated.timing(move, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
    })
    const rotation = move.interpolate({
        inputRange: [0,1],
        outputRange: [`0deg`, `180deg`]
    })
        
    let breathCount

    return(
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/breathBackground.jpg')}
                resizeMode='cover'
                style= {{flex : 1}}>

                <View style={styles.counter}>
                
                    <Text>How many breaths?</Text>
                    <RNPickerSelect
                        className='meditationInput'
                        useNativeAndroidPickerStyle={false}
                        selectedValue={selectedValue}
                        style={{...pickerSelectStyles}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        items={[
                            { label: "3 Breaths", value: "3" },
                            { label: "5 Breaths", value: "5" },
                            { label: "7 Breaths", value: "7" },
                            { label: "10 Breaths", value: "10"}
                        ]}
                    /> 
                    {/* CIRCLE ANIMATION */}
                    <View style={styles.circleContainer}>
                        {[0, 1, 2, 3].map((item) => (
                            <Animated.View
                                key={item}
                                style={{
                                    backgroundColor: 'purple',
                                    width: circleWidth,
                                    height: circleWidth,
                                    borderRadius: circleWidth / 2,
                                    ...StyleSheet.absoluteFill,
                                    transform: [
                                        {
                                            rotateZ: rotation,
                                        }
                                    ]
                                }}>
                            </Animated.View>
                        ))}
                    </View>
                <Text className='breaths'>Breaths remaining: {breathCount}</Text>
                <Text className='instructions'>Are you ready to begin?</Text>
                <Button className='startBreath'
                    onPress={onPress()} // onPress DOES NOT EXIST
                    title="Begin"
                />
                </View>
            </ImageBackground>
        </View>
    );
}

// FUNCTIONS

const griwCircle = () => {
    //circleProgress.
}
function onPress() {
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