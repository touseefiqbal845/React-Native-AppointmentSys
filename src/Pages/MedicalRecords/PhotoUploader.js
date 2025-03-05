import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PermissionsAndroid } from "react-native";

const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);

    if (
      granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
      PermissionsAndroid.RESULTS.GRANTED &&
      granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
      PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log("Storage permission granted");
    } else {
      console.log("Storage permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  React.useEffect(() => {
    requestStoragePermission();
  }, []);

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 1,
      },
      (response) => {
        if (!response.didCancel && !response.errorCode) {
          const selectedImage = {
            uri: response.assets[0].uri,
            id: response.assets[0].fileName || Date.now().toString(),
          };
          setImages((prevImages) => [...prevImages, selectedImage]);
        }
      }
    );
  };

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const renderImage = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <TouchableOpacity
        style={styles.crossIcon}
        onPress={() => removeImage(item.id)}
      >
        <Icon name="close" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  const windowWidth = Dimensions.get("window").width;
  const numColumns = Math.floor(windowWidth / 110); 

  return (
    <View style={styles.container}>
      <FlatList
        data={[...images, { id: "add_button" }]} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.id === "add_button") {
            return (
              <TouchableOpacity style={styles.addButton} onPress={selectImage}>
                <Text style={styles.addButtonText}>+ </Text>
                <Text style={styles.addButtonText}>Add More Images</Text>

              </TouchableOpacity>
            );
          }
          return renderImage({ item });
        }}
        numColumns={numColumns}
        key={numColumns}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // marginTop: 20,
    padding: 20,
    maxHeight: 200,

  },
  scrollView: {
    backgroundColor: 'pink',
  },

  imageContainer: {
    position: "relative",
    marginRight: 10,
    marginBottom: 10,
    height: "100%" 

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,

    flexDirection:"row",

  },
  crossIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "red",
    borderRadius: 12,
    padding: 2,
  },
  addButton: {
    backgroundColor: "#0EBE7F33",
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  addButtonText: {
    color: "#0EBE7F",
    fontSize: 14,
    textAlign:"center"
  },
});

export default ImageUploader;
