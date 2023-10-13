import colors from '@utils/colors';
import React, {FC, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';

export enum SnackbarPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}
export enum SnackbarType {
  ERROR = 'error',
  SUCCESS = 'success',
}

interface Props {
  message: string;
  position: SnackbarPosition;
  open: boolean;
  type?: SnackbarType;
}

const Snackbar: FC<Props> = ({message, position, open, type}) => {
  const animatedValue = useRef(new Animated.Value(0));

  const showSnackbar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const hideSnackbar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (open) {
      showSnackbar();
      const timeoutId = setTimeout(() => {
        hideSnackbar();
      }, 3000);
      return () => clearTimeout(timeoutId);
    } else {
      hideSnackbar();
    }
  }, [open]);
  useEffect(() => {
    if (!open) {
      hideSnackbar();
    }
  }, [open]);

  return (
    <Animated.View
      style={[
        styles.snackbar,
        {
          [position]: animatedValue.current.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 0],
          }),
        },
        {marginBottom: position === SnackbarPosition.TOP ? 0 : 50},
        {marginTop: position === SnackbarPosition.BOTTOM ? 0 : 50},
      ]}>
      <View
        style={[
          styles.content,
          {
            backgroundColor:
              type === SnackbarType.ERROR
                ? colors.errorContainer
                : colors.success,
          },
        ]}>
        <Text
          style={[
            styles.message,
            {
              color:
                type === SnackbarType.ERROR
                  ? colors.onErrorContainer
                  : colors.onSuccess,
            },
          ]}>
          {message}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    width: '100%',
    alignContent: 'center',
    height: 50,
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.error,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  message: {
    color: colors.onError,
  },
});

export default Snackbar;
