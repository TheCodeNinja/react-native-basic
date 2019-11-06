import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class JustifyContentExample extends Component {
    render() {
        return (
            <View style={ styles.containerTwo }>
                <Text style={ styles.textOne } />
                <Text style={ styles.textTwo} />
                <Text style={ styles.textThree } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        height: 450,
        flexDirection: 'row', // column/row
        margin: 10,
        justifyContent: 'center', // justify from left to right ('center' in this case)
        alignItems: 'flex-end' // align from top to bottom ('bottom' in this case)
        // alignItems: 'stretch' // will stretch the whole column without fixed height
    },
    containerTwo: {
        flex: 1,
        height: 450,
        flexDirection: 'column',
        margin: 10,
        justifyContent: 'center', // justify from top to bottom ('center' in this case)
        alignItems: 'flex-end' // align from left to right ('right' in this case)
        // alignItems: 'stretch' // will stretch the whole row without fixed width
     },
    textOne: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        marginRight: 10
    },
    textTwo: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        marginRight: 10
    },
    textThree: {
        height: 50,
        backgroundColor: 'orange',
        marginRight: 10
    }
})