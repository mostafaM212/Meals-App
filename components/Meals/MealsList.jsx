import React from 'react';
import { View, StyleSheet , FlatList } from 'react-native';
import MealItem from './MealItem';
import propTypes from 'prop-types'


function MealsList(props) {
    
    const {navigation , listData} = props
    return (
        <View style={styles.list}>
            <FlatList
                data={listData}
                keyExtractor={item =>item.id}
                numColumns={2}
                renderItem={(itemData)=>(
                    <MealItem  mealData={itemData.item}
                               navigationData={navigation}
                    />
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

MealsList.propTypes = {
    navigation : propTypes.object.isRequired ,
    listData : propTypes.array.isRequired
}
export default MealsList;