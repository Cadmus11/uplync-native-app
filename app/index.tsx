import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../context/ThemeContext';
import './globals.css';

 
export default function Index() {
  const router = useRouter();
  return (
    <ThemeProvider>
 <SafeAreaProvider>
 <View
  
      className="flex-1 h-full min-w-full  overflow-scroll"
    >
 <ImageBackground source={require('@/assets/images/top.jpg')}  resizeMode='cover' className='h-full object-cover w-full'/>

   
   


          <View className=' flex flex-col justify-end gap-6 mb-60 pb-8 items-center w-full h-full absolute  '>
   

     

      <Image source={require('@/assets/images/shard.png')} resizeMode='contain' className='h-20'/>


  
   
      <Text className="text-white font-semibold font-inter text-lg text-center  ">
      Center of Innovation
      </Text>

        <TouchableOpacity
          className="bg-white w-full mx-4 rounded-md p-2 items-center"
          onPress={() => router.push('/auth/login')}
        >
          <Text className="text-slate-950 font-light text-lg">Get Started</Text>
        </TouchableOpacity>

      
      </View>
 

    
    </View>
 </SafeAreaProvider>
 </ThemeProvider>

  );
}