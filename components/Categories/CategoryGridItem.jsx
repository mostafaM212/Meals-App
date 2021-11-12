import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'
import propTyps from 'prop-types';
const CategoryGridItem = (props) => {
    const { itemData, navigation } = props

    let GridComponent = TouchableOpacity;

    if (Platform.OS === 'android') {
        GridComponent = TouchableNativeFeedback;
    }
    return (
        <View style={{ ...styles.gridItem, backgroundColor: itemData.item.color }}>
            <GridComponent onPress={() => navigation.navigate('Categories', {
                categoryId: itemData.item.id
            })}
                style={{ flex: 1 }}
                activeOpacity={.2}
            >
                <View style={styles.container}>
                    <Text style={styles.title}
                        numberOfLines={1}>{itemData.item.title}</Text>
                </View>
            </GridComponent>
        </View>

    )
}
const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow : 'hidden',
        shadowColor: 'black',
        shadowOpacity: .26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 6,
        
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22
    },
    container : {
        
        flex : 1,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
    }
})

CategoryGridItem.propTyps = {
    navigation: propTyps.object.isRequired,
    itemData: propTyps.object.isRequired
}
export default CategoryGridItem;