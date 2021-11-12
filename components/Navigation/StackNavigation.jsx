import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SaveButton from '../UI/SaveButton';
import React from 'react';
import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryMealsScreen from "../../screens/CategoryMealsScreen";
import MealDetailScreen from "../../screens/MealDetailScreen";
import colors from "../../constants/colors";
import { Button, Platform } from "react-native";
import DrawerButton from "../UI/DrawerButton";
import { useNavigation } from "@react-navigation/native";

export const NavigationOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',

    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
   
  }
  
function StackNavigation(props) {
    const Stack = createNativeStackNavigator()
    
    
    
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{ ...NavigationOptions }}>

            <Stack.Screen name="Home"
                component={CategoriesScreen}
                options={{
                    title: 'Meal Categories',
                    headerRight : ()=>{
                        return(
                            <DrawerButton  />
                        )
                    }
                }}
            />
            <Stack.Screen name="Categories"
                component={CategoryMealsScreen}
                options={{
                    ...NavigationOptions
                }}
            />
            <Stack.Screen name="MealDetails"
                component={MealDetailScreen}
                options={{
                    title: 'Details',
                    
                    ...NavigationOptions
                }}

            />

        </Stack.Navigator>
    );
}

export default StackNavigation;