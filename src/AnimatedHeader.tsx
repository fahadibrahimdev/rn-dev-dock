import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import ImageWithFallback from './ImageWithFallback';

interface MyComponentProps {
  scrollY: Animated.Value;
  leftComponentStyle?: StyleProp<ViewStyle>;
  LeftComponent: React.ReactNode;
  rightComponentStyle?: StyleProp<ViewStyle>;
  RightComponent: React.ReactNode;
  title: string;
  description?: string;
  avatarImg?: ImageSourcePropType;
}

const AnimatedHeader: React.FC<MyComponentProps> = ({
  scrollY,
  leftComponentStyle,
  LeftComponent,
  rightComponentStyle,
  RightComponent,
  title,
  description,
  avatarImg,
}) => {
  const [HeaderHeight] = useState<number>(100);
  const [systemWidth, setSystemWidth] = useState(0);

  const myViewRef = useRef(null);

  const handleLayout = (event: { nativeEvent: { layout: { width: any } } }) => {
    const { width } = event.nativeEvent.layout;
    setSystemWidth(width);

    console.log('fahad width: ', width);
  };

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [HeaderHeight, HeaderHeight - 30],
    extrapolate: 'clamp',
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.5], // Scaling from 100% to 50%
    extrapolate: 'clamp',
  });

  const headerTranslateX = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -systemWidth / 2 + 25 + systemWidth * 0.15], // Adjust 50 based on half of the width of the header

    extrapolate: 'clamp',
  });

  const headerTextTranslateX = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [
      -systemWidth / 2,
      -systemWidth / 2 + systemWidth * 0.3 + 50 + 10,
    ], // Adjust 50 based on half of the width of the header

    extrapolate: 'clamp',
  });

  const headerTextOpacity = scrollY.interpolate({
    inputRange: [0, 80, 100],
    outputRange: [0, 0, 1],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: headerHeight,
        },
      ]}
    >
      <View
        ref={myViewRef}
        onLayout={handleLayout}
        style={styles.centerViewAll}
      >
        <View
          style={[
            styles.leftView,
            {
              width: systemWidth * 0.15,
            },
            leftComponentStyle,
          ]}
        >
          {LeftComponent}
        </View>

        <View
          style={[
            styles.centerView,
            {
              width: systemWidth * 0.7,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.centerView2,
              {
                opacity: headerTextOpacity,
                transform: [{ translateX: headerTextTranslateX }],
              },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[styles.centerViewTitle, { width: systemWidth * 0.3 }]}
            >
              {title || ''}
            </Text>
            {!!description && (
              <Text
                numberOfLines={1}
                style={[styles.centerViewTitle, { width: systemWidth * 0.3 }]}
              >
                {description}
              </Text>
            )}
          </Animated.View>

          <Animated.View
            style={[
              styles.centerViewImageContainer,
              {
                transform: [
                  { translateX: headerTranslateX },
                  { scale: headerScale },
                ],
              },
            ]}
          >
            <ImageWithFallback
              source={
                avatarImg || {
                  uri: 'https://www.w3schools.com/w3images/avatar2.png',
                }
              }
              style={[styles.centerViewImageBox]}
              fallbackSource={require('./assets/placeholderimg.png')}
            />
          </Animated.View>
        </View>
        <View
          style={[
            styles.rightView,
            { width: systemWidth * 0.15 },
            rightComponentStyle,
          ]}
        >
          {RightComponent}
        </View>
      </View>
    </Animated.View>
  );
};

export default AnimatedHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  centerViewAll: {
    flexDirection: 'row',
    width: '100%',
  },
  leftView: {},
  centerView2: {
    position: 'absolute',
  },
  centerViewTitle: {
    fontSize: 16,
  },
  centerViewImageContainer: {
    width: 100,
    height: 100,
  },
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerViewImageBox: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rightView: {},
});
