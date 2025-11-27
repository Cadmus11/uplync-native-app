import { Google } from '@/assets/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Login = () => {

  const router = useRouter()
  return (
    <SafeAreaView>
       <View className='flex justify-center items-end bg-black w-full h-auto'>
        <Text className='text-white text-lg mt-8 ' onPress={()=>router.push('/auth/register')}>
          Sign Up
        </Text>
      </View>
    <View className='flex flex-col justify-center   bg-black h-full p-8 gap-4 w-full items-center'>

     
 <Text className='text-black text-white font-bold text-3xl'>
Welcome Back
 </Text>

<View className='flex flex-col w-full gap-2'>
<Text className='text-white text-sm'>Email</Text>
 <TextInput
  placeholder="Enter your email..."
  className="w-full h-12 px-6 rounded-md
             bg-white/10 dark:bg-slate-100/10
             border border-gray-200 dark:border-gray-700
             text-white 
           
             focus:border-purple-500 dark:focus:border-purple-400
             focus:ring-4 focus:ring-purple-500/20 dark:focus:ring-purple-400/20
             focus:bg-white dark:focus:bg-gray-900/80
             backdrop-blur-sm
             transition-all duration-300
             text-base font-medium
             shadow-sm dark:shadow-none"
/>
</View>
<View className='flex flex-col w-full gap-2'>
<Text className='text-white text-sm'>Password</Text>
 <TextInput
  placeholder="Enter your password..."
  className="w-full h-12 px-6 rounded-md
             bg-white dark:bg-slate-100
             border border-gray-200 dark:border-gray-700
             text-gray-900 dark:text-gray-100
             placeholder:text-gray-100 dark:placeholder:text-gray-100
             focus:border-purple-500 dark:focus:border-purple-400
             focus:ring-4 focus:ring-purple-500/20 dark:focus:ring-purple-400/20
             focus:bg-white dark:focus:bg-gray-900/80
             backdrop-blur-sm
             transition-all duration-300
             text-base font-medium
             shadow-sm dark:shadow-none"
/>
</View>



 <TouchableOpacity className='w-full bg-[snow] h-[2.75rem] flex-center rounded-md text-slate-100' onPress={()=>router.push('/(tabs)/community')}>
<Text className='text-slate-950 capitalize text-lg font-light'>login</Text>
 </TouchableOpacity>


  <TouchableOpacity className='flex-center bg-white  w-full'>
    <Google height={20} width={20} fill={'#000'}/>
    <Text className='text-md font-semibold'> Sign in with Google</Text>
  </TouchableOpacity>

    </View>
    </SafeAreaView>
  )
}

export default Login 
