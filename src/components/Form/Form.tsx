import React, { useState } from 'react';
import {Text, TextInput, View, Button} from 'react-native'

import Result from './Result'
import styles from './Style';

const Form = () => {

   const [height, setHeight] = useState(null)
   const [weigth, setWeigth] = useState(null)
   const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
   const [imc, setImc] = useState(null)
   const [textButton, setTextButton] = useState('Calcular')

   function imcCalculator(){
      return setImc((weigth/(height*height)).toFixed(2))
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
        <View style={styles.formContext}>
           <View>
               <Text>Altura</Text>
               <TextInput
                  onChangeText={setHeight}
                  value={height}
                  placeholder='ex 1,70'
                  keyboardType='numeric'
               />
               <Text>Peso</Text>
               <TextInput
                  value={weigth}
                  onChangeText={setWeigth}
                  placeholder='ex 92,83'
                  keyboardType='numeric'
               />
               <Button 
               onPress={() => validation()} 
               title={textButton}/>
            </View>
            <Result imc={imc} messageImc={messageImc}/>

        </View>
     );
}
 
export default Form;