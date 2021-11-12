import React from 'react';
import { Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Platform, 
    TouchableNativeFeedback, 
    ImageBackground ,
    Dimensions
} from 'react-native'
import propTypes from 'prop-types';

const MealItem = props => {
    const { mealData, navigationData } = props;

    var MealComponent = TouchableOpacity;

    if (Platform.OS === 'android') {
        MealComponent = TouchableNativeFeedback
    }
  
    return (
        <View style={styles.mealItem}>
            <MealComponent onPress={() => {
                return navigationData.navigate('MealDetails' , { mealId : mealData.id , title : mealData.title})
            }}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: mealData.imgUrl }}
                            style={styles.image}
                        >
                            <Text style={styles.title} numberOfLines={1}>{mealData.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <Text>{mealData.duration} m</Text>
                        <Text>{mealData.compelexity.toUpperCase()}</Text>
                        <Text>{mealData.affordAblility.toUpperCase()}</Text>
                    </View>
                </View>
            </MealComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '98%',
        marginVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: '#ccc' ,
        borderRadius : 10 ,
        overflow : 'hidden',
    },
    mealRow: {
        flexDirection: 'row',
        
        
    },
    mealHeader: {
        height: '85%',
        width : '100%' ,
        
    },
    image: {
        width : Dimensions.get('window').width * .98,
        justifyContent : 'flex-end',
       
        

    },
    mealDetails: {
        justifyContent: 'space-between' ,
        alignItems : 'center',
        height : '15%',
        borderRadius : 10
    },
    title : {
        fontSize : 20,
        fontFamily : 'open-sans-bold',
        backgroundColor : 'rgba(0,0,0,0.8)',
        color : 'white',
        paddingVertical : 5 ,
        paddingHorizontal : 12 ,
        textAlign : 'center',
        opacity : .75,
        width : '100%'
    }
})

MealItem.propTypes = {

    mealData: propTypes.object.isRequired ,
    navigationData : propTypes.object.isRequired
}

export default MealItem ;