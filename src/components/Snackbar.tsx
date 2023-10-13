import {useAppSelector} from '@store/hooks';
import colors from '@utils/colors';
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';

export enum SnackbarPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}
export enum SnackbarType {
  ERROR = 'error',
  SUCCESS = 'success',
}

const Snackbar = () => {
  const animatedValue = useRef(new Animated.Value(0));
  const {message, open, position, type} = useAppSelector(
    state => state.sanckbar,
  );

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
      }, 5000);
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
        {marginBottom: position === SnackbarPosition.TOP ? 0 : 80},
        {marginTop: position === SnackbarPosition.BOTTOM ? 0 : 80},
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
    height: 'auto',
    zIndex: 1000,
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
    textAlign: 'center',
  },
});

export default Snackbar;
