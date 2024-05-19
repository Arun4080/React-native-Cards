import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contact = [
        {
            uid: 1,
            name: 'arun',
            status: 'learning with Love',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        },
        {
            uid: 2,
            name: 'Varun',
            status: 'learning with Love',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        },
        {
            uid: 3,
            name: 'Sarun',
            status: 'learning with Love',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        },
        {
            uid: 4,
            name: 'karun',
            status: 'learning with Love',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        },
        {
            uid: 5,
            name: 'darun',
            status: 'learning with Love',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
        }
    ];
    return (
        <View >
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contact.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCred}>
                        <Image source={{ uri: imageUrl }} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
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
        paddingHorizontal: 16,
    },
    userCred: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgray', marginBottom: 10, borderRadius: 8, padding: 5 },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 14,
        marginBottom: 3
    },
    userName: { fontSize: 16, fontWeight: '600', color: "black" },
    userStatus: { fontSize: 12, },
})