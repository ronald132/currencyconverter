import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Text,
  Keyboard,
  Animated,
  Platform
} from "react-native";
import styles from "./styles";

const ANIMATED_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = "keyboardWillShow";
    let hideListener = "keyboardWillHide";
    if (Platform.OS === "android") {
      showListener = "keyboardDidShow";
      hideListener = "keyboardDidHide";
    }
    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATED_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATED_DURATION
      })
    ]).start();
  };
  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATED_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATED_DURATION
      })
    ]).start();
  };

  render() {
    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];

    const imageStyle = [
      styles.image,
      { width: this.imageWidth, height: this.imageWidth }
    ];

    return (
      <View style={styles.container}>
        <AnimatedImage
          resizeMode="contain"
          source={require("./images/background.png")}
          style={containerImageStyle}
        >
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require("./images/logo.png")}
          />
        </AnimatedImage>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
