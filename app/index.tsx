import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WelcomeScreen from './(tabs)/welcome';
import './globals.css';
import { } from 'expo-router';

 
export default function Index() {
  return (
 <SafeAreaProvider>
<WelcomeScreen/>
 </SafeAreaProvider>

  );
}