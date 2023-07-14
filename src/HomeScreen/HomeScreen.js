import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Searchbar } from "react-native-paper";
import styles from "./style";
import {Categories} from "../../data/db";

export default function HomeScreen({ navigation }) {
  // useEffect(async () => {
  //   await AsyncStorage.setItem("listFavo", "[]");
  //   return () => {
  //   };
  // }, []);
  const renderListItems = ({ item }) => (
    <TouchableOpacity style={styles.containItem}>
      <View style={styles.containImageItem}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.imageItem}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.containNameItem}>
        <Text style={styles.nameItem}>{item.name}</Text>
      </View>
      <View style={styles.containLikeItem}>
        <TouchableOpacity
          style={styles.buttonLikeItem}
          onPress={() => handleFavorite(item)}
        >
          <Image
            source={require("../../assets/liked.png")}
            style={styles.likeItem}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // const handleFavorite = async (item) => {
  //   const jsonValue = await AsyncStorage.getItem("listFavo");
  //   const items = jsonValue ? JSON.parse(jsonValue) : [];
  //   const existingItem = items.find((i) => i.name === item.name);
  //   try {
  //     if (existingItem) {
  //       const updateItems = items.filter((i) => i.name !== existingItem.name);
  //       await AsyncStorage.setItem("listFavo", JSON.stringify(updateItems));
  //     } else {
  //       items.push(item);
  //       await AsyncStorage.setItem("listFavo", JSON.stringify(items));
  //     }
  //   } catch (error) {
  //     console.error("Error updating items:", error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="padding">
          <FlatList
            data={Categories.flatMap((category) => category.items)}
            renderItem={renderListItems}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text>Hello</Text>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
