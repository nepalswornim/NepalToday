import React from 'react';
import { Text, View,Alert } from 'react-native';
const Index = () => {
    transform=()=>{
console.log("sjdfjasdfasdjj")
    }
setTimeout(function() { this.transform; }, 5000);
    return (
<View style={styles.bgStyle}>
    <Text >Index</Text>
</View>

    );

};
const styles={
bgStyle:{
backgroundColor:'#DC143C',
flex:1
    
}

}

export default Index;

