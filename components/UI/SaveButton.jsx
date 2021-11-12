import React, { useState } from 'react';

import {
    TouchableNativeFeedback,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';
import colors from '../../constants/colors';



const SaveButton = (props) => {

    var MyButtonComponent = TouchableOpacity;
    const [isPressed, setIsPressed] = useState(props.isFavorite)
    
    if (Platform.OS === 'android') {

        MyButtonComponent = TouchableNativeFeedback
    }
    const pressButtonHandler = ()=>{
        setIsPressed(true) ;
        props.saveMeal()
    }
    return (

        <MyButtonComponent activeOpacity={.5} 
                           onPress={pressButtonHandler}>
            <View style={styles.buttonContainer}>
                <Text style={styles.title} iconName="ios-star" title="Favourite">
                    <Ionicons name={!isPressed ? 'ios-star-outline' : 'ios-star'} 
                              size={24} color={'white'}/>
                </Text>
            </View>
        </MyButtonComponent>

    )
}
const styles = StyleSheet.create({
    buttonContainer : {
        paddingVertical : 7 ,
        paddingHorizontal : 5,
        borderRadius : 6
    },
    title : {
        color : Platform.OS === 'ios' ? colors.primaryColor : 'white' ,
        fontSize : 22
    }
})
SaveButton.propTypes = {
    saveMeal : propTypes.func.isRequired ,
    isFavorite : propTypes.func.isRequired
}
export default SaveButton; 