import React from 'react';
import { View, Text } from 'react-native';

import styles from './Style';

const Result = ({imc, messageImc}) => {

    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{messageImc}</Text>
            <Text style={styles.nuberImc}>{imc}</Text>
        </View>
    )
}

export default Result

