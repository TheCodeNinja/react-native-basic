import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class FixedDimension extends Component {
    render() {
        return (
            // "style" = the props of View
            <View>
                <View style={ styles.boxOne }></View>
                <View style={ styles.boxTwo }></View>
                <View style={ styles.boxThree }></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxOne: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow'
    },
    boxTwo: {
        width: 50,
        height: 50,
        backgroundColor: 'orange'
    },
    boxThree: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})