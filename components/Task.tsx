import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import Edit from './../svg/Edit.js'

const Task = ({task,setTasks,index}) => {

    const [isedit,setIsedit] = React.useState(false)
    const [text,setText] = React.useState(task)

    const handleSubmit = () => {
      if (isedit) {
        setTasks( (prev) => {
          prev[index].task = text
          return [...prev]
        })  
      }
      setIsedit(prev => !prev)
    }

    const handleDelete = () => {
      setTasks(prev => {
        const newTask = [...prev]
        newTask.splice(index,1)
        return newTask
      })
    }
    return (
        <View style = {styles.tasks}>
            <TextInput 
                style = {[styles.task,isedit ? {borderBottomColor:'#fff',borderBottomWidth:1} : {}]} 
                value={text} 
                editable={isedit}
                onChangeText={() => setText()}
            />
            <View style={{flexDirection:'row'}}>
              <Button 
                  style={{borderWidth : 10,width:10,height:10,borderColor : '#fff'}} 
                  onPress={handleSubmit} 
                  title={isedit ? 'SAVE' : 'EDIT'}
                  />
              <Button 
                  style={{borderWidth : 10,width:10,height:10,borderColor : '#fff'}} 
                  onPress={handleDelete} 
                  title={'delete'}
                  />
            </View>
                {/* <Edit /> */}
        </View>
    )
}


const styles = StyleSheet.create({

    buttons : {   
      flexDirection: 'row',
      justifyContent : 'space-between',
      alignItems : 'center'
    },
    app : {
      flex : 1,
      margin : 15
  
    },
    content : {
      flex : 1,
    },
    AddTask : {
      flex : 1,
    },
    plus : {
    },
    heading : {
      fontSize : 24,
      fontWeight : '900',
      color : '#000000'
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
      margin : 5
    },
    task : {
        color : '#ddd'
    }
    
  });
  
export default Task
