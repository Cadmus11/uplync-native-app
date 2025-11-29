import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './globals.css';

 
export default function Index() {
  const router = useRouter();
  return (
  <>
  <SafeAreaProvider>
      <View className="flex-1 bg-gray-900">
        <ImageBackground 
          source={require('@/assets/images/top.jpg')} 
          resizeMode='cover' 
          className='flex-1 w-full'
        >
          <View className='flex-1 justify-end  items-center px-6 pb-12'>
            <View className='items-center space-y-6 gap-6 w-full max-w-sm'>
              <Image 
                source={require('@/assets/images/shard.png')} 
                resizeMode='contain' 
                className='h-20 w-20'
              />
              <Text className="text-white font-semibold text-xl text-center leading-6">
                Center of Innovation
              </Text>
              <TouchableOpacity
                className="bg-white w-full rounded-lg py-4 px-6 items-center shadow-lg"
                onPress={() => router.push('/auth/login')}
                activeOpacity={0.8}
              >
                <Text className="text-slate-950 font-medium text-lg">Get Started</Text>
              </TouchableOpacity>
      </View>
    </View>
        </ImageBackground>
      </View>
 </SafeAreaProvider>

 </>


  );
}