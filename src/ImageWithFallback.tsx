import React, { useState } from "react";
import { Image, type ImageSourcePropType, type ImageStyle, type StyleProp } from "react-native";

interface MyComponentProps {
    source: ImageSourcePropType;
    fallbackSource: ImageSourcePropType;
    style: StyleProp<ImageStyle>;
}

const ImageWithFallback: React.FC<MyComponentProps> = ({ source, fallbackSource, style }) => {
    const [imgSource, setImgSource] = useState<ImageSourcePropType>(source);

    return (
        <Image
            source={imgSource}
            style={style}
            onError={() => setImgSource(fallbackSource)}
        />
    );
};

export default ImageWithFallback;