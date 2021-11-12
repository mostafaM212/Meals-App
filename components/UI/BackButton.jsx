import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types'
import { useNavigation , useRoute } from '@react-navigation/native';


const BackButton = () => {
   
    let navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Meals')} activeOpacity={.5}>
                <Ionicons name="return-up-back-outline" size={25} color="white"/>
            </TouchableOpacity>
        </View> 
    )
}

export default BackButton ;

const styles = StyleSheet.create({
    container : {
        marginRight : 10
    }
})
