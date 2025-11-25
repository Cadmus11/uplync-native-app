import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'


const Login = () => {

  const router = useRouter()
  return (
    <View className='flex flex-col justify-center h-full px-8 gap-4 w-full items-center'>
 <Text className='text-black font-bold text-3xl'>
Welcome Back
 </Text>

 <TextInput
  placeholder="username.."
  className="w-full h-12 px-6 rounded-2xl
             bg-white dark:bg-gray-900
             border border-gray-200 dark:border-gray-700
             text-gray-900 dark:text-gray-100
             placeholder:text-gray-400 dark:placeholder:text-gray-500
             focus:border-purple-500 dark:focus:border-purple-400
             focus:ring-4 focus:ring-purple-500/20 dark:focus:ring-purple-400/20
             focus:bg-white dark:focus:bg-gray-900/80
             backdrop-blur-sm
             transition-all duration-300
             text-base font-medium
             shadow-sm dark:shadow-none"
/>
 <TextInput className='w-full ring-1 h-12 ring-black outline-none rounded bg-slate-400' placeholder='password'/>
 <TouchableOpacity className='w-full bg-black h-[2.75rem] flex-center rounded-md text-slate-100' onPress={()=>router.push('/(tabs)/community')}>
<Text className='text-slate-100 capitalize text-lg font-semibold'>login</Text>
 </TouchableOpacity>
    </View>
  )
}

export default Login 
