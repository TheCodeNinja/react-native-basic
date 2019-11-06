import React, { Component } from 'react'
import { Text } from 'react-native'

// "export" = "public"
// "default class" = make this class "default" when you import from other files
export default class HelloWorld extends Component {
    render() {
        let outputStr = `Hello World!`; // let = can be reasign to other type
        return (
            // JSX = JavaScript Extension
            <Text>
                {/* use {} to add variable into JSX */}
                { outputStr }
            </Text>
        )
    }
}
