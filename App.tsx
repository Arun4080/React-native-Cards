import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import FlatList from './Components/FlatList'
import ElevatedList from './Components/ElevatedList'
import FancyCard from './Components/FancyCard'
import ActionCard from './Components/ActionCard'
import ContactList from './Components/ContactList'
// import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList />
        <ElevatedList />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App