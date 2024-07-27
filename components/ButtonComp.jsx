import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



export default function ButtonComp({text,onPress,op}) {
  const buttonStyle = [styles.button];
  if (op === 'operator') {
    buttonStyle.push(styles.operatorButton);
  }
  if(op === 'ans'){
    buttonStyle.push(styles.ansButton);
  }
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:"#292829",
        height:65,
        width:65,
        borderRadius:35,
        alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        position:'realtive',
    },
    operatorButton: {
        backgroundColor: "#424042",
      },
    ansButton:{
      backgroundColor: "#FF0000",
      },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color: 'white',
    },
})