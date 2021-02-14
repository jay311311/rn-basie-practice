import React,{useState} from "react";
import {View, TextInput, Button, StyleSheet, Modal} from "react-native";


const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }


    const addGoalhandler=()=>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal("")
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View 
            style={styles.inputContainer}>
                <TextInput 
                placeholder="hey, catch me" 
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
                 <Button 
                title="CANCEL"
                color="red"
                onPress={props.onCancel}
                />
                <Button 
                title="ADD"
                onPress={ addGoalhandler}/>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:"column", 
        justifyContent: "center", 
        alignContent:"center"
      },
      input:{
        width:"80%", 
        borderColor:"black", 
        borderWidth:1, 
        padding:10,
        marginBottom:10
      },
     
})

export default GoalInput;