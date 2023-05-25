import React from "react";
import { StyleSheet, Modal, View, Text, Dimensions } from "react-native";

const ModalView = ({ children, visible }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.center}>
                <View style={styles.modalView}>{children}</View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 4,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ModalView;
