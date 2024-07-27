import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonComp from './components/ButtonComp';


const App = () => {
  const [calculate,setCalcuate] = useState('');
  const [ans,setAns] = useState('');
  const [highlightResult, setHighlightResult] = useState(false);
  const calculatesum = item => {
    if(item === 'C'){
      setCalcuate('');
      setAns('');
      setHighlightResult(false);
    }
    else if(item === 'AC'){
      const str = calculate;
      const newStr = str.substring(0, str.length - 1);
      setCalcuate(newStr);
      if(calculate === 'Error' ){
        setCalcuate(0);
        setAns(0);
        setHighlightResult(false);
      }
    }
    else if(item == '='){
      try{
        setAns(eval(calculate))
        setHighlightResult(true);
       
      }
      catch(error){
        setCalcuate(0);
        setAns('Error');
        setHighlightResult(false);
      }
    } 
    else{
      setCalcuate(perv => perv + item)
      setHighlightResult(false);
    }
  };
  
  const DATA = [
    {
      type:'operator',
      value:'C',
    },
    {
      type:'operator',
      value:'%',
    },{
      type:'operator',
      value:'AC',
    },{
      type:'operator',
      value:'/',
    },{
      type:'number',
      value:'7',
    },{
      type:'number',
      value:'8',
    },{
      type:'number',
      value:'9',
    },{
      type:'operator',
      value:'*',
    },{
      type:'number',
      value:'4',
    },{
      type:'number',
      value:'5',
    },{
      type:'number',
      value:'6',
    },{
      type:'operator',
      value:'-',
    },{
      type:'number',
      value:'1',
    },
    {
      type:'number',
      value:'2',
    },
    {
      type:'number',
      value:'3',
    },
    {
      type:'operator',
      value:'+',
    },
    {
      type:'number',
      value:'00',
    },
    {
      type:'number',
      value:'0',
    },
    {
      type:'number',
      value:'.',
    },
    {
      type:'ans',
      value:'=',
    },
  ]
  
  const renderItem = ({item}) => (
    <ButtonComp text={item.value} op={item.type}onPress={()=>calculatesum(item.value)}/>
  );

  
  return (

      <View style={{flex:1,justifyContent:"space-around",backgroundColor:'#000000'}}>
        
          <View style={{justifyContent:'flex-end',alignItems:'flex-end',flex:1,marginRight:20,marginBottom:40}}>
            <Text style={[styles.calculateText, highlightResult && styles.decreasedSize]}>{calculate || 0}</Text>
            <Text style={[styles.ansText, highlightResult && styles.highlighted]}>{ans}</Text>
            </View>
            
          <View style={{justifyContent:'center',alignItems:'center',flex:1,left:10}}>
            <FlatList 
              data= {DATA}
              renderItem={renderItem} 
              numColumns={4}
              columnWrapperStyle={{gap:32,paddingBottom:22}}
              />
          </View>
      </View>

  )
}

export default App

const styles = StyleSheet.create({
  calculateText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  decreasedSize: {
    fontSize: 20, 
  },
  ansText: {
    fontSize: 40,
    color: '#666366',
    fontFamily: 'bold',
  },
  highlighted: {
    color: '#FFFFFF', 
    fontWeight: 'bold',
  },
})