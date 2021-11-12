import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FavoritesScreen from '../../screens/FavoritesScreen';
import DrawerButton from '../UI/DrawerButton';
import { NavigationOptions } from './StackNavigation';


const FavoriteStackNavigation = (props) => {

    const FavoriteSrack = createNativeStackNavigator()

    return (
        <FavoriteSrack.Navigator screenOptions={{ ...NavigationOptions }}
            initialRouteName="Favorites Meals"
        >

            <FavoriteSrack.Screen name="Favorites Meals"
                component={FavoritesScreen}
                options={{
                    title: 'Your Favorites',
                    headerRight: () => {
                        return (
                            <DrawerButton />
                        )
                    },

                }}
            />
        </FavoriteSrack.Navigator>
    )
}

export default FavoriteStackNavigation;