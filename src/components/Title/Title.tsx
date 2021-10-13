import React from 'react';
import {View, Text} from 'react-native'

import styles from './Style'

const Title = () => {
    return ( 
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>OnebitHealth</Text>
        </View>
     );
}
 
export default Title;