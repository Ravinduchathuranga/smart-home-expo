import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#34E0A1' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

