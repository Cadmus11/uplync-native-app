import React from 'react'
import { Text, TextInput, View } from 'react-native'

const register = () => {
  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>Register</Text>
      
      <View style={{marginBottom: 15}}>
        <Text style={{marginBottom: 5, fontSize: 16}}>Full Name</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5}}
          placeholder="Enter your full name"
        />
      </View>

      <View style={{marginBottom: 15}}>
        <Text style={{marginBottom: 5, fontSize: 16}}>Email</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5}}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <View style={{marginBottom: 15}}>
        <Text style={{marginBottom: 5, fontSize: 16}}>Password</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5}}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>

      <View style={{marginBottom: 20}}>
        <Text style={{marginBottom: 5, fontSize: 16}}>Confirm Password</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5}}
          placeholder="Confirm your password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={{backgroundColor: '#007bff', padding: 15, borderRadius: 5, alignItems: 'center'}}
        onPress={() => {}}
      >
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Register</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default register

