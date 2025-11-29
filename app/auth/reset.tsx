import { router } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const reset = () => {
  return (
   
      <View className="flex justify-center h-full w-full flex-col items-center px-6 bg-white dark:bg-gray-900">
        <View className="mb-8">
          <Text className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Reset Password
          </Text>
          <Text className="text-center text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your password
          </Text>
        </View>
        
        <View className="space-y-4 w-full">
          <View>
            <Text className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </Text>
            <TextInput
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <TouchableOpacity className="w-full bg-blue-600 dark:bg-blue-500 py-3 rounded-lg mt-6">
            <Text className="text-white text-center font-semibold text-lg">
              Send Reset Link
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="mt-4" onPress={()=>router.push('/auth/login')}>
            <Text className="text-center text-blue-600 dark:text-blue-400 font-medium">
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
  
  )
}

export default reset

