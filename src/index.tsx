import { Animated, View, type StyleProp, type ViewStyle } from 'react-native';
import AnimatedHeader from './AnimatedHeader';

interface MainAnimatedHeaderProps {
  scrollY: Animated.Value;
  leftComponentStyle?: StyleProp<ViewStyle>;
  LeftComponent: React.ReactNode;
  rightComponentStyle?: StyleProp<ViewStyle>;
  RightComponent: React.ReactNode;
  orientation: string;
}

const MainAnimatedHeader: React.FC<MainAnimatedHeaderProps> = ({
  scrollY,
  leftComponentStyle,
  LeftComponent,
  rightComponentStyle,
  RightComponent,
  orientation,
}) => {
  return (
    <View>
      <AnimatedHeader
        scrollY={scrollY}
        LeftComponent={LeftComponent}
        leftComponentStyle={leftComponentStyle}
        RightComponent={RightComponent}
        rightComponentStyle={rightComponentStyle}
        orientation={orientation}
      />
    </View>
  );
};

export default MainAnimatedHeader;
