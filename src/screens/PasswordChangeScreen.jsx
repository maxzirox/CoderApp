import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from '../themes/appTheme'
import { ChangePassword } from '../components/ChangePassword'

export const PasswordChangeScreen = () => {
  return (
    <View style={styles.globalMargin}>
        <ChangePassword/>
    </View>
  )
}
