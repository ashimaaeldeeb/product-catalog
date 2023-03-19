import { View } from "react-native";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import styles from "./BottomBar.styles.js";
import BottomBarItem from "../../components/BottomBarItem/BottomBarItem.jsx";
import images from "../../themes/images.js";
import { selectFavProductsCount } from "../../redux/product/productSelector.js";
const items = [
  { icon: images.ic_home, text: "Home" },
  { icon: images.ic_catalogue, text: "Catalogue" },
  { icon: images.ic_heart, text: "Favorite" },
  { icon: images.ic_user, text: "Profile" },
];

const BottomBar = () => {
  const [selected] = useState(1);
  const favProductsCount = useSelector(selectFavProductsCount);

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
              count={item.text === "Favorite" ? favProductsCount : 0}
            />
          );
        })}
      </View>
    </View>
  );
};

export default BottomBar;
