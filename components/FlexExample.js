import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class FlexExample extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.textOne } />
                <Text style={ styles.textTwo} />
                <Text style={ styles.textThree } />
                <View style={ styles.subContainer }>
                    <Text style={ styles.textFour } />
                    <Text style={ styles.textFive} />
                    <Text style={ styles.textSix } />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column'
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
    },
    textFour: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        marginBottom: 10
    },
    textFive: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        marginBottom: 10
    },
    textSix: {
        width: 50,
        height: 50,
        backgroundColor: 'orange'
    }
})