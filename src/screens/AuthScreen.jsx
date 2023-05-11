import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { RegisterForm } from '../components/RegisterForm';
import { Button } from 'react-native-paper';
import { SignIn } from '../components/SignIn';

export const AuthScreen = ({navigation}) => {


  return (
    <SignIn navigation={navigation}/>
  )
}
