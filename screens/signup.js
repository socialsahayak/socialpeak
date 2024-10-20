import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Ionicons} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { Image } from 'react-native';

const Signup = () => {
  const [isPasswordShown,setIsPasswordShown]=useState(false);
  const [isChecked,setIsChecked]=useState(false);
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
          <View style={{
            width:"100%",
            height:48,
            borderColor:'#808080',
            borderWidth:1,
            borderRadius:8,
            alignItems:'center',
            justifyContent:'center',
            paddingLeft:22,

          }}>
            <TextInput 
            placeholder='Enter your Email Address'
            placeholderTextColor={Colors.black}
            keyboardType='email-address'
            style={{
              width:"100%"
            }}/>
        </View>
      </View>
      <View style={{marginBottom:12}}>
          <Text style={{
            fontSize:16,
            fontWeight:400,
            marginVertical:8
          }}>Mobile Number</Text>
          <View style={{
            width:"100%",
            height:48,
            borderColor:'#808080',
            borderWidth:1,
            borderRadius:8,
            alignItems:'center',
            flexDirection:"row",

            justifyContent:'space-between',
            paddingLeft:22,

          }}>
            <TextInput 
            placeholder='+91'
            placeholderTextColor={Colors.black}
            keyboardType='numeric'
            style={{
              width:"12%",
              borderRightWidth:1,
              borderRightColor:'#808080',
              borderLeftColor:'#808080',
              height:"100%"
            }}/>
            <TextInput 
            placeholder='Enter your phone number'
            placeholderTextColor={Colors.black}
            keyboardType='numeric'
            style={{
              width:"80%"
            }}/>
        </View>
      </View>
      <View style={{marginBottom:12}}>
          <Text style={{
            fontSize:16,
            fontWeight:400,
            marginVertical:8
          }}>Password</Text>
          <View style={{
            width:"100%",
            height:48,
            borderColor:'#808080',
            borderWidth:1,
            borderRadius:8,
            alignItems:'center',
            justifyContent:'center',
            paddingLeft:22,

          }}>
            <TextInput 
            placeholder='Enter your Password'
            placeholderTextColor={Colors.black}
            secureTextEntry={isPasswordShown}
            style={{
              width:"100%"
            }}/>
            <TouchableOpacity 
            onPress={()=>setIsPasswordShown(!isPasswordShown)}
            style={{
              position:'absolute',
              right:12,
            }}>
              {
                isPasswordShown==true?(
                  <Ionicons name='eye-off' size={24} color={Colors.black}/>
                ):(
                  <Ionicons name='eye' size={24} color={Colors.black}/>
                )
              }
              
            </TouchableOpacity>
        </View>
      </View>  
      <View style={{
        flexDirection:'row',
        marginVertical:6
      }} >
        <Checkbox style={{
          marginRight:8
        }} 
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ?Colors.primary : Colors.grey }/>
        <Text>I agree to the terms and conditions</Text>
      </View>
      <Button title="sign up"
        filled
        style={{
          marginTop:18,
          marginBottom:4,
        }}/>
        <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
          <View style={{
            flex:1,
            height:1,
            backgroundColor:'#808080',
            marginHorizontal:10
          }}/>
          <Text style={{fontSize:14}}>Or sign up with</Text>
          <View style={{
            flex:1,
            height:1,
            backgroundColor:'#808080',
            marginHorizontal:10
          }}/>
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'center'
        }}>
          <TouchableOpacity onPress={()=>console.log("Pressed")}
            style={{
              flex:1,
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'row',
              height:52,
              borderWidth:1,
              borderColor:'#808080',
              marginRight:4,
              borderRadius:10

            }}
            >
              <Image
                  source={require("../assets/google.png")}
                  style={{
                    height:36,
                    width:36,
                    marginRight:8
                  }}
                  resizeMode='contain'
                  />
                  <Text >Continue with Google</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Signup