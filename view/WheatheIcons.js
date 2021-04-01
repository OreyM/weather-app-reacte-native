import React from "react";
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';


/**
 * Статусы погоды
 * @link https://openweathermap.org/weather-conditions Статусы
 * @link https://icons.expo.fyi/ Иконки
 * @param {number} conditionId ID статуса погоды
 * @returns {JSX.Element}
 * @constructor
 */
export default function WheatheIcons({conditionId}) {
    console.log('conditionId: ', conditionId);

    // var conditionId = 200; //TODO For debug

    // Group 2xx: Thunderstorm
    // with rain
    if ([200, 201, 202, 230,231,232].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-lightning-rainy"></MaterialCommunityIcons>
        );
    }
    // without rain
    if ([210, 211, 212, 221].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-lightning"></MaterialCommunityIcons>
        );
    }


    // Group 3xx: Drizzle
    if ([300, 301, 302, 310, 311, 312, 313, 314, 321].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-rainy"></MaterialCommunityIcons>
        );
    }

    // Group 5xx: Rain
    if([500, 501, 502, 503, 504, 520, 521, 522, 531].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-pouring"></MaterialCommunityIcons>
        );
    }
    // freezing rain
    if([511].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-snowy-rainy"></MaterialCommunityIcons>
        );
    }

    //Group 6xx: Snow
    if([600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-snowy-heavy"></MaterialCommunityIcons>
        );
    }

    // Group 7xx: Atmosphere
    if([701, 711, 721, 731, 741, 751, 761, 762, 771, 781].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-windy-variant"></MaterialCommunityIcons>
        );
    }

    // Group 800: Clear
    if ([800].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-sunny"></MaterialCommunityIcons>
        );
    }

    // Group 80x: Clouds
    if ([801, 802, 803, 804].includes(conditionId)) {
        return (
            <MaterialCommunityIcons style={styles.icon} name="weather-cloudy"></MaterialCommunityIcons>
        );
    }

    // If Error in ID
    return (
        <MaterialCommunityIcons style={styles.icon} name="alert-circle"></MaterialCommunityIcons>
    );
};

WheatheIcons.propTypes = {
    conditionId: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    icon: {
        fontSize: 96,
        color: '#fafafa',
    },
});