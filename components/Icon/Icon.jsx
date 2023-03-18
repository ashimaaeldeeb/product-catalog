import React from "react";
import { SvgXml } from "react-native-svg";

export default function Icon({ icon: markUp }) {
  return <SvgXml xml={markUp} />;
}
