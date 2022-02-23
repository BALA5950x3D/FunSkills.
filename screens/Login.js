import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Login() {
  return (
    <View style={styles.Login}>
      <View style={styles.Group2101}>
        <Text style={styles.Login}>Login</Text>
        <View style={styles.Group268}>
          <Text style={styles.ContinueGoogle}>Continue Using</Text>
          <Image
            style={styles.Google}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-45%3A3?alt=media&token=a0b44086-9b03-4804-a7aa-58e4990e8f8c",
            }}
          />
        </View>
        <View style={styles.Group874}>
          <Text style={styles.Txt052}>Continue Using </Text>
          <Image
            style={styles.FaceBook}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-45%3A4?alt=media&token=609d99f8-ace3-4e46-8b0d-8f1da4a068cc",
            }}
          />
        </View>
        <Text style={styles.Txt949}>Sign Up</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 212,
    paddingBottom: 254,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: "rgba(0,0,0,1)",
    width: 428,
    height: 926,
  },
  Group2101: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Login: {
    fontSize: 40,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 103,
    height: 47,
    marginBottom: 153,
  },
  Group268: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 47,
    paddingRight: 49,
    marginBottom: 44,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  ContinueGoogle: {
    fontSize: 20,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginRight: 2,
  },
  Google: {
    width: 30,
    height: 30,
  },

  Group874: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 45,
    paddingRight: 43,
    marginBottom: 63,
    borderRadius: 50,
    backgroundColor: "rgba(6,73,173,1)",
  },
  ContinueFaceBook: {
    fontSize: 20,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 138,
    marginRight: 2,
  },
  FaceBook: {
    width: 36,
    height: 36,
  },

  Txt949: {
    fontSize: 25,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 88,
    height: 27,
  },
})