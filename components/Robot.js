import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Robot extends Component {
    render() {

        // "let/var" = can change value, "const" = cannot change value 
        const imageSource = {
            uri: "https://images-na.ssl-images-amazon.com/images/I/61R2%2Bfcus9L._SY679_.jpg"
        }

        return (
            // "source" = props of Image = "public property" of Image component
            // Add a JavaScript object inside {} 
            <Image source={ imageSource } style={ {width: 350, height: 500} } />
        )
    }
}
