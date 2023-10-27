import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import onboradingcss from './onboradingcss'
const Onboarding = ({navigation}:any) => {
    return (
        <View style={onboradingcss.view}>
            <View>
                <Text style={onboradingcss.text}>Welcome</Text>
                <Text style={onboradingcss.text1}>Please click the Start button to begin</Text>
            </View>
            <View style={onboradingcss.buttonview}>
                <TouchableOpacity style={onboradingcss.touc} onPress={() => navigation.navigate('HomeScreen', { screen: 'Home' })}>
                    <Text style={onboradingcss.text2}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboarding