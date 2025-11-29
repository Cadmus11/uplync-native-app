import { Google } from '@/assets/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'


const Login = () => {

  const router = useRouter()
  return (
<>
       <View className='flex justify-center items-center bg-slate-200 dark:bg-black w-full h-full'>
        <TouchableOpacity 
          onPress={() => router.push('/auth/register')}
          className="self-end p-4  mt-12"
        >
          <Text className="text-slate-950 dark:text-gray-200 font-medium">Sign Up</Text>
        </TouchableOpacity>
        
        <View className="flex-1 justify-center w-full gap-3 px-8 pb-20">
          <Text className="text-black dark:text-gray-100 text-3xl font-bold text-center mb-8">
            Welcome Back
          </Text>
          
          <View className="flex flex-col gap-3">
            <View>
              <Text className="text-gray-900 dark:text-gray-400 mb-2 ml-1">Email</Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#6B7280"
                className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100 p-4 rounded-lg border border-gray-700 dark:border-gray-600"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            
            <View>
              <Text className="text-gray-900 dark:text-gray-400 mb-2 ml-1">Password</Text>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#6B7280"
                className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100 p-4 rounded-lg border border-gray-700 dark:border-gray-600"
                secureTextEntry
              />
            </View>
            
            <TouchableOpacity className="self-end" onPress={()=>router.push('/auth/reset')}>
              <Text className="text-blue-700 dark:text-blue-300 text-sm">
                Forgot Password?
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-blue-600 dark:bg-blue-700 p-4 rounded-lg mt-4" onPress={()=>router.push('/community')}>
              <Text className="text-white text-center font-semibold text-lg">
                Login
              </Text>
            </TouchableOpacity>
            
            <View className="flex-row items-center my-1">
              <View className="flex-1 h-px bg-gray-600 dark:bg-gray-700" />
              <Text className="text-gray-400 dark:text-gray-500 mx-4">or</Text>
              <View className="flex-1 h-px bg-gray-600 dark:bg-gray-700" />
            </View>
            
            <TouchableOpacity className="bg-gray-800 dark:bg-gray-900 border border-gray-600 dark:border-gray-700 p-4 rounded-lg flex-row items-center justify-center">
              <Google width={20} height={20} />
              <Text className="text-white dark:text-gray-100 ml-3 font-medium">
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  

    </View>
    </>
    
  )
}

export default Login 
