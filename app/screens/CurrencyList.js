import React, { Component } from "react";
import { Text, FlatList, View, StatusBar } from "react-native";
import currencies from "../data/currencies";
import { ListItem, Separator } from "../components/List";
import PropTypes from "prop-types";

export default class CurrencyList extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              onPress={this.handlePress}
              selected={item === "USD" ? true : false}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }

  handlePress = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
  };
}
