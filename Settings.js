import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"

export default function Settings() {
  return (
    <View style={styles.Settings}>
      <View style={styles.Group1}>
        <Text style={styles.Txt213}>Download Settings</Text>
      </View>
      <View style={styles.Group2}>
        <Text style={styles.Txt055}>Privacy Policy</Text>
      </View>
      <View style={styles.Group3}>
        <Text style={styles.Txt237}>Sound Settings</Text>
      </View>
      <View style={styles.Group4}>
        <Text style={styles.Txt841}>Terms Of Conditions</Text>
      </View>
      <View style={styles.Group5}>
        <Text style={styles.Txt125}>About Us</Text>
      </View>
      <Text style={styles.Txt325}>Settings</Text>
      <View style={styles.Group6}>
        <Text style={styles.Txt204}>Language Settings</Text>
      </View>
      <Image
        style={styles.Arrow_back}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-399%3A67?alt=media&token=3db9b474-d88f-4362-9a6a-c717a288c660",
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
  Group1: {
    position: "absolute",
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
  Txt213: {
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 253,
    height: 32,
  },

  Group2: {
    position: "absolute",
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
  Txt055: {
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 189,
    height: 37,
  },

  Group3: {
    position: "absolute",
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
  Txt237: {
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 213,
    height: 32,
  },

  Group4: {
    position: "absolute",
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
  Txt841: {
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 276,
    height: 37,
  },

  Group5: {
    position: "absolute",
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
  Txt125: {
    fontSize: 30,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 126,
    height: 37,
  },

  Txt325: {
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
  Group: {
    position: "absolute",
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
  Txt204: {
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
})
