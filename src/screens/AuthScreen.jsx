import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../themes/appTheme';

export const AuthScreen = () => {
    const title = 'REGISTRO',
          message = '¿Ya tienes cuenta?',
          messageAction = 'Ingresar',
          messageTarget = 'login';

  return (
    <KeyboardAvoidingView
        behavior='height'
        style={styles.authContainer}
    >
        <View>
            <Text style={styles.authTitle}>
                {title}
            </Text>
            <Text>Formulario</Text>
            <View style={styles.promp}>
                <Text style={styles.textMenu}>{message}</Text>
                <TouchableOpacity onPress={()=> console.log(messageTarget)}>
                    <Text style={styles.buttonMenu}>{messageAction}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>    
  )
}
