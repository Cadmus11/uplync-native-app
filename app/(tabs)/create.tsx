import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const create = () => {
  return (
    
      <View className="flex-1 p-4 h-full w-full justify-center  bg-white dark:bg-gray-950">
        <Text className="text-2xl font-bold mb-6 text-black dark:text-blue-100 text-center">Create Post</Text>
        
        <View className="mb-4">
          <Text className="text-lg font-semibold text-black dark:text-blue-100 mb-2">Project Name</Text>
          <TextInput
            className="border border-gray-300 rounded-lg text-black dark:text-blue-100 p-3 placeholder:text-gray-200 placeholder:dark:text-white/50 text-base"
            placeholder="Enter project name"
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg font-semibold mb-2 text-black dark:text-slate-100">Project Description</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3 text-base h-24 placeholder:text-gray-200 placeholder:dark:text-white/50"
            placeholder="Describe your project"
            multiline
            textAlignVertical="top"
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg font-semibold mb-2 text-slate-950 dark:text-slate-100">Image</Text>
          <View className="border border-gray-300 rounded-lg p-4 items-center">
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg mb-2">
              <Text className="text-white font-semibold">Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-purple-500 px-4 py-2 rounded-lg">
              <Text className="text-white font-semibold">Generate with AI</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold mb-2">Post Type</Text>
          <View className="flex-row flex-wrap gap-2">
            <TouchableOpacity className="bg-green-100 border border-green-300 px-4 py-2 rounded-lg">
              <Text className="text-green-700 font-medium">Idea</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-100 border border-blue-300 px-4 py-2 rounded-lg">
              <Text className="text-blue-700 font-medium">Project</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-orange-100 border border-orange-300 px-4 py-2 rounded-lg">
              <Text className="text-orange-700 font-medium">Start-up</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-100 border border-red-300 px-4 py-2 rounded-lg">
              <Text className="text-red-700 font-medium">Crowd Fund</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="bg-blue-600 py-3 rounded-lg">
          <Text className="text-white text-center text-lg font-semibold">Create Post</Text>
        </TouchableOpacity>
      </View>
  
  )
}

export default create

