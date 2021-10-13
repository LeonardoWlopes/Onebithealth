import React, { useState } from 'react';
import {Text, TextInput, View, TouchableOpacity, Pressable, Keyboard} from 'react-native'

import Result from './Result'
import styles from './Style';

const Form = () => {

   const [height, setHeight] = useState(null)
   const [weigth, setWeigth] = useState(null)
   const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
   const [imc, setImc] = useState(null)
   const [textButton, setTextButton] = useState('Calcular')

   function imcCalculator(){
      let heightFormat = height.replace(',','.')
      return setImc((weigth/(heightFormat*heightFormat)).toFixed(2))
   }

   function validation(){
      if(weigth != null && height!= null){
         imcCalculator()
         setHeight(null)
         setWeigth(null)
         setMessageImc("Seu imc é:")
         setTextButton("calcular novamente")

      }else{
         setImc(null)
         setTextButton('Calcular')
         setMessageImc('Preencha o peso e altura')
      }
   }
    return ( 
        <Pressable 
        onPress={Keyboard.dismiss}
        style={styles.formContext}>
           <View style={styles.form}>
               <Text 
               style={styles.formLabel}>Altura</Text>
               <TextInput
                  onChangeText={setHeight}
                  value={height}
                  placeholder='ex 1,70'
                  keyboardType='numeric'
                  style={styles.input}
               />
               <Text 
               style={styles.formLabel}>Peso</Text>
               <TextInput
                  value={weigth}
                  onChangeText={setWeigth}
                  placeholder='ex 92,83'
                  keyboardType='numeric'
                  style={styles.input}
               />
               <TouchableOpacity
               style={styles.buttonCalculator}
               onPress={() => validation()} 
               >
                  <Text style={styles.textButtonCalculator}>{textButton}</Text>
               </TouchableOpacity>
            </View>
            <Result imc={imc} messageImc={messageImc}/>

        </Pressable>
     );
}
 
export default Form;