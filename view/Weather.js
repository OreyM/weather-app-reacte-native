import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import {LinearGradient} from 'expo-linear-gradient';
import WheatheIcons from "./WheatheIcons";
import {appConfig} from "../configs/app";


export default function Weather({main, weather}) {

    const ICON_CELSIUS = '℃';
    const ICON_FAHRENHEIT = '℉';

    return (
        <LinearGradient
            colors={appConfig.appTheme}
            style={styles.container}
        >
            <StatusBar barStyle="dark-content"/>
            <View style={styles.topContainer}>
                <WheatheIcons conditionId={weather.id} />
                <Text style={styles.textAverageTemp}>
                    {Math.round(main.temp)} {ICON_CELSIUS}
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.textDescriprion}>{weather.description}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    /**
     * @param {number}      feels_like      температруа ощущается как
     * @param {number}      humidity        влажность
     * @param {number}      pressure        давление
     * @param {number}      temp            средняя температура
     * @param {number}      temp_max        максимальная температура
     * @param {number}      temp_min        минимальная температура
     */
    main: PropTypes.object.isRequired,
    /**
     * @param {string}      description     описание погоды
     * @param {string}      icon            ID иконки
     * @param {number}      id              ID состояния погоды
     * @param {string}      main            заглавие погоды
     */
    weather: PropTypes.object.isRequired,

    // contidion: PropTypes.oneOf(['Thunderstorm', ... ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textAverageTemp: {
        fontSize: 42,
        color: '#fafafa',
    },
    textDescriprion: {
        color: '#fafafa',
    },
})