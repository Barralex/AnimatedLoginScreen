import { Asset } from "expo-asset";
import { Image } from "react-native";

function CacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default CacheImages;
