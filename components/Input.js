import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const Input = ({ title, ...rest }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} {...rest} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
    },
    title: {
        textAlign: "center",
    },
    input: {
        width: 180,
        backgroundColor: "#eee",
        borderRadius: 5,
        paddingLeft: 10,
        color: "#000",
        shadowColor: "#000",
    },
});

export default Input;
