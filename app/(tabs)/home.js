import { StyleSheet, Text, View, Switch, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  const [morningScene, setMorningScene] = useState(false);
  const [nightScene, setNightScene] = useState(false);

  // Mock Data for Devices
  const devices = [
    { id: 1, name: 'Room Lights', icon: 'lightbulb', },
    { id: 2, name: 'Fans', icon: 'fan' },
    { id: 3, name: 'Doors', icon: 'door-open' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Smart Home</Text>
        <Pressable style={styles.addButton}>
          <FontAwesome6 name="plus" size={18} color="#fff" />
        </Pressable>
      </View>

      {/* Scenes Section */}
      <View style={styles.sceneContainer}>
        <Text style={styles.sectionHeader}>Scenes</Text>
        <View style={styles.sceneCard}>
          <Text style={styles.sceneName}>Morning Scene</Text>
          <Switch
            value={morningScene}
            onValueChange={setMorningScene}
            trackColor={{ false: '#767577', true: '#34E0A1' }}
            thumbColor={morningScene ? '#34E0A1' : '#f4f3f4'}
          />
        </View>
        <View style={styles.sceneCard}>
          <Text style={styles.sceneName}>Night Scene</Text>
          <Switch
            value={nightScene}
            onValueChange={setNightScene}
            trackColor={{ false: '#767577', true: '#34E0A1' }}
            thumbColor={nightScene ? '#34E0A1' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Elements Section */}
      <View style={styles.devicesContainer}>
        <Text style={styles.sectionHeader}>Elements</Text>
        <FlatList
          data={devices}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Display 2 cards per row
          renderItem={({ item }) => (
            <Pressable
              style={styles.deviceCard}
              onPress={
                () => {
                  switch (item.id) {
                    case 1:
                      id = 1;
                      router.push("/bulbsControls");
                      break
                    case 2:
                      id = 2;
                      router.push("/fansControls");
                      break
                    case 3:
                      id = 3;
                      router.push("/doorsControls");
                      break
                  }
                }
              }
            >
              <FontAwesome6 name={item.icon} size={30} color="#34E0A1" />
              <Text style={styles.deviceName}>{item.name}</Text>
              <Text style={styles.deviceStatus}>{item.status}</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#34E0A1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  sceneContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sceneCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  sceneName: {
    fontSize: 16,
  },
  devicesContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  deviceCard: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  deviceName: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
    textAlign: 'center',
  },
  deviceStatus: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
    textAlign: 'center',
  },
});
