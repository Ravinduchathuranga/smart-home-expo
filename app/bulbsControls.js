import { StyleSheet, Text, View, Switch, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';

export default function BulbsControls() {
  // Mock data for lights
  const [lights, setLights] = useState([
    { id: 1, name: 'Living Room Light', icon: 'lightbulb', status: false },
    { id: 2, name: 'Bedroom Light', icon: 'bed', status: true },
    { id: 3, name: 'Kitchen Light', icon: 'utensils', status: false },
    { id: 4, name: 'Bathroom Light', icon: 'bath', status: true },
    { id: 5, name: 'Garage Light', icon: 'car', status: false },
  ]);

  // Handle light toggle
  const toggleLight = (id) => {
    setLights((prevState) =>
      prevState.map((light) =>
        light.id === id ? { ...light, status: !light.status } : light
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Lights Control</Text>
      </View>

      {/* Lights List */}
      <FlatList
        data={lights}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.lightCard}>
            <FontAwesome6 name={item.icon} size={30} color={item.status ? '#34E0A1' : '#767577'} />
            <View style={styles.lightDetails}>
              <Text style={styles.lightName}>{item.name}</Text>
              <Text style={styles.lightStatus}>{item.status ? 'ON' : 'OFF'}</Text>
            </View>
            <Switch
              value={item.status}
              onValueChange={() => toggleLight(item.id)}
              trackColor={{ false: '#767577', true: '#34E0A1' }}
              thumbColor={item.status ? '#34E0A1' : '#f4f3f4'}
            />
          </View>
        )}
        contentContainerStyle={styles.lightsContainer}
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
  lightsContainer: {
    paddingHorizontal: 20,
  },
  lightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  lightDetails: {
    flex: 1,
    marginLeft: 10,
  },
  lightName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lightStatus: {
    fontSize: 14,
    color: '#666',
  },
});
