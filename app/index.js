import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { router, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function index() {
  const router = useRouter();

  useEffect(
    () => {
      async function checkUser() {
        try {
          let user = await AsyncStorage.getItem("user");
          if (user) {
            router.replace("/home");
          }
        } catch (error) {
          console.log(error);
        }
      }
      checkUser();
    }, []
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={require("../assets/Logo.png")} style={styles.imgContainer} />
      <Pressable style={styles.btnContainer}
        onPress={
          () => {
            router.push("/signIn");
          }
        }
      >
        <Text style={styles.gsTxt}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 400,
    height: 400,
  },
  btnContainer: {
    width: 127,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34E0A1"
  },
  gsTxt: {
    fontSize: 15,
    fontWeight: "bold"
  },
});