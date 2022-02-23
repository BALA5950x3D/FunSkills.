import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-web";

const Home =()=>{
  return (
    <View style={styles.Homescreen}>
      <Text style={styles.Txt739}>Welcome, User</Text>
      <View style={styles.Group582}>
        <Image
          style={styles.List}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-64%n?alt=media&token=e22f6e62-cc34-48ef-9f77-c36211e80c9e",
          }}
        />
        <View style={styles.ClickOnAnyAppBelowHereToAccessTheFeatures}>
          <Text style={styles.Txt638}>
            Click on any app below here to access the features
          </Text>
        </View>
        <View style={styles.Group916}>
          <TouchableOpacity onPress={()=> console.log("pressed")}>
            <Image
              marginRight={50}
              style={styles.Date_range}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-56%3A23?alt=media&token=e5dbbb56-44ec-481c-b10c-e71337e9fd22",
            }}
            />
          </TouchableOpacity>
          <Image
            style={styles.Local_library}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-56%3A39?alt=media&token=5b794480-474e-4605-a18b-e4d15d67753f",
            }}
          />
          <Image
            style={styles.Quiz}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-56%3A54?alt=media&token=efd262d8-68dd-4571-b9a9-650dc445cf77",
            }}
          />
          <Image
            style={styles.Class}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-57%3A68?alt=media&token=3fd4f456-bc5e-4d84-b8e6-c0c0a4620a41",
            }}
          />
        </View>
        <View style={styles.Group059}>
          <Text style={styles.Txt798}>Planner</Text>
          <Text style={styles.Txt511}>Courses</Text>
          <Text style={styles.Txt934}>Quiz</Text>
          <Text style={styles.Txt179}>Library</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Homescreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(0,0,0,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 428,
    height: 926,
  },
  Txt739: {
    position: "absolute",
    top: 110,
    left: 115,
    fontSize: 45,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 205,
    height: 110,
  },
  Group582: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 34,
    none: "0px",
    width: 386,
    height: 842,
  },
  List: {
    width: 50,
    height: 50,
    marginBottom: 159,
  },
  ClickOnAnyAppBelowHereToAccessTheFeatures: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 465,
    mixBlendMode: "normal",
  },
  Txt638: {
    fontSize: 24,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 375,
    height: 76,
    marginLeft: 30,
  },

  Group916: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 30,
  },
  Date_range: {
    width: 60,
    height: 60,
    marginRight: 47,
  },
  Local_library: {
    width: 60,
    height: 60,
    marginRight: 37,
  },
  Quiz: {
    width: 60,
    height: 60,
    marginRight: 35,
  },
  Class: {
    width: 60,
    height: 60,
  },

  Group059: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  Txt798: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 82,
    height: 15,
    marginRight: 29,
  },
  Txt511: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 74,
    height: 12,
    marginRight: 42,
  },
  Txt934: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 34,
    height: 12,
    marginRight: 54,
  },
  Txt179: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 51,
    height: 20,
  },

})
export default Home