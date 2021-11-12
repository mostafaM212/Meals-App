import React, { useEffect, useState , useCallback } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import propTypes from 'prop-types'
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../constants/colors';
import { useSelector , useDispatch} from 'react-redux';
import SaveButton from '../components/UI/SaveButton';
import { toggleFavorite } from '../store/actions/meals';

const isMealsInFavorites = (favoriteMeals , mealItem)=>{
    
    const isAvailable = favoriteMeals.findIndex(meal => meal.id === mealItem.id)
    
    return isAvailable >= 0 ? true : false ;
}

function MealDetailScreen(props) {
    const { navigation, route } = props;
    const availableMeals = useSelector(state => state.meals.meals) ;
    const mealItem =availableMeals.find((item) => item.id === route.params.mealId)
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    
    const dispatch = useDispatch() ;

    const toggleFavoriteHandler = useCallback(()=>{ 
        dispatch(toggleFavorite(mealItem.id))
    }, [mealItem , dispatch])
    
    navigation.setOptions({
        title: route.params.title ,
        headerRight: () => {
            return (
                <SaveButton saveMeal={()=>toggleFavoriteHandler(mealItem.id)} 
                            isFavorite={isMealsInFavorites.bind(this , favoriteMeals , mealItem)}
                />
            )
        },
    })
    /* useEffect(()=>{
        props.navigation.seParams({toggleFav : toggleFavoriteHandler})
    },[toggleFavoriteHandler , navigation]) */
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image source={{ uri: mealItem.imgUrl }}
                    style={styles.image}
                />
            </View>
            <View style={styles.screen}>
                <Text style={styles.title} numberOfLines={1}>{mealItem.title}</Text>
            </View>
            <View style={styles.mealDetails}>
                <Text>{mealItem.duration} m</Text>
                <Text>{mealItem.compelexity.toUpperCase()}</Text>
                <Text>{mealItem.affordAblility.toUpperCase()}</Text>
            </View>
            <View style={styles.screen}>
                <Text style={styles.title}>ingredients</Text>
                {
                    mealItem.ingredients.map((ingredient, index) => {
                        return (
                            <Text key={index}>{ingredient}</Text>
                        )
                    })
                }
            </View>
            <View style={styles.screen}>
                <Text style={styles.title}>list of steps</Text>
                <View>
                {
                    mealItem.steps.map((step, index) => {
                        return (
                            <Text key={index}
                                style={styles.steps}
                                numberOfLines={2}
                            >{index +1 + '-' + step} </Text>
                        )
                    })
                }
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center' ,
        width : Dimensions.get('window').width
    },
    imageContainer: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5 ,
        
    },
    image: {
        height: 200,
        width: '90%',
        borderRadius: 10,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    mealDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10 ,
        borderBottomWidth : 1 ,
        margin : 'auto'
    },
    steps: {
        textAlign: 'left' ,
        fontSize : 15 ,
        marginVertical : 4
    }
})

MealDetailScreen.propTypes = {
    navigation: propTypes.object.isRequired,
    route: propTypes.object.isRequired
}
export default MealDetailScreen;