import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const[isAddMode, setIsAddMode]= useState(false)

  const addGoalhandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, {id : Math.random().toString(), value:goalTitle}]);
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter( goal => goal.id !== goalId)
    })
  }

  const cancelHandler = () =>{
    setIsAddMode(false)

  }

  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={()=>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={ addGoalhandler} onCancel={cancelHandler} />
      <FlatList 
        data={courseGoals} 
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
        <GoalItem 
          id={itemData.item.id} 
          onDelete={removeGoalHandler} 
          title ={itemData.item.value}/>
        )} 
      />
        
     
    </View>
  );
}

const styles =  StyleSheet.create({
  screen:{
    padding:50
  },


})