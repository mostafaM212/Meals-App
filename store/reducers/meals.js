import { meals } from '../../data/dummy_data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals : meals ,
    filteredMeals : meals,
    favoriteMeals : []
} 

const mealsReducer = (state = initialState, action)=>{

    switch(action.type){
        
        case TOGGLE_FAVORITE : 
            const existingMealIndex = state.favoriteMeals.findIndex(meal =>meal.id === action.mealId)
            const updatedFavorite = [...state.favoriteMeals]
            
            if (existingMealIndex >= 0) {
               updatedFavorite.splice(existingMealIndex , 1)

                return { ...state , favoriteMeals : [...updatedFavorite] }
            } else {
                const mealItem = state.meals.find(meal =>meal.id === action.mealId)
                return { ...state , favoriteMeals : [...updatedFavorite , mealItem]}
            }
        case SET_FILTERS :

            const appliedFilters = action.filters ;

            const filteredMeals = state.meals.filter(meal =>{

                if (appliedFilters.glutenFree && meal.isGultenFree) {
                    return false
                }
                if (appliedFilters.lactosFree && meal.isLactosFree) {
                    return false
                }
                if (appliedFilters.vegan && meal.isVegan) {
                    return false
                }
                if (appliedFilters.vegetartian && meal.isVegetartian) {
                    return false
                }
                return true ;
            })
            return { ...state , filteredMeals : filteredMeals }
        default :
            return state
    }

}   


export default mealsReducer ;