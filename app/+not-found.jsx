import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
    return (
        <>

            <View
                style={styles.container}
            >
                <Link href="/(tabs)" style={styles.linkText}>Go back to Home Screen!</Link>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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