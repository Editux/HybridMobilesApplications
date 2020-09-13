
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './src/components/AppButton';
import Box from './src/components/Box'

export default function App() {
  const [colour1,setColour1]=useState('red');
  const [change1,setChange1]=useState(false);
  const [colour2,setColour2]=useState('red');
  const [change2,setChange2]=useState(false);
  const [colour3,setColour3]=useState('red');
  const [change3,setChange3]=useState(false);
  const [colour4,setColour4]=useState('red');
  const [change4,setChange4]=useState(false);

 const OnChange1= (colour1)=>{
  if(change1===false){
    setColour1(colour1),setChange1(true)
  }else{
    setColour1('red'),setChange1(false)
  }
 }
 const OnChange2= (colour2)=>{
   if(change2===false){
    setColour2(colour2),setChange2(true)
  }else{
    setColour2('red'),setChange2(false)
  }
}

const OnChange3= (colour3)=>{
  if(change3===false){
   setColour3(colour3),setChange3(true)
  }else{
   setColour3('red'),setChange3(false)
  }}
const OnChange4= (colour4)=>{
  if(change4===false){
    setColour4(colour4),setChange4(true)
  }else{
  setColour4('red'),setChange4(false)
  }}


  return (
    <View style={styles.container}>
      <View style={[styles.viewbox,{backgroundColor:'#d3d3d3'}]}>
      <AppButton title='Button1' onPress={()=>OnChange1('blue')}/>
      <AppButton title='Button2'onPress={()=>OnChange2('green')}/>
      <AppButton title='Button3'onPress={()=>OnChange3('lime')}/>
      <AppButton title='Button4'onPress={()=>OnChange4('yellow')}/>
      </View>
      
      <View style={[styles.viewbox,{backgroundColor:'#66400b'}]}>
      <Box title='Box1' colour={colour1}/>
      <Box title='Box2' colour={colour2}/>
      <Box title='Box3'colour={colour3}/>
      <Box title='Box4'colour={colour4}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent:'center',
   flexDirection:'row'
   
  },
  viewbox:{
    height:700,
    width:210,
    justifyContent:'center'
  }
});
