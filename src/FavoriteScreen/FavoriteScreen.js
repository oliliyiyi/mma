import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../FavoriteScreen/style";
import { useFocusEffect } from "@react-navigation/native";

const FavoriteScreen = ({ navigation }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const handleDelete = async (item) => {
    try {
      const jsonValue = await AsyncStorage.getItem("listFavo");
      const items = jsonValue ? JSON.parse(jsonValue) : [];
      const updateItems = items.filter((i) => i.name !== item.name);
      await AsyncStorage.setItem("listFavo", JSON.stringify(updateItems));
      setFavoriteItems(updateItems);
      setRefreshScreen(!refreshScreen);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      let shouldChangeFavorite = true;
      shouldChangeFavorite = await new Promise((resolve) => {
        Alert.alert(
          `Delete the list favorite items`,
          `Are you sure to delete all favorite items`,
          [
            {
              text: "Cancel",
              onPress: () => {
                resolve(false);
              },
            },
            {
              text: "OK",
              onPress: () => {
                resolve(true);
              },
            },
          ]
        );
      });
      if (shouldChangeFavorite) {
        await AsyncStorage.setItem("listFavo", JSON.stringify([]));
        setFavoriteItems([]);
        setRefreshScreen(!refreshScreen);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", fetchItems);
    return () => {
      unsubscribe();
    };
  }, []);

  const fetchItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("listFavo");
      const items = jsonValue ? JSON.parse(jsonValue) : [];
      setFavoriteItems(items);
    } catch (error) {
      console.error("Error retrieving favorite items:", error);
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

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemClickDetail}
        onPress={() =>
          navigation.navigate("Detail", {
            item,
            handleFavorite
          })
        }
      >
        <View style={styles.containItem}>
          <View style={styles.item}>
            <View style={styles.containImage}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </View>
            <View style={styles.containContent}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.containButtonDelete}
              onPress={() => handleDelete(item)}
            >
              <Image
                style={styles.buttonDelete}
                source={require("../../assets/deleteIcon.png")}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.topNav}>
          <View style={styles.containHeader}>
            <Text style={styles.header}>Favorite</Text>
          </View>
          {favoriteItems.length > 0 ? (
            <TouchableOpacity onPress={() => handleDeleteAll()}>
              <Text style={styles.deleteAll}>Delete All</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
        {favoriteItems.length > 0 ? (
          <FlatList
            style={styles.listItems}
            data={favoriteItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={styles.containEmpty}>
            <Text style={styles.empty}>Favorites list is empty.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
