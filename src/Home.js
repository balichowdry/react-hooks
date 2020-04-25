import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {PopUpContext} from './popUp/PopUpContext';

const HomeScreen = () => {
    const {show} = useContext(PopUpContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => show({message: 'Ama simple Toast!'})}>
                <Text>Show Toast</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
