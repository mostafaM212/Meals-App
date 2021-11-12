import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import FilterSwitch from '../components/UI/FilterSwitch';
import SavingButton from '../components/UI/SavingButton';
import { setFilters } from '../store/actions/meals';


function FiltersScreen(props) {

    const [guldenFree, setGuldenFree] = useState(false)
    const [LactoseFree, setLactoseFree] = useState(false)
    const [Vegan, setVegan] = useState(false)
    const [Vegetarian, setVegetarian] = useState(false)

    const { navigation } = props
    navigation.setOptions({
        headerLeft: () => <SavingButton saveSettings={savingFilters}/>,
    })
    const dispatch = useDispatch()

    const savingFilters = useCallback(() => {

        dispatch(setFilters({
            guldenFree: guldenFree,
            lactoseFree: LactoseFree,
            vegan: Vegan,
            vegetarian: Vegetarian
        }))

    }, [guldenFree, LactoseFree, Vegetarian, Vegan, dispatch])

    useEffect(() => {

        navigation.setParams({
            save: savingFilters
        })

    }, [navigation, guldenFree, LactoseFree, Vegetarian, Vegan])
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Restrections</Text>
            <FilterSwitch value={guldenFree}
                title="Gluten Free"
                onChange={() => setGuldenFree(!guldenFree)}
            />
            <FilterSwitch value={LactoseFree}
                title="Lactose Free"
                onChange={() => setLactoseFree(!LactoseFree)}
            />
            <FilterSwitch value={Vegan}
                title="Vegan"
                onChange={() => setVegan(!Vegan)}
            />
            <FilterSwitch value={Vegetarian}
                title="Vegetarian"
                onChange={() => setVegetarian(!Vegetarian)}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },


})

export default FiltersScreen;