import React from "react";
import { Text } from "react-native";
import moment from "moment";
import PropTypes from "prop-types";

import styles from "./styles";

const LastConvertedText = ({ base, quote, converstionRate, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {converstionRate} {quote} as of{" "}
    {moment(date).format("MMMM D, YYYY")}
  </Text>
);

LastConvertedText.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  converstionRate: PropTypes.number
};

export default LastConvertedText;
