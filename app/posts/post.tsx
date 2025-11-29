import React from 'react'
import { Text, View } from 'react-native'

const 
Post = () => {
  return (
    <View>
      <View className="bg-white dark:bg-gray-800 rounded-lg shadow-md m-4 p-4">
        {/* Header with username */}
        <View className="flex-row items-center mb-3">
          <View className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-3" />
          <Text className="text-gray-800 dark:text-white font-semibold text-base">username</Text>
        </View>

        {/* Project Image */}
        <View className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3" />

        {/* Project Details */}
        <View className="mb-4">
          <Text className="text-gray-900 dark:text-white font-bold text-lg mb-2">Project Name</Text>
          <Text className="text-gray-600 dark:text-gray-300 text-sm leading-5">
            Project description goes here. This is where you would describe what the project is about and its main features or goals.
          </Text>
        </View>

        {/* Crowdfund Donation Confirm (conditional) */}
        <View className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-3 mb-4">
          <Text className="text-blue-800 dark:text-blue-200 font-medium text-sm mb-2">Donation Received</Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-blue-600 dark:text-blue-300 text-sm">$50.00 from @donor_username</Text>
            <View className="flex-row space-x-2">
              <View className="bg-green-500 px-3 py-1 rounded-full">
                <Text className="text-white text-xs font-medium">Confirm</Text>
              </View>
              <View className="bg-gray-500 dark:bg-gray-600 px-3 py-1 rounded-full">
                <Text className="text-white text-xs font-medium">Decline</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700">
          <View className="flex-row items-center">
            <View className="flex-row items-center mr-6">
              <View className="w-6 h-6 bg-red-500 rounded-full mr-2" />
              <Text className="text-gray-600 dark:text-gray-400 text-sm">24</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-6 h-6 bg-blue-500 rounded-full mr-2" />
              <Text className="text-gray-600 dark:text-gray-400 text-sm">Share</Text>
            </View>
          </View>
        </View>
      </View>
      
    </View>
  )
}

export default Post

