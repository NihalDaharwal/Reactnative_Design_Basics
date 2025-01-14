import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>App</Text> */}
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        <ContactList />
        <ActionCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
