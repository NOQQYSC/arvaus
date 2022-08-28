import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardType, Alert } from 'react-native';

export default function App() {
  const [times, setTimes] = useState(1);
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('Guess a number between 1-100');
  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);

const guess = () => {
  setTimes(time => times + 1)
  if (number == random){
    Alert.alert('You guessed the number in ' + times + ' guesses');
    setMessage('Guess a number between 1-100');
    setRandom(Math.floor(Math.random() * 100) + 1);
    setTimes(1);
    setNumber(0);
  }
  else if (number < random){
    setMessage('Your guess ' + number + ' is too low')
  }
  else if (number > random){
    setMessage('Your guess ' + number + ' is too high')
  }
}

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput style={{width: 200, borderBottomColor: 'gray', borderWidth: 1}}
      onChangeText={numba => setNumber(numba)} value={number} keyboardType= 'numeric'/>
      <Button onPress={guess} title="Make guess"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
