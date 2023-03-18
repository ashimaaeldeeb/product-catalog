import React from "react";
import BottomBar from "../BottomBar/BottomBar";
import ScreenHeader from "../../components/ScreenHeader";
import { NativeBaseProvider, Stack } from "native-base";

export default function Screen({
  title,
  hasBackButton,
  onBackButtonPress,
  children,
}) {
  return (
    <NativeBaseProvider>
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
