import { Button } from '@react-native-material/core'
import React from 'react'
import { View } from 'react-native'

export const ServicesScreen = () => {

  const days = ["Lunes","Martes","Miercoles","Jueves","Viernes"]

  return (
    <View style={{width: 'auto', backgroundColor: 'pink'}}>
      {
        days.forEach((day) => {
          return(
            <View>
              <Button variant="outlined" title={day} />
            </View>
          )
        })
      }
      
    </View>
  )
}
