import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import records from "./../../helpers/allRecords";
import CustomButton from "../../components/Custom-Button/CustomButton";

const Item = ({ record }) => (
  <View
    style={{
      //   flex: 1,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 10,
      padding: 20,
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 150,
      borderRadius: 5,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{}}>
        <View
          style={{
            justifyContent: "center",
            padding: 10,
            alignItems: "center",
            backgroundColor: "#0EBE7F",
            borderRadius: 5,
            height: 70,
            width: 70,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            27
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            FEB
          </Text>
        </View>

        <View
          style={{
            //   flex: 1,
            //   marginLeft: 15,
            //   marginRight: 15,
            marginTop: 10,
            justifyContent: "center",
            padding: 5,
            alignItems: "center",
            backgroundColor: "#C6EFE5C2",
            borderRadius: 5,
            height: 30,
            width: 70,
          }}
        >
          <Text style={{ color: "#0EBE7F", fontWeight: "bold", fontSize: 14 }}>
            NEW
          </Text>
        </View>
      </View>
      <View
        style={{
          //   flex: 1,
          marginLeft: 15,
          //   marginRight: 15,
          //   marginTop: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          alignContent: "flex-start",
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 14,
            textAlign: "left",
          }}
        >
          Records added by you
        </Text>
        <Text
          style={{
            marginTop: 5,

            color: "#0EBE7F",
            fontWeight: "normal",
            fontSize: 12,
            textAlign: "left",
          }}
        >
          Record for {record.name}
        </Text>
        <Text
          style={{
            marginTop: 5,

            color: "black",
            fontWeight: "normal",
            fontSize: 14,
            textAlign: "left",
          }}
        >
          1 Prescription
        </Text>
      </View>
    </View>
    <Image
      style={[styles.image, {}]}
      source={require("../../assets/close.png")}
    />
  </View>
);

const AllRecords = ({ onBackPress,onButtonPress,buttonText}) => {
  return (
    <>
      <CustomHeader
        backText={"All Records"}
        onBackPress={() => console.log("Back pressed")}
      />
       
      <FlatList
        data={records}
        renderItem={({ item }) => <Item record={item} />}
        keyExtractor={(item) => item.id}
        numRows={1}
        contentContainerStyle={styles.listContainer}
      />
     <View style={{
        justifyContent: "space-between",
        alignItems:"space-between",
        width:"100%",
        padding: 50,
      }}>
        <CustomButton onPress={onButtonPress} buttonText={"Add a Record"} />
      </View>
    </>
  );
};

export default AllRecords;

const styles = StyleSheet.create({
  header: {},
});
