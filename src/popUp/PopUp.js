import React, {useContext, useEffect, useRef} from 'react';
import {PopUpContext} from './PopUpContext';
import {
    Text,
    Animated,
    Easing,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export const PopUp = () => {
    const {popUp, hide} = useContext(PopUpContext);
    const translateYRef = useRef(new Animated.Value(-400));

    useEffect(() => {
        if (popUp.visible) {
            Animated.timing(translateYRef.current, {
                duration: 300,
                easing: Easing.ease,
                toValue: 400,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateYRef.current, {
                duration: 450,
                easing: Easing.ease,
                toValue: -400,
                useNativeDriver: true,
            }).start();
        }
    }, [popUp]);

    return (
        <Animated.View
            style={[
                styles.toast,
                {transform: [{translateY: translateYRef.current}]},
            ]}>
            <TouchableOpacity onPress={hide} style={styles.content}>
                <Text style={styles.toastMessage}> I am popup</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default PopUp;

const styles = StyleSheet.create({
    toast: {
        borderRadius: 8,
        marginHorizontal: 10,
        padding: 4,
        position: 'absolute',
        top: 0,
        zIndex: 2,
        right: 0,
        left: 0,
        backgroundColor: '#000000',
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        minHeight: 40,
        width: '100%',
    },
    toastMessage: {
        color: '#ef3',
        fontWeight: '800',
        fontSize: 14,
        letterSpacing: 0.30,
        marginHorizontal: 10,
    },
});
