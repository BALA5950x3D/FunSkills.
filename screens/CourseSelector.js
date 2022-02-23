import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

const SoftSkillsSelector = ()=> {
  return (
    <View style={styles.SoftSkillsSelector}>
      <View style={styles.Group929}>
        <Text style={styles.Txt562}>Courses</Text>
        <View style={styles.Group191}>
          <Image
            style={styles.Developer_mode}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-76%3A84?alt=media&token=0c34e6ca-5068-4179-89f0-2f563e792130",
            }}
          />
          <Text style={styles.Txt854}>Problem Solving</Text>
        </View>
        <View style={styles.Group6106}>
          <Image
            style={styles.Palette}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-76%3A87?alt=media&token=460edc41-41a9-4769-84fa-0d7b0fb036a8",
            }}
          />
          <Text style={styles.Txt063}>Creative Thinking</Text>
        </View>
        <View style={styles.Group9104}>
          <Image
            style={styles.Developer_mode}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-76%3A88?alt=media&token=0ec7ffc6-35e6-48dc-b294-decfb1fe942f",
            }}
          />
          <Text style={styles.Txt864}>Public Speaking</Text>
        </View>
      </View>
      <Image
        style={styles.Arrow_back}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-150%3A86?alt=media&token=aee45bc3-04d1-436b-8d1a-27231de95368",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  SoftSkillsSelector: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 27,
    paddingBottom: 438,
    paddingLeft: 13,
    paddingRight: 35,
    backgroundColor: "rgba(0,0,0,1)",
    width: 428,
    height: 926,
  },
  Group929: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: 30,
    left: 15,
  },
  Txt562: {

    fontSize: 40,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 151,
    height: 46,
    marginBottom: 88,
  },
  Group191: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 35,
  },
  Developer_mode: {
    width: 60,
    height: 60,
    marginRight: 11,
  },
  Txt854: {
    fontSize: 35,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 265,
    height: 46,
  },

  Group6106: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },
  Palette: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  Txt063: {
    marginRight: -12,
    fontSize: 35,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 277,
    height: 39,
  },

  Group9104: {
    display: "flex",
    flexDirection: "row",
  },
  Developer_mode: {
    width: 60,
    height: 60,
    marginRight: 11,
  },
  Txt864: {
    fontSize: 35,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 256,
    height: 39,
  },

  Arrow_back: {
    top: -410,
    width: 60,
    height: 60,
  },
})
export default SoftSkillsSelector