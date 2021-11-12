import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import MealsList from '../components/Meals/MealsList';
import { CATEGORIES, meals } from '../data/dummy_data';


function CategoryMealsScreen(props) {
    const { navigation, route } = props

    const [category, setCategory] = useState(CATEGORIES.find(item => item.id === route.params.categoryId))
    
    const displayedMeals = useSelector(state => state.meals.filteredMeals)
    
    useEffect(() => {

        navigation.setOptions({ title: category.title + '' })
    }, [navigation, route])

    if (displayedMeals.length > 0 || category.length > 0) {
        return (
            <MealsList navigation={navigation} listData={displayedMeals} />
        )
    }
    return (
        <ActivityIndicator />
    )
}

export default CategoryMealsScreen;