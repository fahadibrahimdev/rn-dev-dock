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

    // const [HeaderHeight, setHeaderHeight] = useState<number>(100);
    const [HeaderHeight] = useState<number>(100);

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [HeaderHeight, HeaderHeight - 30],
        extrapolate: 'clamp',
    });
    // const HeaderHeight: number = 100; // Adjust this based on your header height

    // const headerOpacity = scrollY.interpolate({
    //     inputRange: [0, HeaderHeight / 2, HeaderHeight],
    //     outputRange: [1, 0.7, 0],
    // });

    const headerScale = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0.5], // Scaling from 100% to 50%
        extrapolate: 'clamp',
    });

    // const rotate = scrollY.interpolate({
    //     inputRange: [0, HeaderHeight / 2, HeaderHeight],
    //     outputRange: ['0deg', '180deg', '360deg'],
    // });

    // const translateX = scrollY.interpolate({
    //     inputRange: [0, HeaderHeight / 2, HeaderHeight],
    //     outputRange: [0, -50, -100],
    // });

    const headerTranslateX = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [0, ((-screenWidth / 2) + 25 + (screenWidth * 0.15))], // Adjust 50 based on half of the width of the header

        extrapolate: 'clamp',
    });

    // const headerTranslateY = scrollY.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: [0, -25], // Adjust 50 based on half of the header's height
    //     extrapolate: 'clamp',
    // });


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
                        // alignItems: 'center',
                        // justifyContent: 'center',
                    }}>
                    <Text numberOfLines={1} style={{ fontSize: 16, width: screenWidth * 0.30 }}>Header Title  asdfasdfasd asd f asd fa sdf asd fa sdf asd fa sdf asd f</Text>
                </Animated.View>

                <Animated.View style={
                    {
                        // position: 'absolute',
                        // opacity: headerOpacity,
                        transform: [
                            { translateX: headerTranslateX, },
                            // { translateY: headerTranslateY },
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
                            // backgroundColor: "red"
                        }}
                        fallbackSource={require('./assets/placeholderimg.png')}
                    />

                </Animated.View>

            </View>
            {/* <Text style={{ fontSize: 20, marginTop: 10 }}>User Name</Text> */}
            <View style={[{ width: screenWidth * 0.15, backgroundColor: 'orange' },
                rightComponentStyle
            ]}>
                {RightComponent}

            </View>
        </Animated.View >
    );
};

export default AnimatedHeader;