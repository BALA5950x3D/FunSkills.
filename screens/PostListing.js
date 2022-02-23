import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function PostingBooks() {
  return (
    <View style={styles.PostingBooks}>
      <Image
        style={styles.Arrow_back}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-404%3A80?alt=media&token=092a9948-826d-4270-98a0-9cf522bca8ba",
        }}
      />
      <Text style={styles.Txt318}>Date</Text>
      <Text style={styles.Txt566}>Time</Text>
      <Text style={styles.Txt753}>Book Name</Text>
      <Text style={styles.Txt172}>Starting Price</Text>
      <View style={styles.Group820}>
        <Image
          style={styles.Rectangle22}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-404%3A84?alt=media&token=bebf17ba-d649-408f-a8e6-7f9e08135d8f",
          }}
        />
        <Image
          style={styles.Rectangle22}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-404%3A86?alt=media&token=222a4d70-3fa5-4ebf-be94-794378e40c3a",
          }}
        />
        <Image
          style={styles.Rectangle24}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-494%3A66?alt=media&token=1a734c46-1a1d-4031-a40e-c85d9b65ef61",
          }}
        />
        <Image
          style={styles.Rectangle25}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-495%3A86?alt=media&token=4c9ba255-1bfe-4e7b-85b7-d74ec3759850",
          }}
        />
        <Text style={styles.Txt255}>Book Name</Text>
        <Image
          style={styles.Upload_file}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-495%3A81?alt=media&token=50a3e53b-13db-469f-acb1-819b96a45c5e",
          }}
        />
        <Text style={styles.Txt938}>Upload Images</Text>
        <Text style={styles.Txt874}>Post Listing</Text>
        <Image
          style={styles.Rectangle221}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2wbmh2llQ3xajGBhGCeFQb-495%3A84?alt=media&token=4e5eb890-a484-46e2-8f04-7439479aa3ab",
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  PostingBooks: {
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
  Txt318: {
    position: "absolute",
    top: 393,
    left: 64,
    fontSize: 20,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 47,
    height: 24,
    opacity: 0.8,
  },
  Txt566: {
    position: "absolute",
    top: 479,
    left: 64,
    fontSize: 20,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 47,
    height: 24,
    opacity: 0.8,
  },
  Txt753: {
    position: "absolute",
    top: 208,
    left: 64,
    fontSize: 20,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 110,
    height: 24,
    opacity: 0.8,
  },
  Txt172: {
    position: "absolute",
    top: 300,
    left: 64,
    fontSize: 20,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 125,
    height: 24,
    opacity: 0.8,
  },
  Group820: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 94,
    none: "0px",
    width: 338,
    height: 833,
  },
  Rectangle22: {
    width: 338,
    height: 56,
    marginBottom: 36,
  },
  Rectangle22: {
    width: 338,
    height: 56,
    marginBottom: 36,
  },
  Rectangle24: {
    width: 338,
    height: 56,
    marginBottom: 31,
  },
  Rectangle25: {
    width: 338,
    height: 56,
  },
  Txt255: {
    fontSize: 20,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 110,
    height: 24,
    opacity: 0.8,
    marginBottom: 346,
  },
  Upload_file: {
    width: 80,
    height: 80,
    marginBottom: 13,
  },
  Txt938: {
    fontSize: 30,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 208,
    height: 36,
    marginBottom: 79,
  },
  Txt874: {
    fontSize: 30,
    fontFamily: "undefined",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 23,
  },
  Rectangle221: {
    width: 265,
    height: 82,
  },
})