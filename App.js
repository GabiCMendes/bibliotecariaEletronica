import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/tabNavigator';
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import LoginScreen from './screens/login';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return (
        <NavigationContainer>
 <AppContainer/>
         </NavigationContainer>
       )
    }
    return null;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Login: {screen:LoginScreen},
  BottomTab: {screen:TabNavigator}
},
{initialRouteName:"Login"}
)
const AppContainer = createAppContainer(AppSwitchNavigator)