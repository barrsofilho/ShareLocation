import React, { Component } from "react";
import { 
  StyleSheet, 
  Text, 
  View,
  Image
 } from "react-native";

  export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 130, height: 130}}
          source={require('../images/logo3.png')}/>
        <Text style={styles.logoText}>Welcome to My app.</Text>
      </View>
    );
  }
}


{/* <div>Logo made with <a href="https://
www.designevo.com/" title="Free Online Logo Maker">DesignEvo</a></div>
 */}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },

  logoText: {
    marginVertical: 15,
    fontSize:18,
    color:'rgba(255, 255, 255 , 07)'
  }
});



