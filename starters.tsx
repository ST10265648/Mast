import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';


const startersMenu = [
  { id: '1', name: 'Garlic Bread', price: 'R5.00' },
  { id: '2', name: 'Bruschetta', price: 'R7.00' },
  { id: '3', name: 'Caesar Salad', price: 'R8.50' },
  { id: '4', name: 'Soup of the Day', price: 'R6.00' },
  { id: '5', name: 'Mozzarella Sticks', price: 'R9.00' },
];

const StarterComponent = () => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: { name: string; price: string }) => {
    setCart([...cart, item]);
    Alert.alert(`${item.name} added to cart!`);
  };

  const renderItem = ({ item }: { item: { name: string; price: string } }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starters Menu</Text>
      <FlatList
        data={startersMenu}
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
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#555',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default StarterComponent;
