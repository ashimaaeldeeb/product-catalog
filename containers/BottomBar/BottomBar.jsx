import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./BottomBar.styles.js";
import BottomBarItem from "../../components/BottomBarItem/BottomBarItem.jsx";
import images from "../../themes/images.js";

const items = [
  { icon: images.ic_home, text: "Home" },
  { icon: images.ic_catalogue, text: "Catalogue" },
  { icon: images.ic_heart, text: "Favorite" },
  { icon: images.ic_user, text: "Profile" },
];

const BottomBar = () => {
  const [selected] = React.useState(1);

  return (
    <View style={styles.bottomBarContainer}>
      <View style={styles.bottomBar}>
        {items.map((item, index) => {
          return (
            <BottomBarItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              isSelected={index === selected}
            />
          );
        })}
      </View>
    </View>
  );
};

export default BottomBar;
