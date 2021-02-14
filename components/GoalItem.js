import React from "react";
import{View, Text, StyleSheet, TouchableOpacity} from "react-native"

const styles= StyleSheet.create({
    ListItem:
    {padding:10,
      marginVertical:10,
    backgroundColor:"#ccc",
    borderColor:"black",
    borderWidth:2
  
  }

})


const GoalItem =  props =>{
return  (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.8}>
        <View style={styles.ListItem} > 
            <Text >{props.title}</Text>
        </View>
    </TouchableOpacity>
        
    )
};

export default GoalItem;