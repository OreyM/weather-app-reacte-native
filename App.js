import React from 'react';
import {Alert} from "react-native-web";
import * as Location from "expo-location";
import apiData from "./api/data";
import Loading from "./view/Loading";
import Weather from "./view/Weather";

// api.openweathermap.org
const API_KEY = '';

export default class extends React.Component {
  state = {
    isLoading: true,
    apiData: null,
    main: null,
    weather: null,
  }

  getWeathers = async (latitude, longitude) => {
    const optMetric = 'units=metric'

    try {
      const data = await apiData.data(`lat=${latitude}&lon=${longitude}&appid=${API_KEY}&${optMetric}`)
      this.setState({
        apiData: data,
        main: data.main,
        weather: data.weather[0],
      });
    } catch (e) {
      console.log('getWeathers() ERROR!', e);
    }
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      await this.getWeathers(latitude, longitude); // TODO не более 60 запросов в минуту
      this.setState({isLoading: false})
    } catch (e) {
      Alert.alert('Не могу определить местоположение');
      console.log('getLocation() ERROR!', e);
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading, apiData, main, weather} = this.state;

    // TODO Debug
    if (!isLoading) {
      apiData ? console.log('Api Data: ', apiData) : null;
      main ? console.log('Main Data: ', main) : null;
      weather ? console.log('Weather Data: ', weather) : null;
    }

    return (
      isLoading ? <Loading /> : <Weather main={main} weather={weather}/>
    );
  }
}
