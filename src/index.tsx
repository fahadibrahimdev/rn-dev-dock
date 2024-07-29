import {
  Animated,
  View,
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import AnimatedHeader from './AnimatedHeader';

interface MainAnimatedHeaderProps {
  scrollY: Animated.Value;
  leftComponentStyle?: StyleProp<ViewStyle>;
  LeftComponent: React.ReactNode;
  rightComponentStyle?: StyleProp<ViewStyle>;
  RightComponent: React.ReactNode;
  title: string;
  description?: string;
  avatarImg?: ImageSourcePropType;
}

const MainAnimatedHeader: React.FC<MainAnimatedHeaderProps> = ({
  scrollY,
  leftComponentStyle,
  LeftComponent,
  rightComponentStyle,
  RightComponent,
  title,
  description,
  avatarImg,
}) => {
  return (
    <View>
      <AnimatedHeader
        scrollY={scrollY}
        LeftComponent={LeftComponent}
        leftComponentStyle={leftComponentStyle}
        RightComponent={RightComponent}
        rightComponentStyle={rightComponentStyle}
        title={title}
        description={description}
        avatarImg={avatarImg}
      />
    </View>
  );
};

export default MainAnimatedHeader;
