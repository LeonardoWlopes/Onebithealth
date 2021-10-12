import React from 'react';
import { View, Text } from 'react-native';

const Result = ({imc, messageImc}) => {

    return(
        <View>
            <Text>{messageImc}</Text>
            <Text>{imc}</Text>
        </View>
    )
}

export default Result

