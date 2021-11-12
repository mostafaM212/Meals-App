import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import colors from '../../constants/colors'
import FiltersScreen from '../../screens/FiltersScreen'
import FiltersStackNavigaion from './FiltersStackNavigaion'
import StackNavigation from './StackNavigation'
import TabNavigation from './TabNavigation'


const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator()
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown: false ,
                drawerActiveTintColor : colors.accentColor ,
                drawerLabelStyle : {
                    fontFamily : 'open-sans-bold'
                }
            }}
                backBehavior={true}
                
                >

                <Drawer.Screen name="TabNavigation"
                    component={TabNavigation}
                    options={{
                        title: 'Home'
                    }}
                />
                <Drawer.Screen name="Filters" component={FiltersStackNavigaion} />
            </Drawer.Navigator>

        </NavigationContainer>
    )
}

export default DrawerNavigation
