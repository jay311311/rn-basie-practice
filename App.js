import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const addGoalhandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {key : Math.random().toString(),value:enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <View 
        style={styles.inputContainer}>
        <TextInput 
          placeholder="hey, catch me" 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
        <Button 
          title="add"
          onPress={addGoalhandler}/>
      </View>
      <FlatList data={courseGoals} renderItem={itemData => (
        <View style={styles.ListItem}>
            <Text keyExtractor={itemData.item.key}>{itemData.item.value}</Text>
          </View>
      )} />
        
     
    </View>
  );
}

const styles =  StyleSheet.create({
  screen:{
    padding:50
  },
  inputContainer:{
     
    flexDirection:"row", 
    justifyContent: "space-between", 
    alignContent:"center"
  },
  input:{
    width:"80%", 
    borderColor:"black", 
    borderWidth:1, 
    padding:10
  },
  ListItem:
    {padding:10,
      marginVertical:10,
    backgroundColor:"#ccc",
    borderColor:"black",
    borderWidth:2
  
  }
})