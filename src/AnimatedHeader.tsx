import React, { useState } from 'react';
import { Animated, Dimensions, Text, View, type StyleProp, type ViewStyle, } from 'react-native';
import ImageWithFallback from './ImageWithFallback';

const { width: screenWidth } = Dimensions.get('window');

interface MyComponentProps {
    scrollY: Animated.Value;
    leftComponentStyle?: StyleProp<ViewStyle>;
    LeftComponent: React.ReactNode;
    rightComponentStyle?: StyleProp<ViewStyle>;
    RightComponent: React.ReactNode;
}

const AnimatedHeader: React.FC<MyComponentProps> = ({ scrollY, leftComponentStyle, LeftComponent, rightComponentStyle, RightComponent }) => {

    const [HeaderHeight] = useState<number>(100);

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
        outputRange: [0, ((-screenWidth / 2) + 25 + (screenWidth * 0.15))], // Adjust 50 based on half of the width of the header

        extrapolate: 'clamp',
    });

    const headerTextTranslateX = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [(-screenWidth / 2), (-screenWidth / 2 + (screenWidth * 0.30) + 50 + 10)], // Adjust 50 based on half of the width of the header

        extrapolate: 'clamp',
    });

    const headerTextOpacity = scrollY.interpolate({
        inputRange: [0, 80, 100],
        outputRange: [0, 0, 1],
    });


    return (
        <Animated.View style={[{

            flexDirection: 'row',
            width: '100%',
            height: headerHeight,
        }]}>
            <View style={[{
                width: screenWidth * 0.15,
                backgroundColor: 'orange'
            },
                leftComponentStyle]}>
                {LeftComponent}
            </View>

            <View style={{
                width: screenWidth * 0.7,
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center'
            }}>


                <Animated.View style={
                    {
                        position: 'absolute',
                        opacity: headerTextOpacity,
                        transform: [
                            { translateX: headerTextTranslateX },
                        ],

                        backgroundColor: 'skyblue',

                    }}>
                    <Text numberOfLines={1} style={{ fontSize: 16, width: screenWidth * 0.30 }}>Header Title  asdfasdfasd asd f asd fa sdf asd fa sdf asd fa sdf asd f</Text>
                </Animated.View>

                <Animated.View style={
                    {

                        transform: [
                            { translateX: headerTranslateX, },
                            { scale: headerScale }
                        ],
                        backgroundColor: 'skyblue',
                        width: 100,
                        height: 100,
                    }}>
                    <ImageWithFallback
                        source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                        }}
                        fallbackSource={require('./assets/placeholderimg.png')}
                    />

                </Animated.View>

            </View>
            <View style={[{ width: screenWidth * 0.15, backgroundColor: 'orange' },
                rightComponentStyle
            ]}>
                {RightComponent}

            </View>
        </Animated.View >
    );
};

export default AnimatedHeader;