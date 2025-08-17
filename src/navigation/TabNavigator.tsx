import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import LoginScreen from "../screens/Auth/LoginScreen";
import FlightListScreen from '../screens/Flights/FlightListScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function BookingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Bookings</Text>
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator>
       <Tab.Screen name="Flights" component={FlightListScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
     
    </Tab.Navigator>
  );
}
