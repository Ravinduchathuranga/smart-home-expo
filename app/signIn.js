import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router';

export default function signIn() {
  const router = useRouter();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/Icon.png")} style={styles.headerImg} />
        <Text style={styles.headerText}>Smart Home</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerHeader}>SIGN IN</Text>
        <Text style={styles.bannerText}>Hello and welcome to Smart Home and let's log in</Text>
      </View>
      <View style={styles.fieldContainer}>
        <TextInput style={styles.txtInput} placeholder='Email' />
        <TextInput style={styles.txtInput} placeholder='Password' />
        <Pressable style={styles.btnContainer1}
          onPress={
            () => {
              router.push("home/index");
            }
          }
        >
          <Text style={styles.btnText1}>Log In</Text>
        </Pressable>
        <Pressable style={styles.btnContainer2}
          onPress={
            () => {
              router.push("/signUp")
            }
          }
        >
          <Text style={styles.btnText2}>Create an account</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 30,
    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    alignItems: "center",
  },
  headerImg: {
    width: 80,
    height: 80,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold"
  },
  bannerContainer: {
    flex: 0,
    justifyContent: "center",
    padding: 10,

  },
  bannerHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fieldContainer: {
    padding: 20,
    rowGap: 10,
  },
  txtInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    paddingLeft: 10,
  },
  btnContainer1: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34E0A1"
  },
  btnContainer2: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#34E0A1",
  },
  btnText1: {
    fontSize: 15,
    fontWeight: "bold",

  },
  btnText2: {
    fontSize: 15,
    fontWeight: "bold",
    // color: "#34E0A1"
  },
})