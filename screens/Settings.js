import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"

const Settings =()=> {
  return (
    <View style={styles.Settings}>
      <View style={styles.Group214}>
        <Text style={styles.DownloadSettings}>Download Settings</Text>
      </View>
      <View style={styles.Group114}>
        <Text style={styles.PrivacyPolicy}>Privacy Policy</Text>
      </View>
      <View style={styles.Group1104}>
        <Text style={styles.SoundSettings}>Sound Settings</Text>
      </View>
      <View style={styles.Group932}>
        <Text style={styles.TC}>Terms Of Conditions</Text>
      </View>
      <View style={styles.Group242}>
        <Text style={styles.AboutUs}>About Us</Text>
      </View>
      <Text style={styles.Header}>Settings</Text>
      <View style={styles.Group866}>
        <Text style={styles.LangSettings}>Language Settings</Text>
      </View>
      <Image
        style={styles.Arrow_back}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-399%3A67?alt=media&token=c59a64d1-b94f-499d-a8ea-33a34a3202c8",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Settings: {
    display: "flex",

    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(0,0,0,1)",
    width: 428,
    height: 926,
  },
  Group214: {
    position: "absolute",
    left: -20,
    top: 191,
    none: "0px",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 17,
    paddingRight: 159,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 435,
    height: 84,
  },
  DownloadSettings: {
    position: "absolute",
    left: 35,
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 253,
    height: 32,
  },

  Group114: {
    position: "absolute",
    left: -20,
    top: 536,
    none: "0px",
    paddingTop: 23,
    paddingBottom: 18,
    paddingLeft: 17,
    paddingRight: 223,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 435,
    height: 84,
  },
  PrivacyPolicy: {
    position: "absolute",
    left: 30,
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 189,
    height: 37,
  },

  Group1104: {
    position: "absolute",
    left: -20,
    top: 271,
    none: "0px",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 11,
    paddingRight: 205,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 435,
    height: 84,
  },
  SoundSettings: {
    position: "absolute",
    left: 30,
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 213,
    height: 32,
  },

  Group932: {
    position: "absolute",
    left: -20,
    top: 614,
    none: "0px",
    paddingTop: 24,
    paddingBottom: 17,
    paddingLeft: 16,
    paddingRight: 137,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 435,
    height: 84,
  },
  TC: {
    position: "absolute",
    left: 32,
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 276,
    height: 37,
  },

  Group242: {
    position: "absolute",
    left: -20,
    top: 695,
    none: "0px",
    paddingTop: 21,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 287,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 435,
    height: 84,
  },
  AboutUs: {
    position: "absolute",
    left: 34,
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 126,
    height: 37,
  },

  Header: {
    position: "absolute",
    top: 77,
    left: 141,
    fontSize: 40,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 148,
    height: 40,
  },
  Group866: {
    position: "absolute",
    left: -20,
    top: 350,
    none: "0px",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 15,
    paddingRight: 162,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 435,
    height: 84,
  },
  LangSettings: {
    position: "absolute",
    left: 33,
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 252,
    height: 32,
  },

  Arrow_back: {
    position: "absolute",
    top: 34,
    left: 14,
    width: 60,
    height: 60,
  },
}),
export default Settings