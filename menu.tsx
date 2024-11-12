import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Starters from './starters'; 
import Main from './main';         
import Dessert from './desert';

const MenuScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('menu');

  const handleStarters = () => setCurrentScreen('starters');
  const handleMain = () => setCurrentScreen('main');
  const handleDessert = () => setCurrentScreen('dessert');
  const handleBackToMenu = () => setCurrentScreen('menu');

  const renderButton = (title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined, onPress: ((event: GestureResponderEvent) => void) | undefined) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {currentScreen === 'menu' && (
        <>
          <Text style={styles.title}>Menu</Text>
          <View style={styles.buttonContainer}>
            {renderButton('Starters', handleStarters)}
            {renderButton('Main', handleMain)}
            {renderButton('Dessert', handleDessert)}
          </View>
        </>
      )}

      {currentScreen === 'starters' && (
        <>
          <Starters />
          {renderButton('Back to Menu', handleBackToMenu)}
        </>
      )}

      {currentScreen === 'main' && (
        <>
          <Main />
          {renderButton('Back to Menu', handleBackToMenu)}
        </>
      )}

      {currentScreen === 'dessert' && (
        <>
          <Dessert />
          {renderButton('Back to Menu', handleBackToMenu)}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default MenuScreen;
