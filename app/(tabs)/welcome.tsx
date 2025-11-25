// WelcomeScreen.tsx
import { Logo } from '@/assets/images';
import { useRouter } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';



const WelcomeScreen: React.FC = () => {
  const router = useRouter()

  return (
    <View
  
      className="flex-1 h-full min-w-full items-center justify-center overflow-hidden"
    >
 <ImageBackground source={require('@/assets/images/bg.jpeg')}  resizeMode='cover' className='h-full object-cover w-full'/>

     <View className='absolute z-20 h-full w-full flex flex-col justify-evenly items-center '>
      <View className='h-[21%] rounded overflow-hidden shadow-md w-[50%] '>
      {/* <Image source={require('@/assets/images/logo.svg')} resizeMode='contain' className='h-full w-full object-cover rounded shadow-purple-400 shadow-md'/> */}
      <Logo width={200} height={100} fill={'#202020'}/>
      </View>

     <View>
     <Text className="text-white text-4xl font- inter font-bold mb-2">
        Up Lync
      </Text>
      <Text className="text-white text-lg text-center font-bold mb-12">
        Home of Ideas
      </Text>
      </View>

      <View className="w-full space-y-4 gap-6 absolute bottom-0 mb-20 px-6">
        <TouchableOpacity
          className="bg-white rounded-md py-3 items-center"
          onPress={() => router.push('/auth/login')}
        >
          <Text className="text-slate-950 font-semibold text-lg">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-white rounded-md py-3 items-center"
          onPress={() => router.push('/auth/register')}
        >
          <Text className="text-white font-semibold text-lg">Register</Text>
        </TouchableOpacity>
      </View>
     </View>

    
    </View>
  );
};

export default WelcomeScreen;