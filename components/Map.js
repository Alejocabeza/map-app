import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const ViewMap = ({ onLongPress, puntos, pointFilter }) => {
    return (
        <MapView style={styles.maps} onLongPress={onLongPress}>
            {pointFilter &&
                puntos.map((item) => (
                    <Marker
                        coordinate={item.coordinate}
                        title={item.name}
                        key={item.name}
                    />
                ))}
        </MapView>
    );
};

const styles = StyleSheet.create({
    maps: {
        height: Dimensions.get("window").height - 150,
        width: Dimensions.get("window").width,
    },
});

export default ViewMap;
