import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { TextInputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConvertedText } from "../components/Text";
import { Header } from "../components/Header";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

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

  handleOptionPress = () => {
    console.log("handle option press");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
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
          <LastConvertedText
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            converstionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currency"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
