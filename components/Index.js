import React, {
    Component
} from 'react';
import {
    Text,
    View,
    Alert
} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen'
class Index extends Component {
    componentDidMount() {
        //SplashScreen.close(SplashScreen.animationType.scale, 850, 500) 
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        })
    }
    render() {
        return (

            <View style = {styles.bgStyle} >
            <Text> Index </Text> </View>
        );
    }
}
const styles = {
    bgStyle: {
        backgroundColor: '#DC143C',
        flex: 1
    }
}
export default Index;
