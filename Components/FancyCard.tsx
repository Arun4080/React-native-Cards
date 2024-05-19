import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevation]}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg' }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Taj Mahal</Text>
                    <Text style={styles.cardLabal}>Agra</Text>
                    <Text style={styles.cardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.</Text>
                    <Text style={styles.cardFooter}>1 hour away</Text>
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
    card: {
        margin: 10,
        borderRadius: 6,
    },
    cardElevation: {
        backgroundColor: "lightgray",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: "black",
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabal: { color: "black", fontSize: 14, marginBottom: 6 },
    cardDescription: { fontSize: 12, marginBottom: 12, marginTop: 6, flexShrink: 1 },
    cardFooter: { color: "black", fontSize: 14, marginBottom: 12, }
})