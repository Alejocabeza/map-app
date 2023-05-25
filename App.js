import React, { useState } from "react";
import { Map, Modal, Panel, Input, List } from "./components";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

export default function App() {
    const [puntos, setPuntos] = useState([]);
    const [nombre, setNombre] = useState("");
    const [puntoTemp, setPuntoTemp] = useState({});
    const [visible, setVisible] = useState(false);
    const [visibleFilter, setVisibleFilter] = useState("new_point");
    const [pointFilter, setPointFilter] = useState(true);
    const handleLongPress = ({ nativeEvent }) => {
        setVisibleFilter("new_point");
        setPuntoTemp(nativeEvent.coordinate);
        setVisible(true);
    };
    const handleChangesText = (text) => {
        setNombre(text);
    };
    const handleSubmit = () => {
        const newPunto = { coordinate: puntoTemp, name: nombre };
        setPuntos(puntos.concat(newPunto));
        setVisible(false);
        setNombre("");
    };
    const handleCancel = () => {
        setPuntoTemp({});
        setNombre("");
        setVisible(false);
    };
    const handleList = () => {
        setVisibleFilter("all_puntos");
        setVisible(true);
    };
    const togglePointsFilter = () => setPointFilter(!pointFilter);
    return (
        <View style={styles.container}>
            <StatusBar hidde={true} />
            <Map
                onLongPress={handleLongPress}
                puntos={puntos}
                pointFilter={pointFilter}
            />
            <Modal visible={visible}>
                {visibleFilter === "new_point" ? (
                    <>
                        <Input
                            title="Nombre del punto"
                            placeholder="Nombre del punto"
                            onChangeText={handleChangesText}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Aceptar" onPress={handleSubmit} />
                            <Button title="Cancelar" onPress={handleCancel} />
                        </View>
                    </>
                ) : (
                    <List
                        puntos={puntos}
                        closeModal={() => setVisible(false)}
                    />
                )}
            </Modal>
            <Panel
                onPressLeft={handleList}
                textLeft="Lista"
                togglePointsFilter={togglePointsFilter}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
});
