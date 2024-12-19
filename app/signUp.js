import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();

  //user registration
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");



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
        <TextInput style={styles.txtInput} inputMode={"text"} placeholder="Name"
          onChangeText={
            (text) => {
              setName(text);
            }
          }
        />
        <TextInput style={styles.txtInput} inputMode={"email"} placeholder="Email"
          onChangeText={
            (text) => {
              setEmail(text);
            }
          }
        />
        <TextInput style={styles.txtInput} placeholder="Password" secureTextEntry={true}
          onChangeText={
            (text) => {
              setPassword(text);
            }
          }
        />

        {/* Create Account Button */}
        <Pressable
          style={styles.btnPrimary}
          onPress={
            async () => {
              let formData = new FormData();
              formData.append("name", getName);
              formData.append("email", getEmail);
              formData.append("password", getPassword);
              try {
                let response = await fetch(process.env.EXPO_PUBLIC_API_URL + "/smart-home/SignUp",
                  {
                    method: 'POST',
                    body: formData
                  }
                );
                if (response.ok) {
                  let data = await response.json();
                  if (data.success) {
                    Alert.alert("Success", data.message)
                    router.replace("/signIn");
                  } else {
                    Alert.alert("Error", data.message)
                  }
                }
              } catch (error) {
                console.log(error);
              }
            }
          }
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
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
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
