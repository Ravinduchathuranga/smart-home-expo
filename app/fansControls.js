import { StyleSheet, Text, View, Switch, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';

export default function FansControl() {
  // Mock data for fans
  const [fans, setFans] = useState([
    { id: 1, name: 'Living Room Fan', icon: 'fan', status: false, speed: 0 },
    { id: 2, name: 'Bedroom Fan', icon: 'fan', status: true, speed: 2 },
    { id: 3, name: 'Kitchen Fan', icon: 'fan', status: false, speed: 0 },
  ]);

  // Toggle fan status
  const toggleFan = (id) => {
    setFans((prevState) =>
      prevState.map((fan) =>
        fan.id === id
          ? { ...fan, status: !fan.status, speed: !fan.status ? 1 : 0 } // Default to speed 1 when turned on
          : fan
      )
    );
  };

  // Increase fan speed
  const increaseSpeed = (id) => {
    setFans((prevState) =>
      prevState.map((fan) =>
        fan.id === id && fan.speed < 5 ? { ...fan, speed: fan.speed + 1 } : fan
      )
    );
  };

  // Decrease fan speed
  const decreaseSpeed = (id) => {
    setFans((prevState) =>
      prevState.map((fan) =>
        fan.id === id && fan.speed > 1 ? { ...fan, speed: fan.speed - 1 } : fan
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Fans Control</Text>
      </View>

      {/* Fans List */}
      <FlatList
        data={fans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.fanCard}>
            {/* Fan Icon */}
            <FontAwesome6
              name={item.icon}
              size={30}
              color={item.status ? '#34E0A1' : '#767577'}
            />

            {/* Fan Details */}
            <View style={styles.fanDetails}>
              <Text style={styles.fanName}>{item.name}</Text>
              <Text style={styles.fanStatus}>
                {item.status ? `Speed: ${item.speed}` : 'OFF'}
              </Text>

              {/* Speed Controls */}
              {item.status && (
                <View style={styles.speedControls}>
                  <Pressable
                    style={[
                      styles.speedButton,
                      { backgroundColor: item.speed > 1 ? '#34E0A1' : '#ddd' },
                    ]}
                    onPress={() => decreaseSpeed(item.id)}
                    disabled={item.speed <= 1}
                  >
                    <Text style={styles.speedButtonText}>-</Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.speedButton,
                      { backgroundColor: item.speed < 5 ? '#34E0A1' : '#ddd' },
                    ]}
                    onPress={() => increaseSpeed(item.id)}
                    disabled={item.speed >= 5}
                  >
                    <Text style={styles.speedButtonText}>+</Text>
                  </Pressable>
                </View>
              )}
            </View>

            {/* Fan Switch */}
            <Switch
              value={item.status}
              onValueChange={() => toggleFan(item.id)}
              trackColor={{ false: '#767577', true: '#34E0A1' }}
              thumbColor={item.status ? '#34E0A1' : '#f4f3f4'}
            />
          </View>
        )}
        contentContainerStyle={styles.fansContainer}
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
  fansContainer: {
    paddingHorizontal: 20,
  },
  fanCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  fanDetails: {
    flex: 1,
    marginLeft: 10,
  },
  fanName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fanStatus: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  speedControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  speedButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  speedButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
