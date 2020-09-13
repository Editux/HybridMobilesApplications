import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Box=({title,colour})=>{
return(
<View style={[styles.container,{backgroundColor:colour}]}>
<Text style={styles.textstyle}>{title}</Text>
</View>
);
};
export default Box;

const styles=StyleSheet.create({
container:{
height:100,
width:180,
alignSelf:'center',
margin:30,
padding:30,
},
textstyle:{
fontSize:25,
textTransform:'uppercase',
alignSelf:'center',
fontWeight:700,
},
});

