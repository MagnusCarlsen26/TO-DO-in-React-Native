import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TextInput,
} from 'react-native';
import Edit from './svg/Edit.js'
import Task from './components/Task'

function App(): React.JSX.Element {

  const [tasks,setTasks] = React.useState([
    {
      task : 'Like',
      status : 0
    },
    {
      task : 'Comment',
      status : 0,
    },
    {
      task : 'Subscribe',
      status : 0
    },
  ])

  const [newTask,setNewTask] = React.useState("")
  return (
    <SafeAreaView style = {styles.app}>
      <View style={styles.content} >
        <Text style = {styles.heading}>Today's Tasks</Text>
        <View style={styles.hr} /> 
        {
          tasks.map( (task,index) => (<Task task={task.task} index={index} key={index} setTasks={setTasks}/>))
        }
      </View>
      
      <SafeAreaView style = {styles.buttons}>
        <TextInput 
          style = {styles.plus} 
          onChangeText = {(newTask) => setNewTask(prev => newTask)}
          placeholder="NEW TASK"
        />
        <Button 
          style = {styles.AddTask} 
          title="+" 
          onPress = {() => {setTasks( prev => [...prev , {task : newTask , status : 0}]  )} }
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  buttons : {   
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  app : {
    flex : 1,
    padding : 15,
    backgroundColor : '#000'
  },
  content : {
    flex : 1,
  },
  AddTask : {
    flex : 1,
  },
  plus : {
    backgroundColor : '#fff'
  },
  heading : {
    fontSize : 24,
    fontWeight : '900',
    color : '#fff'
  },
  hr : {
    borderBottomColor: '#999', 
    borderBottomWidth: 1,      
    marginVertical: 10,      
  },
  tasks : { 
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 10,
    borderColor : '#555',
    borderRadius :10,
    borderWidth : 1,
    margin : 5,
  }
  
});

export default App;
