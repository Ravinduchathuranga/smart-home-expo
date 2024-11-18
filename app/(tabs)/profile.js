import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";


export default function Profile() {
    const handleEditProfile = () => {
        // Handle profile editing
        console.log("Edit Profile pressed");
    };

    const handleSettings = () => {
        // Navigate to Settings
        console.log("Settings pressed");
    };

    const handleLogout = () => {
        // Log out the user
        console.log("Logout pressed");
    };

    return (
        <View style={styles.container}>
            {/* Profile Picture Section */}
            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: "https://randomuser.me/api/portraits/men/7.jpg" }} // Replace with user profile URL
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>john.doe@example.com</Text>
            </View>

            {/* Options Section */}
            <View style={styles.optionsContainer}>
                <Pressable style={styles.option} onPress={
                    ()=>{
                        router.push("/editProfile");
                    }
                }>
                    <Text style={styles.optionText}>Edit Profile</Text>
                </Pressable>                
                <Pressable style={styles.logoutButton} onPress={
                    async () => {
                        await AsyncStorage.removeItem("user");
                        router.navigate({ pathname: "/" });
                    }
                }>
                    <Text style={styles.logoutText}>Log Out</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    profileHeader: {
        alignItems: "center",
        marginBottom: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    userName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    userEmail: {
        fontSize: 16,
        color: "gray",
    },
    optionsContainer: {
        marginTop: 20,
    },
    option: {
        backgroundColor: "#34E0A1",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
    },
    optionText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    logoutButton: {
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E04A34",
    },
    logoutText: {
        color: "#E04A34",
        fontSize: 16,
        fontWeight: "bold",
    },
});
