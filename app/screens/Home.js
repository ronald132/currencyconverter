import React, { Component } from "react";
import { View, StatusBar } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { TextInputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("press base");
  };
  handlePressQuoteCurrency = () => {
    console.log("press quote");
  };

  handleTextChange = text => {
    console.log("text change: ", text);
  };

  handleSwapCurrency = () => {
    console.log("swap currency");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <TextInputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <TextInputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <ClearButton
          text="Reverse Currency"
          onPress={this.handleSwapCurrency}
        />
      </Container>
    );
  }
}

export default Home;
