import { StyleSheet } from "react-native";
import colors from "../../themes/colors";

export default StyleSheet.create({
  bottomBarContainer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    width: "100%",
  },
  bottomBar: {
    borderTopLeftRadius: 24,
    borderTopEndRadius: 24,
    backgroundColor: colors.white,
    width: "100%",
    flexDirection: "row",
    alignContent: "space-between",
  },
  bottomBarItem: {
    padding: 14,
  },
});
