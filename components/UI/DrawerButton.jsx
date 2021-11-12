import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'


const DrawerButton = (props) => {
    const {toggleDrawer} = useNavigation()
    return (
        <View>
            <TouchableOpacity onPress={toggleDrawer} activeOpacity={.5}>
                <Ionicons name="menu-outline" size={35} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

export default DrawerButton

const styles = StyleSheet.create({})
