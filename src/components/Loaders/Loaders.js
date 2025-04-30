import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused(); 

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 1000);

      return () => clearTimeout(timer); 
    }
  }, [isFocused]);

  if (!loading) return null;

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#00C28B" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", 
    zIndex: 9999, 
  },
});

export default Loader;
