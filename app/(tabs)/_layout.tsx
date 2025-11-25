import { tabData } from '@/constants/tab'
import { Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

const TabsLayout = () => {
  return (
<Tabs>

    {
        tabData.map(
            (tab, index)=>   <Tabs.Screen 
            key={index}
            name={tab.title}
            options={{
                title: tab.title,
                headerShown: false,
                tabBarItemStyle:{
display: 'flex',

                },
                tabBarIcon: ({ }) => (
                    <>
                    <Text>{tab.title}</Text>
        
                    </>
                )
        
            }}
            />
        )
    }
 
</Tabs>
  )
}

export default TabsLayout

