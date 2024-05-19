import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatList() {
    return (
        <View>
            <Text style={styles.headingText}>FlatList</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.redCard]}>
                    <Text style={styles.text}>Red</Text>
                </View>
                <View style={[styles.card, styles.blueCard]}>
                    <Text style={styles.text}>blue</Text>
                </View>
                <View style={[styles.card, styles.greenCard]}>
                    <Text style={styles.text}>green</Text>
                </View>
                <View style={[styles.card, styles.orangeCard]}>
                    <Text style={styles.text}>orange</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    redCard: {
        backgroundColor: "red"
    },
    blueCard: {
        backgroundColor: "blue"
    },
    greenCard: {
        backgroundColor: "green"
    },
    orangeCard: {
        backgroundColor: "orange"
    },
    text: {
        color: 'white'
    }

})