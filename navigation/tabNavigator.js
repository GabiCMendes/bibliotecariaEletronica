import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/search";
import Transaction from "../screens/transaction";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator()

export default class TabNavigator extends Component{
    render(){
        return(
            <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Transação') {
                    iconName = focused
                      ? 'book'
                      : 'book-outline';
                  } else if (route.name === 'Pesquisa') {
                    iconName = focused ? 'search' : 'search-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                
              })}tabBarOptions={{
                activeTintColor: "#FFFFFF",
                inactiveTintColor: "black",
                style: {
                  height: 130,
                  borderTopWidth: 0,
                  backgroundColor: "#5653d4"
                },
                labelStyle: {
                  fontSize: 20,
                  fontFamily: "Rajdhani_600SemiBold"
                },
                labelPosition: "beside-icon",
                tabStyle: {
                  marginTop: 25,
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 30,
                  borderWidth: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#5653d4"
                }
              }}>
                <Tab.Screen name="Transação" component={Transaction}/>
                <Tab.Screen name="Pesquisa" component={Search}/>
            </Tab.Navigator>
        )
    }
}