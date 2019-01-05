import React, {Component} from 'react';
import {Loading} from './';
import {PostFeed} from './';
import {View, Text} from 'react-native';
import BottomNavIn from '../../navigation/bottomNavSignedIn';


class BarooApp extends Component{

    state = {
        taco: true
    }
    render(){
        return (
           <BottomNavIn />
        )
    }
}

export default BarooApp