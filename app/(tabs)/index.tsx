import { Image, StyleSheet, Platform, Text, View } from "react-native";
import DownloadIcon from "@/assets/images/DownloadIcon";
import HomeIcon from "@/assets/images/HomeIcon";
import SearchIcon from "@/assets/images/SearchIcon";
import ProfileIcon from "@/assets/images/ProfileIcon";

export default function HomeScreen() {
  return (
    <View style={styles.allContainer}>
      <View style={styles.forYouSection}></View>
      <View style={styles.footer}>
        <HomeIcon></HomeIcon>
        <SearchIcon></SearchIcon>
        <DownloadIcon></DownloadIcon>
        <ProfileIcon></ProfileIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    backgroundColor: "rgb(5, 11, 27)",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  forYouSection: {
    flexDirection: "column",
  },
  footer: {
    width: "100%",
    backgroundColor: "#E45959",
    flexDirection: "row",
    alignItems: "center",
    height: 61,
    paddingLeft: 40,
    gap: 85,
  },
});
