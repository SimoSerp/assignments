import { useState } from "react";
import { Text, View, Pressable, TextInput, Button, ScrollView, Alert } from "react-native";
import styles from '../style/style';
import Radiobutton from './Radiobutton';
import { Picker } from "@react-native-picker/picker";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

//importa il radio button

export default function Gameboard() {
   
    const [weight, setWeight] = useState("");
    const [bottles, setBottles] = useState(1);
    const [time, setTime] = useState(1);
    const [gender, setGender] = useState("male");
    const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);
    const [color, setColor] = useState("");

    const genders = [
        {label: "Male", value: 'male'},
        {label: "Female", value: 'female'}
      ]

    const bottlesArray = [
        {label: '1 bottle', value: 1},
        {label: '2 bottles', value: 2},
        {label: '3 bottles', value: 3},
        {label: '4 bottles', value: 4},
        {label: '5 bottles', value: 5},
        {label: '6 bottles', value: 6},
        {label: '7 bottles', value: 7},
        {label: '8 bottles', value: 8},
        {label: '9 bottles', value: 9},
        {label: '10 bottles', value: 10},
    ]

    const hours = [
        {label: '1 hour', value: 1},
        {label: '2 hours', value: 2},
        {label: '3 hours', value: 3},
        {label: '4 hours', value: 4},
        {label: '5 hours', value: 5},
        {label: '6 hours', value: 6},
        {label: '7 hours', value: 7},
        {label: '8 hours', value: 8},
        {label: '9 hours', value: 9},
        {label: '10 hours', value: 10},
      ]

      function calculate() {
        if(weight === ""){
            Alert.alert(
                "Missing weight",
                "Please enter the weight first",
              [
                {
                  text: "Ok",
                  onPress: () => console.log("ok")
                }
              ]
              );
        }
        else{
            let result = 0;
        const litres = bottles * 0.33;
        const grams = litres * 8 * 4.5;
        const burning = weight / 10;
        const gramsLeft = grams - burning * time;
        if(gender === "male"){
          result = gramsLeft / (weight * 0.7);
          if(result < 0){
              result = 0;
          }
          selectcolor(result);
          setBloodAlcoholLevel(result);
          
        }
        else{
          result = gramsLeft / (weight * 0.6);
          if(result < 0){
            result = 0;
        }
            selectcolor(result);
            setBloodAlcoholLevel(result);
        }
        }
      }
      function selectcolor(result){
        
        if(result < 0.20){
            setColor("#65b903");
        }
        else if(0.20 <= result && result <= 0.45){
            setColor("#ffed10");
        }
        else{
            setColor("#db3e00");
        }
          
      }
        
    return(
        <View style={styles.gameboard}>
            <ScrollView >
                <Text style={styles.gameinfo}>Weight</Text>
                
                <TextInput
                style={styles.input}
                onChangeText={text => setWeight(text)}
                placeholder='in kilograms'
                keyboardType='numeric'></TextInput>

        
                <Text style={styles.gameinfo}>Bottles</Text>
                
                <Picker
                onValueChange={(itemValue) => setBottles(itemValue)}
                selectedValue={bottles}
                >
                    {bottlesArray.map((bottle, index) => (
                    <Picker.Item key={index} label={bottle.label} value={bottle.value}/>
                    ))
                    }
                </Picker>
            
            <Text style={styles.gameinfo}>Time</Text>
            
            <Picker 
                onValueChange={(itemValue) => setTime(itemValue)}
                selectedValue={time}
            >
                {hours.map((hour, index) => (
                <Picker.Item key={index} label={hour.label} value={hour.value}/>
                ))
                }
            </Picker>

                <Text style={styles.gameinfo}>Gender</Text>
            
                <Radiobutton 
                options={genders} 
                onPress={(value) => {setGender(value)}}
                
                />
                {/* ****************************************parte da rivedere ************************************ */}
                {/* {(function() {
                    if(bloodAlcoholLevel <= 0.20){      
                        return <Text style={styles.gameinfo, color="#008b02"}>{bloodAlcoholLevel.toFixed(2)}</Text>
                    }
                    else if(0.20 < bloodAlcoholLevel <= 0.5){
                        return <Text style={styles.gameinfo, color="#fccb00"}>{bloodAlcoholLevel.toFixed(2)}</Text>       
                    }
                    else{
                        return <Text style={styles.gameinfo, color="#db3e00"}>{bloodAlcoholLevel.toFixed(2)}</Text>
                    }
                })()} */}
                <Text style={[styles.gameinfo, {color:color}]}>{bloodAlcoholLevel.toFixed(2)}</Text>
            
                <Button onPress={calculate} title="Calculate"></Button>

            </ScrollView>

        </View>
    
    );
}