import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#EEF6F8",
  },
  containItem: {
    height: 100,
    width: "90%",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: "5%",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
  },
  containImageItem: {
    height: "100%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageItem: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  containNameItem: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
  },
  nameItem: {
    fontSize: 18,
    fontWeight: 500,
  },
  containLikeItem: {
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLikeItem: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  likeItem: {
    height: 35,
    width: 35,
  },
  containHeader: {
    width: "100%",
    height: "6%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  header: {
    fontSize: 30,
    fontWeight: "500",
  },
  scrollView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#EEF6F8",
  },
  containSearchBar: {
    height: "10%",
    width: "100%",
    marginTop: 10,
    backgroundColor: "#EEF6F8",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    width: "80%",
    height: "70%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  containCategory: {
    width: "100%",
    height: "5%",
    backgroundColor: "#EEF6F8",
    alignItems: "center",
    flexDirection: "row",
  },
  categoryHeader: {
    marginLeft: 10,
    width: "25%",
    fontSize: 15,
    fontWeight: 800,
  },
  scrollViewCategory: {
    height: "100%",
    width: "100%",
  },
  button: {
    width: 100,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
  },
  scrollViewContent: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EEF6F8",
    justifyContent: "space-evenly",
  },
  listItems: {
    height: "90%",
    width: "100%",
    alignItems: "center",
  },
});
export default styles;
