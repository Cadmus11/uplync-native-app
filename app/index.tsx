import { ThemeProvider } from '@/context/ThemeContext';
import { useRouter } from 'expo-router';
import { ChevronRightCircle } from 'lucide-react-native';
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
            <View className='items-center space-y-6 gap-6  h-1/3 flex justify-center rounded-sm overflow-auto object-cover w-full max-w-sm'>
              <Image 
                source={require('@/assets/images/front-image2.jpg')} 
                resizeMode='contain' 
                className='h-full rounded w-full object-cover'
              />
              </View>
              <View className=' min-w-full h-1/2 py-4 flex-col justify-end  items-start space-y-4 mb-[-50px] flex-col gap-4 '>
                <Text className='text-5xl mb-2 font-bold font-inter ml-6 text-start text-purple-100'>
                  Innovate. Share. Elevate.
                </Text>
              <Text className="text-white font-semibold text-lg text-start ml-6 leading-6">
               A community for creators, innovators, and dreamers to showcase projects, crowdfund ideas, and collaborate on the next big thing.
              </Text>
              <TouchableOpacity
className="bg-blue-200 flex-row mt-4 items-center justify-start px-8 py-3 rounded-full min-w-full gap-4 shadow-lg"
                onPress={() => router.push('/auth/login')}
                activeOpacity={0.8}
              >
                <View className='flex-row justify-center items-center h-10 w-10 '>
                 <ChevronRightCircle/>
                </View>
                <Text className="text-slate-950 font-medium text-xl ml-6">
                  Join the Revolution
                </Text>
             
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