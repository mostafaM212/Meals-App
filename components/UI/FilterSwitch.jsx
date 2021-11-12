import React from 'react'
import { StyleSheet, Text, View ,Switch} from 'react-native'
import propTypes from 'prop-types'
import colors from '../../constants/colors';

const FilterSwitch = (props) => {
    const {onChange , value , title} = props ;
    
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.title} >{title}</Text>
            <Switch value={value}
                onValueChange={onChange}
                trackColor={{true : colors.primaryColor}}
                thumbColor={colors.primaryColor}

            />
        </View>
    )
}
FilterSwitch.propTypes = {
    onChange : propTypes.func.isRequired ,
    value : propTypes.bool.isRequired ,
    title : propTypes.string.isRequired
}

export default FilterSwitch ;

const styles = StyleSheet.create({
    filterContainer : {
        alignItems : 'center',
        width : '80%' ,
        flexDirection : 'row',
        justifyContent : 'space-between' ,
        borderBottomWidth : 1 ,
        borderColor : '#ccc'
    },
    title :{
        fontSize : 15
    }
})
