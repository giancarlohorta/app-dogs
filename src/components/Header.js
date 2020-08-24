import React from "react";
import { Text, View, ImageComponent } from "react-native";
import styles from "../styles/Styles";

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.title}>Header</Text>
    </View>
  );
};

export default Header;
