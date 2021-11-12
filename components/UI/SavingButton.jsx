import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types'


const SavingButton = (props) => {
    
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.saveSettings} activeOpacity={.5}>
                <Ionicons name="save-outline" size={25} color="white"/>
            </TouchableOpacity>
        </View> 
    )
}
SavingButton.propTypes = {
    saveSettings : propTypes.func.isRequired
}
export default SavingButton ;

const styles = StyleSheet.create({
    container : {
        marginRight : 10
    }
})
