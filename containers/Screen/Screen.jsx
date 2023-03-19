import React from "react";
import BottomBar from "../BottomBar/BottomBar";
import ScreenHeader from "../../components/ScreenHeader";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";

export default function Screen({
  title,
  hasBackButton,
  onBackButtonPress,
  children,
}) {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <ScreenHeader
        hasBackButton={hasBackButton}
        title={title}
        onBackButtonPress={onBackButtonPress}
      />
      {children}
      <BottomBar />
    </NativeBaseProvider>
  );
}
