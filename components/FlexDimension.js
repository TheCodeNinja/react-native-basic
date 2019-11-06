import React, { Component } from 'react'
import { View } from 'react-native'

export default class FlexDimension extends Component {
    render() {
        return (
            // "flex" = flexible = "a positive number"
            // <View style={ {flex: 1} }>
            <View style={ {height: 400} }>
                <View style={ {flex: 80, backgroundColor: 'mediumaquamarine'} } />
                <View style={ {flex: 20, backgroundColor: '#1e90ff'} } />
                <View style={ {height: 120, backgroundColor: 'darkslategrey'} }></View>
            </View>
        )
    }
}
