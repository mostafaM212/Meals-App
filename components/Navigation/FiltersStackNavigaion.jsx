

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FiltersScreen from '../../screens/FiltersScreen'
import DrawerButton from '../UI/DrawerButton'
import SavingButton from '../UI/SavingButton'
import { NavigationOptions } from './StackNavigation' 


const FiltersStackNavigaion = () => {   

    const FilterNavigation = createNativeStackNavigator()

    return (
        <FilterNavigation.Navigator screenOptions={{
            headerTitleStyle : {
                
            }
        }}>

            <FilterNavigation.Screen name="FilterScreen"
                component={FiltersScreen}
                options={{
                    title: 'Filters',
                    ...NavigationOptions,
                    headerRight : ()=><DrawerButton /> ,
                    
                    
                    
                }}
            />
        </FilterNavigation.Navigator>
    )
}

export default FiltersStackNavigaion

const styles = StyleSheet.create({})
