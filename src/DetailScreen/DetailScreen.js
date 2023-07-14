import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';

export default function DetailScreen(props) {
  const { item, handleFavorite } = props.route.params;
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [render, setRender] = useState(true);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", fetchItems);
    return () => {
      unsubscribe();
    };
  }, [render]);
  
  const updateFavoriteItems = async (item) => {
    await handleFavorite(item);
    fetchItems();
  };
  const fetchItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("listFavo");
      const items = jsonValue ? JSON.parse(jsonValue) : [];
      setFavoriteItems(items);
    } catch (error) {
      console.error("Error retrieving favorite items:", error);
    }
  };
  let isFavorite = null;
  if (favoriteItems.length > 0) {
    isFavorite = favoriteItems.some(
      (favoriteItem) => favoriteItem.name === item.name
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.containImage}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={{ uri: item.image }}
            />
          </View>
          <View style={styles.containContent}>
            <View style={styles.containDetail}>
              <Text style={styles.header}>{item.name}</Text>
              <Text style={styles.content}>Rating: {item.rating}</Text>
              <Text style={styles.content}>Weight: {item.weight}</Text>
              <Text style={styles.content}>Origin: {item.origin}</Text>
              <Text style={styles.content}>Price: {item.price}$</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.containButton}>
          <TouchableOpacity
            style={styles.buttonClick}
            onPress={() => props.navigation.goBack()}
          >
            <Image
              style={styles.buttonLike}
              resizeMode="stretch"
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonClick}
            onPress={async () => {
              await updateFavoriteItems(item);
              setRender(!render);
            }}
          >
            {isFavorite ? (
              <Image
                style={styles.buttonLike}
                resizeMode="stretch"
                source={require("../../assets/liked.png")}
              />
            ) : (
              <Image
                style={styles.buttonLike}
                resizeMode="stretch"
                source={require("../../assets/test.png")}
              />
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
