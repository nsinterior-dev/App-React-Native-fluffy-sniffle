import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import Task from './components/Task';


export default function App() {
  //This is how to create a state in a functional component in react. 
  //0: task -> name of the state
  //1: setTask -> function to set the state
  const [task, setTask] = useState();
  // example setTask = walk the dog

  const [taskItems, setTaskItems] = useState([]);
  //This will handle the log of the task
  const handleAddTask = () =>{
   setTaskItems([...taskItems, task])
   setTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View style={styles.items}>
          {/*This is where the tasks will go */}
          {/*reiterate*/}
          {
            taskItems.map((item, index)=>{
             return(
               <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                 <Task text={item} />
               </TouchableOpacity>
             )
            
            })
          }
          
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText = {text => setTask(text)}></TextInput>
        
          <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
          
        </KeyboardAvoidingView>
    </View>
   
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1381a2',
    },
    taskWrapper: {
      paddingTop: 80 ,
      paddingHorizontal: 20,
    },
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    items:{
      marginTop: 30,
   },
    writeTaskWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input:{
      paddingVertical: 15, 
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,

    },
    addWrapper:{
      height: 60,
      width: 60,
      backgroundColor: '#fff',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    addText:{}
});
