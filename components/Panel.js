import React from "react";
import { StyleSheet, Dimensions, Button, View } from "react-native";

const PanelView = ({ onPressLeft, textLeft, togglePointsFilter }) => {
    return (
        <View style={styles.panel}>
            <Button title={textLeft} onPress={onPressLeft} />
            <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} />
        </View>
    );
};

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#eee",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default PanelView;
