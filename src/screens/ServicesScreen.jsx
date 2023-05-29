import React from 'react'
import { Text } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Button, FlatList, TouchableOpacity, View } from 'react-native';

export const ServicesScreen = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      //setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      if (Platform.OS === 'android') {
        setShow(false);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
  
    const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    days.map((day) => console.log(`Dia ${day} desde componente`))
    return (
      <View>
        <View>
          <FlatList 
            data={days}
            renderItem={(day) => ( 
            <View>
              <TouchableOpacity style={{backgroundColor: 'blue', width: 100, height: 50, borderRadius: 20, margin: 5}}>
                <Text style={{color: 'aliceblue', fontSize: 19, textAlign: 'center'}}>{day.item}</Text>
              </TouchableOpacity>
            </View>
            )}
            horizontal={true}
          />
        </View>
        <View>
          <FlatList 
            data={days}
            renderItem={(day) => ( 
            <View>
              <TouchableOpacity style={{backgroundColor: 'blue', width: 250, height: 50, borderRadius: 20, margin: 5, alignSelf: 'center'}}>
                <Text style={{color: 'aliceblue', fontSize: 19, textAlign: 'center'}}>{day.item}</Text>
              </TouchableOpacity>
            </View>
            )}
            
          />
        </View>
      </View>
    );
  };
