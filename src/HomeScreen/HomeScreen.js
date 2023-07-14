import React, { useState, useEffect, useFocusEffect } from "react";
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
import { Categories } from "../../data/db";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cateFilter, setCateFilter] = useState("");
  useEffect(async () => {
    await AsyncStorage.setItem("listFavo", "[]");

    return () => {};
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", fetchItems);
    return () => {
      unsubscribe();
    };
  }, [favoriteItems]);

  const onChangeSearch = (query) => setSearchQuery(query);

  const fetchItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("listFavo");
      const items = jsonValue ? JSON.parse(jsonValue) : [];
      setFavoriteItems(items);
      setSearchQuery("");
      setCateFilter("");
    } catch (error) {
      console.error("Error retrieving favorite items:", error);
    }
  };

  const renderListItems = ({ item }) => {
    let isFavorite = null;
    if (favoriteItems.length > 0) {
      isFavorite = favoriteItems.some(
        (favoriteItem) => favoriteItem.name === item.name
      );
    }
    return (
      <TouchableOpacity
        style={styles.containItem}
        onPress={() => navigation.navigate("Detail", { item, handleFavorite })}
      >
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
              source={
                isFavorite
                  ? require("../../assets/liked.png")
                  : require("../../assets/test.png")
              }
              style={styles.likeItem}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const handleButtonPress = (cate) => {
    if (cate === "Cattleya") {
      setCateFilter("Cattleya");
    } else if (cate === "Dendrobium") {
      setCateFilter("Dendrobium");
    } else if (cate === "Phalaenopsis") {
      setCateFilter("Phalaenopsis");
    } else if (cate === "") {
      setCateFilter("");
    }
  };

  const handleFavorite = async (item) => {
    const jsonValue = await AsyncStorage.getItem("listFavo");
    const items = jsonValue ? JSON.parse(jsonValue) : [];

    const existingItem = items.find((i) => i.name === item.name);
    try {
      if (existingItem) {
        const updateItems = items.filter((i) => i.name !== existingItem.name);
        await AsyncStorage.setItem("listFavo", JSON.stringify(updateItems));
        setFavoriteItems(updateItems);
      } else {
        items.push(item);
        await AsyncStorage.setItem("listFavo", JSON.stringify(items));
        setFavoriteItems(items);
      }
    } catch (error) {
      console.error("Error updating items:", error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.containHeader}>
          <Text style={styles.header}>Home</Text>
        </View>
        <View style={styles.containSearchBar}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBar}
            elevation={1}
          />
        </View>
        <View style={styles.containCategory}>
          <Text style={styles.categoryHeader}>Categories: </Text>
          <ScrollView horizontal style={styles.scrollViewCategory}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#c5d2d7" }]}
              onPress={() => handleButtonPress("")}
            >
              <Text style={styles.buttonText}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "pink" }]}
              onPress={() => handleButtonPress("Cattleya")}
            >
              <Text style={styles.buttonText}>Cattleya</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "yellow" }]}
              onPress={() => handleButtonPress("Dendrobium")}
            >
              <Text style={styles.buttonText}>Dendrobium</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "white" }]}
              onPress={() => handleButtonPress("Phalaenopsis")}
            >
              <Text style={styles.buttonText}>Phalaenopsis</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <KeyboardAvoidingView behavior="padding">
          <FlatList
            data={Categories.filter((item) => item.name.includes(cateFilter))
              .flatMap((category) => category.items)
              .filter((item) => item.name.includes(searchQuery))}
            renderItem={renderListItems}
            keyExtractor={(item, index) => index.toString()}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
