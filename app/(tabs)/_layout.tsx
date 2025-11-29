// app/(tabs)/_layout.tsx
import { tabData } from '@/constants/tab';
import { useNavigationState } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const TAB_BACKGROUNDS: Record<string, string> = {
  community: '#f8fafc',
  create:    '#fff1f2',
  search:    '#f0fdfa',
  profile:   '#fefce8',
};

export default function TabsLayout() {
  const routeName = useNavigationState(state =>
    state?.routes[state.index]?.name ?? 'community'
  );

  const backgroundStyle = useAnimatedStyle(() => ({
 
    backgroundColor: withTiming(TAB_BACKGROUNDS[routeName] ?? '#ffffff', {
      duration: 400,
    }),
  }));

  return (
    <>
      {/* 1. Full-screen animated background (absolute) */}
      <Animated.View style={[{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }, backgroundStyle]} />

      {/* 2. Tabs with safe-area aware content */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#94a3b8',
          tabBarStyle: {
            position: 'absolute',        // makes it float over the background
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarBackground: () => (
            <Animated.View className="bg-white/90 dark:bg-slate-950  backdrop-blur-3xl h-full rounded" />
          ),
        }}
      >
        {tabData.map((tab) => (
          <Tabs.Screen
            key={tab.title}
            name={tab.title.toLowerCase()}
            
            options={{
                headerShown: false,
              title: tab.title,
              tabBarIcon: ({ color }) => {
                const Icon = tab.Icon;
                const isCreate = tab.title.toLowerCase() === 'create';
                return (
                  <Animated.View className={isCreate ? '' : ''}>
                    <Icon
                      color={color}
                      size={isCreate ? 20 : 20}
                      strokeWidth={isCreate ? 2.5 : 2.2}
                    />
                  </Animated.View>
                );
              },
            }}
          />
        ))}
      </Tabs>
    </>
  );
}