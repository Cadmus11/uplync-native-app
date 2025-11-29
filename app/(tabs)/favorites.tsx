import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Post from '../posts/post'

const favorites = () => {
  return (
   
    <>
    <ScrollView>
    <View className='min-h-full min-w-full bg-slate-50 dark:bg-gray-950 text-black dark:text-white'>
    <Text className='mt-14 font-bold mb-3 font-poppins capitalize text-2xl ml-4 text-black dark:text-white'>
      Favorite Posts
    </Text>
    <View>
 <Post/>
    </View>
   
    </View>
    </ScrollView>
    </>
  )
}

export default favorites



