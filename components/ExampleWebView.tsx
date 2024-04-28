import React from "react";
import { WebView } from "react-native-webview";
import { Dimensions, StyleSheet, View } from "react-native";

const ExampleWebView = () => {
  return (
    <WebView
      source={{
        uri: "https://duckduckgo.com",
      }}
      style={styles.webView}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    width: Dimensions.get("window").width,
    flex: 1,
  },
});

export default ExampleWebView;
