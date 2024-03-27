import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

//adb reverse tcp:8081 tcp:8081

export default function PantryScreen({ navigation }) {

    const [selectedValue, setSelectedValue] = useState("option1");
    let breathCount

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>How many breaths?</Text>
            <RNPickerSelect
                className='meditationInput'
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                items={[
                    { label: "3 Breaths", value: "3" },
                    { label: "5 Breaths", value: "5" },
                    { label: "7 Breaths", value: "7" },
                    { label: "10 Breaths", value: "10"}
                ]}
            />
            <View className='circleWrap'>
                <View className='circleOutline'></View>
                <View className='circleProgress'></View>
            </View>
            <Text className='breaths'>Breaths remaining: {breathCount}</Text>
            <Text className='instructions'>Are you ready to begin?</Text>
            <Button className='startBreath'
                onPress={onPress()} // onPress DOES NOT EXIST
                title="Begin"
            />
        </View>
    );
}

function onPress() {
    return <h1>hi</h1>;
}