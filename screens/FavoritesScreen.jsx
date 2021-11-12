import React , { useEffect }from 'react';
import { View, StyleSheet, Text , Button } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/Meals/MealsList';
import BackButton from '../components/UI/BackButton';



function FavoritesScreen(props) {
    const {navigation} = props
    
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    
    navigation.setOptions({
        headerLeft : ()=><BackButton />
    })
    useEffect(()=>{
        const route = navigation.addListener('focus' , ()=>{
            navigation.navigate('Favorites Meals')
        })

        return route ;
    } , [navigation])
    if(favoriteMeals.length === 0){
        return (
            <View style={styles.secondContainer}>
                <Text style={styles.text}>No Favorites Meals Yet ! </Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <MealsList listData={favoriteMeals}
                navigation={navigation}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' ,
        width : '100%'
    },
    secondContainer : {
        flex : 1 ,
        alignItems : 'center',
        justifyContent : 'center'
    },
    text : {
        color : '#ccc' ,
        fontSize : 24
    }
})

export default FavoritesScreen;