import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Post from '../posts/post'

const community = () => {
  return (
    
    <View className="flex-1 pt-8 dark:bg-slate-950 bg-gray-50">
      <View className="py-6">
        <Text className="text-2xl font-bold text-gray-800 dark:text-white ml-4 mb-4">Community Posts</Text>
        <ScrollView>
        <View className="space-y-4 w-full pb-16">
          <Post></Post>
          <Post/>
        </View>
        </ScrollView>
      </View>
    </View>
  
  )
}

export default community

