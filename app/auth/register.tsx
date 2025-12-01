import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const register = () => {

  const router = useRouter()
  return (
    <View className='flex flex-col p-4 justify-center items-center h-full bg-slate-200 dark:bg-slate-950 dark:text-white w-screen'>
      <View className='w-full p-4 bg-white dark:bg-transparent rounded-lg shadow-lg'>
        <Text className='text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white'>
          Create New Account
        </Text>
        
        <View className='mb-4'>
          <Text className='text-sm font-medium mb-2 text-gray-700 dark:text-gray-300'>
            Full Name
          </Text>
          <TextInput
            className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-800 dark:text-white'
            placeholder='Enter your full name'
            placeholderTextColor='#9CA3AF'
          />
        </View>

        <View className='mb-4'>
          <Text className='text-sm font-medium mb-2 text-gray-700 dark:text-gray-300'>
            Email
          </Text>
          <TextInput
            className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-800 dark:text-white'
            placeholder='Enter your email'
            placeholderTextColor='#9CA3AF'
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>

        <View className='mb-4'>
          <Text className='text-sm font-medium mb-2 text-gray-700 dark:text-gray-300'>
            Password
          </Text>
          <TextInput
            className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-800 dark:text-white'
            placeholder='Enter your password'
            placeholderTextColor='#9CA3AF'
            secureTextEntry
          />
        </View>

        <View className='mb-6'>
          <Text className='text-sm font-medium mb-2 text-gray-700 dark:text-gray-300'>
            Confirm Password
          </Text>
          <TextInput
            className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-800 dark:text-white'
            placeholder='Confirm your password'
            placeholderTextColor='#9CA3AF'
            secureTextEntry
          />
        </View>

        <TouchableOpacity className='w-full bg-blue-600 dark:bg-blue-500 p-3 rounded-lg mb-4'>
          <Text className='text-white text-center font-semibold text-lg'>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className='w-full' onPress={()=>router.push('/auth/login')}>
          <Text className='text-blue-600 dark:text-blue-400 text-center'>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
     
    </View>
  )
}

export default register

