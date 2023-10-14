import colors from '@utils/colors';
import React from 'react';
import {FC} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

interface LoaderProps {
  color?: string;
}

const Loader: FC<LoaderProps> = ({color = colors.onPrimary}) => {
  const initialRotation = useSharedValue(0);

  const transform = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${initialRotation.value}deg`}],
    };
  });

  React.useEffect(() => {
    initialRotation.value = withRepeat(withTiming(360, {duration: 1000}), -1);
  });
  return (
    <Animated.View style={transform}>
      <AntDesignIcon name="loading1" size={24} color={color} />
    </Animated.View>
  );
};

export default Loader;
