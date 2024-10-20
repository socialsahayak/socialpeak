import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Signup = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:Colors.white}}>
      <View style={{flex:1,marginHorizontal:22}}>
        <View style={{marginVertical:22}}>
        <Text style={{
          fontSize:22,
          fontWeight:'bold',
          marginVertical:12,
          color:Colors.black
        }}>
          Create Account
        </Text>
        <Text style={{
          fontSize:16,
          color:Colors.black
        }}>Have engagement like never before</Text>
        </View>
        <View style={{marginBottom:12}}>
          <Text style={{
            fontSize:16,
            fontWeight:400,
            marginVertical:8
          }}>Email Address</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Signup