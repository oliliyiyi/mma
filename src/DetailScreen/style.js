import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF6F8",
    height: "100%",
    width: "100%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  containImage: {
    width: windowWidth,
    height: windowHeight*0.45,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: windowWidth*0.8,
    height: windowWidth*0.8,
    borderRadius: 20,
  },
  containContent: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
  },
  content: {
    fontSize: 15,
    marginVertical: 15
  },
  containButton: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    position: "absolute",
    top: "95%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttonClick: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  buttonLike: {
    width: 40,
    height: 40,
  }
});
export default styles;
