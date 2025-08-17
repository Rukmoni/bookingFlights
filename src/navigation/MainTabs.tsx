import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
/* import FlightListScreen from "../../screens/Flights/FlightListScreen"; */
import LoginScreen from "../screens/Auth/LoginScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
{/*       <Tab.Screen name="Flights" component={FlightListScreen} /> */}
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}
