import React from "react";
import {
    FlatList,
    Text,
    View,
    Button,
    StyleSheet,
    Dimensions,
} from "react-native";

const List = ({ puntos, closeModal }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={puntos.map((el) => el.name)}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
            <View>
                <Button
                    style={styles.button}
                    title="close"
                    onPress={closeModal}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get("window").height - 400,
        width: Dimensions.get("window").width - 150,
    },
    item: {
        height: 40,
        backgroundColor: "#cccccc20",
        marginTop: 5,
        boderBottomWidth: 1,
        boderColor: "black",
        justifyContent: "center",
        borderRadius: 5,
        paddingLeft: 20,
    },
    button: {
        padding: 40,
    },
});

export default List;
