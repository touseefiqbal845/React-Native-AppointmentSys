import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../Custom-Button/CustomButton";
import CustomHeader from "../CustomHeader/CustomHeader";

const DoctorBio = ({
  doctor,

  onButtonPress,
  findDoctor,
  speciality,
  exp,
  reviews,
  RatingAnderHour,
  PerHour,
  OnlyRating,
  borderRadius = 0,
  LikeButtonEnd = "",
  likeButton,
  OnlyBook,
  FavouriteDoctor,

  PaddingContainer = 15,

  ImageAndTextContainerrowDirection = "",
  ImageAndTextContaineralignItems = "",
  ImageAndTextContainerjustifyContent = "",
  ImageAndTextContainerwidth = "",
  ImageAndTextContainerheight = "",

  imageWidth,
  imageHeight,

  ExpDetailsmarginTop = 0,
  ExpDetailsmarginLeft = 0,
  ExpDetailsjustifyContent = "",
  ExpDetailsalignContent = "",
  popularDoctorName = "space-between",

  nametextAlign = "",
  professiontextAlign = "",

  availbilityjustifyContent = "",
}) => {
  return (
    <>
      <View
        style={[
          styles.container,

          {
            marginLeft: 15,
            marginRight: 15,
            marginTop: 10,
          },
        ]}
      >
        <View
          style={[
            styles.DoctorContainer,

            {
              width: "100%",
              backgroundColor: "white",
              borderRadius: 5,
              padding: PaddingContainer,
            },
          ]}
        >
          <View
            style={[
              styles.ImageAndTextContainer,
              {
                flexDirection: ImageAndTextContainerrowDirection || "row",
                alignItems: ImageAndTextContaineralignItems || "center",
                justifyContent:
                  ImageAndTextContainerjustifyContent || "flex-start",
                width: ImageAndTextContainerwidth || "100%",
                // height: ImageAndTextContainerheight || "100%",
              },
            ]}
          >
            {FavouriteDoctor && (
              <View
                style={[
                  styles.FavouriteIcon,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  },
                ]}
              >
                <View
                  style={[styles.FavouriteIcon, { alignItems: "flex-start" }]}
                >
                  <TouchableOpacity style={styles.option}>
                    <Icon name="heart" size={24} color="#DB4437" />
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    styles.FavouriteIcon,
                    {
                      justifyContent: "flex-end",
                      flexDirection: "row",
                      alignItems: "center",
                    },
                  ]}
                >
                  <Icon name="favourite" size={24} color="#DB4437" />
                  <Text style={styles.Stories}>3.2</Text>
                </View>
              </View>
            )}
            <View style={styles.ImageCont}>
              <Image
                style={[
                  styles.image,
                  {
                    borderRadius: borderRadius || 10,
                    width: imageWidth || 80,
                    height: imageHeight || 80,
                  },
                ]}
                source={doctor.img}
              />
            </View>
            <View
              style={[
                styles.ExpDetails,
                {
                  flex: 1,
                  marginTop: ExpDetailsmarginTop || 0,
                  marginLeft: ExpDetailsmarginLeft || 10,
                  justifyContent: ExpDetailsjustifyContent || "center",
                  // alignItems: ExpDetailsalignContent || "flex-start",
                },
              ]}
            >
              <View
                style={[
                  styles.NameView,
                  {
                    flexDirection: "row",
                    justifyContent: popularDoctorName,
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.name,
                    {
                      textAlign: nametextAlign || "center",
                      lineHeight: 24,
                    },
                  ]}
                >
                  {doctor.name}
                </Text>
                <View
                  style={[
                    styles.FavouriteIcon,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  {!likeButton && (
                    <TouchableOpacity style={styles.option}>
                      <Icon name="heart" size={24} color="#DB4437" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              {findDoctor && (
                <Text
                  style={[
                    styles.profession,
                    {
                      textAlign: professiontextAlign || "left",
                    },
                  ]}
                >
                  Tooth Dentist
                </Text>
              )}
              {speciality && (
                <Text
                  style={[
                    styles.profession,
                    {
                      textAlign: professiontextAlign || "left",
                    },
                  ]}
                >
                  Tooth Dentist
                </Text>
              )}

              {exp && <Text style={styles.experience}>8 Years Experience</Text>}

              {reviews && (
                <View
                  style={[
                    styles.reviews,
                    { alignItems: "center", justifyContent: "space-between" },
                  ]}
                >
                  {/* <StarRatingDisplay rating={4.5} /> */}
                  <View style={styles.FavouriteIcon}>
                    <TouchableOpacity style={styles.option}>
                      <Icon name="favourite" size={24} color="#DB4437" />
                    </TouchableOpacity>
                  </View>
                  <Text style={[styles.Stories]}>
                    <Text style={{ fontWeight: "bold", color: "#00000" }}>
                      {" "}
                      2.4
                    </Text>{" "}
                    [2475 views]
                  </Text>
                </View>
              )}

              {RatingAnderHour && (
                <View
                  style={[
                    styles.reviews,
                    { alignItems: "center", justifyContent: "space-between" },
                  ]}
                >
                  {/* <StarRatingDisplay rating={4.5} /> */}
                  <View style={styles.FavouriteIcon}>
                    <TouchableOpacity style={styles.option}>
                      <Icon name="favourite" size={24} color="#DB4437" />
                    </TouchableOpacity>
                  </View>
                  <Text style={[styles.Stories]}>
                    <Text style={{ fontWeight: "bold", color: "#0EBE7F" }}>
                      {" "}
                      $
                    </Text>{" "}
                    28.00/hr
                  </Text>
                </View>
              )}

              {OnlyRating && (
                <View style={styles.reviews}>
                  <Text style={styles.Stories}>
                    {[...Array(5)].map((_, index) => (
                      <Icon key={index} name="star" size={15} color="#FFD700" />
                    ))}
                  </Text>
                </View>
              )}
              {PerHour && (
                <View style={styles.reviews}>
                  <Text style={styles.Stories}>
                    <Text style={{ fontWeight: "bold", color: "#00000" }}>
                      {" "}
                      $
                    </Text>{" "}
                    17 per hour
                  </Text>
                </View>
              )}
              {findDoctor && (
                <View style={styles.bullets}>
                  <View style={styles.bulletSet}>
                    <Text style={styles.CirlcleBullet}></Text>
                    <Text style={styles.Stories}>87%</Text>
                  </View>
                  <View style={styles.bulletSet}>
                    <Text style={styles.CirlcleBullet}></Text>
                    <Text style={styles.Stories}>6 Patient Stories</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
          {findDoctor && (
            <View
              style={[
                styles.availbility,
                {
                  justifyContent: availbilityjustifyContent || "space-between",
                },
              ]}
            >
              {OnlyBook && (
                <View style={styles.availText}>
                  <Text style={styles.nextText}>Next Available</Text>
                  <Text style={styles.experience}>
                    <Text style={{ fontWeight: "bold", color: "#677294" }}>
                      10:00
                    </Text>{" "}
                    AM tomorrow
                  </Text>
                </View>
              )}

              <View style={styles.customButton}>
                <CustomButton
                  onButtonPress={onButtonPress}
                  buttonText={"Book Now"}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  DoctorContainer: {},
  ImageAndTextContainer: {},
  image: {},

  ExpDetails: {},
  name: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Rubik",
    color: "black",
    marginBottom: 0,
    marginTop: 0,
    // justifyContent: "flex-start",
  },
  profession: {
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "Rubik",
    color: "#0EBE7F",
    // marginVertical: 1,
  },
  experience: {
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "Rubik",
    color: "black",
    marginVertical: 1,
  },
  reviews: {
    flexDirection: "row",
  },
  bullets: {
    flexDirection: "row",
    alignItems: "center",
  },
  CirlcleBullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#0EBE7F",
    marginHorizontal: 0,
  },

  Stories: {
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "Rubik",
    color: "black",
    marginLeft: 5,
  },
  bulletSet: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  availbility: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 15,
  },
  availText: {
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
  nextText: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Rubik",
    color: "#0EBE7F",
    marginVertical: 1,
  },
  customButton: {
    justifyContent: "flex-start",
    width: 150,
  },
});

export default DoctorBio;
