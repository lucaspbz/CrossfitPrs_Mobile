import React from "react";
import { View, Text } from "react-native";
import { ChevronsDown } from "react-feather";

import styles from "./styles";

export default function Movimentos() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}> CROSSFIT PRS</Text>
      </View>
      <View style={styles.lista}>
        <View style={styles.containerItems}>
          <Text style={styles.textItems}>Clean</Text>
          <Text style={styles.textItems}>85kg</Text>
          {/* <ChevronsDown /> */}
        </View>
      </View>
    </View>
  );
}
