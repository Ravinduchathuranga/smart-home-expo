import { StyleSheet, Text, View, Switch, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';

export default function DoorsControls() {
  // Mock data for doors
  const [doors, setDoors] = useState([
    { id: 1, name: 'Main Door', icon: 'door-open', status: false },
    { id: 2, name: 'Garage Door', icon: 'warehouse', status: true },
    { id: 3, name: 'Bedroom Door', icon: 'bed', status: false },
    { id: 4, name: 'Backyard Door', icon: 'tree', status: true },
  ]);

  // Handle door toggle
  const toggleDoor = (id) => {
    setDoors((prevState) =>
      prevState.map((door) =>
        door.id === id ? { ...door, status: !door.status } : door
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Doors Control</Text>
      </View>

      {/* Doors List */}
      <FlatList
        data={doors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.doorCard}>
            <FontAwesome6
              name={item.icon}
              size={30}
              color={item.status ? '#34E0A1' : '#767577'}
            />
            <View style={styles.doorDetails}>
              <Text style={styles.doorName}>{item.name}</Text>
              <Text style={styles.doorStatus}>
                {item.status ? 'OPEN' : 'CLOSED'}
              </Text>
            </View>
            <Switch
              value={item.status}
              onValueChange={() => toggleDoor(item.id)}
              trackColor={{ false: '#767577', true: '#34E0A1' }}
              thumbColor={item.status ? '#34E0A1' : '#f4f3f4'}
            />
          </View>
        )}
        contentContainerStyle={styles.doorsContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#34E0A1',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  doorsContainer: {
    paddingHorizontal: 20,
  },
  doorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  doorDetails: {
    flex: 1,
    marginLeft: 10,
  },
  doorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doorStatus: {
    fontSize: 14,
    color: '#666',
  },
});
