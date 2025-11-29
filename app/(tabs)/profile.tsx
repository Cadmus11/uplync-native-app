import React from 'react'
import { Text, View } from 'react-native'

const profile = () => {
  return (
    <View>
      <View className="flex flex-col justify-center min-h-full min-w-full bg-white dark:bg-gray-900 p-4">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-2xl font-bold text-gray-900 dark:text-white">Profile</Text>
          <View className="w-12 h-12 bg-blue-500 rounded-full items-center justify-center">
            <Text className="text-white font-bold text-lg">U</Text>
          </View>
        </View>

        {/* User Info */}
        <View className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-2">john_doe_123</Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-gray-600 dark:text-gray-300 mr-4">Rank: #1,247</Text>
            <Text className="text-gray-600 dark:text-gray-300">Level 15</Text>
          </View>
          <Text className="text-green-600 dark:text-green-400 font-medium">Online</Text>
        </View>

        {/* Stats */}
        <View className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Statistics</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600 dark:text-gray-300">Games Played</Text>
            <Text className="text-gray-900 dark:text-white font-medium">1,234</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600 dark:text-gray-300">Win Rate</Text>
            <Text className="text-gray-900 dark:text-white font-medium">68.5%</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600 dark:text-gray-300">Total Score</Text>
            <Text className="text-gray-900 dark:text-white font-medium">45,678</Text>
          </View>
        </View>

        {/* Settings */}
        <View className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Settings</Text>
          
          {/* Dark Mode Toggle */}
          <View className="flex-row items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <Text className="text-gray-900 dark:text-white">Dark Mode</Text>
            <View className="w-12 h-6 bg-blue-500 rounded-full p-1">
              <View className="w-4 h-4 bg-white rounded-full ml-auto" />
            </View>
          </View>

          {/* Notifications */}
          <View className="flex-row items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <Text className="text-gray-900 dark:text-white">Push Notifications</Text>
            <View className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1">
              <View className="w-4 h-4 bg-white rounded-full" />
            </View>
          </View>

          {/* Sound Effects */}
          <View className="flex-row items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <Text className="text-gray-900 dark:text-white">Sound Effects</Text>
            <View className="w-12 h-6 bg-blue-500 rounded-full p-1">
              <View className="w-4 h-4 bg-white rounded-full ml-auto" />
            </View>
          </View>

          {/* Auto-Save */}
          <View className="flex-row items-center justify-between py-3">
            <Text className="text-gray-900 dark:text-white">Auto-Save Progress</Text>
            <View className="w-12 h-6 bg-blue-500 rounded-full p-1">
              <View className="w-4 h-4 bg-white rounded-full ml-auto" />
            </View>
          </View>
        </View>
      </View>
     
    </View>
  )
}

export default profile

