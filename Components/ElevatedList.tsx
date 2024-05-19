import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedList() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedList</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.text}>Tap</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>me</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>to</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Scroll</Text>
                </View>
                <View style={styles.card}>
                    <Text>😀</Text>
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8,
        backgroundColor: "lightgray",
        elevation: 4,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowColor: 'black'
    },
    text: {
        color: 'black'
    }
})