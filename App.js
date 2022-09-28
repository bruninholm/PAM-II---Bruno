import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import logo from './assets/snorlax.png';
import pvp from './assets/PVP.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={pvp} resizeMode="cover" style={{width: 1500, height: 1000}}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
      <Image source={logo} style={{ width: 405, height: 400 }} />
      <Text style={{color: '#888', fontSize: 18}}> 
        Textinho incrível
      </Text>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    image: {
      flex: 1,
      justifyContent: "center",
    },

    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  },

});