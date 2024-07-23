import React from 'react';
import { Button as RNButton, View, } from 'react-native';

interface SimpleButtonProps {
    onPress: any;
    title: string;
    // Add any other props needed
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ onPress, title }) => {
    return (
        <View style={{
            margin: 10,
        }}>
            <RNButton title={title} onPress={onPress} />
        </View>
    );
};

export default SimpleButton;