import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class StyleSheetDemo extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.firstText }>First line</Text>
                <Text style={ styles.secondText }>Second line</Text>
                {/* "second" overrides "first" */}
                <Text style={ [styles.firstText, styles.secondText] }>First, Second</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "#28B463",
        borderWidth: 1,
        borderBottomColor: "#ff0000"
    },
    firstText: {
        margin: 5, // margin for top, left, bottom, right
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    secondText: {
        margin: 5,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    }
})
