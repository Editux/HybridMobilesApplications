import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
 export default AppButton;
 
 const styles = StyleSheet.create({
    appButtonContainer: {
     backgroundColor:'#d3d3d3',
     margin:30,
     borderWidth:3,
     borderColor:'#daed8c',
     padding:30

    },
    appButtonText: {
        alignSelf:'center',
        fontSize:25,
        fontWeight:700,
    }
  });