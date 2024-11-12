import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import MenuScreen from './menu';
import Menu from './menu';
import { isRunningInExpoGo } from 'expo';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [LogedOnUser, setLogOnUser] = useState(true);

  // control the state of the menu screen to show or not 
  const [showMenu, setShowMenu] = useState(false);


  const [users, setUsers] = useState([
    { username: 'john', password: '12345' },
    { username: 'jane', password: 'password' },
  ]);

  // Handle login logic
  const handleLogin = () => {
    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      resetInputFields();
      setLogOnUser(false);
      //move to the menu screen 
      setShowMenu(true);

    } else {
      Alert.alert(
        'User Not Found',
        'User does not exist. Please create a new account.'
      );
    }
  };

 
  // Reset input fields
  const resetInputFields = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {LogedOnUser && (
         // Login Screen
         <>
         <Text style={styles.title}>Login</Text>
         <TextInput
           style={styles.input}
           placeholder="Username"
           value={username}
           onChangeText={setUsername}
         />
         <TextInput
           style={styles.input}
           placeholder="Password"
           secureTextEntry
           value={password}
           onChangeText={setPassword}
         />

         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
           <Text style={styles.loginButtonText}>Login</Text>
         </TouchableOpacity>

       </>
      )}
       
     {showMenu &&  (
          <Menu/>
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  switchMode: {
    marginTop: 15,
  },
  switchModeText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginScreen;