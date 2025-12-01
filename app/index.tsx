import { ThemeProvider } from '@/context/ThemeContext';
import { useRouter } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './globals.css';

 
export default function Index() {
  const router = useRouter();
  return (
  <>
  <ThemeProvider>
  <SafeAreaProvider>
      <View className="flex-1 flex-col justify-center items-center bg-black">
        <ImageBackground 
          source={require('@/assets/images/storm.jpg')} 
          resizeMode='cover' 
          className='flex-1 w-full'
        >
          <View className='flex-1 justify-between py-20   items-center px-6 pb-12'>
            <View className='items-center space-y-6 gap-6  h-1/2 flex justify-center rounded-sm overflow-auto object-cover w-full max-w-sm'>
              <Image 
                source={require('@/assets/images/n.jpg')} 
                resizeMode='contain' 
                className='h-full w-full object-cover'
              />
              </View>
              <View className=' w-full py-4 space-y-4 flex-col gap-4'>
                <Text className='text-6xl font-bold font-inter text-center text-purple-100'>Zentro</Text>
              <Text className="text-white font-semibold text-2xl text-center leading-6">
                “At the Center of Possibility.”
              </Text>
              <TouchableOpacity
className="bg-blue-200 flex-row items-center justify-center px-8 py-4 rounded-md max-w-full gap-4 shadow-lg"
                onPress={() => router.push('/auth/login')}
                activeOpacity={0.8}
              >
                <Text className="text-slate-950 font-medium text-lg">Get Started</Text>
                <ArrowRight/>
              </TouchableOpacity>
      </View>
    </View>
        </ImageBackground>
      </View>
 </SafeAreaProvider>
</ThemeProvider>
 </>


  );
}