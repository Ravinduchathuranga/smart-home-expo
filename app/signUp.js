import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter(); 

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require("../assets/Icon.png")} style={styles.headerImg} />
        <Text style={styles.headerText}>Smart Home</Text>
      </View>

      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerHeader}>SIGN UP</Text>
        <Text style={styles.bannerText}>
          Looks like you don’t have an account. Let’s create a new account for you.
        </Text>
      </View>

      {/* Fields Section */}
      <View style={styles.fieldContainer}>
        <TextInput style={styles.txtInput} placeholder="Name" />
        <TextInput style={styles.txtInput} placeholder="Email" />
        <TextInput style={styles.txtInput} placeholder="Password" secureTextEntry={true} />

        {/* Create Account Button */}
        <Pressable
          style={styles.btnPrimary}
          onPress={() => {
            router.push("home/index");
          }}
        >
          <Text style={styles.btnTextPrimary}>Create an account</Text>
        </Pressable>

        {/* Log In Button */}
        <Pressable
          style={styles.btnSecondary}
          onPress={() => {
            router.push("/signIn"); 
          }}
        >
          <Text style={styles.btnTextSecondary}>Log In</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",    
  },
  headerImg: {
    width: 80,
    height: 80,    
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  bannerContainer: {
    justifyContent: "center",
    padding: 10,
  },
  bannerHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5, 
  },
  bannerText: {
    fontSize: 14,
    color: "gray",
  },
  fieldContainer: {
    padding: 20,
  },
  txtInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10, 
  },
  btnPrimary: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34E0A1",
    marginBottom: 10, 
  },
  btnTextPrimary: {
    fontSize: 15,
    fontWeight: "bold",    
  },
  btnSecondary: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#34E0A1",
  },
  btnTextSecondary: {
    fontSize: 15,
    fontWeight: "bold",
    
  },
});
