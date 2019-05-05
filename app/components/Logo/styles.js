import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $smallContainerSize: imageWidth / 2,
  $largeImageSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  container: {
    alignItems: "center"
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "$largeContainerSize",
    height: "$largeContainerSize"
  },
  image: {
    width: "$largeImageSize"
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: -0.5,
    marginTop: 15,
    color: "#fff"
  }
});
