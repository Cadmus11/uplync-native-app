import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import './globals.css';

export default function RootLayout() {

  const [fontsLoaded, error ]= useFonts(
    {
      "poppins": require('../assets/fonts/poppins.ttf'),
      "light": require('../assets/fonts/poppins-light.ttf'),
      "inter": require('../assets/fonts/inter.ttf'),
      'stack': require('../assets/fonts/stack.ttf')

    });

    useEffect(
      ()=> {
        if(error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
      }, [fontsLoaded, error]
    )
  return <Stack screenOptions={{headerShown: false}}/>;
}
