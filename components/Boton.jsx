import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boton = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={style.button}
            onPress={onPress}
        >
            <Text style={style.buttonText}>
                {text}
            </Text>
        
        </TouchableOpacity>
       
    )
}

export default Boton


const style = StyleSheet.create({

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    button: {
        backgroundColor: `#008b8b`,
        borderWidth:2,
        borderColor: 'lightblue',
        borderRadius: 1,
        padding: 15,
        width: '50%',
        left: '25%',
        justifyContent:'center',
        marginTop:45
        
    },

});