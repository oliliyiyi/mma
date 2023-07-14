import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF6F8",
    height: "100%",
    width: "100%",
  },
  topNav: {
    width: "100%",
    height: "6%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row" 
  },
  containHeader: {
    width: "80%",
    height: "100%",
    paddingLeft: "40%"
  },
  header: {
    fontSize: 30,
    fontWeight: "500"
  },
  deleteAll: {
    color: "#4969F8"
  },
  listItems: {
    width: "100%",
    height: "80%",
    paddingTop: 10
  },
  containItem: {
    height: 80,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  swipeout: {
    backgroundColor: "#EEF6F8",
  },
  containEmpty: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  empty:{
    fontSize: 20,
    color: "#85898b"
  },
  itemClick: {
    height: 80,
    width: "80%",
  },
  item: {
    height: "100%",
    width: 380,
    flexDirection: "row",
    marginVertical: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#929292",
    backgroundColor: "#FFFFFF",
  },
  containImage: {
    height: "100%",
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  containContent: {
    justifyContent: "center",
    width: "60%",
  },
  name: {
    marginVertical: 18,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  content: {
    marginHorizontal: 15,
  },
  containButtonDelete: {
    height: "100%",
    width:"20%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDelete: {
    height: 30,
    width: 60,
  },
  
});
export default styles;
