import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.heading}>Welcome!</Text>
      {/* <Text style={styles.box}><Link href={"/jobs"} style={styles.linkText}>Jobs</Link></Text> */}
      {/* <Text style={styles.box}><Link href={"/bookmarks"} style={styles.linkText}>Bookmarks</Link></Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading:{
    fontWeight: "bold",
  },
  box: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginVertical: 10,
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  linkText: {
    color: "#1E90FF",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "none",
  },

})