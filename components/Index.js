import React, {Component} from 'react';
import {Text,View,Alert} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen'
import axios from 'axios';
class Index extends Component {
     state = {
        Curd: null,
        dates:[]
    }
    config = {
        apiKey: "AIzaSyBLQ1N7fhzGWYyiSuQufbCf5oxq4ct56DA",
        authDomain: "ndcli-1819a.firebaseapp.com",
        databaseURL: "https://ndcli-1819a.firebaseio.com",
        projectId: "ndcli-1819a",
        storageBucket: "ndcli-1819a.appspot.com",
        messagingSenderId: "190440955820"
    };
    firebase = firebase.initializeApp(this.config);
    database = firebase.database().ref();
   
    componentDidMount() {

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
        setInterval(() => {
            this.setState({
                Curd: new Date().toLocaleString()
            })
        }, 1000)
           axios.get("https://ndcli-1819a.firebaseio.com/.json").then(response=>this.setState({dates  : response.data}));
     console.log(this.state.dates)
    }
    render() {

        return ( <View style = {styles.bgStyle}>
            <Text>{this.state.Curd}</Text></View>
        );
    }
}
const styles = {
    bgStyle: {

        flex: 1
    }
}
export default Index;
