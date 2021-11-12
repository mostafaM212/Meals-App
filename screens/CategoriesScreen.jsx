import React from 'react';
import { StyleSheet, Button, FlatList, View } from 'react-native';
import CategoryGridItem from '../components/Categories/CategoryGridItem';
import { CATEGORIES } from '../data/dummy_data';


function CategoriesScreen(props) {
    const { navigation } = props

    return (

        <FlatList numColumns={2}
            keyExtractor={item => item.id}
            data={CATEGORIES}
            renderItem={(item, index) => (<CategoryGridItem itemData={item}
                                                    navigation={navigation}
            />)}
        />
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

CategoriesScreen.navigationOptions = {

    headerStyle : {
        backgroundColor: 'blue',
    }
}
export default CategoriesScreen;