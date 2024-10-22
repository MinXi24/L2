import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
const Movie = ({title,year,icon,poster})=> {
    return (
        <View>
            <Text>
                {title} {year}
            </Text>
            <Image source={poster} style={{width:400 , height:500}}/>
            <Icon name={icon} size={30} color="#98F5F9"/>
        </View>
    );
};const AllMovies = () => {
    return (
        <ScrollView>
            <Movie title="Doctor Sleep" year={2019} icon="infocirlce" poster={require('../img/doctor-sleep.jpg')}/>
            <Movie title="Midway" year={2020} icon="infocirlce" poster={require('../img/midway.jpg')}/>
            <Movie title="Boat" year={2021} icon="infocirlce" poster={require('../img/flipper.jpg')}/>
        </ScrollView>
    );
};
export default AllMovies;


