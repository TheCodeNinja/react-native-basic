import React, { Component } from 'react'
import { View, Text } from 'react-native'

// A "private component"
class Blink extends Component {
    // Assign state only in constructor
    constructor(props) {
        super(props)
        this.state = {
            isShowText: true // Set initial value for "this.state.showText"
        }
        // Task
        var taskToDo = () => {
            // this.state = "blabla" // Do not allow, only in constructor
            this.setState(previousState => {
                return {
                    isShowText: !previousState.isShowText
                }
            })
        }
        // Time
        const timeToBlink = 1000
        setInterval(taskToDo, timeToBlink) // Do some tasks after a time interval
    }

    render() {
        // After state changed, component will rerender
        let textToDisplay = this.state.isShowText ? this.props.inputText : ''
        return (
            <Text>{ textToDisplay }</Text>
        )
    }
}

// A "public component"
export default class TextBlink extends Component {
    render() {
        return (
            <View>
                {/* "inputText" = props of Blink component */}
                <Blink inputText="Hello, Mario"></Blink>
                <Blink inputText="Hello, Yoshi"></Blink>
            </View>
        )
    }
}
