import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class JustifyContentExample extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.textOne } />
                <Text style={ styles.textTwo} />
                <Text style={ styles.textThree } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 450,
        flexDirection: 'column', // column/row
        margin: 10,
        // justifyContent: 'flex-start' // justify from the top of column
        // justifyContent: 'flex-end' // justify from the bottom of column
        // justifyContent: 'space-between' // justify evenly from top to bottom of column
        // justifyContent: 'space-around' // the top and bottom sides of each item share the column space evenly
        justifyContent: 'center' // justify from the center of column
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
        width: 50,
        height: 50,
        backgroundColor: 'orange',
        marginRight: 10
    }
})