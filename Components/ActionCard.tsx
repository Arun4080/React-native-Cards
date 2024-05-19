import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Whats new in JS 21
                    </Text>
                </View>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        js 21 comes with an upgrade to the V8 JavaScript engine, which powers Google Chrome and Node. js. The latest version of the V8 engine brings performance optimizations, improved memory management, and support for new JavaScript features, enhancing the overall performance and stability of Node.
                    </Text>

                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.carmatec.com/blog/node-js-21-whats-new-in-the-latest-release/#:~:text=V8%20Engine%20Upgrade%3A&text=js%2021%20comes%20with%20an,performance%20and%20stability%20of%20Node.')}
                    >
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.instagram.com/arun.verma_/?hl=en')}
                    >
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>

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
        borderRadius: 6,
        margin: 12,
    },
    elevatedCard: {
        backgroundColor: "orange",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "black",
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10,

    },
    footerContainer: { padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' },
    socialLinks: {
        fontSize: 16,
        color: "black",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 5,
        marginBottom: 10
    },
})