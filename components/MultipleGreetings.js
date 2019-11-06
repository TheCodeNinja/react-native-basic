import React, { Component } from 'react'
import { View, Text } from 'react-native'

// A "private component", only use in this file
class Greeting extends Component {
    render() {
        // Add "$" before variables in a String
        let greetingStr = `Hello ${ this.props.username }, how are you.`
        return (
            <Text>{ greetingStr }</Text>
        )
    }
}

// A "public component"
export default class extends Component {
    render() { 
        return (
            <View style={ {alignItems: 'center'} }>
                {/* "name" = props of Greeting = "public property" of Greeting component */}
                <Greeting username="Mario"></Greeting>
                <Greeting username="Yoshi"></Greeting>
                <Greeting username="Luigi"></Greeting>
            </View>
        )
    }
}