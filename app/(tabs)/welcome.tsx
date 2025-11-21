// WelcomeScreen.tsx
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';



const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList> >();

  return (
    <LinearGradient
      colors={['#ffffff', '#000000']}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      className="flex-1 h-full min-w-full items-center justify-center px-6"
    >
      <Image source={require('@/assets/images/bg.jpeg')} resizeMethod='auto' resizeMode='cover' />
     <View className='absolute z-20 h-full w-full flex flex-col justify-evenly items-center '>
      <View className='h-[21%] rounded overflow-hidden shadow-md w-[50%] '>
      <Image source={require('@/assets/images/nero.jpeg')} resizeMode='contain' className='h-full w-full object-cover rounded shadow-purple-400 shadow-md'/>
      </View>

     <View>
     <Text className="text-white text-4xl font-poppins font-bold mb-2">
        Up Lync
      </Text>
      <Text className="text-white text-lg text-center font-bold mb-12">
        Home of Ideas
      </Text>
      </View>

      <View className="w-full space-y-4 gap-6 absolute bottom-0 mb-20 px-6">
        <TouchableOpacity
          className="bg-white rounded-md py-3 items-center"
          onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-slate-950 font-semibold text-lg">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-white rounded-md py-3 items-center"
          onPress={() => navigation.navigate('Register')}
        >
          <Text className="text-white font-semibold text-lg">Register</Text>
        </TouchableOpacity>
      </View>
     </View>

    
    </LinearGradient>
  );
};

export default WelcomeScreen;