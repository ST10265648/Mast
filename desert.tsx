import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';


const desertMenu = [
  { id: '1', name: 'Chocolate Cake', price: 'R5.00' },
  { id: '2', name: 'Cheesecake', price: 'R7.00' },
  { id: '3', name: 'Tiramisu', price: 'R8.50' },
  { id: '4', name: 'Ice Cream Sunday', price: 'R6.00' },
  { id: '5', name: 'Brownies', price: '9.00' },
];

const DesertComponent = () => {
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
      <Text style={styles.title}>Dessert Menu</Text>
      <FlatList
        data={desertMenu}
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
    backgroundColor: '#fff5e6', // Soft cream color to resemble dessert vibe
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8B4513', // Chocolate brown color for dessert theme
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
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 20,
    color: '#663300', // Rich brown for dessert items
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#663300',
  },
});

export default DesertComponent;
