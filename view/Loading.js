import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {appConfig} from '../configs/app';

export default function Loading() {

    return (
        <LinearGradient
            colors={appConfig.appTheme}
            style={styles.container}
        >
            <StatusBar barStyle="dark-content"/>
            <Text style={styles.text}>Получение погоды......</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#fdf6aa',
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30
    },
})