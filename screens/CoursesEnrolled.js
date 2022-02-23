import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

const Enrolled = ()=> {
  return (
    <View style={styles.Enrolled}>
      <Image
        style={styles.Arrow_back}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-471%3A73?alt=media&token=d8713da7-d6b6-465c-b9a6-739cd68fe22a",
        }}
      />
      <Text style={styles.Txt682}>Courses Enrolled</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Enrolled: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(0,0,0,1)",
    width: 428,
    height: 926,
  },
  Arrow_back: {
    position: "absolute",
    top: 34,
    left: 14,
    width: 60,
    height: 60,
  },
  Txt682: {
    position: "absolute",
    top: 115,
    left: 64,
    fontSize: 40,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 303,
    height: 47,
  },
})
export default Enrolled