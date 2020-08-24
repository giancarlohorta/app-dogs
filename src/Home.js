import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "./Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles/Styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Login />
      <Footer />
    </View>
  );
};

export default Home;
