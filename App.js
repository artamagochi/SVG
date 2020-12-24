import { StatusBar } from "expo-status-bar";
import React from "react";
import { render } from "react-dom";
import { StyleSheet, Webview, Canvas, Text, View, Button } from "react-native";
import Svg, { Circle, Rect, Polyline } from "react-native-svg";
export const ViewPropTypes = { style: null };

export default function SvgComponent(props) {
  return (
    <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="blue"
        strokeWidth="2.5"
        fill="green"
      />
      <Rect
        x="15"
        y="15"
        width="70"
        height="70"
        stroke="red"
        strokeWidth="2"
        fill="yellow"
      />
      <Polyline width="50" color="black" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontStyle: "cambria",
    fontSize: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
