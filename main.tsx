import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const mainMenu = [
  { id: '1', name: 'Pasta', price: 'R25.00' },
  { id: '2', name: 'Cottage Pie', price: 'R30.00' },
  { id: '3', name: 'chicken', price: 'R50.50' },
  { id: '4', name: 'Beef', price: 'R80.00' },
  { id: '5', name: 'Macaroni and cheese', price: 'R45.00' },
];

const MainComponent = () => {
  const handleAddToCart = (itemName: string) => {
    Alert.alert(`${itemName} added to the cart!`);
  };

  const renderItem = ({ item }: { item: { name: string; price: string } }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddToCart(item.name)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>
      <FlatList
        data={mainMenu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, 
  },
  itemName: {
    fontSize: 18,
    color: '#555',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#28a745', 
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainComponent;
