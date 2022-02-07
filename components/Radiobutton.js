import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import styles from '../style/style';

export default function Radiobutton({options, onPress}) {

    const [value, setValue] = useState(null);

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }

    return (
        <>
        {
        options.map((item) => (
            <View key={item.value} style={styles.buttonContainer}>
                <Text style={styles.gameinfo}>{item.label}</Text>
                <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
                    {value === item.value && <View style={styles.checkedcircle}/>}
                </Pressable>
            </View>
        ))
        }
        
        </>
    )
  }



// const styles = StyleSheet.create({
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//         width: '100%',
//         marginBottom: 10,
//         paddingLeft: 30,
//         paddingRight: 30,
//     },
//     label: {
//         marginRight: 10,
//     },
//     circle: {
//         height: 28,
//         width: 28,
//         borderRadius: 15,
//         borderWidth: 1,
//         borderColor: '#000',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     checkedcircle:{
//         width: 15,
//         height: 15,
//         borderRadius: 7,
//         backgroundColor: '#000',
//     }
// });