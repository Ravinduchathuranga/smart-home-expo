import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="signIn" options={{ headerShown: false }} />
            <Stack.Screen name="signUp" options={{ headerShown: false }} />
            <Stack.Screen name="bulbsControls" options={{ headerShown: false }} />
            <Stack.Screen name="doorsControls" options={{ headerShown: false }} />
            <Stack.Screen name="fansControls" options={{ headerShown: false }} />
            <Stack.Screen name="editProfile" options={{ headerShown: false }} />
        </Stack>
    );
}
