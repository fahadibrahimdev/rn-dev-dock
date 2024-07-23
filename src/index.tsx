// export function multiply(a: number, b: number): Promise<number> {
//   return Promise.resolve(a * b);
// }

import { Animated, View, type StyleProp, type ViewStyle } from 'react-native';
// import SimpleButton from './SimpleButton';
import AnimatedHeader from './AnimatedHeader';

interface MainAnimatedHeaderProps {
  scrollY: Animated.Value;
  leftComponentStyle?: StyleProp<ViewStyle>;
  LeftComponent: React.ReactNode;
  rightComponentStyle?: StyleProp<ViewStyle>;
  RightComponent: React.ReactNode;
};

const MainAnimatedHeader: React.FC<MainAnimatedHeaderProps> = ({ scrollY, leftComponentStyle, LeftComponent, rightComponentStyle, RightComponent }) => {

  return (
    <View>
      <AnimatedHeader scrollY={scrollY} LeftComponent={LeftComponent} leftComponentStyle={leftComponentStyle} RightComponent={RightComponent} rightComponentStyle={rightComponentStyle} />
    </View>
  )
}

export default MainAnimatedHeader;