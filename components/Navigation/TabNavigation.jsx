import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import colors from '../../constants/colors';
import StackNavigation from './StackNavigation';
import { Ionicons } from '@expo/vector-icons';
import FavoriteStackNavigation from './FavoriteStackNavigation';

const TabNavigation = (props) => {

  const Tabs = createMaterialBottomTabNavigator()


  return (

    <Tabs.Navigator barStyle={{ backgroundColor: colors.primaryColor }}
      initialRouteName="Meals"
      activeColor={'white'}
      shifting={true}

    >
      <Tabs.Screen name="Meals"
        component={StackNavigation}
        options={{
          title: 'Meals',
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            )
          },
          tabBarColor: colors.primaryColor
        }}

      />

      <Tabs.Screen name="Favorites"
        component={FavoriteStackNavigation}
        options={{
          title: 'Favorites',
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-star" size={25} color={tabInfo.color} />
            )
          },
          tabBarColor: colors.accentColor

        }} />
    </Tabs.Navigator>

  )
}

export default TabNavigation;