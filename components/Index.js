import React, {Component} from 'react';
import {Text,View,Alert} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen'
import axios from 'axios';
class Index extends Component {
     state = {
     
        dates:[],
        //    Curd: null,
    }

   
    componentDidMount() {
        var response=   axios.get("https://ndcli-1819a.firebaseio.com/.json");
        console
        //SplashScreen.close(SplashScreen.animationType.scale, 850, 500) 
        //fade scale none
        //close(animationType, duration, delay) close splash screen with custom animation
        // animationType: determine the type of animation. enum(animationType.none, animationType.fade, animationType.scale)
        // duration: determine the duration of animation
        // delay: determine the delay of animation
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        })
        // setInterval(() => {
        //     this.setState({
        //         Curd: new Date().toLocaleString()
        //     })
        // }, 1000)

     console.log(this.state.dates)
    }
    render() {

        return ( <View style = {styles.bgStyle}>
            <Text>vv</Text></View>
        );
    }
}
const styles = {
    bgStyle: {

        flex: 1
    }
}
export default Index;
